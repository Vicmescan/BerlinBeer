import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



const IntroPage = () => {

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/index")
        }, 4000)
    })


return (
        <div className="intro-page">
            <h1 className='intro-page-title'>Cooking</h1>
            <h3 className='intro-page-subtitle'>The best way to decide your meal</h3>
            <Spinner animation="grow" />
        </div>
)
}

export default IntroPage