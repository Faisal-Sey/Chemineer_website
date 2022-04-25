import Head from 'next/head'
import Script from 'next/script'
import HomePage from '../src/Home/home'
import React, { useState, useEffect } from 'react'


export default function Home() {
  
  return (
    <div>
      <Head>
        <meta charset="utf-8"/>
        <meta name="author" content="Softnio"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta name="description" content=""/>
        {/* Fav Icon */}
        <link rel="shortcut icon" href="/images/favicon.png"/>
        {/* Site Title */}
        <title>Genox - Creative Agency &amp; Digital Web Agency Multipurpose HTML Template</title>
      </Head>
      <HomePage />
    </div>
  )
}
