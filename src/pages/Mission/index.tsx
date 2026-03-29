import { lazy } from "react";
import { withTranslation, TFunction } from "react-i18next";

const Container = lazy(() => import("../../common/Container"));

const CircleTime = ({ t }: { t: TFunction }) => {
  return (
    <Container>
        <br/>
        <br/>
        <h3>Mission</h3>
        <p>The purpose of the Seed Builders Foundation is to provide an inclusive community cultivating health, strength, and overall well-being.</p>
        <br/>
        <p>We do this by promoting nutrient-dense, plant-based foods— especially seeds like hemp hearts, pumpkin seeds, and chia seeds— as foundational tools for wellness.</p>
        <br/>
        <br/>
    </Container>
  );
};

export default withTranslation()(CircleTime);
