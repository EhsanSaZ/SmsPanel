/**
 * Created by esaeedizadeh on 8/20/2016.
 */
import React from 'react';
var SmsAreaBottom = React.createClass({
    render:function () {
        return(
            <div style={{minHeight:"80px",backgroundColor:"lightblue"}}>

            </div>
        );
    }
});

var SmsAreaTopSetting = React.createClass({
    render:function () {
        return(
                <div style={{display:"flex",backgroundColor:"lightgray",paddingLeft:"10px",
                    paddingRight:"10px"}}>
                    <div style={{width:"100%" ,direction:"rtl",marginTop:"15px"}}>
                        <ul className="list-inline">
                            <li>
                                <a className="link ">
                                    <i className="fa fa-folder-open fa-lg onhover" aria-hidden="true" style={{marginLeft:"10px"}}></i>
                                    انتقال
                                </a>
                            </li>
                            <li>
                                <a className="link ">
                                    <i className="fa fa-trash fa-lg onhover" aria-hidden="true" style={{marginLeft:"10px"}}></i>
                                    حذف
                                </a>
                            </li>
                            <li>
                                <a className="link ">
                                    <i className="fa fa-print fa-lg onhover" aria-hidden="true" style={{marginLeft:"10px"}}></i>
                                    چاپ
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
        );
    }
});
var SmsRows = React.createClass({
    render:function () {
        return(
            <div>

            </div>
        );
    }
});
var SmsAreaTopShowChat = React.createClass({
    render:function () {
        return(
            <div>

            </div>
        );
    }
});
var SmsAreaTop = React.createClass({
    render:function () {
        return(
            <div>
                <hr/>
                <SmsAreaTopSetting/>
                <hr/>
                <SmsAreaTopShowChat/>
            </div>
        );
    }
});
var SmsArea = React.createClass({
    render:function () {
        return(
            <div className="col-sm-7 cols_height" style={{height: "90vh", minHeight :"90vh",backgroundColor:"#F1FFE9"}}>
                <SmsAreaTop/>
                <SmsAreaBottom/>
            </div>
        );
    }
});



/**********************START OF CHAT PANEL COLUMN************************/
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
                <ChatPreviewRow username={chat.username}date={chat.lastdate} content={chat.content}/>
            );
        });
        return(
            <div>
                {smsNodes}
                <hr/>
                <p className="text-center">انتهای لیست</p>
            </div>
        );
    }
});

var SettingRow=React.createClass({
    render:function () {
        return(
            <div style={{display:"flex",marginTop:"10px",backgroundColor:"lightgray",paddingTop:"10px",paddingLeft:"10px",
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
            <div className="col-sm-3 cols_height" style={{backgroundColor:"#F1FFE9",
                height:"90vh", minHeight :"90vh",borderLeft:"1px solid #393c43"}}>
                <hr/>
                <SettingRow/>
                <hr/>
                <SmsList data={smsdata}/>
            </div>
        );
    }
});

/**********************END OF  CHAT PANEL COLUMN************************/
/**********************START OF MAIN PANEL COLUMN************************/
var data = [
    {id:0 ,name:"اسم کاربر"},
    {id: 1, foldername: "پوشه 1"},
    {id: 2, foldername: "پوشه 2"},
    {id: 3, foldername: "پوشه 3"}
];
console.warn(data);
var Row = React.createClass({
    render:function () {
        return(
            <a href="#" className="list-group-item" style={{borderRadius:"0px"}}>
                <i className={this.props.IconClass} aria-hidden="true" style={{paddingLeft:"10px"}}>
                </i>
                {this.props.content}
            </a>
        );
    }
});
var FolderRow = React.createClass({
   render:function () {
       return(
           <a href="#" className="list-group-item" style={{borderRadius:"0px"}}>
               <i className={this.props.IconClass} aria-hidden="true" style={{paddingLeft:"10px"}}>
               </i>
               {this.props.content}
               <i className="fa fa-trash onhover" aria-hidden="true" style={{float: "left"}}></i>
           </a>
       );
   }
});
var RowForm = React.createClass({
    getInitialState: function() {
        return {InputName: ''};
    },
    handleFilenameChange: function(e) {
        this.setState({InputName: e.target.value});
    },
    handleSubmit: function(e) {
        e.preventDefault();
        var FileName = this.state.InputName.trim();
        if (!FileName ) {
            return;
        }
        data.push(
            {id:new Date(),foldername:FileName}
        );

        // console.log('works');
        console.warn(data);
        this.setState({InputName: ''});
    },
    render: function() {
        return (
            <a href="#" className="list-group-item" style={{borderRadius:"0px"}}>
                <form onSubmit={this.handleSubmit} >
                    <input type="text"
                           placeholder="نام پوشه"
                           value={this.state.filename}
                           onChange={this.handleFilenameChange}
                           style={{width:"70%"}}
                    />
                    <input className="btn btn-success" type="submit" value="creat" style={{borderRadius:"0px",padding: "4px"}}/>
                </form>
            </a>
        );
    }
});
var RowList = React.createClass({
    render:function () {
        var rowNodes =this.props.data.map(function(folder) {
            return (
                <FolderRow content={folder.foldername} key={folder.id} IconClass={"fa fa-folder-open fa-lg"}>

                </FolderRow>
            );
        });
        return(
            <div className="list-group" style={{borderRadius:"0px"}}>
                <Row content={"صندوق پیام های من"} IconClass={"fa fa-envelope fa-lg onhover"}/>
                <Row content={"پیش نویس های من"} IconClass={"fa fa-file-text fa-lg onhover"}/>
                <Row content={"حذف شده های من"} IconClass={"fa fa-trash fa-lg onhover"}/>
                {rowNodes}
                <RowForm/>
            </div>
        );
    }
});

var MainPanel = React.createClass({
    render:function () {
        var Name=this.props.data[0].name;
        var RowsData=this.props.data;
        RowsData.splice(0,1);
        return(
            <div className="col-sm-2 cols_height" style={{backgroundColor:"#F1FFE9",
                height: "90vh", minHeight :"90vh",borderLeft:"1px solid #393c43"}}>
                <div style={{direction:"rtl"}}>
                    <hr/>
                    <h2>{Name}</h2>
                    <hr/>
                    <RowList data={RowsData}/>
                </div>

            </div>
        );
    }
});
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