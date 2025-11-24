import React from 'react'
import UserNavbar from './Usernavbar'
import HeroBannerSlider from '../../HeroBannerSlider/HeroBannerSlider'
import CategoryGrid from '../../CategoryGrid/CategoryGrid'
import OffersPreview from '../../Offers/OffersPreview'
import BestSellingPreview from '../../BestSelling/BestSellingPreview'
import VegetableSeedsPreview from '../../VegetableSeeds/VegetableSeedsPreview'
import Brands from '../../Brands/Brands'
import FertilizersPreview from '../../Fertilizers/FertilizersPreview'
import FarmMachineryPreview from '../../FarmMachinery/FarmMachineryPreview'
import ExclusiveGrid from '../../Exclusive/ExclusiveGrid'
import Footer from '../../Footer/Footer'

export default function Userdashboard() {
  return (
    <div>
     {/* <UserNavbar/> */}
          <HeroBannerSlider />
          {/* Add other sections below */}
          <CategoryGrid />
          {/* <VegetableSeeds /> */}
          <OffersPreview />
          {/* <OffersPage></OffersPage> */}
          <BestSellingPreview />
          <VegetableSeedsPreview />
          <Brands />
          <FertilizersPreview />
          {/* <TrustBanner />
          <TrustBanner2 /> */}
          {/* <TrustSection /> */}
          <FarmMachineryPreview />
     
          <ExclusiveGrid />
          <Footer></Footer>
    </div>
  )
}
