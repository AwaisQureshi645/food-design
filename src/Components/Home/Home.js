import React from 'react'
import BrandSupport from './BrandSupport'
import Discount from './Discount'
import Features from './Features'
import FirstImage from './FirstImage'
import HealthyFood from './HealthyFood'
import Hesitate from './Hesitate'
import { Package } from './Package'
import Product from './Product'
import { WhoWeAre } from './WhoWeAre'

export const Home = () => {
  return (
 <>
 <FirstImage/>
 <WhoWeAre/>
 <Product/>
<Discount/>
<Package/>
<HealthyFood/>
<Features/>
<Hesitate/>
<FirstImage/>
<BrandSupport/>

 </>
  )
}
