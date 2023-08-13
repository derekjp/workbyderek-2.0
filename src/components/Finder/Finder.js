import styles from './Finder.module.css';
import TrafficLights from "../TrafficLights/TrafficLights";
import SidebarItem from "../SidebarItem/SidebarItem";

const Finder = (props) => {
  return (
    <div id="finder-window">
      <nav id="finder-nav" className={styles.nav}>
        <TrafficLights />
        <li>
          <label className={styles.label}>Favorites</label>
          <ul className={styles.subnav}>
            <li>
              <SidebarItem href="/" title="Home"/>
            </li>
            <li>
              <SidebarItem href="/blogs" title="Projects" />
            </li>
            <li>
              <SidebarItem href="/contact" title="Other" />
            </li>
          </ul>
        </li>
      </nav>
      <div id="window-main">
        {props.children}
      </div>
    </div>
  )
};

export default Finder;
