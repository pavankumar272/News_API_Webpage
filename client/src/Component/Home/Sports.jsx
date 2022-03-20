import React, { Component } from 'react'
import { connect } from 'react-redux'
import Horizontal from '../Common/Horizontal';
class Sports extends Component {
    render() {
        return (
            <div className='horizontal' >
                <h1 className='div-title'>Sports</h1>
                <div className="horizontal-info" style={{ display: 'flex', gap: '8rem'}}>
                    {
                        this.props.sportsDetail.splice(0,3).map((e, index)=>
                            <Horizontal key={'buss'+index} data={e} title='Sports'/>
                        )
                    }
                </div>
            </div>

        )
    }
}

function mapStateToProps(state){
    return{
        sportsDetail : state.setSportNewsReducer.data,
    }
}

export default connect(mapStateToProps)(Sports)