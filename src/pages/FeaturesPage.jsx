/* eslint-disable react/prop-types */
import bgImg from '../assets/images/bicycle-background.jpg';

import card1Img from '../assets/images/card1-img.jpg';
import card2Img from '../assets/images/card2-img.jpg';
import card3Img from '../assets/images/card3-img.jpg';


const featuresCards = [
  {img: card1Img, title: 'Rugged Durability', description: 'Built with a high-strength carbon fiber frame and reinforced components, our bike withstands the toughest trails and harshest weather conditions.'},
  {img: card2Img, title: 'Precision Control', description: 'Experience unmatched stability and control with advanced suspension, responsive brakes, and superior grip tires designed for any terrain.'},
  {img: card3Img, title: 'Adventure-Ready Comfort', description: 'Stay comfortable on long rides with ergonomic saddle design, adjustable handlebars, and shock-absorbing suspension for a smooth, enjoyable ride.'},
]
function FeaturesPage() {
  return (
    <div id='features-page' className="h-screen  relative flex justify-center items-center">
      <img src={bgImg} alt="" className='h-full w-full object-cover absolute inset-0'/>
      <div className="relative flex gap-1 overflow-hidden">
        {featuresCards.map((card, index) => (
          <FeatureCard key={index} cardImg={card.img} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  )
}

function FeatureCard({cardImg, title, description}) {
  return (
    <div className='bg-card-bg h-[650px] w-[492px] flex flex-col items-center pt-14'>
      <img src={cardImg} className="w-[370px] h-60 object-cover" alt="" />
      <h3 className='font-medium text-4xl text-card-header mt-12 mb-5'>{title}</h3>
      <p className='text-card-text font-medium text-2xl w-[340px] w- text-center'>{description}</p>
    </div>
  )
}

export default FeaturesPage