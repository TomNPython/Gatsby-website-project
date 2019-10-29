import React from "react"
import Layout from '../components/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"


export default () => 
        <Layout>
            <div className='intro'>
                <h1>David Grolsch</h1>
                <img src={require('../components/imgs/logodg.png')} className='index-logo' alt='logo' />
                <h3><em>Painter, Stylist, Designer</em></h3>
                <div className='divider'></div>
                <div id='icon-container'>
                <a href='https://www.facebook.com'>
                <FontAwesomeIcon className='fa-icons' icon={faFacebook} size='2x'/></a>
                <a href='https://www.linkedin.com'>
                <FontAwesomeIcon className='fa-icons' icon={faLinkedin} size='2x'/></a>
                <a href='https://www.twitter.com'>
                <FontAwesomeIcon className='fa-icons' icon={faTwitter} size='2x'/></a>
                <a href='https://www.instagram.com'>
                <FontAwesomeIcon className='fa-icons' icon={faInstagram} size='2x'/></a>
            </div>
            </div>
        </Layout>
