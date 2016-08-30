import React from 'react';

var Row = React.createClass({
    render:function () {
        return(
            <a href="#" className="list-group-item" style={{borderRadius:"0px",wordWrap: "break-word"}}>
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
        this.props.AddOnSubmit(FileName);
        console.log('done');
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
class RowList extends React.Component{
    constructor() {
        super();

        this.state = {
            data2: []
        }

        this.AddFolder = this.AddFolder.bind(this);
    };
    AddFolder( fname){
        var item= {id:new Date(),foldername:fname}
        var mydata2= this.state.data2;
        mydata2.push(item);
        this.setState({data2: mydata2})
        console.log("add folder works");
        console.log(this.state.data2);
    };

    render() {
        var rowNodes =this.state.data2.map(function(folder) {
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
                <RowForm AddOnSubmit={this.AddFolder}/>
            </div>
        );
    }
}
class MainPanel extends React.Component {

    render() {
        var Name=this.props.data[0].name;
        var RowsData=this.props.data;
        RowsData.splice(0,1);
        return(
            <div className="col-sm-2 cols_height" style={{backgroundColor:"#A7FFEB",
                height: "90vh", minHeight :"90vh",borderLeft:"1px solid #393c43"}}>
                <div id="MainPanelTop" style={{direction:"rtl"}}>
                    <hr className="style-one"/>
                    <h2>{Name}</h2>
                    <hr className="style-one"/>
                    <RowList data={RowsData}/>
                </div>
                <hr className="style-one"/>
                <div id="MainPanelBotton" className="main-panel-bottom">
                    <div id="Remain" className="charge text-center">
                        <p>مانده 5000 تومان   </p>
                    </div>
                    <div id="ChargeSim"  className="text-center">
                        <button className="charge_btn">شارژ  <i className="fa fa-credit-card" aria-hidden="true"></i> </button>
                    </div>
                </div>

            </div>
        );
    }
}

export default MainPanel;