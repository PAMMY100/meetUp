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
                const newUser = await User.create({
                  username: profile.name,
                  email: profile.email,
                  profilePicture: profile.picture,
                });

                if (!newUser) {
                  throw new Error("User registration failed")
                }
              }
              return true;
            }
            if (account?.provider == 'credentials') { 
              return true;
            }
          } catch (error) {
            console.error("SignIn callback error:", error.message);
            return false;
          }
      },
        
    async jwt({token, user, account}) {
      if (user) {
        token.id = user.id; // Store user ID in token
        token.email = user.email;
      }
      return token;
    },

    // Session callback: Pass token data to session
    async session({session, token}) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
      }
      return session;
    },

    secret: process.env.NEXTAUTH_SECRET,
  }
}


const handler = NextAuth(authOptions)

export { handler as GET, handler as POST};