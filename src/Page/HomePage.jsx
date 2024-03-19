import React from 'react'
import { Link } from 'react-router-dom'
import CardForUser from './CardForUser'

function HomePage() {
  const token = localStorage.getItem("token")
  return (
    <div>
      
      <CardForUser id={token}/>
    </div>

  )
}

export default HomePage