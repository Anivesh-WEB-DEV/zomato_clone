import React from 'react';
import './deliveryCollections.css';
import Slider from "react-slick";
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import DeliveryItem from './deliveryItems';


const deliveryItems=[
 {
  id:1,
  title:"Biryani",
  cover:
  "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
 },{
  id:2,
  title:"Pizza",
  cover:
  "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
 },
 
 {
  id:3,
  title:"North Indian",
  cover:
  "https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg",
 },
 {
  id:4,
  title:"Cake",
  cover:
  "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
 },
 {
  id:5,
  title:"Paneer",
  cover:
  "https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png",
 },
 {
  id:6,
  title:"Burger",
  cover:
  "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
 },
 {
  id:7,
  title:"Chicken",
  cover:
  "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
 },
 {
  id:8,
  title:"Chinese",
  cover:
  "https://b.zmtcdn.com/data/o2_assets/e90a634895787ce77a93212351fa18991678798565.jpeg",
 },
 {
  id:9,
  title:"Momos",
  cover:
  "https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png",
 },
 {
  id:10,
  title:"Chowmein",
  cover:
  "https://b.zmtcdn.com/data/o2_assets/c21624eac87ed1c8c87ef1ea52980ded1632716659.png",
 },
 

];

const settings = {
 infinite:false,
 slidesToShow: 6,
 slidesToScroll: 1,
 nextArrow: <NextArrow/>,
 prevArrow: <PrevArrow/>,
};

const DeliveryCollections = () => {
  return (
    <div className='delivery-collection'>
      <div className="max-width">
       <div className="collection-title"> Eat what makes you happy</div>
       <Slider {...settings}>
        {deliveryItems.map((item)=>{
         return  <DeliveryItem item={item}/>
        })}
       </Slider>
      </div>
    </div>
  )
}

export default DeliveryCollections;
