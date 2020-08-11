import React from 'react';
import WorldMap from './WorldMap';
import Cards from './Cards';
import Timeline from './Timeline'
import Container from 'react-bootstrap/Container';

const styles = {
  mapBullets10:{
    backgroundColor: '#3168e81a',
  },
  mapBullets30:{
    backgroundColor: '#3168e84d',
  },
  mapBullets50:{
    backgroundColor: '#3168e880',
  },
  mapBullets80:{
    backgroundColor: '#3168e8cc',
  },
  removeBullets:{
    'list-style-type': 'none'
  }
};

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
                  <h1> Palabras clave de hoy</h1>
                </div>
                <div className='d-flex justify-content-center text-secondary'>
                  <p>
                    A continuación se enlistan los (#) hashtags, (@) menciones y palabras más frecuentes relacionados con la pandemia.
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
                    La siguiente linea del tiempo presenta 6 palabras clave dentro de los tweets obtenidos cada semana.
                    Las primeras 4 palabras son acerca del virus y el aislamiento social: <b>coronavirus</b>, <b>quedateencasa</b>, <b>covid19</b> y <b>Susanadistancia</b>.
                    Se tomaron en cuenta las menciones más frecuentes referentes a <b>Lopez Gatell</b> y <b>Lopez Obrador</b>.
                    Esto para conocer cómo se van mencionando a medida que pasa el tiempo y el virus avanza.
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
                    En el siguiente mapa se muestran el <b>Top 3 Hashtags</b> con el total de tweets que hablan acerca del tema de COVID19 por cada estado desde el 31 de marzo 2020.
                    La intensidad de color está definida por <b>la cantidad de tweets que se generan en la región</b>:
                  </p>
                </div>
                <div className='d-flex justify-content-center text-secondary'>
                <ul style={styles.removeBullets}>
                  <li> <span style={styles.mapBullets80}>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</span> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ <b> x &gt; 25000</b>  número de menciones </li>
                  <li> <span style={styles.mapBullets50}>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</span> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ <b> 15000 &gt; x &gt; 25000</b>  número de menciones</li>
                  <li> <span style={styles.mapBullets30}>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</span> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ <b> 5000 &gt; x &gt; 2500</b>  ‎‏‏‎número de menciones </li>
                  <li> <span style={styles.mapBullets10}>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</span> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ <b> 5000 &lt; x</b>  número de menciones </li>
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