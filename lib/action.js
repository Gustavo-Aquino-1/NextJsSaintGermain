'use server'

import { redirect } from 'next/navigation'
import { saveMeal } from './meals'
import { revalidatePath } from 'next/cache'

const isInvalidText = (string) => {
  if (!string || string.trim() === '') {
    return true
  }
  return false
}

export const shareMeal = async (prevState, formData) => {
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

  console.log(meal)

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: 'Invalid data',
    }
  }
  console.log(meal) //appears in terminal not in the console of the browser, because it only runs on the server

  await saveMeal(meal)
  revalidatePath('/meals') // force the meals re-render so it will fetch the data again when i am using 'layout' (as second parameter) it will reavlidate the nested pages too (nested=children).
  redirect('/meals')
}
