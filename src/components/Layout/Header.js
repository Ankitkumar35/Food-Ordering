import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpeg";
import HeaderCartBotton from "./HeaderCartButton";
const Header=(props)=>{
    return(
        <React.Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartBotton></HeaderCartBotton>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="Food item"/>
            </div>
        </React.Fragment>
    )

}
export default Header;