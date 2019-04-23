import React from "react";
import { withStyles } from '@material-ui/core/styles';

import Page from "../layouts/Page";
import PollsHeading from "../components/PollsHeading";
import { Divider } from "@material-ui/core";
import PollsShape from "../components/PollsShape";
import PollListItem from "../components/PollsListItems/PollListItem";

const styles = () => ({
    heading: {
        color: '#989898'
    },
})

function Poll(props) {
    const { classes } = props;
    return (
        <div className="dashboard">
            <Page pageName="Poll">

                <PollsShape>
                    <PollsHeading heading="This is poll results" bgColor="#ae00ae">
                        Please choose your answer if you have not yet
                    </PollsHeading>

                    <h3 className={classes.heading}>The question is...</h3>

                    <ul>
                        {
                            [0, 0, 0, 0, 0].map((el, idx) => (
                                <li key={idx}>
                                    <PollListItem index={idx} />
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

export default withStyles(styles)(Poll);

