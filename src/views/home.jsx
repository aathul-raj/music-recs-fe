import './home.css'
import React from 'react'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import SpeakNow from '../assets/speak_now.png'
import Lana from '../assets/lana.png'
import Graduation from '../assets/graduation.png'
import Sos from '../assets/sos.png'
import Damn from '../assets/damn.png'
import MJ from '../assets/off-the-wall.png'
import Laroi from '../assets/first-time.png'
import Beyonce from '../assets/beyonce.png'
import Divine from '../assets/divine.png'
import Queen from '../assets/queen.png'
import { useNavigate } from 'react-router-dom'


export default function Home(){
    let navigate = useNavigate()
    return (
    <>
        <Header></Header>
        <div className="landing-container">
          <h1 className='landing-text'>don’t know what to play?</h1>
          <div className='purple-btn' onClick={() => navigate("/recs")}>start</div>
        </div>
        <div className="album-art-container a1">
          <img src={SpeakNow} className="landing-img" alt="Speak Now by Taylor Swift"/>
        </div>
        <div className="album-art-container a2">
          <img src={Lana} className="landing-img" alt="Speak Now by Taylor Swift"/>
        </div>
        <div className="album-art-container a3">
          <img src={Sos} className="landing-img" alt="Speak Now by Taylor Swift"/>
        </div>
        <div className="album-art-container a4">
          <img src={Graduation} className="landing-img" alt="Speak Now by Taylor Swift"/>
        </div>
        <div className="album-art-container a5">
          <img src={Damn} className="landing-img" alt="Speak Now by Taylor Swift"/>
        </div>
        <div className="album-art-container a6">
          <img src={MJ} className="landing-img" alt="Speak Now by Taylor Swift"/>
        </div>
        <div className="album-art-container a7">
          <img src={Laroi} className="landing-img" alt="Speak Now by Taylor Swift"/>
        </div>
        <div className="album-art-container a8">
          <img src={Beyonce} className="landing-img" alt="Speak Now by Taylor Swift"/>
        </div>
        <div className="album-art-container a9">
          <img src={Divine} className="landing-img" alt="Speak Now by Taylor Swift"/>
        </div>
        <div className="album-art-container a10">
          <img src={Queen} className="landing-img" alt="Speak Now by Taylor Swift"/>
        </div>
        <Footer></Footer>
    </>
    )
}