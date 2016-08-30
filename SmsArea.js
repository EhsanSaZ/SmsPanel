/**
 * Created by esaeedizadeh on 8/30/2016.
 */
import React from 'react';

var SmsAreaBottom = React.createClass({
    render:function () {
        return(
            <div id="SmsAreaBottom" style={{minHeight:"11vh",maxHeight:"11vh",backgroundColor:"white",
                marginBottom:"10px",position:"relative"}}>
                <form>
                    <div id="SmsForm" className="sms-form" style={{width:"90%",height:"100%",
                        position:"absolute",bottom:"0",right:"0",overflowY:"auto"}}>
                        <textarea className="sms-text-area emojis-wysiwyg"
                            style={{height:"100%"}}
                             data-emojiable="true"
                             placeholder="یک پیام بنویسید...">
                        </textarea>
                    </div>
                    <div id="SmsFormSubmit" style={{width:"10%",height:"50%",position:"absolute",bottom:"0",left:"0"}}>
                        <button type="submit" id="kk"   className="sms-form-submit" value="Submit" style={{width:"100%",height:"100%"}}>
                            <i className="fa fa-paper-plane" aria-hidden="true"></i>
                        </button>
                    </div>

                </form>
            </div>
        );
    }
});
var SmsAreaTopSetting = React.createClass({
    render:function () {
        return(
            <div id="SmsAreaTopSetting" style={{display:"flex",backgroundColor:"#00E676",paddingLeft:"10px",
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
var SmsRowTop = React.createClass({
    render:function () {
        return(
            <div id="SmsRowTop" className={this.props.MassageClass}>
                <p style={{margin:"3px"}}>
                    متن متن متن متن متن متن متن متن
                    متن متن متن متن متن متن متن متن
                    !!!!!!!!!@@@@@@@@@@@@@@@@#######
                    متن متن متن متن متن متن متن متن
                    متن متن متن متن متن متن متن متن
                    متن متن متن متن متن متن متن متن
                    متن متن متن متن متن متن متن متن
                    متن متن متن متن متن متن متن متن
                </p>
            </div>
        );
    }
});
var SmsRowBottom = React.createClass({
    render:function () {
        return(
            <div id="SmsRowBottom">
            </div>
        );
    }
});
var SmsRow = React.createClass({
    render:function () {
        return(
            <div id="SmsRow" style={{display:"table",width:"100%",padding:"15px"}}>
                <SmsRowTop MassageClass={this.props.MassageClass}/>
                <SmsRowBottom/>
            </div>
        );
    }
});
var SmsAreaTopShowChat = React.createClass({
    render:function () {
        return(
            <div id="SmsAreaTopShowChat" style={{minHeight:"55vh",maxHeight:"55vh",
                overflow:"auto",backgroundColor:"white",border:"1px solid #393c43"}}>
                <SmsRow MassageClass={"bubble-you"}/>
                <SmsRow MassageClass={"bubble-contact"}/>
                <SmsRow MassageClass={"bubble-you"}/>
                <SmsRow MassageClass={"bubble-you"}/>
                <SmsRow MassageClass={"bubble-contact"}/>
            </div>
        );
    }
});
var SmsAreaTop = React.createClass({
    render:function () {
        return(
            <div id="SmsAreaTop" >
                <hr className="style-one"/>
                <SmsAreaTopSetting/>
                <hr className="style-one"/>
                <SmsAreaTopShowChat/>
                <hr className="style-one"/>
            </div>
        );
    }
});
var SmsArea = React.createClass({
    render:function () {
        return(
            <div id="SmsArea" className="col-sm-6 cols_height" style={{height: "90vh", minHeight :"90vh",backgroundColor:"#A7FFEB"}}>
                <SmsAreaTop/>
                <SmsAreaBottom/>
            </div>
        );
    }
});
export default SmsArea;