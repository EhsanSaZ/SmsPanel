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
var ModalHeader=React.createClass({
    render:function(){
        return(
            <div id="ModalHeader" className="modal-header" style={{backgroundColor:" #393c43"}}>
                <button type="button" className="close" data-dismiss="modal">
                    <i className="fa fa-times close"  style={{color:"white",opacity:"1"}} aria-hidden="true"></i>
                </button>

                <h4  className="modal-title" style={{color:"white",opacity:"1"}}  >پیام جدید</h4>
            </div>
        );
    }
});

var PopUp=React.createClass({
   render:function(){
       return(
           <div className="modal fade" id="myModal" role="dialog">
               <div className="modal-dialog">
                   <div className="modal-content">
                       <ModalHeader/>
                       <div className="modal-body" style={{backgroundColor:"#F1FFE9"}}>
                          <NewMsg/>
                       </div>

                   </div>

               </div>
           </div>
       );
   }
});
export default PopUp;