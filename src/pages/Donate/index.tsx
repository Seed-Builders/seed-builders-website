import { lazy } from "react";
import { withTranslation, TFunction } from "react-i18next";

const Container = lazy(() => import("../../common/Container"));

const Donate = ({ t }: { t: TFunction }) => {
  return (
    <Container>
      <br />
      <br />
      <h3>Donate</h3>
      <p>We very much appreciate all donations to our meetup group!!</p>
      <br />
      <p>
        👉 &nbsp; <a href="https://www.meetup.com/seed-builders">https://www.meetup.com/seed-builders</a>
      </p>
      <br />
      <br />
    </Container>
  );
};

export default withTranslation()(Donate);
