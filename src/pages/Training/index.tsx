import { lazy } from "react";
import { withTranslation, TFunction } from "react-i18next";
import ContentBlock from "../../components/ContentBlock";

const Container = lazy(() => import("../../common/Container"));

const Training = ({ t }: { t: TFunction }) => {
  return (
    <Container>

       <ContentBlock
        direction="right"
        title={"Beginning Training"}
        content={t("Training Text")}
        icon="nasm-5-phases-of-training.png"
        id="training"
        cropImg={true}
        recommendationHeader={t("NASM 5 Phases")}
        listItems={[
          "1. Stabilization Endurance – light weight, high reps, build balance + control",
          "2. Strength Endurance – strength + stability supersets, moderate reps",
          "3. Hypertrophy – muscle growth, moderate-heavy weight, higher volume",
          "4. Max Strength – very heavy weight, low reps, max force",
          "5. Power – explosive moves, speed + strength combined",
          
        ]}
      />

       <ContentBlock
        direction="left"
        title={"Advanced Training"}
        content={"Seed Builders is for everyone– from people just trying to get a little healthier and a litter fitter to the world's most elite athletes."}
        icon="jim-snatch.png"
        id="training"
        cropImg={true}
        recommendationHeader={"The Seed Builders diet is great for:"}
        listItems={[
          t("Collegiate or Professional Sports Athletes"),
          t("CrossFitters"),
          t("Olympic Athletes"),
          t("Powerlifters"),
          t("Bobybuilders"),
          t("Runners & Endurance Athletes"),
        ]}
      />

    </Container>
  );
};

export default withTranslation()(Training);
