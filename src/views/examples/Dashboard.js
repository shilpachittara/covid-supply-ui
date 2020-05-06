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
import { Link } from "react-router-dom";
import DemoFooter from "components/Footers/DemoFooter.js";
import { Helmet } from "react-helmet";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import RupeeIcon from 'assets/icons/business.svg'
import RightIcon from 'assets/icons/multimedia-option.svg'
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
          { "name": "keywords", "content": "Covid PPE-KIT Mask Coverall" },
          { "name": "twitter:card", "content": "summary_large_image" },
          { "name": "twitter:site", "content": "@supplycovid" },
          { "name": "twitter:creator", "content": "@supplycovid" },
          { "name": "twitter_title", "content": "Buy Original PPE kits, n95 masks, nitrile gloves from SITRA certified Manufacturers | Covid Supply" },
          { "name": "twitter_description", "content": "Buy Original PPE kits, n95 masks, nitrile gloves from SITRA certified Manufacturers | Covid Supply" },
          { property: "og:type", content: "organization" },
          { property: "og:title", content: "Buy SITRA certified PPE kits, n95 masks| Covid Supply" },
          { property: "og:description", content: "Buy certified PPE kits, N95 masks, Nitrile gloves, Face shields in Delhi, Mumbai, Bangalore, Indore, Hyderabad at best prices." },
          { property: "og:url", content: "http://covidsupply.in/about-us" },
          { property: "og:image", content: "http://covidsupply.in/coronavirus.png" }
        ]}
      />

      <ExamplesNavbar />
      {/* <ProfilePageHeader /> */}
      <div className="m-t-100">
      </div>
      <div className="row" style={{ margin: 'auto', marginLeft: '20px' }}>
        <div className="col-sm-8">
          <Tabs>
            <TabList>
              <Tab>All</Tab>
              <Tab>Quote Related</Tab>
              <Tab>Payment Related</Tab>
              <Tab>Drawing related</Tab>
              <Tab>Packing Lists</Tab>
            </TabList>

            <TabPanel>
              <div className="tab-body">
                <h2>Any content 1</h2>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="tab-body">
                <h2>Any content 2</h2>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="tab-body">
                <h2>Any content 3</h2>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="tab-body">
                <h2>Any content 4</h2>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="tab-body">
                <h2>Any content 5</h2>
              </div>
            </TabPanel>
          </Tabs>
        </div>
        {/* right section  */}
        <div className="col-sm-3 m-t-35 m-l-50">
          {/* rectangle 1 */}

          <div className="rectangle">
            <div style={{ margin: '16px' }}>
              <img src={RupeeIcon} className="rect-icon" style={{ width: '20px' }} alt="rupee-icon"></img>
            </div>
            <div className="rect-body">
              Payment Summary
        </div>
            <div style={{ margin: '16px' }}>
              <img src={RightIcon} style={{ width: '15px' }} alt="right-icon"></img>
            </div>

          </div>
          {/* rectangle 2 */}
          <Link to="/dashboard-tab">
            <div className="rectangle">
              <div style={{ margin: '16px' }}>
                <img src={RupeeIcon} className="rect-icon" style={{ width: '20px' }} alt="rupee-icon"></img>
              </div>

              <div className="rect-body">

                Payment Summary
        </div>

              <div style={{ margin: '16px' }}>
                <img src={RightIcon} style={{ width: '15px' }} alt="right-icon"></img>
              </div>

            </div>
          </Link>

          {/* rectangle 3 */}

          <div className="rectangle">
            <div style={{ margin: '16px' }}>
              <img src={RupeeIcon} className="rect-icon" style={{ width: '20px' }} alt="rupee-icon"></img>
            </div>
            <div className="rect-body">
              Payment Summary
        </div>
            <div style={{ margin: '16px' }}>
              <img src={RightIcon} style={{ width: '15px' }} alt="right-icon"></img>
            </div>

          </div>

          {/* rectangle 4 */}
          <div className="rectangle">
            <div style={{ margin: '16px' }}>
              <img src={RupeeIcon} className="rect-icon" style={{ width: '20px' }} alt="rupee-icon"></img>
            </div>
            <div className="rect-body">
              Payment Summary
        </div>
            <div style={{ margin: '16px' }}>
              <img src={RightIcon} style={{ width: '15px' }} alt="right-icon"></img>
            </div>

          </div>

        </div>
      </div>




      <DemoFooter />

    </>
  );
}

export default ProfilePage;
