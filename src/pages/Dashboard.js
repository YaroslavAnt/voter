import React from "react";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import Page from "../layouts/Page";
import PollsControlls from "../components/PollsControlls";
import PollsList from "../components/PollsList";

const styles = () => ({
    button: {
        color: '#fff'
    },
    buttonAccent: {
        backgroundColor: '#ae00ae',
    },
    paperBottom: {
        backgroundColor: '#fff',
        padding: '20px',
        position: 'relative',
        marginTop: '50px'
    },
})

function Dashboard(props) {
    const { classes } = props;
    return (
        <div className="dashboard">
            <Page pageName="dashboard">
                <Button variant="contained" className={[classes.button, classes.buttonAccent].join(' ')}>ADD NEW POLL</Button>
                <Paper className={classes.paperBottom}>
                    <PollsControlls />
                    <PollsList />
                </Paper>
            </Page>
        </div>
    )
}

export default withStyles(styles)(Dashboard);

