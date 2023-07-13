import React from 'react';
import './diningOut.css'
import Collection from '../common/collection';

const collectionList =[
  {
    id: 1,
    title:"8 Best Insta-worthy Places",
    cover:"https://b.zmtcdn.com/data/collections/072ec5cf5c95503ab503edcc099f6add_1675252828.jpg",
    places:"8 Places",
  },
  {
    id: 2 ,
    title:"Winners of Zomato Restaurant Awards",
    cover:"https://b.zmtcdn.com/data/collections/77c1b9704985885cbe2cb094e9983eab_1682080540.jpg",
    places:"10 Places",
  },
  {
    id: 3 ,
    title:"8 Newly Opened Restaurants",
    cover:"https://b.zmtcdn.com/data/collections/5a235455020ab591941f86eadecd111c_1675245589.jpg",
    places:"6 Places",
  },
  {
    id: 4 ,
    title:"9 Best Bars & Pubs",
    cover:"https://b.zmtcdn.com/data/collections/f141889a9c1564098ee6a9763a941d78_1675245875.jpg",
    places:"8 Places",
  },
  {
    id: 5 ,
    title:"7 Blissful Breakfast Places",
    cover:"https://b.zmtcdn.com/data/collections/43d0572e2bcdcefbc2cc9f6a86be05a8_1683054402.jpg",
    places:"8 Places",
  },
  {
    id: 6 ,
    title:"9 Serene Rooftop Places",
    cover:"https://b.zmtcdn.com/data/collections/2da2ac4aea6e3c8241ab7de09fddf173_1675244485.jpg",
    places:"9 Places",
  },
  {
    id: 7 ,
    title:"5 Best Luxury Dining Places",
    cover:"	https://b.zmtcdn.com/data/collections/e001bf04df21d6d29048e8507a1fab80_1675244655.jpg",
    places:"5 Places",
  },
  {
    id: 8 ,
    title:"9 Finest Microbreweries",
    cover:"https://b.zmtcdn.com/data/collections/a9362905a0378c532acc0c146dbf472c_1675245943.jpg",
    places:"8 Places",
  }
]

const deliveryFilters = [
  {
    id:1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center" ></i>,
    title: 'Filters',

  },
  {
    id:2,
    title: 'Rating: 4.0+',

  },
  {
    id:3,
    title: 'Safe and Hygienic',

  },
  {
    id:4,
    title: 'Pure Veg'

  },
  {
    id:5,
    title: 'Delivery Time',
    icon: <i class="fi fi-rs-sort-alt absolute-center"></i>,

  },
  {
    id:6,
    title: 'Great Offers',

  },
]

const DiningOut = () => {
  return (
    <div>
      <Collection list={collectionList}/>
    </div>
  )
}

export default DiningOut;
