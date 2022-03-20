import React, { Component } from 'react'
import { connect } from 'react-redux'
import Horizontal from '../Common/Horizontal';
class Business extends Component {
    render() {
        return (
            <div className='horizontal' >
                <h1 className='div-title'>Business</h1>
                <div className="horizontal-info" style={{ display: 'flex', gap: '8rem'}}>
                    {
                        this.props.businessDetail.splice(0,3).map((e, index)=>
                            <Horizontal key={'buss'+index} data={e} title='Business'/>
                        )
                    }
                </div>
            </div>

        )
    }
}

function mapStateToProps(state){
    console.log("BUsiness -> ", state.setBusinessNewsReducer.data);
    return{
        businessDetail : state.setBusinessNewsReducer.data,
    }
}

export default connect(mapStateToProps)(Business)