import { useState } from 'react';
import classes from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';
import AvatarPng from '@/assets/icons8-avatar-100.png';
import AvatarJpg from '@/assets/avatar.jpg';
import AvatarSvg from '@/assets/reshot-icon-avatar-E7JU2GQ3FT.svg';

export const App = () => {
    const [count, setCount] = useState(0);
    const increment = () => setCount((prev) => prev + 1);
    return (
        <div>
            <Link to={'/'}>home</Link>
            <br />
            <Link to={'/about'}>about</Link>
            <br />
            <Link to={'/shop'}>shop</Link>
            <h1>PLATFORM={__PLATFORM__}</h1>
            <h1 className={classes.value}>{count}</h1>
            <button className={classes.button} onClick={increment}>
                Inc
            </button>
            <Outlet />
        </div>
    );
};
