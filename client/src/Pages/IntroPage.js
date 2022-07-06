import React, { useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



const IntroPage = () => {

    // useEffect(() => {
    //     setTimeout(() => {
    //         window.location.href = '/index'
    //     }, 3000)
    // }, [])


return (

        <div className="intro-page">
            <h1 className='intro-page-title'>Cooking</h1>
            <h3 className='intro-page-subtitle'>The best way to decide your meal</h3>
            <Spinner animation="grow" />
        </div>

)
}

export default IntroPage