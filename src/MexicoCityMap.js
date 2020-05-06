import React, { Component } from 'react';
import * as d3 from 'd3';
import './map.css'


/*
https://observablehq.com/@d3/state-choropleth?collection=@d3/d3-geo
https://medium.com/@zimrick/how-to-create-pure-react-svg-maps-with-topojson-and-d3-geo-e4a6b6848a98
https://react-bootstrap.github.io/components/overlays/#popovers
https://github.com/react-bootstrap/react-bootstrap/issues/1622
https://www.w3schools.com/howto/howto_js_popup.asp
*/

class MexicoCityMap extends Component {

  constructor(props){
    super(props);
    this.state = {
      wMap: 500, // Bien
      hMap: 600, // Bien
      wSvg: 1000, // Bien
      hSvg: 600, //
      error: null,
      isLoaded: false,
      data: [],
      statistics:[]
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();

    fetch("https://raw.githubusercontent.com/jgermanob/Mexico-Covid19-Datos/master/alcaldias.geojson")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                data: result.features
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

    const { error, isLoaded, data } = this.state;

    if(error){
      return <div className='d-flex justify-content-center'>Error al cargar el mapa</div>
    }else if(!isLoaded){
      return <div className='d-flex justify-content-center'>Cargando mapa...</div>
    }else{

      var w = this.state.wMap,h = this.state.hMap;
      const projection = d3.geoMercator()
      .center([-110, 22])
      .translate([w / 2, h / 1.7])
      .scale([w / .3]);

      const handleCountryClick = (e,data,countryIndex) => {
        console.log("Clicked on country: ", data);
        d3.select('.nav_map').style('visibility','')
        d3.select('.nav_map').style('visibility','visible')
        d3.select('.nav_map').transition().duration(200).attr('opacity',0.9)
        d3.select('.nav_map').html("<h5>" + data.properties.nomgeo + "</h5>" +
        "<span class='font-weight-light'>Total de tweets: <br/> <span/><span class='font-weight-bolder'>Hello, world</span><br/>" +
        "<span class='font-weight-light'>Tweets sobre Covid19: <br/><span/><span class='font-weight-bolder'>Hola mundo</span>").style('left',(e.pageX) + 'px').style('top',(e.pageY-10) + 'px')
      }

      const mouseOut = (data, countryIndex) => {
        d3.select('.nav_map').transition().duration(500).attr('opacity',0)
        d3.select('.nav_map').style('visibility','hidden')
      }

      const colorIntensity = pos =>{
        if(pos > 100){
          return 0.8;
        }else if(pos > 50 && pos <= 100){
          return 0.5;
        }else if(pos > 25 && pos <= 50){
          return 0.3;
        }else{
          return 0.1;
        }
      }


      const pathGenerator = d3.geoPath().projection(projection);
      const states = data
         .map((d,i) => <path
         key={'path' + i}
         d={pathGenerator(d)}
         className='states'
         fill={ `rgba(49,104,232,${ colorIntensity(d.properties.totales) })` }
         stroke="#000"
         strokeWidth={ 1 }
         onMouseOver = { (e) => handleCountryClick(e,d,i) }
         onMouseOut = {() => mouseOut(d,i)}
         />);

         return(

           <div className='d-flex justify-content-center' id='map'>
             <div className='nav_map'></div>
            <svg width={this.state.wSvg} height={this.state.hSvg}>
            {states}
            </svg>
          </div>

        );

    }

  }


}
export default MexicoCityMap;