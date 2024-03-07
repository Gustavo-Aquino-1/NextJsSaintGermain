import sql from 'better-sqlite3'
import slugify from 'slugify'
import xss from 'xss'
import fs from 'node:fs'

const db = sql('meals.db')

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 5000))
  return db.prepare('SELECT * FROM meals').all()
}

// import sql from 'better-sqlite3'

// const db = sql('meals.db')

// export function getMeals() {
//   return db.prepare('SELECT * FROM meals').all()
// } cam be use like this, because how this database is SQLite this stays in my project so don't have a timeout to get this data, so it don't need be async, only is async for an example, but don't need.

export function getMeal(slug) {
  return db.prepare(`SELECT * FROM meals WHERE slug = ?`).get(slug)
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, {
    lower: true,
  })
  meal.instructions = xss(meal.instructions) // protect cleaned the instructions

  const extension = meal.image.name.split('.').pop()
  const fileName = `${meal.slug}.${extension}`

  const stream = fs.createWriteStream(`public/images/${fileName}`)
  const bufferedImage = await meal.image.arrayBuffer() // to write needs to be a buffer in this case.

  stream.write(Buffer.from(bufferedImage), (err) => {
    if (error) {
      throw new Error('Image not saved!')
    }
  })

  meal.image = `/images/${fileName}` // all requests for images will be sent to the public folder automatically.

  db.prepare(
    `
    INSERT INTO meals 
      (title, summary, instructions, creator, creator_email, image, slug)
      VALUES(
        @title,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        @image,
        @slug
        )
  `, // have to be in the same order  the fields and the values
  ).run(meal) // the better-sqlite3 will understand that he needs put each key in the place that is @"key" will replace perfectly with the fields i pass in the meal object.
}
