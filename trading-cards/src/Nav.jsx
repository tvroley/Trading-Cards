import { Link } from 'react-router-dom';

export default function Nav() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/grandpa">Grandpa's Collection</Link></li>
          <li><Link to="/uncle">Uncle's Collection</Link></li>
        </ul>
      </div>
    );
}