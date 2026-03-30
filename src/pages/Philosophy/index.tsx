import { lazy } from "react";
import { withTranslation, TFunction } from "react-i18next";
import ContentBlock from "../../components/ContentBlock";

const Container = lazy(() => import("../../common/Container"));

const Nutrition = ({ t }: { t: TFunction }) => {
  return (
    <Container>

      <ContentBlock
        direction="left"
        title={"Philosphy"}
        content={"Our philosophy for peak wellness and athletic performance involves "}
        // section={NutritionContent.section}
        icon="seed-builders-five-pillars.png"
        id="nutrition"
        cropImg={false}
        recommendationHeader={"Five Pillars of Seed Builders:"}
        listItems={[
          "Nutrition: Eating a balanced diet with seeds as the foundation and hitting your daily target for calories, macros, and vitamins.",
          "Supplements: Supplementing any missing vitamins and miterals with additional optional supplements for better inflammation, sleep, and recovery.",
          "Training: Exercising and progressing in terms of strength, atheleticism, and endurance.",
          "Sleep: Getting good, quality recovery and sleep.",
          "Spirituality: Having a moral compass and purpose in life.",
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

export default withTranslation()(Nutrition);
