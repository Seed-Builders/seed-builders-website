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
import DropNav from "../../components/DropNav";

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
        button={[{title: t("Button1"), linkTo: "https://www.meetup.com/seed-builders/events"}, 
          // {title: t("Button2"), linkTo: "https://seedbuilders.pushpress.com/landing/calendar"},
          // {title: t("Button3"), linkTo: "https://shop.seedbuilders.org"},
        ]}
        icon="seeds.png"
        id="intro"
        cropImg={false}
      />

      <br />
      <br />
      <br />
      <br />
    </Container>
  );
};

export default withTranslation()(Home);
