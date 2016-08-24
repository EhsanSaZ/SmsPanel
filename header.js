/**
 * Created by esaeedizadeh on 8/20/2016.
 */
import React from 'react';

var Header = React.createClass({
    render:function () {

        return (
            <div className="header_border" >
                <nav className="navbar  nav-foot-color" id="nav_bar"  style={{marginBottom:'0',borderRadius:'0',minHeight:"9vh"}}>
                    <div className="container-fluid" style={{marginTop: "7px"}}>
                        <div className="navbar-header">
                            <button  className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar" style={{backgroundColor : '#0f0f0f'}}></span>
                                <span className="icon-bar" style={{backgroundColor : '#0f0f0f'}}></span>
                                <span className="icon-bar" style={{backgroundColor : '#0f0f0f'}}></span>
                            </button>
                                <div style={{display:"flex",alignItems:"center",height:"100%"}}>
                                    <div className="header_items" >
                                        <p style={{color:"white",margin:"0px"}}>USER-NAME-ELENOON</p>
                                    </div>
                                    <div className="header_items">
                                         <img src={'./images/blank-person.png'}  className="img-circle " style={{height:"50px",width:"50px"}} />
                                    </div>
                                    <div className="header_items" >
                                        <i className="fa fa-cog fa-2x header_icons onhover" aria-hidden="true" ></i>
                                    </div>
                                </div>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav navbar-right text-center">
                                <li className="header_items header_li" style={{padding:"8px"}}>
                                    <button className="new_massage_btn"> پیام جدید</button>
                                </li>
                                <li className="header_items header_li" style={{padding:"12px"}}>
                                    <p style={{color:"white"}}>پنل پیام کوتاه </p>
                                </li>
                                <li className="header_items header_li">
                                    <img src={'./images/nasim.png'} style={{height:"50px",width:"50px"}}/>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        );
    }
});

export default Header;