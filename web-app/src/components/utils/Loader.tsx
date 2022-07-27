import React from 'react';
// @ts-ignore
import {DoubleBubble} from 'react-spinner-animated';
import 'react-spinner-animated/dist/index.css'


const Loader: React.FC = () => {
    return (
        <div style={{fontSize: "30px"}}>
            <DoubleBubble text={"Loading"} width={"200px"} height={"px"}/>
        </div>
    );
};

export default Loader;