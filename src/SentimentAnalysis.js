import React from 'react';
import Container from 'react-bootstrap/Container';
import NavBar from './NavBar'
import Footer from './Footer';
import WorldMap from './WorldMap';
import EmotionalRadar from './EmotionalRadar';

class SentimentAnalysis extends React.Component{
    render(){
        return(
            <div>
                <NavBar/>
                <Container className='mt-5 mb-5'>
                    <div className ='mt-5 mb-5'>
                        <div className='d-flex justify-content-center'>
                            <h1>Análisis de emociones</h1>
                        </div>
                        <div className ='mt-5 mb-5'>
                            <WorldMap/>
                        </div>
                        <div className='d-flex justify-content-center text-secondary'>
                            <EmotionalRadar/>
                        </div>
                    </div>
                </Container>
                <Footer/>
            </div>
        );
    }
}

export default SentimentAnalysis;