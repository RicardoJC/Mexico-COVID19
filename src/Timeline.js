import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend,
  ResponsiveContainer,
} from 'recharts';


class Timeline extends PureComponent {

  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: []
    };
  }

  componentDidMount() {
    fetch("https://raw.githubusercontent.com/RicardoJC/Mexico-Datos-COVID19/master/home/timeline.json")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                data: result
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



  render() {
    const { error, isLoaded, data } = this.state;
    if(error){
        return <div>-- Por el momento no se puede mostrar esta gráfica --</div>;
    }else if(!isLoaded){
        return <div>Cargando...</div>;
    }else{
      return (

        <ResponsiveContainer width="95%" height={400}>
        <LineChart
          data={data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
          >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="#coronavirus" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="#covid19" stroke="#82ca9d" />
          <Line type="monotone" dataKey="#fase1" stroke="#445932" />
        </LineChart>
        </ResponsiveContainer>

      );
    }



  }
}


export default Timeline;