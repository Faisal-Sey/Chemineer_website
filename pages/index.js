/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head'
import Script from 'next/script'
import HomePage from '../src/home/home'
import React from 'react'



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
        <title>Cheesa website </title>
      </Head>
      <HomePage />
    </div>
  )
}
