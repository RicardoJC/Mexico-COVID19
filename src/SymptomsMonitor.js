import React from 'react';
import Container from 'react-bootstrap/Container';
import NavBar from './NavBar';
import Footer from './Footer';
import MexicoCityMap from './MexicoCityMap';

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
                    </div>
                </Container>
                <Footer/>
            </div>
        );
    }
}

export default SymptomsMonitor;