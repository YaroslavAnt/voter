import React from "react";

import Page from "../layouts/Page";
import PollsHeading from "../components/PollsHeading";
import { Divider, TextField, Button, withStyles } from "@material-ui/core";
import PollsShape from "../components/PollsShape";
import CreateListItem from "../components/PollsListItems/CreateListItem";


const styles = () => ({
  button: {
    color: '#fff',
    backgroundColor: '#ae00ae',
    margin: '20px 0'
  }
})

function CreatePoll(props) {
  const { classes } = props;
  return (
    <div className="createPoll">
      <Page pageName="Create">

        <PollsShape>
          <PollsHeading heading="Create new poll" bgColor="#ae00ae">
            Please add your question and answers for polling
          </PollsHeading>

          <TextField fullWidth={true} placeholder='Question' />

          <ul>
            {
              [0, 0, 0, 0, 0].map((el, idx) => (
                <li key={idx}>
                  <CreateListItem index={idx} />
                  <Divider />
                </li>
              ))
            }
          </ul>

          <Button
            variant="contained"
            className={classes.button}>
            ADD NEW ANSWER
          </Button>

        </PollsShape>
      </Page>
    </div>
  )
}

export default withStyles(styles)(CreatePoll);

