import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import NutritionContent from "../../content/NutritionContent.json";
import SupplementsContent from "../../content/SupplementsContent.json";
import TrainingContent from "../../content/TrainingContent.json";
import SleepContent from "../../content/SleepContent.json";
import ContactContent from "../../content/ContactContent.json";
import { withTranslation, TFunction } from "react-i18next";
import { Row, Col, Drawer } from "antd";
import { SvgIcon } from "../../common/SvgIcon";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = ({ t }: { t: TFunction }) => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={t("IntroContent Title")}
        content={t("IntroContent Text")}
        button={[{title: t("Button1"), linkTo: "https://calendly.com/seedbuilderjim/30min"}, 
          {title: t("Button2"), linkTo: "https://pushpress.com"}]}
        icon="developer.svg"
        id="intro"
        cropImg={false}
      />


      {/* <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      /> */}


      <ContentBlock
        direction="left"
        title={t("Nutrition Title")}
        content={t("Nutrition Text")}
        // section={NutritionContent.section}
        icon="graphs.svg"
        id="nutrition"
        cropImg={false}
        recommendationHeader={t("We Recommend Nutrition")}
        listItems={[
          t("Eating TONS of seeds"),
          t("Eating lots of low starch vegetables"),
          t("Eating some fruit"),
          t("Eating a small amount of starchy foods"),
          t("Eating little to no added sugar"),
        ]}
        
      />

      <ContentBlock
        direction="right"
        title={t("Supplements Title")}
        content={t("Supplements Text")}
        icon="supplements.png"
        id="supplements"
        cropImg={true}
        recommendationHeader={t("We Recommend Supplements")}
        listItems={[
          t("Vitamins..."),
          t("Amino Acids..."),
          t("Creatine..."),
          t("DHA..."),
        ]}
      />

      <ContentBlock
        direction="left"
        title={t("Training Title")}
        content={t("Training Text")}
        icon="2018-10-11_Snatch_(Weightlifting_Boys'_77kg)_at_2018_Summer_Youth_Olympics_by_Sandro_Halank–175.jpg"
        id="training"
        cropImg={true}
        recommendationHeader={t("We Recommend Training")}
        listItems={[
          t("Olympic Weightlifting"),
          t("CrossFit"),
          t("Powerlifting"),
          t("Yoga"),
          t("Sports"),
        ]}
      />

      <ContentBlock
        direction="right"
        title={t("Sleep Title")}
        content={t("Sleep Text")}
        icon="sleep.jpg"
        id="sleep"
        cropImg={true}
        recommendationHeader={t("We Recommend Sleep")}
        listItems={[
          t("8 - 10 hours of sleep per day"),
          t("Sleep in a cool, dark room"),
          t("Keep a consistent schedule")
        ]}
      />

      {/* <Contact
        title={t("Contact Us")}
        content={t("Send us a message and we'll get back to you soon!")}
        id="contact"
      /> */}
      <br />
      <br />
      <br />
      <br />
    </Container>
  );
};

export default withTranslation()(Home);
