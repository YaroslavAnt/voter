import React from 'react';
import { Divider } from '@material-ui/core';


const PollsList = (props) => {
    const { component } = props;
    return (
        <ul>
            {
                [0, 0, 0, 0, 0].map((el, idx) => (
                    <li key={idx}>
                        {component}
                        <Divider />
                    </li>
                ))
            }
        </ul>
    );
}

export default (PollsList);