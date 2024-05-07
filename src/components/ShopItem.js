import t1 from "../asset/images/t1.png"

function ShopItem(props){

    return(
        <div className="flex justify-between w-full">
            
            <div className="flex justify-between items-center gap-10">
            <div >
                <img src={props.productImage} className="h-36 w-28"/>
            </div>
            <div>
                <div className="text-xl font-normal">{props.title}</div>
                <div className="text-2xl font-bold">{props.price} SAR</div>
                <div className=" font-medium">min. order:12 pieces</div></div>
                
            </div>
            <div className="flex flex-col  gap-2 *:rounded-3xl *:p-3 *:text-xl *:font-semibold text-white" >
                <button className="bg-lightblue ">Cotact Distributor</button>
                <button className="bg-rgblue ">Buy Now</button>
            </div>
        </div>
    );
}

export default ShopItem;