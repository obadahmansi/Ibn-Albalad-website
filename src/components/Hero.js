import logo from "../asset/images/logo.svg";
import backgroundlayer1 from "../asset/images/backgroundlayer1.png";
import Section from "./Section";

function Hero() {
  return (
    <div
      className="text-white w-full text-center flex flex-col justify-items-center bg-cover "
      style={{ backgroundImage: `url(${backgroundlayer1})` }}
    >
      <Section>
        <div className="mb-6 flex flex-col justify-center items-center">
          <img src={logo} className="max-w-xs"/>
        </div>
        <p className=" max-w-3xl mx-auto mb-6 text-4xl lg:mb-8">
          The premier online platform for business-to-business transactions on a
          global scale.
        </p>

        <div className="flex flex-row gap-7 justify-center ">
          <h2 className="rounded-full px-2 py-1 bg-coolGray-600">
            Frequently searched:
          </h2>
          <button className="rounded-full px-6 py-1 bg-coolGray-400 hover:bg-slate-700 hover:transition-all">
            {" "}
            Iphone 14 accesoriese
          </button>
          <button className="rounded-full px-6 py-1 bg-coolGray-400 hover:bg-slate-700 hover:transition-all">
            {" "}
            Cars Parts
          </button>
          <button className="rounded-full px-6 py-1 bg-coolGray-400 hover:bg-slate-700 hover:transition-all">
            {" "}
            Plastics{" "}
          </button>
        </div>
      </Section>
    </div>

    //     <div
    //     crossesOffset="lg:translate-y-[5.25rem]"
    //     id="hero"

    //     className="pt-[12rem] -mt-[5.25rem] text-white w-full py-32 flex flex-col gap-5 bg-cover" style={{backgroundImage: `url(${backgroundlayer1})`}}>
    //     <div className="flex flex-row max-w-max gap-5 cursor-pointer text-xl ">
    //       <div>Learn About</div> <img className="w-8" src={logo} />
    //     </div>
    //     <div className="text-5xl ">

    //     </div>
    //   </div>
  );
}

export default Hero;
