import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';
import Close from '@material-ui/icons/Close';
import classnames from "classnames";

import MyButton from '../../layouts/MyButton';

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
    margin: {
        margin: '0 5px'
    }
})

class CreateListItem extends Component {
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
                <MyButton bgColor='#00bbd1' className={classes.margin}><ArrowDropDown /></MyButton>
                <MyButton bgColor='#00bbd1' className={classes.margin}><ArrowDropUp /></MyButton>
                <MyButton bgColor='#ff9900' className={classes.margin}><Close /></MyButton>
            </p>
        );
    }
}

export default withStyles(styles)(CreateListItem);