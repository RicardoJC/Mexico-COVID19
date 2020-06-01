import React from 'react';
import WorldMap from './WorldMap';
import Cards from './Cards';
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
                  Este es un sistema automático de vigilancia de COVID19 mediante Twitter.
                  Se busca evaluar el comportamiento de las personas, estados de ánimo, la popularidad
                  de las medidas del tomadas por el gobierno y síntomas de coronavirus.
                </p>
              </div>

              <div className='mt-5 mb-5'>
                <div className='d-flex justify-content-center'>
                  <h1> Palabras clave </h1>
                </div>
                <div className='d-flex justify-content-center text-secondary'>
                  <p>
                    Las siguientes palabras clave corresponden a un análisis cuantitativo que considera
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
                    Las primeras 3 palabras son acerca del virus y el aislamiento social para conocer cómo los
                    usuarios general conversación en twitter.
                    Para el caso de <b>HLGatell y lopezobrador_</b> se
                     buscaron menciones a sus cuentas oficiales. Esto para conocer cómo
                    se van mencionando a medida que pasa el tiempo y el virus avanza.
                    Finalmente, se agrega <b> Susana Distancia </b> para conocer el impacto que timeline en los
                    usuarios. 
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
                    En el siguiente mapa se muestran el <b>Top 3 Hashtags</b> con el total de tweets que hablan
                    acerca del tema de COVID19 por cada estado.
                    La intensidad de color está definida por <b>la cantidad de tweets que se generan en la región</b>:
                  </p>
                </div>
                <div className='d-flex justify-content-center text-secondary'>
                <ul>
                  <li>x &gt; 25000  <b>Demasiado</b> número de menciones </li>
                  <li> 15000 &gt; x &gt; 25000  <b>Mucho</b> número de menciones</li>
                  <li> 5000 &gt; x &gt; 2500  <b>Mediano</b> número de menciones </li>
                  <li> 5000 &lt; x   <b>Poco</b> número de menciones </li>
                </ul>
                </div>
                <WorldMap/>
              </div>


{/*
  <div className='mt-5 mb-5'>

    <div className='d-flex justify-content-center'>
      <h1> Emociones en redes sociales </h1>
      </div>
      <div className='d-flex justify-content-center text-secondary'>
      <p>
        El siguiente radar muestra las emociones que se han generado en el
        discurso de tweets (Testing)
      </p>
    </div>
    <div className='d-flex justify-content-center text-secondary'>
      <EmotionalRadar/>
    </div>

  </div>*/}




            </Container>
            </div>
        );
    }
}

export default Home;