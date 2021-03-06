import React, { useState, useEffect } from 'react'
import JSParallax from '../../components/JSParallax'
import './index.css'

export default function Two() {
    return (
        <>
            <JSParallax
                backgroundImage='https://i.imgur.com/P4RN4KR.jpg'/>
            <div className='spacer'></div>
            <JSParallax
                backgroundImage='https://i.imgur.com/dS5GyJY.jpg'/>
            <div className='spacer'></div>
            <JSParallax
                backgroundImage='https://i.imgur.com/XGklMxh.jpg'/>
        </>
    )
}
