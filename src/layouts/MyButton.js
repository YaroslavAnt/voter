import React from 'react';
import { Button } from '@material-ui/core';

const MyButton = (props) => {
    const { bgColor } = props;
    return (
        <Button
            variant="contained"
            style={{ backgroundColor: bgColor, color: '#fff', margin: '5px' }}
            onClick={props.onClick}
        >
            {props.children}
        </Button>
    );
}

export default MyButton;