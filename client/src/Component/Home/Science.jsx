// Science
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Vertical from '../Common/Vertical';
import './Home.css'
class Science extends Component {
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
        let {scienceNews} = this.props;
        console.log("enter", scienceNews)
        let limit = (displayLimit !== 3) ? scienceNews.length : displayLimit;

        return (
            <div className="verticle-news" >
                <h1 className='div-title'>Science</h1>
                {   
                    scienceNews.slice(0, limit).map((e, index)=>
                        <Vertical key={'info'+index} data={e} title='Science'/>   
                    )
                }
                <button type="button" className="btn btn-primary" onClick={()=>this.changeLimit()}>See {buttonName}</button>
            </div>

        )
    }
}

function mapStateToProps(state){
    return {
        scienceNews: state.setScienceNewsReducer.data,

    }
}

export default connect(mapStateToProps)(Science)