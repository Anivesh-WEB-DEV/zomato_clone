import React from 'react';
import './topBrands.css';
import Slider from 'react-slick';
import PrevArrow from '../../common/carousel/prevArrow';
import NextArrow from '../../common/carousel/nextArrow';
const TopBrandList = [
 {
  id:1,
  name:"Burger King",
  time:"27 min",
  cover:"https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188142.png?output-format=webp",
 },
 {
  id:2,
  name:"Subway",
  time:"21 min",
  cover:"https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676520868.png?output-format=webp",
 },
 {
  id:3,
  name:"Pizza Hut",
  time:"31 min",
  cover:"https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png?output-format=webp",
 },
 {
  id:4,
  name:"Royal Cafe - Colours",
  time:"27 min",
  cover:"https://b.zmtcdn.com/data/brand_creatives/logos/f6f779024f5f34469381413bbbddbcbc_1617920260.png?output-format=webp",
 },
 {
  id:5,
  name:"La Pino'z Pizza",
  time:"22 min",
  cover:"https://b.zmtcdn.com/data/brand_creatives/logos/2aa77cff41af7cdb4ec59574d238f78e_1575883799.png?output-format=webp",
 },
 {
  id:6,
  name:"Aryan Family's Delight",
  time:"25 min",
  cover:"https://b.zmtcdn.com/data/brand_creatives/logos/c62c886c7d28bbb895407f4a3a4a4e5f_1676961058.png?output-format=webp",
 },
 {
  id:7,
  name:"Mr. Brown - Danbro",
  time:"29 min",
  cover:"https://b.zmtcdn.com/data/brand_creatives/logos/df5afe8b7789b8ff2b9abcd014b00c87_1646380179.png?output-format=webp",
 },
];

const settings = {
 infinite:true,
 slidesToShow: 5,
 slidesToScroll: 1,
 nextArrow: <NextArrow/>,
 prevArrow: <PrevArrow/>,
};


const TopBrands = () => {
  return (
    <div className='top-brands max-width'>
      <div className="collection-title">Top brands for you</div>
      <Slider {...settings}>
       {TopBrandList.map((brand)=>{
        return <div>
         <div className="top-brands-cover">
          <img 
          src={brand.cover} 
          className='top-brands-image' 
          alt={brand.name} />
         </div>
         <div className="top-brands-title">{brand.name}</div>
         <div className="top-brands-time">{brand.time}</div>
        </div>
       })}
      </Slider>
    </div>
  )
}

export default TopBrands;
