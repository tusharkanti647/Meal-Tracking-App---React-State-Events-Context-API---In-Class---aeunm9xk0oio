import React, { createContext, useEffect, useState } from "react";

const todaysMeals = [
    { id: 1, name: 'Baked Beans', isChecked: false },
    { id: 2, name: 'Baked Sweet Potatoes', isChecked: false },
    { id: 3, name: 'Baked Potatoes', isChecked: false },
]

const Context = createContext();

const MealsProvider = (props) => {
    const [meals, setMeals] = useState(todaysMeals);

    const [count, setCount] = useState(0);
    useEffect(() => {

        let c = 0;
        //console.log("hello");
        for (let i = 0; i < meals.length; i++) {
            //console.log(meals[i].isChecked);
            if (meals[i].isChecked === false) {
                c++;
            }
        }
        setCount(c);
    }, [])
    //console.log(count);
    const tickMeal = (e) => {
        const { value, checked } = e.target;
        // console.log(.checked);
        // console.log(e.target.value);
        // if (checked) {
        let nArr = [...meals];
        nArr[value - 1] = { ...nArr[value - 1], isChecked: checked }
        //console.log(nArr);
        setMeals(nArr);

        let c = 0;
        for (let i = 0; i < nArr.length; i++) {
            //console.log(nArr[i].isChecked);
            if (nArr[i].isChecked === false) {
                c++;
            }
        }

        setCount(c);
        // }
    }
    //console.log(count)
    return (
        <Context.Provider value={{ meals, tickMeal, count }}>
            {props.children}
        </Context.Provider >
    )
};

export { Context };
export default MealsProvider;