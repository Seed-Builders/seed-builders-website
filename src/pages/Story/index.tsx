import { lazy } from "react";
import { withTranslation, TFunction } from "react-i18next";
import ContentBlock from "../../components/ContentBlock";

const Container = lazy(() => import("../../common/Container"));

const Team = ({ t }: { t: TFunction }) => {
  return (
    <Container>

      <ContentBlock
        direction="left"
        title={"Story"}
        content={""}
        // section={NutritionContent.section}
        icon="jim-red-tie.JPG"
        id="nutrition"
        cropImg={false}
        recommendationHeader={""}
        listItems={[
          "Jim Lynch grew up in southern New Jersey to two technologist parents who loved him very much (and still do).",
          "When he was two years old his mother accidently let him drink and entire bottle of dish soap which resulted in unusual long-term gut and immune system sensitivites.",
          "Jim ended up turning this curse into a spider-man spider bite superpower as this forced him to find a balanced diet that was low inflammation, low histamine, low allergen, low FODMAP, low insulin spiking... and that diet became the Seed builders Foundational Foods.",
          "Jim has 20+ years of experience doing CrossFit, olympic weightlifting, and sports like Tennis and Snowboarding, and he has a very fitness-minded approach to nutrition and lifestyle choices that helps all five pillars of the Seed Builders support each other."
          // "Our Mission",
          // "Founding Story",
          // "The Seed Builders Team",
          // "Measurable Team"
        ]}

      />

    </Container>
  );
};

export default withTranslation()(Team);
