import React, { useState, useRef, useEffect } from 'react'
import './index.css'

export default function JSParallax(props) {
    const [yPosition, setYPosition] = useState(0)
    const paraImg = useRef()

    useEffect(() => {
        // create window scroll event listener
        window.addEventListener('scroll', handleScrollTransform)

        handleScrollTransform()
    })

    const handleScrollTransform = e => {
        const scrolled = window.pageYOffset
        const imgTop = paraImg.current.getBoundingClientRect().top;
        const imgHeight = paraImg.current.clientHeight

        // check if element is in view
        const eleIsVisible = imgTop < window.innerHeight && imgTop >= 0 - imgHeight
        
        if (eleIsVisible) {
            const distanceToTop = imgTop
            const rate = .5
            setYPosition(distanceToTop * rate)
        }
    }
    
    return (
        <div 
            ref={paraImg}
            className='js-para'
            style={{ backgroundImage: `url(${props.backgroundImage})`, backgroundPositionY: `${yPosition}px` }}>
            
        </div>
    )
}
