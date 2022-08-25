import React from 'react';
import { User } from '../../components/user';
import { AddButton } from '../../components/button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, selectUser } from '../../redux/userSlice';

const UserList = () => {
    const users = useSelector(selectUser);
    const handleAdd = () => {
    }

    return (  
        <div>
            <Link to='/add-user'>
                <AddButton onClick={handleAdd}>
                    Add User
                </AddButton>
            </Link>
            
            <div className='grid gap-5 md:grid-cols-2'>
                {users.length > 0 
                ? 
                    users.map( user => (
                        <User user={user} key={user.id} />
                    )) 
                : 
                    <p className='text-center col-span-2 text-gray-700 font-semibold'>Não há usuarios</p>
                }
            </div>
        </div>
    )
}

export default UserList;