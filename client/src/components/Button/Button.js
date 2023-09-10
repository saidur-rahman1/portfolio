import React from 'react';
import Button from '@mui/material/Button';

import './Button.css';

const CustomButton = ({text, icon}) => {
    return (
        <Button 
            type='submit'
            variant='outlined'
            className="button" 
            endIcon={icon ? (<div className='button_icon'>{icon}</div>) : null}
        ><span className='button_text'>{text}</span>
        </Button>
    )
}

export default CustomButton;