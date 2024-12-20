import bgImg from '../assets/images/bicycle-background.jpg';

function HeroPage() {
  return (
    <div id="hero-page" className="h-screen flex items-center relative">
      <img src={bgImg} alt="" className='h-full w-full object-cover absolute inset-0'/>
      <HeroContent />
    </div>
  );
}

function HeroContent() {
  return (
    <div className="relative h-full pl-mainl flex items-center before:absolute before:inset-0 before:bg-white/10 before:backdrop-blur-sm before:mask-blur-gradient">
      <div className="relative">
        <HeaderText />
        <ActionButtons />
      </div>
    </div>
  );
}
function HeaderText() {
  return (
    <div className="text-mainblue w-[500px] mb-24">
      <h1 className="font-extrabold text-5xl mb-9">Experience the Ride of Your Life</h1>
      <p className="text-3xl">
        Introducing our latest special bike, designed for both performance and comfort. Elevate your cycling experience and conquer every trail with style.
      </p>
    </div>
  );
}

function ActionButtons() {
  return (
    <div className="font-medium text-2xl text-white">
      <button className="w-36 h-12 bg-button-blue mr-10">Shop</button>
      <button className="w-56 h-12 border-4 border-button-blue">Learn More</button>
    </div>
  );
}

export default HeroPage;

