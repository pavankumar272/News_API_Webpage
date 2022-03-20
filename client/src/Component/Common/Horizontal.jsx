import React, { Component } from 'react'

export default class Horizontal extends Component {
    render() {
        let {data, title} = this.props;
        return (
            <div className="card" style={{maxWidth: '20rem'}}>
                <img src={data.urlToImage} className="img-fluid" alt="..."/>
                <div className="card-body">
                    <h1>{data.title}</h1>
                    <span style={{display: 'flex', gap: '2rem'}}>
                        <p className='category-name card-text'>{title}</p>
                        <p className="card-text">{data.publishedAt.substr(0,10)}</p>
                    </span>
                </div>
            </div>
        )
    }
}
