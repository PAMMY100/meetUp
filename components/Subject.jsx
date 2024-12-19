import React from 'react'

const Subject = ({service, index}) => {
  return (
    <li key={index}>
        <Image src={service.src} alt={service.title} />
        <p>{service.title}</p>
    </li>
  )
}

export default Subject