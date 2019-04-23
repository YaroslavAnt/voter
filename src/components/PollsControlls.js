import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
    heading: {
        marginBottom: '20px'
    },
    button: {
        color: '#fff'
    },
    margin: {
        margin: '0 20px',
    },
    buttonAccent: {
        backgroundColor: '#ae00ae',
    },
    buttonGray: {
        backgroundColor: '#989898',
    },
    paperTop: {
        backgroundColor: '#00bbd1',
        padding: '20px',
        position: 'relative',
        color: '#fff',
        top: '-40px'
    }
})

const PollsControlls = (props) => {
    const { classes } = props;
    return (
        <Paper className={classes.paperTop}>
            <h3 className={classes.heading}>Polls</h3>
            <Button variant="contained" className={[classes.button, classes.margin, classes.buttonAccent].join(' ')}>NOT VOTED POLLS</Button>
            <Button variant="contained" className={[classes.button, classes.margin, classes.buttonGray].join(' ')}>VOTED POLLS</Button>
        </Paper>
    );
}

export default withStyles(styles)(PollsControlls);