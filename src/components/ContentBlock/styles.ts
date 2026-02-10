import { Row } from "antd";
import styled from "styled-components";

export const ContentSection = styled("section")`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
  font-size: 1.3125rem; /* Equivalent to 21px */
  line-height: 1.5;
  color: #18216d;
`;

export const StyledRow = styled(Row)`
  flex-direction: ${({ direction }: { direction: string }) =>
    direction === "left" ? "row" : "row-reverse"};
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;

  h6 {
    font-size: 3rem; /* Equivalent to 48px */
    line-height: 1.2;
    margin-bottom: 1.5rem;
    color: #004225;
  }

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export const MinTitle = styled("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`;

export const MinPara = styled("p")`
  font-size: 13px;
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  // button:last-child {
  //   margin-left: 20px;
  // }
`;

export const StyledList = styled("ul")`
  list-style: none;
  padding: 0;
  margin-top: 1rem;

  li {
    display: flex;
    align-items: center;
    font-size: 1.1875rem; /* Equivalent to 19px */
    color: #18216d;
    margin-bottom: 0.75rem;

    &:before {
      content: "•";
      color: #004225;
      font-size: 2rem; /* Large accent bullet */
      margin-right: 1rem;
      line-height: 0;
    }
  }

  .button {
    padding-left: .25rem;
    padding-right: .25rem;
  }
`;

export const RecommendationTitle = styled("h5")`
  font-size: 1.375rem; /* Equivalent to 22px */
  font-weight: 700;
  color: #004225;
  margin-bottom: 1rem;
`;