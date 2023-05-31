import React, { useContext } from "react";
import { Context } from "./MealsProvider";

const MealsList = () => {
    const dayMeals = useContext(Context);
    //console.log(dayMeals)
    return (
        <div>
            <h2>Meals:</h2>
            <ul>{dayMeals.meals.map((ele, ind) => {
                return (
                    <li key={ind}>
                        <input value={ele.id} onChange={dayMeals.tickMeal}
                            type="checkbox"
                        />
                        {ele.name}
                    </li>)
            })
            }
            </ul>
        </div>
    )
}

export default MealsList;