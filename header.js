/**
 * Created by esaeedizadeh on 8/20/2016.
 */
import React from 'react';

var Header = React.createClass({
    render:function () {

        return (
            <div>
                <nav className="navbar  nav-foot-color" id="nav_bar"  style={{marginBottom:'0',borderRadius:'0',height:"60px"}}>
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button  className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar" style={{backgroundColor : '#0f0f0f'}}></span>
                                <span className="icon-bar" style={{backgroundColor : '#0f0f0f'}}></span>
                                <span className="icon-bar" style={{backgroundColor : '#0f0f0f'}}></span>
                            </button>
                            <img src={'./images/nasim.png'} style={{height:"20px",width:"20px"}}/>
                        </div>
                    </div>
                </nav>

            </div>
        );
    }
});

export default Header;