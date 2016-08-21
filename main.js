/**
 * Created by esaeedizadeh on 8/20/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header'
import Main_body from './main-body'
var App = React.createClass({
   render:function () {
       return (
           <div>
               <Header/>
               <Main_body/>
           </div>
       );
   } 
});
ReactDOM.render(<App />, document.getElementById('app'));