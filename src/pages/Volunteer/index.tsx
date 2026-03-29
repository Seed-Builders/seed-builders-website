import { lazy } from "react";
import { withTranslation, TFunction } from "react-i18next";

const Container = lazy(() => import("../../common/Container"));

const Volunteer = ({ t }: { t: TFunction }) => {
  return (
    <Container>
        <br/>
      <h2>Volunteer</h2>
    </Container>
  );
};

export default withTranslation()(Volunteer);
