
import Script from 'next/script'


function RunScripts() {
  return ( 
    <>
      <Script 
        type='text/javascript' 
        id='1'
        strategy='beforeInteractive'
        dangerouslySetInnerHTML={{ __html: process.env.jqueryBundle}}  
      /> 
      <Script 
        type='text/javascript' 
        id='2'
        strategy='beforeInteractive'
        dangerouslySetInnerHTML={{ __html: process.env.Scripts}}
      /> 
    </>
  );
}

export default RunScripts;