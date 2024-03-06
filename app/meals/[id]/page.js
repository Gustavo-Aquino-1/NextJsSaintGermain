import React from 'react'

function Meal({ params: { id } }) {
  return (
    <div>
      <p>Page of the Meal {id}</p>
    </div>
  )
}

export default Meal
