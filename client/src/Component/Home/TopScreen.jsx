import React, {Component}  from 'react'
import {connect} from 'react-redux'
class Home extends Component {

    render() {
        let{urlToImage, title, publishedAt, description} = this.props.latestNew[0];
        return (
            <div className="main">
                <img src={urlToImage} className="main-img" alt="..."/>
                <div className ='main-info'>
                    <h1>{title}</h1>
                    <span style={{display: 'flex', gap: '2rem'}}>
                        <p className='category-name'>Latest</p>
                        <p>{publishedAt.substr(0,10)}</p>
                    </span>
                    <p>{description}</p>
                </div>
            </div>                
        )
    }
}

function mapStateToProps(state) {
    return{
        latestNew : state.setLatestNewsReducer.data
    }
}

export default connect(mapStateToProps)(Home)

