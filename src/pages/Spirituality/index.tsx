import { lazy } from "react";
import { withTranslation, TFunction } from "react-i18next";
import ContentBlock from "../../components/ContentBlock";

const Container = lazy(() => import("../../common/Container"));

const Spirituality = ({ t }: { t: TFunction }) => {
  return (
    <Container>

      <ContentBlock
        direction="left"
        title={t("Spirituality Title")}
        content={t("Spirituality Text")}
        // section={NutritionContent.section}
        icon="spirituality.png"
        id="nutrition"
        cropImg={false}
        recommendationHeader={t("We Recommend Spirituality")}
        listItems={[
          "Having an appreciation and reverance for the universe and life itself.",
          "Being generous, compassionate, and forgiving.",
          // t("Eating TONS of seeds"),
          // t("Eating lots of low starch vegetables"),
          // t("Eating some fruit"),
          // t("Eating a small amount of starchy foods"),
          // t("Eating little to no added sugar"),
          // t("Decide on a daily target of calories and macronutrients"),
        ]}

      />

    </Container>
  );
};

export default withTranslation()(Spirituality);
