import React from 'react';


const footerStyles ={
  height:'80px',
  paddingTop:'20px'

}



class Footer extends React.Component{

  render(){

    return(
      <div style={footerStyles} className='bg-dark text-light text-center'>
      <p>UNAM, México 2020 </p>
      </div>

    );
  }


}


export default Footer;