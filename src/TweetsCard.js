import React from 'react';
import Card from 'react-bootstrap/Card';

class TweetsCard extends React.Component{
    render(){
        return(
            <div className='d-flex justify-content-center'>
            <Card border="secondary" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title class='text-center'>Tweets totales</Card.Title>
                    <Card.Text class='text-center'>
                        <h1>123</h1>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card border="secondary" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title class='text-center'>Tweets sobre Covid19</Card.Title>
                    <Card.Text class='text-center'>
                        <h1>123</h1>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>            
        );
    }
}

export default TweetsCard;