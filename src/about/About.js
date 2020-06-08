import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class About extends React.Component{
    render(){
        return(
            <div>


                <Container>

                <div className='mt-5 mb-5'>
                  <div className='d-flex justify-content-center'>
                      <h1>Quiénes somos</h1>
                  </div>
                  <div>
                      <p>Somos un grupo de investigadores, profesores y estudiantes pertenecientes a la Universidad Nacional Autónoma de México (UNAM), particularmente al Instituto de Ingeniería (IIUNAM) y al Instituto de Investigaciones en Matemáticas Aplicadas y en Sistemas (IIMAS) con interés en el procesamiento del lenguaje natural. Este proyecto consta de un sistema automático de vigilancia de COVID19 mediante Twitter, en el cual se busca analizar mensajes de esta red social para evaluar el comportamiento de las personas, estados de ánimo, la popularidad de las medidas dadas por el gobierno, y, además, monitorear usuarios con posibles síntomas de coronavirus en tiempo real a través de Internet.</p>
                  </div>
                  <div className='d-flex justify-content-center'>
                      <h2>Colaboradores (orden alfabético)</h2>
                  </div>
                </div>

                <div className='mt-5 mb-5'>
                <Row >
                  <Col>
                    <h4 >Gemma Bel Enguix (IINGEN)</h4>
                    <ul>
                        <li>Investigadora Titular “A”   del Instituto de Ingeniería</li>
                        <li>Miembro del Sistema Nacional de   Investigadores</li>
                        <li>Contacto: gbele@iingen.unam.mx</li>
                    </ul>
                  </Col>

                  <Col>
                  <h4>Pablo Camacho González</h4>
                  <ul>
                      <li>Estudiante de Maestría en Ciencias e Ingeniería de la computación</li>
                      <li>Línea de Investigación en el área de Inteligencia Artificial</li>
                      <li>Contacto: pablopcg1@ciencias.unam.mx</li>
                  </ul>
                  </Col>
                </Row>
                </div>

                <div className='mt-5 mb-5'>
                <Row >
                  <Col>
                    <h4 >Gabriel Castillo (IINGEN)</h4>
                    <ul>
                        <li>Técnico Académico Titular "B" del Instituto de Ingeniería</li>
                        <li>gch@pumas.iingen.unam.mx</li>
                    </ul>
                  </Col>

                  <Col>
                  <h4>Helena Gómez Adorno (IIMAS)</h4>
                  <ul>
                      <li>Investigadora Asociada “C”   del Instituto de Investigaciones en Matemáticas Aplicadas y en Sistemas</li>
                      <li>Miembro del Sistema Nacional de   Investigadores Nivel I</li>
                      <li>Contacto: helena.gomez@iimas.unam.mx</li>
                  </ul>
                  </Col>
                </Row>
                </div>


                <div className='mt-5 mb-5'>
                <Row >
                  <Col>
                    <h4 >Ricardo Jiménez Cruz</h4>
                    <ul>
                        <li>Pasante de Ingenieria en computación</li>
                        <li>Línea de Investigación en el área de Inteligencia Artificial</li>
                        <li>Contacto: ricardoj.epc@gmail.com</li>
                    </ul>
                  </Col>

                  <Col>

                  <h4>José Armando López Velasco</h4>
                  <ul>
                      <li>Estudiante de Maestría en Ciencias e Ingeniería de la Computación</li>
                      <li>Línea de investigación en el área de Inteligencia Artificial</li>
                      <li>Contacto: armando.lpzv@gmail.com</li>
                  </ul>
                  </Col>
                </Row>
                </div>

                <div className='mt-5 mb-5'>
                <Row >
                  <Col>
                    <h4 >Jessica Sarahi Méndez Rincón</h4>
                    <ul>
                        <li>Estudiante del Posgrado en Ciencias e Ingeniería en Computación en el IIMAS</li>
                        <li>Línea de Investigación en el área de Inteligencia Artificial</li>
                        <li>Contacto: ingenierajessica@gmail.com</li>
                    </ul>
                  </Col>

                  <Col>

                  <h4 >Jesús Germán Ortiz Barajas</h4>
                  <ul>
                      <li>Pasante de Ingenieria en computación</li>
                      <li>Línea de Investigación en el área de Inteligencia Artificial</li>
                      <li>Contacto: jortizb@iingen.unam.mx</li>
                  </ul>
                  </Col>
                </Row>
                </div>

                <div className='mt-5 mb-5'>
                <Row >

                  <Col>
                  <h4>Gerardo Sierra   (INGEN)</h4>
                  <ul>
                      <li>Investigador Titular “B” del   Instituto de Ingeniería</li>
                      <li>Miembro del Sistema Nacional de Investigadores   Nivel II</li>
                      <li>Contacto: gsierram@iingen.unam.mx</li>
                  </ul>
                  </Col>
                </Row>
                </div>

                </Container>
            </div>
        );
    }
}

export default About;