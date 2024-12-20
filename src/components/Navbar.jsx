import logo from '../assets/images/logo.png';

function Navbar() {
  return (
    <div className="z-30 w-full h-20 absolute px-mainl flex justify-between items-center">
      <img src={logo} alt="" width='147' className=''/>
      <div className='relative w-[500px] flex items-center h-12'>
        <NavLinks />
        <div className="absolute top-0 left-0 w-full h-full bg-white/10 backdrop-blur-sm"></div>
      </div>
    </div>
  )
}


const links = [{name: 'Home', link: '#hero-page'}, {name: 'Features', link: '#features-page'}, {name: 'Order', link: '#cta-page'}, {name: 'Contact us', link: '#contact-page'}];
function NavLinks() {
  return (
    <div className='flex text-mainblue text-xl justify-around w-full font-medium relative z-10'>
      {links.map(({ name, link }, index) => (
        <a key={index} href={link}>
          {name}
        </a>
      ))}
    </div>
  )
}

export default Navbar