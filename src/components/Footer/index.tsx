import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
  LargeExternal,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contact")}</Language>
              {/* <Large to="/">{t("Tell us everything")}</Large> */}
              <Para>
                {t(`Do you have any question? Feel free to reach out.`)}
              </Para>
              <a href="mailto:seedbuilderjim@gmail.com">
                <Chat>{t(`Email Us`)}</Chat>
              </a>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Get Involved")}</Title>
              <LargeExternal href="https://calendly.com/seedbuilderjim/30min">{t("Book a remote coaching session")}</LargeExternal>
              <LargeExternal href="https://www.pushpress.com">{t("Join a Fitness Class")}</LargeExternal>
              
              <span onClick={() => alert("Coaching certifications coming soon!")}>

                <Large to="/">{t("Become a Certified Coach")}</Large>
              </span>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Empty />
              <Empty />
              <Empty />
              {/* <Large to="/">{t("Support Center")}</Large>
              <Large to="/">{t("Customer Support")}</Large> */}
            </Col>
          </Row>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Empty />
              <Language>{t("Address")}</Language>
              <Para>{t("Seed Builders Headquarters")}</Para>
              <Para>{t("3415 31st Ave")}</Para>
              <Para>{t("Astoria, New York")}</Para>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Core Principles")}</Title>
              <Large to="/">{t("Nutrition")}</Large>
              <Large to="/">{t("Supplements")}</Large>
              <Large to="/">{t("Training")}</Large>
              <Large to="/">{t("Sleep")}</Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Label htmlFor="select-lang">{t("Language")}</Label>
              <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange("en")}>
                  <SvgIcon
                    src="united-states.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
                <LanguageSwitch onClick={() => handleChange("es")}>
                  <SvgIcon
                    src="spain.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
              </LanguageSwitchContainer>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="SeedBuilders-cropped.svg"
                  aria-label="homepage"
                  width="101px"
                  height="101px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="https://github.com/orgs/Seed-Builders"
                src="github.svg"
              />
              <SocialLink
                href="https://x.com/SeedBuilderJim"
                src="twitter.svg"
              />
              <SocialLink
                href="https://www.linkedin.com/company/seed-builders"
                src="linkedin.svg"
              />
              <SocialLink
                href="https://medium.com/@seedbuilderjim"
                src="medium.svg"
              />
              {/* <a
                href="https://ko-fi.com/Y8Y7H8BNJ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  height="36"
                  style={{ border: 0, height: 36 }}
                  src="https://storage.ko-fi.com/cdn/kofi3.png?v=3"
                  alt="Buy Me a Coffee at ko-fi.com"
                />
              </a> */}
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
