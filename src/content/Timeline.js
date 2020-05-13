import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend,
  ResponsiveContainer,ReferenceLine
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
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <ReferenceLine x="2020-04-21" label="Fase 3" stroke="red" />
          <Line type="natural" dataKey="coronavirus" stroke="#00e676" strokeWidth='1' animationDuration='4000' />
          <Line type="natural" dataKey="covid19" stroke="#1b5e20" strokeWidth='1' animationDuration='3500'/>
          <Line type="natural" dataKey="@HLGatell" stroke="#f44336" strokeWidth='1' animationDuration='3000'/>
          <Line type="natural" dataKey="@lopezobrador_" stroke="#b71c1c" strokeWidth='1' animationDuration='2500'/>
          <Line type="natural" dataKey="ansiedad" stroke="#ffab00" strokeWidth='1' animationDuration='2000'/>
          <Line type="natural" dataKey="depresion" stroke="#e65100" strokeWidth='1' animationDuration='1500'/>
        </LineChart>
        </ResponsiveContainer>


      );
    }



  }
}


export default Timeline;