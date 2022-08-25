import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AddButton } from '../../components/button';
import TextField from '../../components/textField';
import { editUser, selectUser } from '../../redux/userSlice';


const EditUser = () => {
    const {id} = useParams();
    const user = useSelector(selectUser);
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const hasUser = user.filter( userAc => userAc.id === id ) 
    const {name, email} = hasUser[0];
    const [values, setValues] = useState({
        name,
        email
    });

    const handleEditUser = () => {
        dispatch(editUser({
            id,
            name: values.name,
            email: values.email
        }))
        navigate('/')
    }

    return (  
        <div className='mt-10 max-w-xl mx-auto'>
            <TextField 
                onChange={(e) => setValues({...values, name: e.target.value})}
                label='Edit name'   
                value={values.name}
                inputProps={{type: 'Name', placeholder: 'Digite seu nome' }}
            />
            <TextField 
                onChange={(e) => setValues({...values, email: e.target.value})}
                label='Edit email'   
                value={values.email}
                inputProps={{type: 'email', placeholder: 'Digite seu email' }}
            />
            <AddButton onClick={handleEditUser}>Edit</AddButton>
        </div>
    )
}

export default EditUser;