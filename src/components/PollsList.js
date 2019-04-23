import React from 'react';
import { Paper, withStyles, Divider } from '@material-ui/core';

const styles = () => ({
    paper: {
        backgroundColor: '#989898',
        color: '#fff',
        textAlign: 'center',
        padding: '10px',
        margin: '20px'
    }
})

const PollsList = (props) => {
    const { classes } = props;

    return (
        <ul>
            {
                [0, 0, 0, 0, 0].map((el, idx) => (
                    <li key={idx}>
                        <Paper className={classes.paper}>THIS IS QUESTION FOR POLL#{idx + 1}. PLEASE ANSWER IT</Paper>
                        <Divider />
                    </li>
                ))
            }
        </ul>
    );
}

export default withStyles(styles)(PollsList);