import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const navLink = [
  {path: '/', content: 'Home'},
  {path: '/events', content: 'Events'},
  // {path: '/new-events', content: 'Home'},
  // {path: '/', content: 'Home'},
]

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          {navLink.map((link,id)=>(
            <li>
              <Link to={link.path}>{link.content}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
