import React from 'react';
import NavBar from './NavBar';
import WorldMap from './WorldMap';
import Cards from './Cards';
import EmotionalRadar from './EmotionalRadar';
import Footer from './Footer'
import Container from 'react-bootstrap/Container';

class Home extends React.Component{
    render(){
        return(
            <div>
            <NavBar/>
            <Container className='mt-5 mb-5'>
      
              <div>
                <h1>Análisis de Twitter para COVID-19</h1>
                <p>
                  A continuación se muestran los resultados de un análisis de mensajes de twitter
                </p>
              </div>
      
              <div className='mt-5 mb-5'>
                <div className='d-flex justify-content-center'>
                  <h1> Palabras clave </h1>
                </div>
                <div className='d-flex justify-content-center text-secondary'>
                  <p>
                    Las siguientes palabras clave corresponden a un análisis cuantitavo que considera
                    3 tipos de tokens: (#) Hashtag, (@) Mención y palabra en general
                  </p>
                </div>
                <Cards/>
              </div>
      
              <div className='mt-5 mb-5'>
                <div className='d-flex justify-content-center'>
                  <h1> Estados de la República </h1>
                </div>
                <div className='d-flex justify-content-center text-secondary'>
                  <p>
                    En el siguiente mapa se muestran las emociones predominantes por estado.
      
                  </p>
                </div>
                <WorldMap/>
              </div>
      
      
      
              <div className='mt-5 mb-5'>
      
                <div className='d-flex justify-content-center'>
                  <h1> Emociones en redes sociales </h1>
                  </div>
                  <div className='d-flex justify-content-center text-secondary'>
                  <p>
                    El siguiente radar muestra las emociones que se han generado en el
                    discurso de tweets
                  </p>
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

export default Home;