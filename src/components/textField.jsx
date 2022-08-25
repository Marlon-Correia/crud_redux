import React from 'react';

const TextField = ({label, inputProps, value, onChange}) => {
    return (  
        <div className='flex flex-col '>
            <label className='mb-2 text-base text-gray-800'>
                {label}
            </label>
            <input
                {...inputProps}
                onChange={onChange}
                value={value}
                className='bg-gray-200 py-2 px-4 border-2 outline-none'
            />
        </div>
    );
}
 
export default TextField;