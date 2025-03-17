import Hero from "./_Compenents/hero";
import MobileGallery  from "./_Compenents/mobileGallery";
import Filter from "./_Compenents/filter";
import AutoSlider from "./_Compenents/autoSlider";
import Faq from "./_Compenents/faq";

export default function Home() {

  const Bestselling = [
      {src : '/assets/book1.png' , title : 'Nuclear War' ,author:'Rebecca Yarros'},
      {src : '/assets/book2.png' , title : 'Convication' ,author:'Prince Harry'},
      {src : '/assets/book3.png' , title : 'Hillbilly Elegy' ,author:'Jennette McCurdy'},
      {src : '/assets/book4.png' , title : 'Harry Poter' ,author:'Matthew Perry'},
      {src : '/assets/book5.png' , title : 'Irome Flame' ,author:'Britney Spears'},
      {src : '/assets/book6.png' , title : 'Audio Book ' ,author:'Colleen Hoover'},
      {src : '/assets/book1.png' , title : 'Nuclear War' ,author:'Rebecca Yarros'},
      {src : '/assets/book2.png' , title : 'Convication' ,author:'Prince Harry'},
      {src : '/assets/book3.png' , title : 'Hillbilly Elegy' ,author:'Jennette McCurdy'},
      {src : '/assets/book4.png' , title : 'Harry Poter' ,author:'Matthew Perry'},
      {src : '/assets/book5.png' , title : 'Irome Flame' ,author:'Britney Spears'},
      {src : '/assets/book6.png' , title : 'Audio Book ' ,author:'Colleen Hoover'},
  ]
  const Trending = [
    {src : '/assets/book1.png' , title : 'Nuclear War' ,author:'Rebecca Yarros'},
    {src : '/assets/book4.png' , title : 'Harry Poter' ,author:'Matthew Perry'},
    {src : '/assets/book2.png' , title : 'Convication' ,author:'Prince Harry'},
    {src : '/assets/book6.png' , title : 'Audio Book ' ,author:'Colleen Hoover'},
    {src : '/assets/book1.png' , title : 'Nuclear War' ,author:'Rebecca Yarros'},
      {src : '/assets/book2.png' , title : 'Convication' ,author:'Prince Harry'},
      {src : '/assets/book4.png' , title : 'Harry Poter' ,author:'Matthew Perry'},
      {src : '/assets/book5.png' , title : 'Irome Flame' ,author:'Britney Spears'},
      {src : '/assets/book3.png' , title : 'Hillbilly Elegy' ,author:'Jennette McCurdy'},
      {src : '/assets/book6.png' , title : 'Audio Book ' ,author:'Colleen Hoover'},
      {src : '/assets/book5.png' , title : 'Irome Flame' ,author:'Britney Spears'},
      {src : '/assets/book3.png' , title : 'Hillbilly Elegy' ,author:'Jennette McCurdy'},
  ]

  return (
    <div className="dark">
      <Hero/>
      <MobileGallery />
      <Filter/>
      <AutoSlider images={Bestselling} duration={20}/>
      <AutoSlider images={Trending} duration={15}/>
      <Faq/>
    </div>  
  );
}
