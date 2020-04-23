import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import NavBar from './NavBar';
import Footer from './Footer'
import Container from 'react-bootstrap/Container';
import TweetsCard from './TweetsCard';

function getStatesNames(worlddata){
    var states_names = [];
    for(var i=0; i<worlddata.length; i++){
        states_names.push(worlddata[i].properties.name);
    }
    return states_names
};

class StatesVisualization extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            selectedOption: '',
            states:[],
            isLoaded:false,
            error:null
        };
    }

    componentDidMount(){
      fetch("https://raw.githubusercontent.com/RicardoJC/Mexico-Datos-COVID19/master/home/mexico.geojson")
            .then(res => res.json())
            .then(
              (result) => {
                var names = getStatesNames(result.features);
                this.setState({
                  isLoaded: true,
                  states: names,
                  selectedOption: names[0]
                });
              },
              // Note: it's important to handle errors here
              // instead of a catch() block so that we don't swallow
              // exceptions from actual bugs in components.
              (error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
              }
            );
    }

    handleSelect(eventKey, event){
        this.setState({selectedOption: this.state.states[eventKey]});
        console.log(this.state.selectedOption)
    };

    render(){
        return(
            <div>
                <NavBar/>
                <Container  className='mt-5 mb-5'>
                    <div className ='mt-5 mb-5'>
                        <div className='d-flex justify-content-center'>
                            <DropdownButton title="Selecciona un estado" onSelect={this.handleSelect.bind(this)}>
                                {this.state.states.map((opt,i) => (
                                    <Dropdown.Item key={i} eventKey={i}>
                                        {opt}
                                    </Dropdown.Item>
                                ))}
                            </DropdownButton>
                        </div>
                        <br/>
                        <div className='d-flex justify-content-center'>
                                <h1>{this.state.selectedOption}</h1>
                        </div>
                        <br/>
                        <div className='d-flex justify-content-center'>
                                <h3>Tweets en la entidad</h3>
                        </div>
                        <TweetsCard/>
                    </div>
                </Container>
                <Footer/>
            </div>
        );
    }
}

export default StatesVisualization;