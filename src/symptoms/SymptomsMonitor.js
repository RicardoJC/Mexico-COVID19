import React from 'react';
import Container from 'react-bootstrap/Container';
import MexicoCityMap from './MexicoCityMap';
import Timeline from './Timeline';

class SymptomsMonitor extends React.Component{

    render(){
        return(
            <div>
            <Container className='mt-5 mb-5'>

            <div>
              <h1>Análisis de síntomas para COVID-19</h1>
              <p>
                Este es un sistema automático de vigilancia de síntomas de COVID19 para México
                Los síntomas presentados tienen 2 categorías principales: los físicos causados por
                COVID19 como fiebre, tos o gripe y los transtornos ocasionados por el asilamiento
                social como ansiedad, depresión, insomnio, entre otros.
          
              </p>
            </div>

            <div className='mt-5 mb-5'>

              <div className='d-flex justify-content-center'>
                <h1> Linea del tiempo de síntomas COVID vs mentales</h1>
              </div>

              <div className='d-flex justify-content-center text-secondary'>
                <p>
                  La siguiente linea del tiempo presenta, en general, los síntomas que presentan
                  los usuarios de Twitter.
                </p>
              </div>
              <div className='d-flex justify-content-center text-secondary'>
                <Timeline/>
              </div>

            </div>

            <div className='mt-5 mb-5'>
              <div className='d-flex justify-content-center'>
                <h1> Mapa de síntomas de la CDMX </h1>
              </div>
              <div className='d-flex justify-content-center text-secondary'>
                <p>
                  Descripción del análisis
                </p>
              </div>
                <MexicoCityMap/>
            </div>




{/*
  <div className='d-flex justify-content-center'>
      <TweetEmbed id='692527862369357824'/>
  </div>*/
}

                </Container>
            </div>
        );
    }
}

export default SymptomsMonitor;