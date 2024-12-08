import { Link, NavLink } from "react-router-dom";
import classes from './MainNavigation.module.css'

function MainNavigation() {
  const navLinks = [
    { path: "/", content: "Home" },
    { path: "/products", content: "Product" },
    { path: "/cart", content: "Cart" },
  ];
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          {navLinks.map((link, index) => (
            <li>
              {/* <Link to={link.path}>{link.content}</Link> */}
              <NavLink to={link.path} className={({isActive})=>
	              isActive ? classes.active : undefined 
              }>{link.content}</NavLink>
            </li>
          ))}
          {/* <li>
						<Link to="/">Home</Link>
					</li> */}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
