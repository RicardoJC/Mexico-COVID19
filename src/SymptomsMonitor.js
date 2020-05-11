import React from 'react';
import Container from 'react-bootstrap/Container';
import NavBar from './NavBar';
import Footer from './Footer';
import MexicoCityMap from './MexicoCityMap';
import TweetEmbed from 'react-tweet-embed';

class SymptomsMonitor extends React.Component{

    render(){
        return(
            <div>
                <NavBar/>
                <Container className='mt-5 mb-5'>
                    <div className ='mt-5 mb-5'>
                        <div className='d-flex justify-content-center'>
                            <h1>Monitor de síntomas</h1> 
                        </div>
                        <MexicoCityMap/>
                        <h1 className='d-flex justify-content-center'>Tweets sobre síntomas del Covid19</h1>
                        <div className='d-flex justify-content-center'>
                            <TweetEmbed id='692527862369357824' options={{cards: 'hidden'}}/>
                        </div>

                    </div>
                </Container>
                <Footer/>
            </div>
        );
    }
}

export default SymptomsMonitor;