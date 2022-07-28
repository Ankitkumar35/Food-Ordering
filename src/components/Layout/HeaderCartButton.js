import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
const HeaderCartBotton = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>your cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};
export default HeaderCartBotton;
