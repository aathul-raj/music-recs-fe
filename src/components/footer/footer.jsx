import './footer.css'
import BackIcon from '../../assets/back-icon.png'
import NextIcon from '../../assets/next-icon.png'
import PauseIcon from '../../assets/pause-icon.png'
import VolumeIcon from '../../assets/volume-icon.png'
import MusicIcon from '../../assets/music-icon.png'

export default function Footer(){
    return <footer className='footer'>

        <div className="scroll-container">
            <div className="footer-content">
                <img className='footer-icon' src={MusicIcon}></img>
                <img className='footer-icon' src={VolumeIcon}></img>
                <h1 className='name'>athul suresh</h1>
                <img className='footer-icon' src={BackIcon}></img>
                <img className='footer-icon' src={PauseIcon}></img>
                <img className='footer-icon' src={NextIcon}></img>
            </div>
            <div className="footer-content">
                <img className='footer-icon' src={MusicIcon}></img>
                <img className='footer-icon' src={VolumeIcon}></img>
                <h1 className='name'>athul suresh</h1>
                <img className='footer-icon' src={BackIcon}></img>
                <img className='footer-icon' src={PauseIcon}></img>
                <img className='footer-icon' src={NextIcon}></img>
            </div>
            <div className="footer-content">
                <img className='footer-icon' src={MusicIcon}></img>
                <img className='footer-icon' src={VolumeIcon}></img>
                <h1 className='name'>athul suresh</h1>
                <img className='footer-icon' src={BackIcon}></img>
                <img className='footer-icon' src={PauseIcon}></img>
                <img className='footer-icon' src={NextIcon}></img>
            </div>
            <div className="footer-content">
                <img className='footer-icon' src={MusicIcon}></img>
                <img className='footer-icon' src={VolumeIcon}></img>
                <h1 className='name'>athul suresh</h1>
                <img className='footer-icon' src={BackIcon}></img>
                <img className='footer-icon' src={PauseIcon}></img>
                <img className='footer-icon' src={NextIcon}></img>
            </div>
        </div>
    </footer>
}