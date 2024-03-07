'use client'

import ImagePicker from '@/components/meals/image-picker'
import classes from './page.module.css'
import { shareMeal } from '@/lib/action'

export default function ShareMealPage() {
  // const shareMeal = async (formData) => { // only can be use like this if the page is rendered by the server side.
  //   // formData it's like submitting a form in php, the name of the input is the key, and the value is the value, so don't forget of put a name in every inputs to it comes to the formData in his key = name of the input.
  //   // have to be async
  //   'use server' // only run in server side

  //   const meal = {
  //     title: formData.get('title'),
  //     summary: formData.get('summary'),
  //     instructions: formData.get('instructions'),
  //     image: formData.get('image'), // because the name of the inputFile is this look in the line i call the ImagePicker i pass this name.
  //     creator: formData.get('name'),
  //     creator_email: formData.get('email'),
  //   }

  //   console.log(meal) //appears in terminal not in the console of the browser, because it only runs on the server
  // }

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={shareMeal}>
          <div className={classes.row}>
            <p>
              <label htmlFor='name'>Your name</label>
              <input type='text' id='name' name='name' required />
            </p>
            <p>
              <label htmlFor='email'>Your email</label>
              <input type='email' id='email' name='email' required />
            </p>
          </div>
          <p>
            <label htmlFor='title'>Title</label>
            <input type='text' id='title' name='title' required />
          </p>
          <p>
            <label htmlFor='summary'>Short Summary</label>
            <input type='text' id='summary' name='summary' required />
          </p>
          <p>
            <label htmlFor='instructions'>Instructions</label>
            <textarea
              id='instructions'
              name='instructions'
              rows='10'
              required
            ></textarea>
          </p>
          <ImagePicker name='image' label='Your Img' />
          <p className={classes.actions}>
            <button type='submit'>Share Meal</button>
          </p>
        </form>
      </main>
    </>
  )
}
