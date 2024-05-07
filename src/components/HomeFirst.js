import CardsHolder from "./CardsHolder";
import Navbar from "./Navbar";
import SubHeader from "./SubHeader";
import Section from "./Section";
import Hero from "./Hero";
import Marketing from "./Marketing";
import SiteServices from "./SiteServices";
function HomeFirst() {
  return (
  
    <div className=" flex font-semibold flex-col  ">
      <Navbar />
      <SubHeader />
      <Hero/>
      <Marketing/>
      

        <div className="bg-gray-100">
        <Section>
          <div className="mx-32">
      <div className="ml-6 mt-6 text-3xl ">Discover your next business opportunity</div>
      <div className="w-full flex justify-between text-3xl ">
        <CardsHolder title="Most Popluar" subTitle="Men's over size t-shirt" />
        <CardsHolder
          title="New  arrivals"
          subTitle="10,200+ Products added today"
        />
        <CardsHolder
          title="Source direct from factory"
          subTitle="Connect with best factories"
        />
      </div></div></Section>
        </div>

        <SiteServices/>
        
    </div>
  
  );
}

export default HomeFirst;
