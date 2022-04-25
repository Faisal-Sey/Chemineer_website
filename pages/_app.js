/* eslint-disable @next/next/no-sync-scripts */
import React, { useEffect, useState } from 'react';
import Script from 'next/script'

// css
import '../styles/globals.css'
import "antd/dist/antd.css";
import "../styles/main.css";
import "../src/home/style.css"
import "../src/events/style.css"
import "../src/user-panel/style.css"

import "jquery"

// components
import PreLoader from '../widgets/preloader/preloader';

function MyApp({ Component, pageProps }) {

  const [state, setState] = useState(true);

  useEffect(() => {
    let load = false;

    if (!load){
      setState(false);
      // window.location.reload(false)
    }

  }, [setState]);


  return (
    <>
      <Script 
        type='text/javascript' 
        id='1'
        dangerouslySetInnerHTML={{ __html: process.env.jqueryBundle}}  
      /> 
      <Script 
        type='text/javascript' 
        id='2'
        dangerouslySetInnerHTML={{ __html: process.env.Scripts}}
      /> 
      {!state ? 
        <Component {...pageProps} />
      :
        <PreLoader/>
        }
    </>
  )
    
}

export default MyApp
