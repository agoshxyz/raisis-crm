import React, { useState } from "react";
import Slider from "react-input-slider";
import { useNavigate } from "react-router-dom";
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
import Arrow from "../../assets/images/arrow.svg";
import Plus from "../../assets/images/plus.svg";
import QuestionsCircle from "../../assets/images/questionsCircle.png";
import Save_tag from "../../assets/images/save_tag.png";
import Footer1 from "../../assets/images/footer1.png";
import Footer2 from "../../assets/images/footer2.png";
import LogoFooter from "../../assets/images/logoFooter.png";
import RaisisMed from "../../assets/images/raisisMed.png";
import RaisisSoftware from "../../assets/images/raisisSoftware.png";
import RaisisSoftwareWhite from "../../assets/images/raisisSoftwareWhite.png";
import DefaultLogo from "../../assets/images/defaultLogo.png";

//images Benefits
import Benefits1 from "../../assets/images/Benefits/Benefits1.png";
import Benefits2 from "../../assets/images/Benefits/Benefits2.png";
import Benefits3 from "../../assets/images/Benefits/Benefits3.png";

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

//images TestimonalsInfoBox
import Testimonals1 from "../../assets/images/Testimonals/Testimonals1.png";
import Testimonals2 from "../../assets/images/Testimonals/Testimonals2.png";
import Testimonals3 from "../../assets/images/Testimonals/Testimonals3.png";

const Home = () => {
  let navigate = useNavigate();
  const [inputState, setInputState] = useState({ x: 9 });
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };
  const handleDragEnd = () => {
    navigate("/sign-up", { replace: true });
  };

  const handleButtonClick = () => {
    navigate("/contact", { replace: true });
  };
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
              <div className={styles.discoverSliderButtonText}>
                Începe trial-ul gratuit de 14 zile{" "}
                <img src={Arrow} alt="Arrow" className={styles.arrowIcon} />
              </div>
              <Slider
                styles={{
                  track: {
                    backgroundColor: "#018CF1",
                    color: "#fff",
                    fontSize: "0.8rem",
                    borderRadius: "27.5px",
                    width: "22rem",
                    height: "55px",
                    padding: "1.25rem 2.61rem 1.25rem 4.3rem",
                    lineHeight: 1,
                    letterSpacing: "1px",
                  },
                  active: {
                    backgroundColor: "rgba(0,0,0,0.5)",
                    visibility: "hidden",
                  },
                  thumb: {
                    backgroundImage: `url("./img/round.svg")`,
                    backgroundSize: "110px 60px",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center top",
                    width: 50,
                    height: 50,
                    zIndex: 100,
                  },
                  disabled: {
                    opacity: 1,
                  },
                }}
                axis="x"
                x={inputState.x}
                xmin={0}
                xmax={100}
                onChange={setInputState}
                onDragEnd={handleDragEnd}
              ></Slider>
            </div>
            <div className={styles.discoverRoundStrokeButton}>
              <span>Discută cu noi</span>
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
          <TestimonalsInfoBox
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis."
            authorName="Nume Prenume"
            authorJob="Founder of Business Name"
            image={Testimonals1}
          />
          <TestimonalsInfoBox
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis."
            authorName="Nume Prenume"
            authorJob="Founder of Business Name"
            image={Testimonals2}
          />
          <TestimonalsInfoBox
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis."
            authorName="Nume Prenume"
            authorJob="Founder of Business Name"
            image={Testimonals3}
          />
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
        <div className={styles.faqTitles}>
          <div className={styles.faqTitle}>LOREM IPSUM DOLOR SIT AMET</div>
          <div className={styles.faqSubTitle}>
            Lorem ipsum dolor sit ametur features
          </div>
        </div>

        <div className={styles.faqBox}>
          <div className={styles.faqQuestionsGroup}>
            <div className={styles.faqQuestionElement}>
              Lorem ipsum dolor sit ame
              <img
                src={Plus}
                className={styles.faqQuestionPlusIcon}
                alt="plus-icon"
              />
            </div>
            <div className={styles.faqQuestionElement}>
              Lorem ipsum dolor sit ame
              <img
                src={Plus}
                className={styles.faqQuestionPlusIcon}
                alt="plus-icon"
              />
            </div>
            <div className={styles.faqQuestionElement}>
              Lorem ipsum dolor sit ame
              <img
                src={Plus}
                className={styles.faqQuestionPlusIcon}
                alt="plus-icon"
              />
            </div>
            <div className={styles.faqQuestionElement}>
              Lorem ipsum dolor sit ame
              <img
                src={Plus}
                className={styles.faqQuestionPlusIcon}
                alt="plus-icon"
              />
            </div>
            <div className={styles.faqQuestionElement}>
              Lorem ipsum dolor sit ame
              <img
                src={Plus}
                className={styles.faqQuestionPlusIcon}
                alt="plus-icon"
              />
            </div>
            <div className={styles.faqQuestionElement}>
              Lorem ipsum dolor sit ame
              <img
                src={Plus}
                className={styles.faqQuestionPlusIcon}
                alt="plus-icon"
              />
            </div>
            <div className={styles.faqQuestionElement}>
              Lorem ipsum dolor sit ame
              <img
                src={Plus}
                className={styles.faqQuestionPlusIcon}
                alt="plus-icon"
              />
            </div>
            <div className={styles.faqQuestionElement}>
              Lorem ipsum dolor sit ame
              <img
                src={Plus}
                className={styles.faqQuestionPlusIcon}
                alt="plus-icon"
              />
            </div>
          </div>

          <div className={styles.faqQuestionBox}>
            <img src={QuestionsCircle} width={48} height={48} alt="plus-icon" />
            <div className={styles.faqQuestionBoxText}>
              Got questions about RaisisCRM benefits? We’re here to help.
            </div>
            <div
              className={styles.faqQuestionBoXButton}
              onClick={handleButtonClick}
            >
              Ia legătura cu noi
            </div>
          </div>
        </div>
      </div>

      <Benefits
        title="Connect your favorite tools"
        subTitle="Team up with your favorite apps "
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."
        image={Benefits3}
      />

      <div className={styles.pricingCaption}>
        <div className={styles.pricingTitle}>STREAMLINE YOUR PROCESSES</div>
        <div className={styles.pricingSubTitle}>
          Choose the right solution for your business
        </div>
        <div className={styles.pricingWarning}>
          Start a 14 day free trial - no credit card required!
        </div>
      </div>

      <div className={styles.pricingCardTitle}>
        Choose your billing:
        <img src={Save_tag} className={styles.saveTag} alt="save-tag" />
      </div>

      <div className={styles.pricingComponentButton}>
        <div
          className={
            isActive
              ? styles.pricingComponentWhite
              : styles.pricingComponentBlue
          }
          onClick={toggleClass}
        >
          Anual
        </div>
        <div
          className={
            isActive
              ? styles.pricingComponentBlue
              : styles.pricingComponentWhite
          }
          onClick={toggleClass}
        >
          Lunar
        </div>
      </div>

      <div className={styles.pricingComponentSection}>
        <div className={styles.pricingComponentBox}>
          <div className={styles.priceType}> Basic</div>
          <div className={styles.priceInfo}>
            {" "}
            Our basic plan with full G Suite integration is the perfect
            lightweight solution for you. 3-seat limit.
          </div>
          <div className={styles.pricePrice}> {isActive ? "$25" : "$35"}</div>
          <div className={styles.pricePeriod}>
            {" "}
            Per user, per month. Billed annually.
          </div>
          <div className={styles.priceTransparentButton}>
            <span>Încearcă gratuit</span>
          </div>
        </div>
        <div className={styles.pricingComponentBox}>
          <div className={styles.pricingComponentBoxFeautured}>
            Most popular
          </div>
          <div className={styles.priceType}> Organization</div>
          <div className={styles.priceInfo}>
            Our basic plan with full G Suite integration is the perfect
            lightweight solution for you. 3-seat limit.
          </div>
          <div className={styles.pricePrice}> {isActive ? "$25" : "$35"} </div>
          <div className={styles.pricePeriod}>
            {" "}
            Per user, per month. Billed annually.
          </div>
          <div className={styles.priceBlueButton}>
            <span>Încearcă gratuit</span>
          </div>
        </div>
        <div className={styles.pricingComponentBox}>
          <div className={styles.priceType}> Enterprise</div>
          <div className={styles.priceInfo}>
            Our basic plan with full G Suite integration is the perfect
            lightweight solution for you. 3-seat limit.
          </div>
          <div className={styles.pricePrice}> {isActive ? "$25" : "$35"} </div>
          <div className={styles.pricePeriod}>
            {" "}
            Per user, per month. Billed annually.
          </div>
          <div className={styles.priceTransparentButton}>
            <span>Încearcă gratuit</span>
          </div>
        </div>
      </div>

      <div className={styles.priceButtons}>
        <div className={styles.priceDarkBlueButton}>
          See & compare all plans
        </div>
        <div className={styles.priceTransparentButton}>
          Request custom quote
        </div>
      </div>

      <div className={styles.footerManagerBusiness}>
        <div className={styles.footerManagerSection1}>
          <img src={Footer1} alt="Footer1" />
        </div>
        <div className={styles.footerManagerSectionMain}>
          <div className={styles.footerManagerSectionMainTitle}>
            Managing business has never been so easy.
          </div>
          <div className={styles.footerManagerSectionMainSubTitle}>
            Don't hesitate. Our experts are here to show you how our application
            can streamline the way your team works.
          </div>
          <div className={styles.discoverSliderButton}>
            <div className={styles.discoverSliderButtonText}>
              Începe trial-ul gratuit de 14 zile{" "}
              <img src={Arrow} alt="Arrow" className={styles.arrowIcon} />
            </div>
            <Slider
              styles={{
                track: {
                  backgroundColor: "#018CF1",
                  color: "#fff",
                  fontSize: "0.8rem",
                  borderRadius: "27.5px",
                  width: "22rem",
                  height: "55px",
                  padding: "1.25rem 2.61rem 1.25rem 4.3rem",
                  lineHeight: 1,
                  letterSpacing: "1px",
                },
                active: {
                  backgroundColor: "rgba(0,0,0,0.5)",
                  visibility: "hidden",
                },
                thumb: {
                  backgroundImage: `url("./img/round.svg")`,
                  backgroundSize: "110px 60px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center top",
                  width: 50,
                  height: 50,
                  zIndex: 100,
                },
                disabled: {
                  opacity: 1,
                },
              }}
              axis="x"
              x={inputState.x}
              xmin={0}
              xmax={100}
              onChange={setInputState}
              onDragEnd={handleDragEnd}
            ></Slider>
          </div>
          <div className={styles.footerManagerSectionMainSubTitle}>
            sau descarcă acum aplicația RaisisCRM
          </div>
          <div className={styles.footerManagerSectionMainMobileStoreLogos}>
            <img src={AppStore} alt="AppStore" />
            <img src={GooglePlay} alt="GooglePlay" />
          </div>
        </div>
        <div className={styles.footerManagerSection2}>
          <img src={Footer2} alt="Footer2" />
        </div>
      </div>

      <div className={styles.footerMain}>
        <img
          src={LogoFooter}
          width={65}
          height={50.13}
          className={styles.footerMainLogo}
          alt="Logo Footer"
        />
        <div className={styles.footerMainComponents}>
          <div className={styles.footerMainStreamline}>
            <div className={styles.footerMainTitle}>
              Streamlining your business processes.
            </div>
            <div className={styles.footerMainStreamlineDescription}>
              Ușurăm automatizarea activităților clinicilor medicale din
              România, oferindu-le timpul necesar pentru a se focusa pe ceea ce
              contează cu adevărat.
            </div>
          </div>
          <div className={styles.footerMainProduct}>
            <div className={styles.footerMainTitle}>Product</div>
            <div className={styles.footerMainTitleList}>
              <div>Acasă</div>
              <div>Funcționalități</div>
              <div>Prețuri</div>
              <div>Contact</div>
            </div>
          </div>
          <div className={styles.footerMainCompany}>
            {" "}
            <div className={styles.footerMainTitle}>Company</div>
          </div>
          <div className={styles.footerMainSupport}>
            {" "}
            <div className={styles.footerMainTitle}>Support</div>
          </div>
        </div>
      </div>

      <div className={styles.footerLogos}>
        <div className={styles.footerLogosSection1}>
          Discover other Raisis tools:
        </div>
        <div className={styles.footerLogosSection2}>
          <img src={RaisisMed} alt="RaisisMed" />
        </div>
        <div className={styles.footerLogosSection3}>
          <img src={RaisisSoftware} alt="RaisisSoftware" />
        </div>
      </div>

      <div className={styles.footerFooter}>
        <div className={styles.footerFooterItem1}>
          Designed by <img src={DefaultLogo} alt="Default logo" />
        </div>
        <div className={styles.footerFooterItem2}>
          <img src={RaisisSoftwareWhite} alt="RaisisSoftwareWhite" />
        </div>
        <div className={styles.footerFooterItem3}>
          © RaisisCRM 2021. All Rights Reserved
        </div>
      </div>
    </>
  );
};

export default Home;
