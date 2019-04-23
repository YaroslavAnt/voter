import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import classnames from "classnames";

const styles = () => ({
    paragraph: {
        display: 'flex',
        alignItems: 'center',
        color: '#989898',
        margin: '20px'
    },
    text: {
        flexGrow: 1,
    },
    count: {
        width: '100px',
    },
    progress: {
        display: 'inline-block',
        height: '20px',
        backgroundColor: '#ae00ae',
    },
    active: {
        fontWeight: 'bold'
    }
})

class PollListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemValue: 0,
            isActive: false
        };
    }
    render() {
        const { classes, index } = this.props;
        const { isActive } = this.state;
        return (
            <p className={classnames(classes.paragraph, { [classes.active]: isActive })} >
                <span className={classes.text}>This is the Answer# {index + 1} for the Question</span>
                <span className={classes.count}>{this.state.itemValue}</span>
                <span style={{ width: '300px' }} >
                    <span className={classes.progress} style={{ width: '100px' }}></span>
                </span>
            </p>
        );
    }
}

export default withStyles(styles)(PollListItem);