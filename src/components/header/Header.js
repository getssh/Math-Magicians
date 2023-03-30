import { Outlet, Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <div className="header">
    <h2>Math Magicians</h2>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/Quote">Quote</Link>
        </li>
      </ul>
    </nav>
    <Outlet />
  </div>
);

export default Header;
