import React, { Component } from 'react'
import { connect } from 'react-redux'
import Vertical from '../Common/Vertical';
import './Home.css'
class Entertainment extends Component {
    state={
        displayLimit  : 3,
        buttonName : 'More',
    }

    changeLimit(){
        let {displayLimit, buttonName} = this.state;
        displayLimit = (displayLimit === 3) ? '' :  3;
        buttonName = (buttonName === 'More') ? 'Less' :  'More';
        this.setState({displayLimit, buttonName});
    }

    render() {
        let {displayLimit,buttonName} = this.state;
        let {entertainmentNews} = this.props;
        console.log("enter", entertainmentNews)
        let limit = (displayLimit !== 3) ? entertainmentNews.length : displayLimit;

        return (
            <div className="verticle-news" >
                <h1 className='div-title'>Entertainment</h1>
                {   
                    entertainmentNews.slice(0, limit).map((e, index)=>
                        <Vertical key={'info'+index} data={e} title='Entertainment'/>   
                    )
                }
                <button type="button" className="btn btn-primary" onClick={()=>this.changeLimit()}>See {buttonName}</button>
            </div>

        )
    }
}

function mapStateToProps(state){
    return {
        entertainmentNews: state.setEntertainmentNewsReducer.data,

    }
}

export default connect(mapStateToProps)(Entertainment)