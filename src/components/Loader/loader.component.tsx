import React from 'react';
import { Spin } from 'antd';
import './loader.css';

function Loader() {
    return (
        <div className="div-loader" >
            <Spin tip="Loading..." size="large" />
        </div>
    );
}

export default Loader;