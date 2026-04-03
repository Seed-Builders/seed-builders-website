import { lazy } from "react";
import { withTranslation, TFunction } from "react-i18next";
import ContentBlock from "../../components/ContentBlock";

const Container = lazy(() => import("../../common/Container"));

const Impact = ({ t }: { t: TFunction }) => {
  return (
    <Container>

      <ContentBlock
        direction="left"
        title={"Impact"}
        content={`So far we have positively impacted two people so far– Lasha Krikheli and Julio Anibal De La Cruz.`}
        // section={NutritionContent.section}
        icon="graphs.svg"
        id="nutrition"
        cropImg={false}
        recommendationHeader={""}
        listItems={[
          // "Our Mission",
          // "Founding Story",
          // "The Seed Builders Team",
          // "Measurable Impact"
        ]}

      />

    </Container>
  );
};

export default withTranslation()(Impact);
