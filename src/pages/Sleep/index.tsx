import { lazy } from "react";
import { withTranslation, TFunction } from "react-i18next";
import ContentBlock from "../../components/ContentBlock";

const Container = lazy(() => import("../../common/Container"));

const Nutrition = ({ t }: { t: TFunction }) => {
  return (
    <Container>

      <ContentBlock
        direction="right"
        title={t("Sleep Title")}
        content={t("Sleep Text")}
        icon="sleep.jpg"
        id="sleep"
        cropImg={true}
        recommendationHeader={t("We Recommend Sleep")}
        listItems={[
          t("Aim for 8 - 10 hours of sleep per day."),
          t("Sleep in a cool, dark room."),
          t("Keep a consistent schedule."),
          t("Use breathing aids."),
          t("Take advantage of naps if you can."),
          `Have a "wind down" routine.`
        ]}
      />

    </Container>
  );
};

export default withTranslation()(Nutrition);
