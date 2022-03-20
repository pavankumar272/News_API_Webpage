import React, { Component } from 'react'
import { connect } from 'react-redux'

class Latest extends Component {
    
    render() {
        let {startAt} =  this.props;
        let LatestInfo = this.props.latestData.slice(startAt, startAt+3).map((e, index)=>{
            return(
                <div key= {'latest'+index} className="card mb-3" style={{maxWidth: '400px'}}>
                    <div className="row g-0">
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{e.title}</h5>
                                <p className="card-text">{e.publishedAt.substr(0,10)}</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img src={e.urlToImage} className="img-fluid" alt="..."/>
                        </div>
                    </div>
                </div>
            )
        });
        return (
            <div className='latest'>
                <h1>Latest</h1>
                {LatestInfo}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        latestData : state.setLatestNewsReducer.data,
    }
}
export default connect(mapStateToProps)(Latest)