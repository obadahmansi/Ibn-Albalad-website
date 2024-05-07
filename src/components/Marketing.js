import React from "react";
import Section from "./Section";
import MarketingCard from "./MarketingCard";
import secure  from "../asset/svg/secure.svg"
import oppo from "../asset/svg/opportunities.svg"
import solu  from "../asset/svg/solution.svg"
import trading from "../asset/svg/trading.svg"

const Marketing = () => {
  return (
    <div >
      <Section>
        <div className="flex flex-row justify-around">
          <MarketingCard
            h2Text="Numerous business opportunities"
            h3Text="Discover countless products and suppliers globally for your business needs."
            icon={oppo}
          />
          <MarketingCard  icon={secure} h2Text="Guaranteed quality and secure transactions"
            h3Text="Ensure the quality of production from certified suppliers, with your orders safeguarded throughout the payment to delivery process."/>
          <MarketingCard  icon={solu} h2Text="Comprehensive trading solution"
            h3Text="Effortlessly navigate from searching for products/suppliers to managing orders, making payments, and completing fulfillment."/>
          <MarketingCard  icon={trading} h2Text="Customized trading experience"
            h3Text="Receive tailored advantages, including exclusive discounts, increased protection, and additional support, to foster the growth of your business at every stage."/>
        </div>
      </Section>
    </div>
  );
};

export default Marketing;
