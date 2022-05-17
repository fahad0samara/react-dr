
import Darkmood from "./Darkmood";

const Navbar = () => {
  return (
      <div>
      <header className="body-font gradient text-black ">
  <div className={'container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'}>
    <a className={'flex title-font font-medium items-center   mb-4 md:mb-0'}>
   
      <span className="ml-3 text-2xl">D</span>
    </a>
    <nav className={'md:ml-auto md:mr-auto flex flex-wrap items-center font-black text-2xl justify-center'}>
      <a className={'mr-5 hover:text-gray-900'}>About Us</a>
      <a className={'mr-5 hover:text-gray-900'}>Our Service</a>
      <a className={'mr-5 hover:text-gray-900'}>
The Team</a>
      <a className={'mr-5 hover:text-gray-900'}>Portfolio</a>
    </nav>
    <Darkmood/>
          
  </div>
      </header>
      
      </div>
  )
}

export default Navbar