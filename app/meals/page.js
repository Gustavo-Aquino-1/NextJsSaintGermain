import React from 'react'
import Link from 'next/link'

function Meals() {
  return (
    <div>
      <p>Meals</p>
      {/* <Link href='meals/share'>Share</Link>
      <Link href='/'>Home</Link> */}
      <Link href='/meals/1'>Meal one</Link>
      <Link href='/meals/2'>Meal two</Link>
    </div>
  )
}

export default Meals
