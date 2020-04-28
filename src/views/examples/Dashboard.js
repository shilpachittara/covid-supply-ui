/*!

*/
import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import {Helmet} from "react-helmet";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function ProfilePage() {


  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <Helmet
        title="Buy SITRA certified PPE kits, n95 masks| Covid Supply"
        link={[{ href: "http://covidsupply.in/about-us", rel: "canonical" }]}
        meta={[
          { "name": "description", "content": "Buy certified PPE kits, N95 masks, Nitrile gloves, Face shields in Delhi, Mumbai, Bangalore, Indore, Hyderabad at best prices." },
          { "name": "keywords", "content": "Covid PPE-KIT Mask Coverall"},
          { "name": "twitter:card", "content": "summary_large_image"},
          { "name": "twitter:site", "content": "@supplycovid"},
          { "name": "twitter:creator", "content": "@supplycovid"},
          { "name": "twitter_title", "content": "Buy Original PPE kits, n95 masks, nitrile gloves from SITRA certified Manufacturers | Covid Supply"},
          { "name": "twitter_description", "content": "Buy Original PPE kits, n95 masks, nitrile gloves from SITRA certified Manufacturers | Covid Supply"},
          { property: "og:type", content: "organization" },
          { property: "og:title", content: "Buy SITRA certified PPE kits, n95 masks| Covid Supply" },
          { property: "og:description", content: "Buy certified PPE kits, N95 masks, Nitrile gloves, Face shields in Delhi, Mumbai, Bangalore, Indore, Hyderabad at best prices." },
          { property: "og:url", content: "http://covidsupply.in/about-us" },
          { property: "og:image", content: "http://covidsupply.in/coronavirus.png" }
        ]}
       />

      <ExamplesNavbar />
      {/* <ProfilePageHeader /> */}
      <div className="m-t-80">
      <Tabs>
    <TabList>
      <Tab>All</Tab>
      <Tab>Quote Related</Tab>
      <Tab>Payment Related</Tab>
      <Tab>Drawing related</Tab>
      <Tab>Packing Lists</Tab>
    </TabList>
 
    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>no content</h2>
    </TabPanel>
    <TabPanel>
      <h2>no content</h2>
    </TabPanel>
    <TabPanel>
      <h2>no content</h2>
    </TabPanel>
    <TabPanel>
      <h2>no content</h2>
    </TabPanel>
  </Tabs>
      </div>
      
    
      <DemoFooter />
    </>
  );
}

export default ProfilePage;
