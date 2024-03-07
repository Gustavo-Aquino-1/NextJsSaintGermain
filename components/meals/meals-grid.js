import MealItem from './meal-item'
import classes from './meals-grid.module.css'

export default function MealsGrid({ meals }) {
  return (
    <ul className={classes.meals}>
      {meals.map((m) => (
        <li key={m.id}>
          <MealItem {...m} />{' '} {/* passing all the props the meal-item needs only with "..." */}
          {/* simply a genius, Gustavo Aquino is a genius. */}
        </li>
      ))}
    </ul>
  )
}
