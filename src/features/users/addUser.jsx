import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AddButton } from '../../components/button';
import TextField from '../../components/textField';
import { addUser } from '../../redux/userSlice';
import { v4 as uuidv4 } from 'uuid';

const AddUser = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const [values, setValues] = useState({
        name: '',
        email: ''
    });

    const handleNewUser = () => {
        dispatch( addUser({
            id: uuidv4(),
            name: values.name,
            email: values.email
        }))
        setValues({ name: '', email: '' })
        navigate('/')
    }

    return (  
        <div className='mt-10 max-w-xl mx-auto'>
            <TextField 
                onChange={(e) => setValues({...values, name: e.target.value})}
                label='Name'   
                value={values.name}
                inputProps={{type: 'Name', placeholder: 'Digite seu nome' }}
            />
            <TextField 
                onChange={(e) => setValues({...values, email: e.target.value})}
                label='Email'   
                value={values.email}
                inputProps={{type: 'email', placeholder: 'Digite seu email' }}
            />
            <AddButton onClick={handleNewUser}>Submit</AddButton>
        </div>
    )
}
export default AddUser;