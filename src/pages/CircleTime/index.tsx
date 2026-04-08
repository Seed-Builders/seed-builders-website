import { lazy } from "react";
import { withTranslation, TFunction } from "react-i18next";

const Container = lazy(() => import("../../common/Container"));

const CircleTime = ({ t }: { t: TFunction }) => {
  return (
    <Container>
      <br />
      <br />
      <h3>Join Us For Circle Time</h3>
      <p>Come for a free session and talk about each of the Seed Builders core pillars are resonating with you!</p>
      <br />
      <p>See Meetup.com for upcoming events!</p>
      <br />
      <p>
        👉 &nbsp; <a href="https://www.meetup.com/seed-builders/events">https://www.meetup.com/seed-builders/events</a>
      </p>
      <br />
      <br />
    </Container>
  );
};

export default withTranslation()(CircleTime);
