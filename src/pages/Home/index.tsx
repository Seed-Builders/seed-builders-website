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
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      />



      {/* <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      /> */}



      <ContentBlock
        direction="left"
        title={NutritionContent.title}
        content={NutritionContent.text}
        // section={NutritionContent.section}
        icon="graphs.svg"
        id="nutrition"

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
        title={SupplementsContent.title}
        content={SupplementsContent.text}
        icon="product-launch.svg"
        id="supplements"

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
        icon="waving.svg"
        id="training"
        // Pass the list and the recommendation header as props
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
        icon="waving.svg"
        id="sleep"

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
