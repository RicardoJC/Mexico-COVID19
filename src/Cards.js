import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Cards extends React.Component{

  render(){
    return(

        <Row >
          <Col className='d-flex justify-content-center'>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className="mb-2 ">Hashtags de hoy</Card.Title>
              <Card.Text/>
              <Card.Subtitle className="mb-2 text-muted"><h3 className="font-weight-bold">1.23k #Coronavirus</h3> </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted"><h4>1.34K #Covid19</h4></Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted"><h5>1.12K #Gatell</h5></Card.Subtitle>
            </Card.Body>
          </Card>
          </Col>

          <Col className='d-flex justify-content-center'>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
          </Col>

          <Col className='d-flex justify-content-center'>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
          </Col>
        </Row>

    );
  }
}


export default Cards;