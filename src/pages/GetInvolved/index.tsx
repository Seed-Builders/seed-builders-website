import { lazy } from "react";
import { withTranslation, TFunction } from "react-i18next";

const Container = lazy(() => import("../../common/Container"));

const GetInvolved = ({ t }: { t: TFunction }) => {
  return (
    <Container>
        <br/>
        <br/>
        <h3>Get Involved</h3>
        <br/>
        <p>There are plenty of ways to get involved with The Seed Builders Foundation!.</p>
        <br/>
        <hr/>
        <br/>
        <br/>
        <h5>Join Us For Circle Time</h5>
        <p>Come for a free session!<br/><br/><b><i><a href="/circle-time">Learn More About Seeds Builders Circle</a></i></b></p>
        
        <br/>
        <br/>
        <hr/>
        <br/>
        <br/>
        <h5>Donate To The Cause!</h5>
        <p>We truly appreciate all donations and subscribers to our cause.<br/><br/><b><i><a href="/donate">Learn More About Donating</a></i></b></p>
        <br/>
        <br/>
        <br/>
    </Container>
  );
};

export default withTranslation()(GetInvolved);
