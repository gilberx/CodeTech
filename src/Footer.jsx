import React from "react";

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
const Footer = () => {
    const faviconPath = process.env.PUBLIC_URL + '/favicon.ico';
    return (
    <Box style={{maxWidth:'100%', height: '50vh', display:'flex', flexDirection:'rows', backgroundColor: '#458C83' }}>
    <div style={{paddingTop:'20vh', paddingLeft:'15vh', paddingRight:'10vh'}}>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <img src={faviconPath} style={{height:"70px", width:"70px",}}/>
        <p style={{marginTop:'15px', marginLeft:'5px', fontSize:'35px', fontWeight:'600', fontFamily:'Montserrat, sans-serif', color: '#F0F0F0'}}>CodeTech</p>
      </div>
      <div>
        <p style={{color:'#F0F0F0', marginLeft:'20px'}}>Code learning just got better.</p>
      </div>
    </div>
    <Divider orientation="vertical" variant="middle" flexItem style={{backgroundColor: '#EDEDED', height: '33vh', marginTop:'90px'}} />
    <div style={{paddingTop:'15vh'}}>
      <div style={{display:'flex', flexDirection:'column', marginLeft:'20vh'}}>
        <p style={{marginBottom:'20px', fontSize:'19px', fontWeight:'600', color:'#F5FFFD'}}>Get in Touch</p>
        <div style={{display:'flex', flexDirection:'row'}}>
          <img src="/foot1.png" alt="Icon" style={{height:'19px', width:'15px'}} />
          <p style={{marginBottom:'20px', color:'#F5FFFD', marginLeft:'19px'}}>N. Bacalso Avenue, Cebu City, Cebu 6000</p>
        </div>
        <div style={{display:'flex', flexDirection:'row'}}>
          <img src="/foot2.png" alt="Icon" style={{height:'19px', width:'15px'}} />
          <p style={{marginBottom:'20px', color:'#F5FFFD', marginLeft:'19px'}}>+63 929 843 0999</p>
        </div>
        <div style={{display:'flex', flexDirection:'row'}}>
          <img src="/foot3.png" alt="Icon" style={{height:'19px', width:'24px'}} />
          <p style={{marginBottom:'20px', color:'#F5FFFD', marginLeft:'10px'}}>css@cit.edu</p>
        </div>
      </div>
    </div>
    <Divider orientation="vertical" variant="middle" flexItem style={{backgroundColor: '#EDEDED', height: '33vh', marginTop:'90px', marginLeft:'15vh'}} />
    <div style={{paddingTop:'15vh', marginLeft:'-5vh'}}>
      <div style={{display:'flex', flexDirection:'column', marginLeft:'20vh'}}>
        <p style={{marginBottom:'20px', fontSize:'19px', fontWeight:'600', color:'#F5FFFD'}}>Other Links</p>
        <div style={{display:'flex', flexDirection:'row'}}>
          <img src="/foot1.png" alt="Icon" style={{height:'19px', width:'15px'}} />
          <p style={{marginBottom:'20px', color:'#F5FFFD', marginLeft:'19px'}}>Terms and Conditions</p>
        </div>
        <div style={{display:'flex', flexDirection:'row'}}>
          <img src="/foot2.png" alt="Icon" style={{height:'19px', width:'15px'}} />
          <p style={{marginBottom:'20px', color:'#F5FFFD', marginLeft:'19px'}}>Help Center</p>
        </div>
      </div>
    </div>
  </Box>);
}

export default Footer;