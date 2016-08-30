/**
 * Created by esaeedizadeh on 8/30/2016.
 */
import React from 'react';

var smsdata = [
    {id:1 ,username:"نفر اول",lastdate:"1 فروردين 1300", content:"نفر اول هستم"},
    {id:2 ,username:"نفر دوم",lastdate:"2 فروردين 1300", content:"نفر دوم هستم.خوبي؟"},
    {id:3 ,username:"نفر سوم",lastdate:"3 فروردين 1300", content:"نفر سوم هستم.. متن طولانی است متن طولانی است متن طولانی است متن طولانی است متن طولانی است متن طولانی است متن طولانی است"}
];
var ChatPreviewRowTop= React.createClass({
    render:function () {
        return(
            <div id="top" style={{height:"50%",display:"flex"}}>
                <div id="top-left" style={{height:"100%",width:"30%",direction:"rtl"}}>
                    <span style={{float:"left",fontSize:"15px"}}> {this.props.date}</span>
                </div>
                <div id="top-right"  style={{height:"100%",width:"70%",direction:"rtl"}}>
                    <ul className="list-inline" style={{padding:"0px"}}>
                        <li>
                            <input type="checkbox" value=""/>
                        </li>
                        <li>
                            <img src={'./images/blank-person.png'}  className="img-circle " style={{height:"40px",width:"40px"}} />
                        </li>
                        <li style={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            width: "65%"}}>
                                <span>
                                    {this.props.username}
                                </span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
});
var ChatPreviewRowBottom= React.createClass({
    render:function () {
        return(
            <div id="bottom"  style={{height:"50%",display:"flex"}}>
                <div id="bottom-left"  style={{height:"100%",width:"50%"}}>
                    <ul  id="SmsPriviewIcons" className="list-inline">
                        <li>
                            <a className="link onhover ">
                                <i className="fa fa-trash fa-lg" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a className="link onhover">
                                <i className="fa fa-star fa-lg" aria-hidden="true"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div id="bottom-right"  style={{height:"100%",width:"50%",direction:"rtl"}}>
                    <p className="tooltipp bottom_right_chat_preview" >
                        {this.props.content}
                        <span className="dropdown-menu-right" >
                            {this.props.content}
                        </span>
                    </p>
                </div>
            </div>
        );
    }
});
var ChatPreviewRow = React.createClass({
    render:function () {
        return(
            <div id="sms-preview"  className="SmsPreview" style={{minHeight:"80px"}}>
                <ChatPreviewRowTop username={this.props.username} date={this.props.date}/>
                <ChatPreviewRowBottom content={this.props.content}/>
            </div>
        );
    }
});
var SmsList = React.createClass({
    render:function () {
        var smsNodes =this.props.data.map(function(chat) {
            return (
                <ChatPreviewRow username={chat.username}   key={chat.id} date={chat.lastdate} content={chat.content}/>
            );
        });
        return(
            <div>
                {smsNodes}
                <hr className="style-one"/>
                <p className="text-center">انتهای لیست</p>
            </div>
        );
    }
});

var SettingRow=React.createClass({
    render:function () {
        return(
            <div style={{display:"flex",marginTop:"10px",backgroundColor:"#00E676",paddingTop:"10px",paddingLeft:"10px",
                paddingRight:"10px"}}>
                <div style={{width:"50%"}}>
                    <ul className="list-inline">
                        <li>
                            <a className="link onhover">
                                <i className="fa fa-trash fa-lg" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a className="link onhover">
                                <i className="fa fa-star fa-lg" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a className="link onhover">
                                <i className="fa fa-folder fa-lg" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a className="link onhover">
                                <i className="fa fa-refresh fa-lg" aria-hidden="true"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div style={{display:"flex",width:"50%" , direction:"rtl"}}>
                    <ul className="list-inline" style={{padding:"0px"}}>
                        <li>
                            <input type="checkbox" value=""/>
                        </li>
                        <li>
                            <div className="dropdown">
                                <button className="btn btn-default btn-xs dropdown-toggle link sort_button"
                                        type="button"
                                        data-toggle="dropdown"
                                >مرتب سازی
                                    <span className="caret" style={{marginRight:"10px"}}></span></button>
                                <ul className="dropdown-menu dropdown-menu-right" style={{width:"143px",minWidth:"143px"}}>
                                    <li style={{textAlign: "right"}}><a href="#">تاریخ</a></li>
                                    <li style={{textAlign: "right"}}><a href="#">فرستنده</a></li>
                                    <li style={{textAlign: "right"}}><a href="#">موارد خوانده نشده</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>


                </div>
            </div>
        );
    }
});

var ChatPanel = React.createClass({
    render:function () {
        return(
            <div className="col-sm-4 cols_height" style={{backgroundColor:"#A7FFEB",
                height:"90vh", minHeight :"90vh",borderLeft:"1px solid #393c43"}}>
                <hr className="style-one"/>
                <SettingRow/>
                <hr  className="style-one"/>
                <SmsList data={smsdata}/>
            </div>
        );
    }
});
export default ChatPanel;