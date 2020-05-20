import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend,
  ResponsiveContainer,ReferenceLine
  } from 'recharts';


const styles = {
  chart:{
    flex: 1,
    width: 0
  },
  updateDate:{
    marginBottom:'10px'
  }
};


class Timeline extends PureComponent {

  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: [],
      time:''
    };
  }

  componentDidMount() {
    fetch("https://raw.githubusercontent.com/RicardoJC/Mexico-Datos-COVID19/master/home/timeline.json")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                data: result.data,
                time: result.time,
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
    const { error, isLoaded, data, time } = this.state;
    if(error){
        return <div>-- Por el momento no se puede mostrar esta gráfica --</div>;
    }else if(!isLoaded){
        return <div>Cargando...</div>;
    }else{
      return (

        <div style={styles.chart} >
          <div style={styles.updateDate} className='d-flex justify-content-center font-weight-lighter'>
            <span>Última actualización: {time}</span>
          </div>
        <ResponsiveContainer width="99%" height={400}>
        <LineChart
          data={data}
          margin={{
            top: 5, right: 20, left: 20, bottom: 5,
          }}
          >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <ReferenceLine x="2020-04-21" label="Fase 3" stroke="red" />
          <Line type="natural" dataKey="coronavirus" stroke="#00e676" strokeWidth='1' animationDuration='4000' />
          <Line type="natural" dataKey="quedateencasa" stroke="#1b5e20" strokeWidth='1' animationDuration='3500'/>
          <Line type="natural" dataKey="@HLGatell" stroke="#f44336" strokeWidth='1' animationDuration='3000'/>
          <Line type="natural" dataKey="@lopezobrador_" stroke="#b71c1c" strokeWidth='1' animationDuration='2500'/>
          <Line type="natural" dataKey="gripa" stroke="#ffab00" strokeWidth='1' animationDuration='2000'/>
          <Line type="natural" dataKey="neumonia" stroke="#e65100" strokeWidth='1' animationDuration='1500'/>
        </LineChart>
        </ResponsiveContainer>
        </div>



      );
    }



  }
}


export default Timeline;