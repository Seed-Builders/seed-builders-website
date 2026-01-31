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
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <ContentBlock
        direction="left"
        title={NutritionContent.title}
        content={NutritionContent.text}
        section={NutritionContent.section}
        icon="graphs.svg"
        id="nutrition"
      />
      <ContentBlock
        direction="right"
        title={SupplementsContent.title}
        content={SupplementsContent.text}
        icon="product-launch.svg"
        id="supplements"
      />
      <ContentBlock
        direction="left"
        title={TrainingContent.title}
        content={TrainingContent.text}
        icon="waving.svg"
        id="training"
      />
      <ContentBlock
        direction="left"
        title={SleepContent.title}
        content={SleepContent.text}
        icon="waving.svg"
        id="sleep"
      />
      <Contact
        title={t("Contact Us")}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default withTranslation()(Home);
