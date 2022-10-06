import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const vanta = document.createElement("script")
    vanta.setAttribute("id", "threeScript");
    vanta.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js")
    console.log("bar", document.getElementsByTagName("head")[0].appendChild(vanta))
    return () => {
      if (vanta) {
        vanta.remove();
      }
    }
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
