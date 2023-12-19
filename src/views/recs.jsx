import { useState, useEffect } from "react"
import axios from 'axios';
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import Textfield from "../components/textfield/textfield"
import './recs.css'

export default function Recs(){
    const charLimit = 23;

    const [type, setType] = useState('')

    const [recommendations, setRecommendations] = useState([]);

    const [fieldText, setFieldText] = useState({
        field1: '',
        field2: '',
        field3: '',
    });

    const handleTextChange = (field) => (newText) => {
    setFieldText(prevState => ({
        ...prevState,
        [field]: newText,
    }));
    };
    
    const [showPopup, setShowPopup] = useState(false);

    const [screenIndex, setScreenIndex] = useState(0)

    const fetchRecommendations = async () => {
    try {
        const items = [fieldText.field1, fieldText.field2, fieldText.field3];
        const response = await axios.post('https://avid-appliance-production.up.railway.app/recommend', { type, items });
        const recommendationsArray = response.data[0].split(',');
        setRecommendations(recommendationsArray); // Assuming the API returns an array of recommendations
    } catch (error) {
        console.error('Error fetching recommendations:', error);
        // Handle error appropriately
    }
    };

    useEffect(() => {
    if (screenIndex === 3) {
        fetchRecommendations();
    }
    }, [screenIndex]);

    const screens = [
                    <>
                    <h1>do you want...</h1>
                    <div className="options-container">
                        <div className="rec-btn" onClick={() => {
                            setType('artists')
                            setScreenIndex(1)
                        }}>artist recs</div>
                        <div className="rec-btn" onClick={() => {
                            setType('albums')
                            setScreenIndex(2)
                        }}>album recs</div>
                    </div>
                    </>, 
                    <>
                    <h1 className="rec-text">enter three (3) <span className="green-text">artists</span> you like:</h1>
                    <div className="textfield-container">
                        <Textfield label="1" charLimit={charLimit} onTextChange={handleTextChange('field1')}/>
                        <Textfield label="2" charLimit={charLimit} onTextChange={handleTextChange('field2')}/>
                        <Textfield label="3" charLimit={charLimit} onTextChange={handleTextChange('field3')}/>
                    </div>
                    <button className="get-recs-btn" onClick={() => {
                        if (!fieldText.field1 || !fieldText.field2 || !fieldText.field3) {
                            setShowPopup(true);
                        } else {
                            setScreenIndex(3)
                        }
                    }}>get recs</button>
                    </>,
                    <>
                    <h1 className="rec-text">enter three (3) <span className="green-text">albums</span> you like:</h1>
                    <div className="textfield-container">
                        <Textfield label="1" charLimit={charLimit} onTextChange={handleTextChange('field1')}/>
                        <Textfield label="2" charLimit={charLimit} onTextChange={handleTextChange('field2')}/>
                        <Textfield label="3" charLimit={charLimit} onTextChange={handleTextChange('field3')}/>
                    </div>
                    <button className="get-recs-btn" onClick={() => {
                        if (!fieldText.field1 || !fieldText.field2 || !fieldText.field3) {
                            setShowPopup(true);
                        } else {
                            setScreenIndex(3)
                        }
                    }}>get recs</button>
                    </>,
                     <>
                     <h1>your <span className="green-text">recs</span> are...</h1>
                     <div className="rec-container">
                       {recommendations.length ? (
                         recommendations.map((rec, index) => (
                           <div className="recs" key={index}>
                             <h1 className="num">{index + 1}.</h1>
                             <h1 className="rec">{rec}</h1>
                           </div>
                         ))
                       ) : (
                         <h1 className="num">Loading recommendations...</h1> // Or some other loading state representation
                       )}
                     </div>
                   </>
    ]

    return <>
     <Header></Header>
     <div className="rec-container">
        {showPopup && (
                    <div className="popup">
                        <div className="popup-content">
                            <span className="close" onClick={() => setShowPopup(false)}>&times;</span>
                            <p>Fill in all the fields please!</p>
                        </div>
                    </div>
                )}
        {screens[screenIndex]}
     </div>
     <Footer></Footer>
    </>
}