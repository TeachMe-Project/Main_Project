import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

import useVideoContext from '../../../hooks/useVideoContext/useVideoContext';
import SearchIcon from "@material-ui/icons/Search";
import Modal01 from "../../Modal/Modal01";



export const ANIMATION_DURATION = 700;

const useStyles = makeStyles({
    iconContainer: {
        position: 'relative',
        display: 'flex',
    },
    circle: {
        width: '10px',
        height: '10px',
        backgroundColor: '#5BB75B',
        borderRadius: '50%',
        position: 'absolute',
        top: '-3px',
        left: '13px',
        opacity: 0,
        transition: `opacity ${ANIMATION_DURATION * 0.5}ms ease-in`,
    },
    hasUnreadMessages: {
        opacity: 1,
    },
    ring: {
        border: '3px solid #5BB75B',
        borderRadius: '30px',
        height: '14px',
        width: '14px',
        position: 'absolute',
        left: '11px',
        top: '-5px',
        opacity: 0,
    },
    animateRing: {
        animation: `$expand ${ANIMATION_DURATION}ms ease-out`,
        animationIterationCount: 1,
    },
    '@keyframes expand': {
        '0%': {
            transform: 'scale(0.1, 0.1)',
            opacity: 0,
        },
        '50%': {
            opacity: 1,
        },
        '100%': {
            transform: 'scale(1.4, 1.4)',
            opacity: 0,
        },
    },
});



export default function ToggleStudentMonitorButton(props:{course_id:string;class_id:string}) {
    const classes = useStyles();


    // const toggleChatWindow = () => {
    //     setIsChatWindowOpen(!isChatWindowOpen);
    //     setIsBackgroundSelectionOpen(false);
    // };

    return (
        <div>
            {/*<Button*/}
            {/*    data-cy-chat-button*/}
            {/*    // onClick={toggleChatWindow}*/}
            {/*    startIcon={*/}
            {/*        <div className={classes.iconContainer}>*/}
            {/*            <SearchIcon />*/}

            {/*        </div>*/}
            {/*    }*/}
            {/*>*/}

            {/*    Monitor*/}
            {/*</Button>*/}

            <Modal01 class_id={props.class_id} course_id={props.course_id}/>
        </div>

    );
}
