import React from 'react';
import './nightLife.css'
import Collection from '../common/collection';
import Filters from '../common/filters';
import { nightLife } from '../../data/nightLife';
import ExploreSection from '../common/exploreSection';


const nightFilters = [
  {
    id:1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center" ></i>,
    title: 'Filters',

  },
  {
    id:2,
    title: 'Distance',
    icon: <i class="fi fi-rs-sort-alt absolute-center"></i>,

  },
  {
    id:3,
    title: 'Rating: 4.0+',

  },
  {
    id:4,
    title: 'Pubs & Bars',

  },
  
]

const collectionList =[
  {
    id: 1 ,
    title:"9 Best Bars & Pubs",
    cover:"https://b.zmtcdn.com/data/collections/f141889a9c1564098ee6a9763a941d78_1675245875.jpg",
    places:"8 Places",
  },
  {
    id: 2 ,
    title:"9 Finest Microbreweries",
    cover:"https://b.zmtcdn.com/data/collections/a9362905a0378c532acc0c146dbf472c_1675245943.jpg",
    places:"9 Places",
  },
  {
    id: 3 ,
    title:"21 Lit Party Places",
    cover:"https://b.zmtcdn.com/data/collections/d6c20926317f6753461c59af08d566f1_1674820841.jpg",
    places:"21 Places",
  }
]

const nightList = nightLife;

const NightLife = () => {
  return (
    <div>
      <Collection list={collectionList}/>
      <div className="max-width">
        <Filters filterList={nightFilters}/>
      </div>
      <ExploreSection List={nightList} 
      collectionName='Nightlife Restaurants in Phase 6'/>
    </div>
  )
}

export default NightLife
