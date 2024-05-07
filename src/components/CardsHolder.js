import t1 from "../asset/images/t1.png";
import t2 from "../asset/images/t2.png";
import t3 from "../asset/images/t3.png";
import t4 from "../asset/images/t4.png";
function CardsHolder(props) {
  return (
    <div className="bg-bgblue font-medium p-5 rounded-3xl m-5 ">
      <div className="flex-col">
        <div className="text-drkblue">{props.title}</div>
        <div className="text-rgblue text-lg ">{props.subTitle}</div>
        <div className="flex-col flex">
        <div className="pt-6 pb-6">
          <img className="rounded-3xl" src={t1}/>
        </div>
        <div className="flex justify-between gap-4 ">
          <div >
            <img src={t2} className="rounded-3xl"/>
          </div>
          <div >
            <img src={t3} className="rounded-3xl"/>
          </div>
          <div>
            <img src={t4} className="rounded-3xl" />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default CardsHolder;
