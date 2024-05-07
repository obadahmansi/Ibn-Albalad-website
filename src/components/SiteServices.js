import React from "react";
import Section from "./Section";
import pay from "../asset/svg/Pay.svg";
import ai from "../asset/svg/ai.svg";
import manage from "../asset/svg/magageing.svg";
import search from "../asset/svg/search.svg";
import ListComp from "./ListComp";
import search_main from "../asset/images/search-main.jpg"
import ai_main from "../asset/images/ai-main.jpg"
import pay_main from "../asset/images/pay-main.jpg"
import manage_main from "../asset/images/manage-main.jpg"
const SiteServices = () => {
  return (
    <div className="mx-36">
      <Section>
        <div className="text-4xl font-bold text-drkblue">
          Streamline ordering from search to fulfillment, all in one place
        </div>

        <div>
          <div>
            <ul>
              <ListComp
                icon={search}
                message={"Seach for Matches"}
                descr={
                  "Explore and sift through vast arrays of product and supplier options to discover the perfect fits for your business needs."
                }
               imageFrame={search_main}
              />

              <ListComp
                icon={ai}
                message={"Using Ai"}
                descr={
                  "Utilize AI-powered image detection to scan through extensive collections of products, swiftly pinpointing the ideal matches for your requirements."
                }
                imageFrame={ai_main}
              />

              <ListComp
                icon={pay}
                message={"Pay With Trust"}
                descr={
                  "Complete your purchase with ease using over 20 currencies and more than 20 secure payment methods, which also offer flexible payment terms"
                }
                imageFrame={pay_main}
              />

              <ListComp
                icon={manage}
                message={"Comfort Manage System"}
                descr={
                  "Monitor your order's progress, oversee suppliers, trace payments and shipments, and reach out to after-sales support, all conveniently through Ibn Albalad."
                }
                imageFrame={manage_main}
              />
            </ul>
          </div>
          <div></div>
        </div>
      </Section>
    </div>
  );
};

export default SiteServices;
