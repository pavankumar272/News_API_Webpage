import React, { Component } from 'react'
import { connect } from 'react-redux'
import Horizontal from '../Common/Horizontal';
class General extends Component {
    render() {
        return (
            <div className='horizontal' >
                <h1 className='div-title'>General</h1>
                <div className="horizontal-info" style={{ display: 'flex', gap: '8rem'}}>
                    {
                        this.props.generalDetail.splice(0,3).map((e, index)=>
                            <Horizontal key={'buss'+index} data={e} title='General'/>
                        )
                    }
                </div>
            </div>

        )
    }
}

function mapStateToProps(state){
    return{
        generalDetail : state.setGeneralNewsReducer.data,
    }
}

export default connect(mapStateToProps)(General)