import React, { useState } from 'react';


function Slides({ slides }) {

    const [slide, setSlide] = useState(0)
    const [restart, setRestart] = useState(false)
    const [prev, setPrev] = useState(false)
    const [next, setNext] = useState(true)

    const restartSlide = () => {
        setSlide(0)
        setRestart(false)
        setPrev(false)
        setNext(true)
    }

    const previousSlide = () => {
        if (slide < 2) {
            setPrev(false)
            setRestart(false)
        } else {
            setPrev(true)
            setRestart(true)
            setNext(true)
        }
        setSlide(slide - 1)
    }

    const nextSlide = () => { 
        if (slide < slides.length-2) {
            setNext(true)
            setRestart(true)
            setPrev(true)
        } else {
            setNext(false)
            setRestart(true)
            setPrev(true)
        }
        setSlide(slide + 1)
    }

    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" onClick={restartSlide} disabled={!restart}>Restart</button>
                <button data-testid="button-prev" className="small" onClick={previousSlide} disabled={!prev}>Prev</button>
                <button data-testid="button-next" className="small" onClick={nextSlide} disabled={!next}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides && slides[slide].title}</h1>
                <p data-testid="text">{slides && slides[slide].text}</p>
            </div>
        </div>
    );

}

export default Slides;
