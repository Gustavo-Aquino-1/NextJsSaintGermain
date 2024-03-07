import sql from 'better-sqlite3'

const db = sql('meals.db')

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 5000))
  throw new Error('loading meals failed')
  return db.prepare('SELECT * FROM meals').all()
}

// import sql from 'better-sqlite3'

// const db = sql('meals.db')

// export function getMeals() {
//   return db.prepare('SELECT * FROM meals').all()
// } cam be use like this, because how this database is SQLite this stays in my project so don't have a timeout to get this data, so it don't need be async, only is async for an example, but don't need.
