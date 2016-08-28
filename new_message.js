/**
 * Created by esaeedizadeh on 8/28/2016.
 */
import React from 'react';
var NewMsgTop=React.createClass({
    render:function(){
        return(
            <div>

            </div>
        );
    }
});
var NewMsgBottom=React.createClass({
    render:function(){
        return(
            <div>

            </div>
        );
    }
});
var NewMsg=React.createClass({
    render:function(){
        return(
            <div  id="NewMsg" className="new-msg-content">
                <form>
                    <div id="NewMsgTop" style={{width:"100%",height:"40px"}}>
                        <input style={{width:"90%",float:"left",height:"100%"}}/>
                        <button style={{width:"10%",float:"right",height:"100%"}} >به</button>
                    </div>
                    <div id="NewMsgBottom" style={{width:"100%"}}>
                        <div id="remain" style={{width:"100%",height:"30px",direction:"rtl",backgroundColor:"lightgray"}}>
                            <label>1000 تومان</label>
                        </div>
                        <div id="message-area" style={{width:"100%",height:"190px",backgroundColor:"pink"}}>
                            <textarea style={{resize:"none",width:"100%",height:"100%",direction:"rtl"}}>

                            </textarea>
                        </div>
                        <button style={{width:"100%",height:"40px",backgroundColor:"#8BC34A",border:"0"}}>ارسال</button>
                    </div>
                </form>

            </div>
        );
    }
});
var PopUpNav=React.createClass({
    render:function(){
        return(
            <div id="PopUpNav" style={{height:"40px",backgroundColor:" #393c43",padding:"10px"}}>
                <a  href="#"><i className="fa fa-times close"  style={{color:"white",opacity:"1"}} aria-hidden="true"></i></a>
                <p style={{color:"white",opacity:"1"}} >پیام جدید</p>
            </div>
        );
    }
});

var PopUp=React.createClass({
   render:function(){
       return(
            <div>
                <div id="popup1" className="overlay">
                    <div className="popup">
                       <PopUpNav/>
                       <NewMsg/>
                    </div>
                </div>
            </div>
       );
   }
});
export default PopUp;