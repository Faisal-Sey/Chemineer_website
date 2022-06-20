import React from 'react';

// css
import '../styles/globals.css'
import "antd/dist/antd.css";
import "../styles/main.css";
import "../src/home/style.css"
import "../src/events/style.css"
import "../src/user-panel/settings/style.css"
import "../src/user-panel/courses/style.css"



function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
    
}

export default MyApp
