import { lazy } from "react";
import { withTranslation, TFunction } from "react-i18next";
import ContentBlock from "../../components/ContentBlock";

const Container = lazy(() => import("../../common/Container"));

const Training = ({ t }: { t: TFunction }) => {
  return (
    <Container>

       <ContentBlock
        direction="left"
        title={t("Training Title")}
        content={t("Training Text")}
        icon="jim-snatch.png"
        id="training"
        cropImg={true}
        recommendationHeader={t("We Recommend Training")}
        listItems={[
          t("Olympic Weightlifting"),
          t("CrossFit"),
          t("Powerlifting"),
          t("Yoga"),
          t("Sports"),
          t("Cables & Machines"),
        ]}
      />

    </Container>
  );
};

export default withTranslation()(Training);
