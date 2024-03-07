'use client' // because you have to get errors that occurred after the page was load on the server errors that can happen in the client side.

function Error({ error }) {
  return (
    <main className='error'>
      <h1>Sorry an error occurred</h1>
      <p>Failed when fetching meal data.</p>
    </main>
  )
}

export default Error
