import '../styles/globals.css'
import Navbar from '../components/Navbar'
import {Easy3DProvider} from '../context/Easy3dContext'
function MyApp({ Component, pageProps }) {
  
  return (
    <>
    <Easy3DProvider>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </Easy3DProvider>
      
    </>
    
  )
}

export default MyApp
