import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';

class About extends React.Component{
    render(){
        return(
            <div>
                <NavBar/>
                <Container className='mt-5 mb-5'>
                    <div className='mt-5 mb-5'>
                        <div className='d-flex justify-content-center'>
                            <h1>Quiénes somos</h1>
                        </div>
                        <div>
                            <p align='justify'>Somos un grupo de investigadores, profesores y estudiantes pertenecientes a la Universidad Nacional Autónoma de México (UNAM), particularmente al Instituto de Ingeniería (IIUNAM) y al Instituto de Investigaciones en Matemáticas Aplicadas y en Sistemas (IIMAS) con interés en el procesamiento del lenguaje natural. Este proyecto consta de un sistema automático de vigilancia de COVID19 mediante Twitter, en el cual se busca analizar mensajes de esta red social para evaluar el comportamiento de las personas, estados de ánimo, la popularidad de las medidas dadas por el gobierno, y, además, monitorear usuarios con posibles síntomas de coronavirus en tiempo real a través de Internet.</p>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <h2>Colaboradores</h2>
                        </div>
                        <div>
                        <h4 className='d-flex justify-content-center'>Gemma Bel</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum lacinia quis vel eros donec. Lectus quam id leo in vitae turpis massa sed elementum. Tellus pellentesque eu tincidunt tortor aliquam nulla. Dignissim suspendisse in est ante in nibh mauris cursus. Gravida neque convallis a cras semper auctor neque vitae. Posuere ac ut consequat semper. Sit amet commodo nulla facilisi nullam. Semper auctor neque vitae tempus. Mi bibendum neque egestas congue quisque egestas diam in. Mollis nunc sed id semper risus in hendrerit gravida rutrum. Fames ac turpis egestas integer eget aliquet.</p>
                        <h4 className='d-flex justify-content-center'>Pablo Camacho</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum lacinia quis vel eros donec. Lectus quam id leo in vitae turpis massa sed elementum. Tellus pellentesque eu tincidunt tortor aliquam nulla. Dignissim suspendisse in est ante in nibh mauris cursus. Gravida neque convallis a cras semper auctor neque vitae. Posuere ac ut consequat semper. Sit amet commodo nulla facilisi nullam. Semper auctor neque vitae tempus. Mi bibendum neque egestas congue quisque egestas diam in. Mollis nunc sed id semper risus in hendrerit gravida rutrum. Fames ac turpis egestas integer eget aliquet.</p>
                        <h4 className='d-flex justify-content-center'>Gabriel Castillo</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum lacinia quis vel eros donec. Lectus quam id leo in vitae turpis massa sed elementum. Tellus pellentesque eu tincidunt tortor aliquam nulla. Dignissim suspendisse in est ante in nibh mauris cursus. Gravida neque convallis a cras semper auctor neque vitae. Posuere ac ut consequat semper. Sit amet commodo nulla facilisi nullam. Semper auctor neque vitae tempus. Mi bibendum neque egestas congue quisque egestas diam in. Mollis nunc sed id semper risus in hendrerit gravida rutrum. Fames ac turpis egestas integer eget aliquet.</p>
                        <h4 className='d-flex justify-content-center'>Helena Gomez</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum lacinia quis vel eros donec. Lectus quam id leo in vitae turpis massa sed elementum. Tellus pellentesque eu tincidunt tortor aliquam nulla. Dignissim suspendisse in est ante in nibh mauris cursus. Gravida neque convallis a cras semper auctor neque vitae. Posuere ac ut consequat semper. Sit amet commodo nulla facilisi nullam. Semper auctor neque vitae tempus. Mi bibendum neque egestas congue quisque egestas diam in. Mollis nunc sed id semper risus in hendrerit gravida rutrum. Fames ac turpis egestas integer eget aliquet.</p>
                        <h4 className='d-flex justify-content-center'>Ricardo Jimenez</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum lacinia quis vel eros donec. Lectus quam id leo in vitae turpis massa sed elementum. Tellus pellentesque eu tincidunt tortor aliquam nulla. Dignissim suspendisse in est ante in nibh mauris cursus. Gravida neque convallis a cras semper auctor neque vitae. Posuere ac ut consequat semper. Sit amet commodo nulla facilisi nullam. Semper auctor neque vitae tempus. Mi bibendum neque egestas congue quisque egestas diam in. Mollis nunc sed id semper risus in hendrerit gravida rutrum. Fames ac turpis egestas integer eget aliquet.</p>
                        <h4 className='d-flex justify-content-center'>Armando Lopez</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum lacinia quis vel eros donec. Lectus quam id leo in vitae turpis massa sed elementum. Tellus pellentesque eu tincidunt tortor aliquam nulla. Dignissim suspendisse in est ante in nibh mauris cursus. Gravida neque convallis a cras semper auctor neque vitae. Posuere ac ut consequat semper. Sit amet commodo nulla facilisi nullam. Semper auctor neque vitae tempus. Mi bibendum neque egestas congue quisque egestas diam in. Mollis nunc sed id semper risus in hendrerit gravida rutrum. Fames ac turpis egestas integer eget aliquet.</p>
                        <h4 className='d-flex justify-content-center'>Jessica Mendez</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum lacinia quis vel eros donec. Lectus quam id leo in vitae turpis massa sed elementum. Tellus pellentesque eu tincidunt tortor aliquam nulla. Dignissim suspendisse in est ante in nibh mauris cursus. Gravida neque convallis a cras semper auctor neque vitae. Posuere ac ut consequat semper. Sit amet commodo nulla facilisi nullam. Semper auctor neque vitae tempus. Mi bibendum neque egestas congue quisque egestas diam in. Mollis nunc sed id semper risus in hendrerit gravida rutrum. Fames ac turpis egestas integer eget aliquet.</p>
                        <h4 className='d-flex justify-content-center'>Germán Ortiz</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum lacinia quis vel eros donec. Lectus quam id leo in vitae turpis massa sed elementum. Tellus pellentesque eu tincidunt tortor aliquam nulla. Dignissim suspendisse in est ante in nibh mauris cursus. Gravida neque convallis a cras semper auctor neque vitae. Posuere ac ut consequat semper. Sit amet commodo nulla facilisi nullam. Semper auctor neque vitae tempus. Mi bibendum neque egestas congue quisque egestas diam in. Mollis nunc sed id semper risus in hendrerit gravida rutrum. Fames ac turpis egestas integer eget aliquet.</p>
                        <h4 className='d-flex justify-content-center'>Gerardo Sierra</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum lacinia quis vel eros donec. Lectus quam id leo in vitae turpis massa sed elementum. Tellus pellentesque eu tincidunt tortor aliquam nulla. Dignissim suspendisse in est ante in nibh mauris cursus. Gravida neque convallis a cras semper auctor neque vitae. Posuere ac ut consequat semper. Sit amet commodo nulla facilisi nullam. Semper auctor neque vitae tempus. Mi bibendum neque egestas congue quisque egestas diam in. Mollis nunc sed id semper risus in hendrerit gravida rutrum. Fames ac turpis egestas integer eget aliquet.</p>
                        </div>
                    </div>
                </Container>
                <Footer/>
            </div>
        );
    }
}

export default About;