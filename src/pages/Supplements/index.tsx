import { lazy } from "react";
import { withTranslation, TFunction } from "react-i18next";
import ContentBlock from "../../components/ContentBlock";

const Container = lazy(() => import("../../common/Container"));

const Nutrition = ({ t }: { t: TFunction }) => {
  return (
    <Container>

      
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
          t("Sleep supplements like...")
        ]}
      />


    </Container>
  );
};

export default withTranslation()(Nutrition);
