import React, { Component } from 'react'
import './Home.css'

import TopScreen from './TopScreen'
import MixContent from './MixContent'
import Latest from './Latest'
import Business from './Business'
import Entertainment from './Entertainment'
import Health from './Health'
import Science from './Science'
import Sports from './Sports'
import Technology from './Technology'
import General from './General'
import webLogo from '../../web-logo.png'
class Home extends Component {

    render() {
        return (
            <>
             <div className="nav">
                {/* <img className='web-logo' src={webLogo} alt="web-logo" /> */}
                <div className="nav-info">
                    <p>Home</p>
                    <p>Info</p>
                    <p>Contact</p>
                </div>
                
            </div>
            <div className='home'>
                <TopScreen/>
                <div className="home-body">
                    <div className="home-top">
                        <MixContent/>
                        <Latest startAt={0}/>
                    </div>
                    <div className="home-top">
                        <Business/>
                    </div>
                    <div className="home-top">
                        <Entertainment/>
                        <Latest startAt={3}/>
                    </div>
                    <div className="home-top">
                        <Health/>
                    </div>
                    <div className="home-top">
                        <Science/>
                        <Latest startAt={6}/>
                    </div>
                    <div className="home-top">
                        <Sports/>
                    </div>
                    <div className="home-top">
                        <Technology/>
                        <Latest startAt={9}/>
                    </div>
                    <div className="home-top">
                        <General/>
                    </div>
                </div>
              
            </div>
            </>
        )
    }General
}

export default Home
