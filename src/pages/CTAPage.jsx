import bgImg from '../assets/images/CTA-image.jpg'

function CTAPage() {
  return (
    <div id='cta-page' className="h-screen relative">
      <img src={bgImg} alt="" className='h-full w-full object-cover absolute inset-0'/>
      <div className='h-full w-full relative flex flex-col justify-center items-center text-white font-bold'>
        <h3 className='text-6xl'>Discover Your Perfect Ride</h3>
        <p className='text-3xl w-[960px] text-center mt-16 mb-40'>Experience the thrill of cycling with our exclusive special bike designed for every adventure.</p>
        <div className="font-medium text-2xl text-white">
          <button className="w-44 h-14 bg-button-blue mr-10">
            Order Now
          </button>
          <button className="w-[218px] h-14 border-[3px] border-button-blue">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

export default CTAPage