import React from 'react';
import { Paper, withStyles, } from "@material-ui/core";


const styles = () => ({
    paper: {
        backgroundColor: '#989898',
        color: '#fff',
        textAlign: 'center',
        padding: '10px',
        margin: '20px'
    }
})

const DashboardListItem = (props) => {
    const { classes } = props;
    return (
        <Paper className={classes.paper}>THIS IS QUESTION FOR POLL#{props.index + 1}. PLEASE ANSWER IT</Paper>
    )
};

export default withStyles(styles)(DashboardListItem);
