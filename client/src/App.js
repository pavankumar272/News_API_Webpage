import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import { connect } from 'react-redux'
import { setLatest, setBusiness, setEntertainment, setHealth, setScience, setSport,  setTechnology, setGeneral } from './Redux/Action'

import MainFrame from './Component/MainFrame';
class App extends Component {

  fetchLatest(){
    let { setLatestNews } = this.props;
    axios.get('https://newsapi.org/v2/top-headlines?q=latest&apiKey=168f544ba8624a0491e9543dd4c3a3aa')
      .then( (response)=> {
        // handle success
        // console.log(response);
        setLatestNews(response.data.articles);
      })
      .catch(function (error) {
        // handle error
        alert(error);
      });
  }

  fetchBusiness(){
    let { setBusiness } = this.props;
    axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=168f544ba8624a0491e9543dd4c3a3aa')
      .then( (response)=> {
        // handle success
        // console.log('-->>',response.data);
        setBusiness(response.data.articles);
      })
      .catch(function (error) {
        // handle error
        alert(error);
      });
  }

  fetchEntertainment(){
    let { setEntertainment } = this.props;
    axios.get('https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=168f544ba8624a0491e9543dd4c3a3aa')
      .then( (response)=> {
        // handle success
        // console.log('-->>',response.data);
        setEntertainment(response.data.articles);
      })
      .catch(function (error) {
        // handle error
        alert(error);
      });
  }

  fetchHealth(){
    let { setHealth } = this.props;
    axios.get('https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=168f544ba8624a0491e9543dd4c3a3aa')
      .then( (response)=> {
        // handle success
        // console.log('-->>',response.data);
        setHealth(response.data.articles);
      })
      .catch(function (error) {
        // handle error
        alert(error);
      });
  }

  fetchScience(){
    let { setScience } = this.props;
    axios.get('https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=168f544ba8624a0491e9543dd4c3a3aa')
      .then( (response)=> {
        // handle success
        // console.log('-->>',response.data);
        setScience(response.data.articles);
      })
      .catch(function (error) {
        // handle error
        alert(error);
      });
  }

  fetchSports(){
    let { setSport } = this.props;
    axios.get('https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=168f544ba8624a0491e9543dd4c3a3aa')
      .then( (response)=> {
        // handle success
        // console.log('-->>',response.data);
        setSport(response.data.articles);
      })
      .catch(function (error) {
        // handle error
        alert(error);
      });
  }

  fetchTechnology(){
    let { setTechnology } = this.props;
    axios.get('https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=168f544ba8624a0491e9543dd4c3a3aa')
      .then( (response)=> {
        // handle success
        // console.log('-->>',response.data);
        setTechnology(response.data.articles);
      })
      .catch(function (error) {
        // handle error
        alert(error);
      });
  }

  fetchGeneral(){
    let { setGeneral } = this.props;
    axios.get('https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=168f544ba8624a0491e9543dd4c3a3aa')
      .then( (response)=> {
        // handle success
        // console.log('-->>',response.data);
        setGeneral(response.data.articles);
      })
      .catch(function (error) {
        // handle error
        alert(error);
      });
  }

  
  componentDidMount(){
    this.fetchLatest();
    this.fetchBusiness();
    this.fetchEntertainment();
    this.fetchHealth();
    this.fetchScience();
    this.fetchSports();
    this.fetchTechnology();
    this.fetchGeneral();
  }

  render() {
    let {Latestdata, Businessdata, Entertainmentdata, Healthdata, Sciencedata, Sportdata} = this.props;
    console.log( Latestdata, Businessdata, Entertainmentdata, Healthdata, Sciencedata, Sportdata);
    return(
       <>
        { 
          (  Latestdata.length !== 0 && Businessdata.length !== 0 && Entertainmentdata.length !== 0 && Healthdata.length !== 0 && Sciencedata !== 0 && Sportdata !== 0)
              ? <MainFrame/>
              : null
        }
       </>
    )
    
  }
}

function mapStateToProps(state) {
  return{
    Latestdata : state.setLatestNewsReducer.data,
    Businessdata : state.setBusinessNewsReducer.data,
    Entertainmentdata : state.setEntertainmentNewsReducer.data,
    Healthdata : state.setHealthNewsReducer.data,
    Sciencedata : state.setScienceNewsReducer.data,
    Sportdata: state.setSportNewsReducer.data,
    
  }
}

function mapDispatchToProps(dispatch){
  return  {
    setLatestNews: (e)=> dispatch(setLatest(e)),
    setBusiness: (e)=> dispatch(setBusiness(e)),
    setEntertainment: (e)=> dispatch(setEntertainment(e)),
    setHealth: (e)=> dispatch(setHealth(e)),
    setScience : (e)=> dispatch(setScience(e)),
    setSport : (e)=> dispatch(setSport(e)),
    setTechnology: (e)=> dispatch(setTechnology(e)), 
    setGeneral: (e)=> dispatch(setGeneral(e)), 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
