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
      />

       <p>
        {/* {t("We Recommend Sleep")} */}
        We Recommend:
      </p>

      <ul>
        <li>{"Eating TONS of seeds."}</li>
        <li>{"Eating lots of low starch vegetables."}</li>
        <li>{"Eating some fruit."}</li>
        <li>{"Eating a small amount of starchy foods."}</li>
        <li>{"Eating little to no added sugar."}</li>
        
      </ul>


      <ContentBlock
        direction="right"
        title={SupplementsContent.title}
        content={SupplementsContent.text}
        icon="product-launch.svg"
        id="supplements"
      />

      <p>
        {/* {t("We Recommend Sleep")} */}
        We Recommend:
      </p>

      <ul>
        <li>{"Vitamins, especially those that are hard to get on a vegan diet: B12, Vitamin D, Iron, Calcium, and Iodine,"}</li>
        <li>{"Amino Acids: Supplementing with Lysine and Leucine helps the body more fully absorb seed protein to synthesize muscle."}</li>
        <li>{"Creatine: to help your muscles make energy faster and recover better."}</li>
        <li>{"DHA & EPA Omega 3s (Usually in the form of fish oil, krill oil, or cod liver oil)"}</li>
        {/* <li>{t("8 - 10 Hours of Sleep Per Day")}</li>
        <li>{t("Sleep In a Dark, Cool Place")}</li>
        <li>{t("Keep a Consistent Schedule")}</li> */}
      </ul>

      <ContentBlock
        direction="left"
        title={t("Training Title")}
        content={t("Training Text")}
        icon="waving.svg"
        id="training"
      />

      <p>
        {t("We Recommend Training")}
      </p>

      <ul>
        <li>{t("Olympic Weightlifting")}</li>
        <li>{t("CrossFit")}</li>
        <li>{t("Powerlifting")}</li>
        <li>{t("Yoga")}</li>
        <li>{t("Sports")}</li>
      </ul>


      <ContentBlock
        direction="right"
        title={t("Sleep Title")}
        content={t("Sleep Text")}
        icon="waving.svg"
        id="sleep"
      />

      <p>
        {t("We Recommend Sleep")}
      </p>

      <ul>
        <li>{t("8 - 10 Hours of Sleep Per Day")}</li>
        <li>{t("Sleep In a Dark, Cool Place")}</li>
        <li>{t("Keep a Consistent Schedule")}</li>
      </ul>

      {/* <Contact
        title={t("Contact Us")}
        content={t("Send us a message and we'll get back to you soon!")}
        id="contact"
      /> */}
      <br/>
      <br/>
      <br/>
      <br/>
    </Container>
  );
};

export default withTranslation()(Home);
