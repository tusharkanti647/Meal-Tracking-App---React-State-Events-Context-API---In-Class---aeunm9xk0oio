import React, { useContext, useEffect, useState } from "react";
import { Context } from "./MealsProvider";

const Counter = () => {
    const daymeals = useContext(Context);
    //let count = 8;



    return (
        <div>
            <h3>Meals Remaining: {daymeals.count}</h3>
        </div>
    )
}

export default Counter;