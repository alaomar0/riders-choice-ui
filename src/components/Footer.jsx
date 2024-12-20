import logo from '../assets/images/logo.png';
import xLogo from '../assets/images/x-logo.svg';
import facebookLogo from '../assets/images/facebook-logo.svg';
import instaLogo from '../assets/images/instagram-logo.svg';

const socialLinks = [{logo: xLogo, link: 'https://x.com'}, {logo: facebookLogo, link: 'https://facebook.com'}, {logo: instaLogo, link: 'https://instagram.com'}];
function Footer() {
  return (
    <div className="bg-[#7A4A22] px-mainl py-2 flex flex-col">
      <dev className=' border-b-2 border-black pb-2 mb-2 flex justify-between'>
        <img src={logo} alt="" width='120'/>
        <div className='flex gap-40 items-center'>
          <FooterLinks />
          <div className='flex gap-3'>
            {socialLinks.map(({logo, link}, index) => (<a key={index} href={link}><img src={logo} alt="" className='w-12' /></a>))}
          </div>
        </div>
      </dev>
      
      <dev className='flex justify-between'>
        <p>{'© 2024 Rider\'s Choice. All rights reserved.'}</p>
        <div className='flex gap-3'>
          {['Privacy Policy', 'Terms of Service', 'Cookies Policy'].map((name, index) => (<a key={index} href='#' className='underline'>{name}</a>))}
        </div>
      </dev>
    </div>
  )
}
const links = [{name: 'Home', link: '#hero-page'}, {name: 'Features', link: '#features-page'}, {name: 'Order', link: '#cta-page'}, {name: 'Contact us', link: '#contact-page'}];
function FooterLinks() {
  return (
    <div className='text-2xl underline flex gap-14'>
      {links.map(({ name, link }, index) => (
        <a key={index} href={link}>
          {name}
        </a>
      ))}
    </div>
  )
}

export default Footer