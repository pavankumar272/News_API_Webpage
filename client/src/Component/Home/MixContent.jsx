import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Home.css'
class MixContent extends Component {
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
        let {businessNews, entertainmentNews, healthNews, ScienceNews, SportNews, TechnologyNews, GeneralNews} = this.props;
        let categoryName = ['Business', 'Entertainment', 'Health', 'Science', 'Sports', 'Technology', 'General'];
        let mixDataArray = [ businessNews[0],entertainmentNews[0], healthNews[0], ScienceNews[0],SportNews[0], TechnologyNews[0],GeneralNews[0] ];
        
        let limit = (displayLimit !== 3) ? mixDataArray.length : displayLimit;
        
        let mixTopic = mixDataArray.slice(0, limit).map((e, index)=>{
            let description = (e.description === null )? (e.content !== null) ? e.content: null  :e.description
                return(
                    <div key={'mix'+index} className="card mb-3" style={{maxWidth: '54rem'}}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={e.urlToImage} className="img-fluid" alt="..."/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h1>{e.title}</h1>
                                    <span style={{display: 'flex', gap: '2rem'}}>
                                        <p className='category-name card-text'>{categoryName[index]}</p>
                                        <p className="card-text">{e.publishedAt.substr(0,10)}</p>
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
        });

        return (
            <div className="verticle-news" >
                {mixTopic}
                <button type="button" className="btn btn-primary" onClick={()=>this.changeLimit()}>See {buttonName}</button>                  
            </div>
                    
        )
    }
}

function mapStateToProps(state){
    return {
        businessNews : state.setBusinessNewsReducer.data,
        entertainmentNews: state.setEntertainmentNewsReducer.data,
        healthNews: state.setHealthNewsReducer.data,
        ScienceNews: state.setScienceNewsReducer.data,
        SportNews: state.setSportNewsReducer.data,
        TechnologyNews: state.setTechnologyNewsReducer.data,
        GeneralNews: state.setGeneralNewsReducer.data,

    }
}

export default connect(mapStateToProps)(MixContent)