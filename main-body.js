/**
 * Created by esaeedizadeh on 8/20/2016.
 */
import React from 'react';

var TextArea = React.createClass({
    render:function () {
        return(
            <div className="col-sm-7 cols_height" style={{backgroundColor:"#F9B4FF",
                height: "90vh", minHeight :"90vh"}}>
                <h1>در</h1>
                <h1>دست</h1>
                <h1>ساخت</h1>
                <h1>به زودی</h1>
            </div>
        );
    }
});



/**********************START OF CHAT PANEL COLUMN************************/
var ChatPreviewRow = React.createClass({
    render:function () {
        return(
            <div>
                <div id="top">
                    <div id="top-right">

                    </div>
                    <div id="top-left">

                    </div>
                </div>
                <div id="buttom">
                    <div id="buttom-right">

                    </div>
                    <div id="buttom-left">

                    </div>
                </div>
            </div>
        );
    }
});

var SmsList = React.createClass({
    render:function () {
        return(
            <div>
                <ChatPreviewRow/>
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
                                <i className="fa fa-refresh fa-lg fa-spin" aria-hidden="true"></i>
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
                        <input type="submit" value="Post" />
                </form>
            </a>
        );
    }
});
var RowList = React.createClass({
   render:function () {
       var rowNodes =this.props.data.map(function(folder) {
           return (
               <Row content={folder.foldername} key={folder.id} IconClass={"fa fa-folder-open fa-lg"}>
               </Row>
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
                <TextArea/>
                <ChatPanel/>
                <MainPanel data={data}/>
            </div>
        );
    }
});

export default Body;