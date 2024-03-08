import React from 'react'
import classes from './page.module.css'
import Image from 'next/image'
import { getMeal } from '@/lib/meals'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }) {
  const meal = getMeal(params.id)
  return {
    title: `Saint Germain | ${params.id}`,
    description: `More details about ${params.id}: ${meal?.summary}`,
  }
}

function Meal({ params: { id: slug } }) {
  const meal = getMeal(slug)
  console.log(meal)

  if (!meal) {
    notFound() // show the next notFound or error page
  }

  meal.instructions = meal.instructions.replace(/\n/g, '<br />')
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
            {/* go to your app to send email */}
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main className={classes.main}>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  )
}

export default Meal
