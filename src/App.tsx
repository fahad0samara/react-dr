
import { useContext } from 'react'
import { themeContext } from './Context'
import Navbar from './Navbar';
import  {Section}  from "./Home/Section"
import Section0 from './Home/Section0';
import Section1 from './Home/Section1';
import Section2 from './Home/Section2';
import Footer from './Home/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  return (
    <div
      className=""
      style={{
        background: darkMode ? 'black' : '',
        color: darkMode ? 'white' : '',
      }}

    >


      <Navbar/>
    <Section/>
    <Section0/>
    <Section1/>
    <Section2/>
    <Footer/>
    </div>
  )
}

export default App
