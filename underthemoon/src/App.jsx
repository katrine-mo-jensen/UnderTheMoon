
import './App.css'
import { Footer } from './footer/Footer'
import { Header } from './header/Header'
import { Navbar } from './navbar/Navbar'
import { PicGallery } from './picgallery/PicGallery'
import { Text } from './text/Text'
import { TwoPics } from './twopics/TwoPics'


function App() {
  

  return (
    <>
      <Navbar/>
      <Header/>
      <Text/>
      <TwoPics/>
      <PicGallery/>
      <Footer/>
    </>
  )
}

export default App
