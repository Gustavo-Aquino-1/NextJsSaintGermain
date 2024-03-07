'use server'

import { redirect } from 'next/navigation'
import { saveMeal } from './meals'

export const shareMeal = async (formData) => {
  // formData it's like submitting a form in php, the name of the input is the key, and the value is the value, so don't forget of put a name in every inputs to it comes to the formData in his key = name of the input.
  // have to be async
  // 'use server' // only run in server side

  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'), // because the name of the inputFile is this look in the line i call the ImagePicker i pass this name.
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  }

  console.log(meal) //appears in terminal not in the console of the browser, because it only runs on the server

  await saveMeal(meal)
  redirect('/meals')
}
