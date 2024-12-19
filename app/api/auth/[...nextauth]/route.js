// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials"
// import bcrypt from "bcryptjs"
// import User from "@/models/User";
// import connectDB from "@/config/db";


// export const authOptions = {
//   providers: [
//     CredentialsProvider({
//       id: 'credentials',
//       name: 'Credentials',
//       credentials: {
//         email: {
//           label: 'Email',
//           type: 'text',
//         },
//         password: {
//           label: 'Password',
//           type: 'password',
//         }
//       },
//       async authorize(credentials) {
//         await connectDB()
//         try {

//           const user = await User.findOne({email: credentials.email})
          
//           if (user) {
//             const isPasswordCorrect = bcrypt.compare(credentials.password, user.password)
            
//             if (isPasswordCorrect) { 
//               return user;
//             }
//           }

//         } catch (e) {
//           throw new Error(e)
//         }
//       }
//     })
//   ],
//   callbacks: {
//     async signIn({user, account}) {
//       if (account?.provider == 'credentials') {
//         return true;
//       }
//     }
//   } 
// }

// export const handler = NextAuth(authOptions)

// export {handler as GET, handler as POST};


import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from 'bcryptjs'
import User from '@/models/User';
import connectDB from "@/config/db";


export const authOptions = {
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text'
        },
        password: {
          label: 'Password',
          type: 'password'
        },
      },
      async authorize(credentials) {
        try {

          await connectDB()

          const user = await User.findOne({email: credentials.email})

          if(user) {
            const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)

            if (!isPasswordCorrect) {
              throw new Error("Invalid password")
            }

            return user;
          }

        } catch (error) {
          console.error("Authorize error: ", error.message)
          throw new Error("Failed to authenticate")
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    })
  ],
  session: {
    strategy: "jwt",
    maxAge: 60 * 60, // set session duration to 1 hour(in seconds)
  },
  callbacks: {
      async signIn({user, account, profile}) {
            try {
              await connectDB()

            if (account?.provider == 'google') {

              //check if the email exists in the database
              const existingUser = await User.findOne({email : profile.email})

              if (!existingUser) { 
                console.error("Google login failed: this email is not registered");
                return false
              }
              //Assign a session ID (for tracking purposes, optional)
              existingUser.sessionId = generateSessionId()
              await existingUser.save();
              return true;
            }
              if (account?.provider == 'credentials') { 
              return true;
            }

            return false;

          } catch (error) {
            console.error("SignIn callback error:", error.message);
            return false;
          }
      },
        
    async jwt({token, user, account}) {
      if (user) {
        token.id = user.id; // Store user ID in token
        token.email = user.email;
        token.sessionId = user.sessionId || null;
      }
      return token;
    },

    // Session callback: Pass token data to session
    async session({session, token}) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.sessionId = token.sessionId;
      }
      return session;
    },

    secret: process.env.NEXTAUTH_SECRET,
  }
}

const generateSessionId = () => {
  return Math.random().toString(36).substring(2, 15) //Random string as session ID
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST};