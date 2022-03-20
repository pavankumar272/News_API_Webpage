import React, { Component } from 'react'
import { connect } from 'react-redux'
import Horizontal from '../Common/Horizontal';
class Health extends Component {
    render() {
        return (
            <div className='horizontal' >
                <h1 className='div-title'>Health</h1>
                <div className="horizontal-info" style={{ display: 'flex', gap: '8rem'}}>
                    {
                        this.props.healthDetail.splice(0,3).map((e, index)=>
                            <Horizontal key={'health'+index} data={e} title='Health'/>
                        )
                    }
                </div>
            </div>

        )
    }
}

function mapStateToProps(state){
    return{
        healthDetail : state.setHealthNewsReducer.data,
    }
}

export default connect(mapStateToProps)(Health)