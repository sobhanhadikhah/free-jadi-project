import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Appcontext from '../Context/context';
import Card from './CardofUsers';

const Cardlister = () => {
    const context = useContext(Appcontext)
    return (
        <div className='tc ma3' >
            <button onClick={context.Createuser} className='btn btn-primary ' > Create </button>

            <div className='container ' >
                {context.users.map((user, index) => {
                    return <Card key={index} id={user.id} data={user} avatar={user.avatar} first_name={user.first_name} last_name={user.last_name} email={user.email} />
                })}
            </div>
            <Outlet />
        </div>

    );
}

export default Cardlister;