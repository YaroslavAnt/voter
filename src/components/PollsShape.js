import React from 'react';
import { Paper, withStyles } from '@material-ui/core';

const styles = () => ({
    paperBottom: {
        backgroundColor: '#fff',
        padding: '20px',
        position: 'relative',
        marginTop: '50px'
    },
})

const PollsShape = (props) => {
    const { classes } = props;
    return (
        <Paper className={classes.paperBottom}>
            {props.children}
        </Paper>
    );
}

export default withStyles(styles)(PollsShape);