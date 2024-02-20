import { Outlet } from 'react-router-dom';
import Nav from './Nav';

export default function CardCollections() {
    return (
      <div>
        <Nav/>
        <Outlet/>
      </div>
    );
}