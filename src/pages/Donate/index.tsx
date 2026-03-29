import { lazy } from "react";
import { withTranslation, TFunction } from "react-i18next";

const Container = lazy(() => import("../../common/Container"));

const Donate = ({ t }: { t: TFunction }) => {
  return (
    <Container>
        <br/>
        <br/>
        <h3>Donate</h3>
        <p>Feel free to support us on Pateron! (link coming soon)</p>
        <br/>
        <br/>
    </Container>
  );
};

export default withTranslation()(Donate);
