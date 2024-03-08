import React from 'react'
import Link from 'next/link'
import classes from './page.module.css'
import MealsGrid from '@/components/meals/meals-grid'
import { getMeals } from '@/lib/meals'
import { Suspense } from 'react'

export const metadata = {
  title: 'Saint Germain | Meals',
  description: 'Discover your favorite meals.',
}

async function Meals() {
  const meals = await getMeals()
  return <MealsGrid meals={meals} />
  // only the async part here, and the other part will be rendered on server always remember try let all the pages in server-side if some part needs use client put it in a small component all call there but the page should be rendered in the server side.
}

function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{' '}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose the best recipe here we appreciate quality!</p>
        <p className={classes.cta}>
          <Link href='/meals/share'>Share Your Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fetching meals</p>}>
          {/* allow use some data when you await for an async data */}
          {/* So putting this the server will use this fallback data to render a page without the async data, so my page will appears 0.0 ms, with the data that is not async, and when the async data arrives it will put there instead the fallback data, but the thing is a load all the page, only one component not was load but the fallback data will apears and when this component arrive (loaded) it will appears instead the fallback data very cool */}
          <Meals />
        </Suspense>
      </main>
    </>
  )
}

export default MealsPage
