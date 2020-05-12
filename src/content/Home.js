import React from 'react';
import WorldMap from './WorldMap';
import Cards from './Cards';
import EmotionalRadar from './EmotionalRadar';
import Timeline from './Timeline'
import Container from 'react-bootstrap/Container';

class Home extends React.Component{
    render(){
        return(
            <div>
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
                  <h1> Linea del tiempo de palabras clave </h1>
                  </div>
                  <div className='d-flex justify-content-center text-secondary'>
                  <p>
                    La siguiente linea del tiempo presenta 6 palabras clave dentro de los
                    tweets obtenidos en un fin de semana.
                    Las primeras 2 palabras son acerca del virus, para conocer cómo los
                    usuarios general conversación en twitter.
                    Para el caso de <b>HLGatell y lopezobrador_</b> se
                     buscaron menciones a sus cuentas oficiales. Esto para conocer cómo
                    se van mencionando a medida que pasa el tiempo y el virus avanza.
                    Finalmente, se agregan las palabras de <b>ansiedad y depresión</b> para
                    visualizar cómo afecta a la sociedad la cuarentena.
                  </p>
                </div>
                <div className='d-flex justify-content-center text-secondary'>
                  <Timeline/>
                </div>

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
            </div>
        );
    }
}

export default Home;