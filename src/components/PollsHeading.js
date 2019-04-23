import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
    heading: {
        marginBottom: '20px'
    },
    paperTop: {
        padding: '20px',
        position: 'relative',
        color: '#fff',
        top: '-40px'
    }
})

const PollsHeading = (props) => {
    const { classes } = props;
    return (
        <Paper className={classes.paperTop} style={{ backgroundColor: props.bgColor }}>
            <h3 className={classes.heading}>{props.heading}</h3>
            {props.children}
        </Paper>
    );
}

export default withStyles(styles)(PollsHeading);