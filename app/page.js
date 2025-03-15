import Hero from "./_Compenents/hero";
import MobileGallery  from "./_Compenents/mobileGallery";
import Filter from "./_Compenents/filter";
import AutoSlider from "./_Compenents/autoSlider";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <MobileGallery />
      <Filter/>
      <AutoSlider/>
    </div>  
  );
}
