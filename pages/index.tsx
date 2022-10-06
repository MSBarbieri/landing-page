import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import FOG from "vanta/dist/vanta.fog.min"
import * as THREE from "three"

import Header from '../components/header'
import Links from '../components/links'

const Home: NextPage = () => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const vantaRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        (FOG({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          highlightColor: "#87B3A4",
          midtoneColor: "#7690B0",
          lowlightColor: "#AAA39E",
          baseColor: "#3E4C52",
          blurFactor: 0.67,
          speed: 0.4,
          zoom: 1.20,
        }))
      )
    }
    return () => {
      if (vantaEffect) (vantaEffect as any).destroy()
    }
  }, [vantaEffect])

  return (
    <>
      <Head>
        <title>Mathes Barbieri Site</title>
        <meta name="description" content="Landing Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div ref={vantaRef} className="min-h-screen flex flex-col items-center justify-center py-10">
        <Header />
        <Links />

      </div>
    </>
  )
}

export default Home