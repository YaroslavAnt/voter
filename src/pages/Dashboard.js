import React from "react";
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import Page from "../layouts/Page";
import PollsHeading from "../components/PollsHeading";
import DashboardListItem from "../components/PollsListItems/DashboardListItem";
import { Divider } from "@material-ui/core";
import PollsShape from "../components/PollsShape";

const styles = () => ({
    button: {
        color: '#fff'
    },
    buttonAccent: {
        backgroundColor: '#ae00ae',
    },
    buttonGray: {
        backgroundColor: '#989898',
    },
    margin: {
        margin: '0 20px',
    }
})

function Dashboard(props) {
    const { classes } = props;
    return (
        <div className="dashboard">
            <Page pageName="dashboard">
                <Button variant="contained" className={[classes.button, classes.buttonAccent].join(' ')}>ADD NEW POLL</Button>

                <PollsShape>
                    <PollsHeading heading="Polls" bgColor="#00bbd1">
                        <Button variant="contained" className={[classes.button, classes.margin, classes.buttonAccent].join(' ')}>NOT VOTED POLLS</Button>
                        <Button variant="contained" className={[classes.button, classes.margin, classes.buttonGray].join(' ')}>VOTED POLLS</Button>
                    </PollsHeading>

                    <ul>
                        {
                            [0, 0, 0, 0, 0].map((el, idx) => (
                                <li key={idx}>
                                    <DashboardListItem index={idx} />
                                    <Divider />
                                </li>
                            ))
                        }
                    </ul>
                </PollsShape>
            </Page>
        </div>
    )
}

export default withStyles(styles)(Dashboard);

