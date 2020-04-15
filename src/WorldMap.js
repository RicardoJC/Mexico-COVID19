import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import worlddata from './world';
import * as d3 from 'd3';


/*
https://observablehq.com/@d3/state-choropleth?collection=@d3/d3-geo
https://medium.com/@zimrick/how-to-create-pure-react-svg-maps-with-topojson-and-d3-geo-e4a6b6848a98
https://react-bootstrap.github.io/components/overlays/#popovers
https://github.com/react-bootstrap/react-bootstrap/issues/1622
https://www.w3schools.com/howto/howto_js_popup.asp
*/


class WorldMap extends Component {

  constructor(props){
    super(props);
    this.state = {
      wMap: 500, // Bien
      hMap: 600, // Bien
      wSvg: 1000, // Bien
      hSvg: 600 //
    };
  }


  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    if (window.innerWidth >= 1200){
      this.setState({
        wMap: 500, // Bien
        hMap: 600, // Bien
        wSvg: 1000, // Bien
        hSvg: 600 //
      });
    }else if(window.innerWidth <= 1200 && window.innerWidth >= 990){
      this.setState({
        wMap: 400, // Bien
        hMap: 500, // Bien
        wSvg: 800, // Bien
        hSvg: 500 //
      });
    }else if(window.innerWidth <= 990 && window.innerWidth >= 760){
      this.setState({
        wMap: 300, // Bien
        hMap: 400, // Bien
        wSvg: 600, // Bien
        hSvg: 400 //
      });
    }else{
      this.setState({
        wMap: 200, // Bien
        hMap: 300, // Bien
        wSvg: 380, // Bien
        hSvg: 300 //
      });
    }

    //this.setState({hideNav: window.innerWidth <= 760});
  }


  render() {
     var w = this.state.wMap,h = this.state.hMap;
     const projection = d3.geoMercator()
     .center([-110, 22])
     .translate([w / 2, h / 1.7])
     .scale([w / .3]);

     const handleCountryClick = (data,countryIndex) => {
       console.log("Clicked on country: ", data);

     }

     const colorIntensity = pos =>{
       if(pos > 100){
         return 0.8;
       }else{
         return 0.0;
       }
     }


     const pathGenerator = d3.geoPath().projection(projection);
     const states = worlddata.features
        .map((d,i) => <path
        key={'path' + i}
        d={pathGenerator(d)}
        className='states'
        fill={ `rgba(49,104,232,${ colorIntensity(d.properties.totales) })` }
        stroke="#000"
        strokeWidth={ 1 }
        onMouseOver = { () => handleCountryClick(d,i) }
        />);

  return(

    <div className='d-flex justify-content-center'>
      <svg width={this.state.wSvg} height={this.state.hSvg}>
        {states}
        </svg>
    </div>


  );}


}
export default WorldMap;