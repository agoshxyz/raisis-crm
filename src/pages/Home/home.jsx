import React, { useState } from "react";
import Slider from "react-input-slider";
import { Link, useNavigate } from "react-router-dom";
//styles
import styles from "./Home.module.css";

//components
import Benefits from "../../components/Benefits/Benefits";
import BenefitsReverse from "../../components/BenefitsReverse/BenefitsReverse";
import BenefitsCard from "../../components/BenefitsCard/BenefitsCard";
import TestimonalsInfoBox from "../../components/TestimonalsInfoBox/TestimonalsInfoBox";

//images Home
import checkmark from "../../assets/images/checkmark.svg";
import heroImage from "../../assets/images/hero-image.png";
import AppStore from "../../assets/images/AppStore.png";
import GooglePlay from "../../assets/images/GooglePlay.png";
import Arrow from '../../assets/images/arrow.svg'

//images Benefits
import Benefits1 from "../../assets/images/Benefits/Benefits1.png";
import Benefits2 from "../../assets/images/Benefits/Benefits2.png";

//images BenefitsReverse
import BenefitsReverse1 from "../../assets/images/BenefitsReverse/BenefitsReverse1.png";
import BenefitsReverse2 from "../../assets/images/BenefitsReverse/BenefitsReverse2.png";

//images BenefitsCard
import BenefitsCard1 from "../../assets/images/BenefitsCard/BenefitsCard1.png";
import BenefitsCard2 from "../../assets/images/BenefitsCard/BenefitsCard2.png";
import BenefitsCard3 from "../../assets/images/BenefitsCard/BenefitsCard3.png";
import BenefitsCard4 from "../../assets/images/BenefitsCard/BenefitsCard4.png";
import BenefitsCard5 from "../../assets/images/BenefitsCard/BenefitsCard5.png";
import BenefitsCard6 from "../../assets/images/BenefitsCard/BenefitsCard6.png";

const Home = () => {
  let navigate = useNavigate()
  const [state, setState] = useState({x:9})
  const handleDragEnd = () => {
    navigate('/sign-up', {replace: true})
  }
  return (
    <>
      <div className={styles.discover}>
        <div className={styles.discoverText}>
          <div className={styles.discoverTitle}> DISCOVER RAISISCRM </div>
          <div className={styles.discoverSubTitle}>
            A new way to manage people and do business.
          </div>
          <div className={styles.discoverDescription}>
            The most powerful and simple way to collaborate with your team.
            RaisisCRM lets you handle all your work in one place.
          </div>
          <div className={styles.discoverSlideBox}>
          <div className={styles.discoverSliderButton}>
          <div className={styles.discoverSliderButtonText} >
              Începe trial-ul gratuit de 14 zile <img src={Arrow} alt="Arrow" className={styles.arrowIcon}/>
            </div>
            <Slider
            styles={{
              track: {
                backgroundColor: '#018CF1',
                color: '#fff',
                fontSize: '0.8rem',
                borderRadius: '27.5px',
                width: '22rem',
                height: '55px',
                padding: '1.25rem 2.61rem 1.25rem 4.3rem',
                lineHeight: 1,
                letterSpacing: '1px'
              },
              active: {
                backgroundColor: 'rgba(0,0,0,0.5)',
                visibility: 'hidden'
              },
              thumb: {
                backgroundImage: `url("./img/round.svg")`,
                backgroundSize: '110px 60px',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center top',
                width: 50,
                height: 50,
                zIndex: 100

              },
              disabled: {
                opacity: 1
              }
            }}
            axis='x'
            x={state.x}
            xmin={0}
            xmax = {100}
            onChange={setState}
            onDragEnd={handleDragEnd}
            ></Slider>

          </div>
          {/* <img
                src={sliderButton}
                className={styles.discoverSliderRoundedButton}
                alt="slider button"
              /> */}

            <div className={styles.discoverRoundStrokeButton}>
              Discută cu noi
            </div>
          </div>

          <div className={styles.featureContainer}>
            <div className={styles.discoverCheckmark}>
              <img
                src={checkmark}
                alt="checkmark"
                className={styles.checkmark}
              />
              Create invoices &amp; estimates{" "}
            </div>
            <div className={styles.discoverCheckmark}>
              <img
                src={checkmark}
                alt="checkmark"
                className={styles.checkmark}
              />
              Track time &amp; expenses{" "}
            </div>
            <div className={styles.discoverCheckmark}>
              <img
                src={checkmark}
                alt="checkmark"
                className={styles.checkmark}
              />
              Add employees, track attendance &amp; manage leaves{" "}
            </div>
          </div>
        </div>

        <img
          className={styles.discoverImage}
          src={heroImage}
          alt="Hero Section"
        />
      </div>
      <div className={styles.partnersSection}>
        <div className={styles.logoTitle}>
          Some of the most innovative companies love RaisisCRM
        </div>
        <div className={styles.imgLogos}>
          <div className={styles.logoImg1}>
            <div className={styles.logoImgSvg}></div>
            <div className={styles.logoImgSvg}></div>
            <div className={styles.logoImgSvg}></div>
            <div className={styles.logoImgSvg}></div>
          </div>
          <div className={styles.logoImg2}>
            <div className={styles.logoImgSvg}></div>
            <div className={styles.logoImgSvg}></div>
            <div className={styles.logoImgSvg}></div>
          </div>
        </div>
      </div>
      <Benefits
        classname={styles.benefitsMarginTop}
        title="Designed to keep you selling"
        subTitle="Lorem ipsum dolor sit ametur titlus CRM"
        description="Manage your projects and your talent in a single system, resulting in
          empowered teams, satisfied clients, and increased profitability."
        image={Benefits1}
      />
      <BenefitsReverse
        title="Stay two steps ahead"
        subTitle="Lorem ipsum dolor sit ametur titlus PMS"
        description="Customizable dashboards and reports section to analyse what's working
          and what's not for your business in real-time."
        image={BenefitsReverse1}
      />
      <Benefits
        title="Know what to focus on"
        subTitle="Lorem ipsum dolor sit ametur titlus HR"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet."
        image={Benefits2}
      />
      <BenefitsReverse
        title="Lorem ipsum dolor sit amet"
        subTitle="Lorem ipsum dolor sit ametur billing"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet"
        image={BenefitsReverse2}
      />
      <div className={styles.BenefitsContainerTitle}>
        Lorem ipsum dolor sit benefits title
      </div>
      <div className={styles.benefitsContainer}>
        <BenefitsCard
          title="Manage leads &amp; deals"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          benefitsCardImage={BenefitsCard1}
        />
        <BenefitsCard
          title="Track communications"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          benefitsCardImage={BenefitsCard2}
        />
        <BenefitsCard
          title="Assign tasks"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          benefitsCardImage={BenefitsCard3}
        />
        <BenefitsCard
          title="Deal with tickets"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          benefitsCardImage={BenefitsCard4}
        />
        <BenefitsCard
          title="Track attendance &amp; leaves"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          benefitsCardImage={BenefitsCard5}
        />
        <BenefitsCard
          title="Manage billing"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          benefitsCardImage={BenefitsCard6}
        />
      </div>

      <div className={styles.testimonalsSection}>
        <div className={styles.testimonalsTitle}>TESTIMONALS</div>
        <div className={styles.testimonalsSubTitle}>
          What team leaders have to say about RaisisCRM
        </div>
        <div className={styles.testimonalsContainer}>
          <TestimonalsInfoBox />
          <TestimonalsInfoBox />
          <TestimonalsInfoBox />
        </div>
      </div>

      <div className={styles.mobileSection}>
        <div className={styles.mobileTitle}>ACCESS INSIGHT FROM ANYWHERE</div>
        <div className={styles.mobileSubTitle}>
          We work just as well on mobile devices
        </div>
        <div className={styles.mobileDescription}>
          RaisisCRM is a modern platform that supports most mediums, giving you
          the option to work from anywhere.
        </div>
        <div className={styles.mobileStores}>
          <div className={styles.mobileAppStore}>
            <img src={AppStore} alt="AppStore" />
            <div className={styles.mobileAppStoreDescription}>
              Lorem ipsum dolor sit amet consectur lorem ipsum
            </div>
          </div>
          <div className={styles.mobileSeperator}>
            <div className={styles.mobileSeperatorLeft}></div>
            <div className={styles.mobileSeperatorText}>or</div>
            <div className={styles.mobileSeperatorRight}></div>
          </div>
          <div className={styles.mobileGooglePlay}>
            <img src={GooglePlay} alt="GooglePlay" />
            <div className={styles.mobileGooglePlayDescription}>
              Lorem ipsum dolor sit amet consectur lorem ipsum
            </div>
          </div>
        </div>
      </div>

      <div className={styles.faq}>
        <div className={styles.faqTitle}>LOREM IPSUM DOLOR SIT AMET</div>
        <div className={styles.faqSubTitle}>
          Lorem ipsum dolor sit ametur features
        </div>
        <div className={styles.faqElements}>
          <div className={styles.faqBox}>
            <div className={styles.faqBoxElement}>
              Lorem ipsum dolor sit ame
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>

      <Benefits />

      <div className={styles.pricingCaption}>
        <div className={styles.pricingTitle}>STREAMLINE YOUR PROCESSES</div>
        <div className={styles.pricingSubTitle}>
          Choose the right solution for your business
        </div>
        <div className={styles.pricingWarning}>
          Start a 14 day free trial - no credit card required!
        </div>
      </div>

      <div className={styles.pricingSection}>
        <label className={styles.pricingCardTitle} htmlFor="checkbox">
          Choose your billing:
        </label>
        <span className={styles.checkboxToggler}>
          Anual
          <input type="checkbox" name="checkbox" id="checkbox" />
          <span className={styles.toggler}>Anual</span>
        </span>

        <div className={styles.pricingCard}>
          <div className={styles.pricingCardNormal}>
            <div className={styles.pricingCardTitle}>Basic</div>
          </div>

          <div className={styles.pricingCardFeatured}>
            <div className={styles.pricingCardTitle}>Basic</div>
          </div>

          <div className={styles.pricingCardNormal}>
            <div className={styles.pricingCardTitle}>Basic</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
