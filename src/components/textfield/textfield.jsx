import './textfield.css'
import React, { useState, useEffect } from 'react';

export default function Textfield({ label, charLimit, onTextChange  }){
    const [text, setText] = useState('');
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

    const handleTextChange = (e) => {
        const newText = e.target.value.slice(0, charLimit);
        setText(newText);
        onTextChange(newText); // This callback passes the text to the parent component
    };

    const handleResize = () => {
        setIsMobile(window.innerWidth < 600);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '35px',
          borderRadius: '15px',
          border: '5px solid #6200B3',
          padding: '10px',
          width: isMobile ? '21rem' : '25rem'
        }}>
          <label className='text-label'>{label}</label>
          <input
            type="text"
            value={text}
            onChange={handleTextChange}
            style={{
              border: 'none',
              outline: 'none',
              flex: '1',
              fontWeight: 'bold',
              fontSize: '1.5rem'
            }}
          />
        </div>
      );
}
