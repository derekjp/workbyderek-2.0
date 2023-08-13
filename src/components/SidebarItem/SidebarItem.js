import { NavLink } from "react-router-dom";
import styles from './SidebarItem.module.css';
import Icons from "../Icons/Icons";

const SidebarItem = (props) => {
  return (
    <NavLink 
      // className={styles.link}
      // activeClassName={styles.active}
      to={props.href}
      className={({ isActive, isPending }) =>
        isPending ? styles.link : 
        isActive ? `${styles.link} ${styles.active}` : styles.link
       }
    >
      <div className={styles.container}>
        <Icons />
        {props.title}
        </div>
    </NavLink>
  )
};

export default SidebarItem;
