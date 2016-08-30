/**
 * Created by esaeedizadeh on 8/20/2016.
 */
import React from 'react';
import SmsArea from './SmsArea'
import ChatPanel from './ChatPanel'
import MainPanel  from './MainPanel'
/**********************START OF MAIN PANEL COLUMN************************/
var data = [
    {id:0 ,name:"اسم کاربر"},
    {id: 1, foldername: "پوشه 1"},
    {id: 2, foldername: "پوشه 2"},
    {id: 3, foldername: "پوشه 3"}
];

/***********************END OF MAIN PANEL COLUMN***********************/
var Body = React.createClass({
    render:function () {
        return (
            <div >
                <SmsArea/>
                <ChatPanel/>
                <MainPanel data={data}/>
            </div>
        );
    }
});

export default Body;