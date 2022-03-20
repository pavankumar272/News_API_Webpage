import React, { Component } from 'react'

export default class Vertical extends Component {
    render() {
        let {data,title} = this.props;
        let description = (data.description === null )
            ? (data.content !== null) 
                ? data.content
                : null  
            :data.description
        return (
            <div className="card mb-3" style={{maxWidth: '54rem'}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={data.urlToImage} className="img-fluid" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h1>{data.title}</h1>
                                <span style={{display: 'flex', gap: '2rem'}}>
                                    <p className='category-name card-text'>{title}</p>
                                    <p className="card-text">{data.publishedAt.substr(0,10)}</p>
                                </span>
                                {(description !== null)
                                    ?<p className="card-text">{(description.length> 160) ? description.substr(0,160)+'...' : description}</p>
                                    : null
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
