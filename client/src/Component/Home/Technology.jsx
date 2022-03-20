import React, { Component } from 'react'
import { connect } from 'react-redux'
import Vertical from '../Common/Vertical';
import './Home.css'
class Technology extends Component {
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
        let {technologyNews} = this.props;
        console.log("enter", technologyNews)
        let limit = (displayLimit !== 3) ? technologyNews.length : displayLimit;

        return (
            <div className="verticle-news" >
                <h1 className='div-title'>Technology</h1>
                {   
                    technologyNews.slice(0, limit).map((e, index)=>
                        <Vertical key={'info'+index} data={e} title='Technology'/>   
                    )
                }
                <button type="button" className="btn btn-primary" onClick={()=>this.changeLimit()}>See {buttonName}</button>
            </div>

        )
    }
}

function mapStateToProps(state){
    return {
        technologyNews: state.setTechnologyNewsReducer.data,

    }
}

export default connect(mapStateToProps)(Technology)