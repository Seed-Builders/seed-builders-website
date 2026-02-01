import { TFunction } from "react-i18next";
export interface ContentBlockProps {
  icon: string;
  title: string;
  content: string;
  section?: {
    title: string;
    content: string;
    icon: string;
  }[];
  button?: (
    | {
        title: string;
        color?: string;
        linkTo?: string | undefined;
      }
      | {
        title: string;
        color?: string;
        linkTo?: string | undefined;
      }
  )[];
  t: TFunction;
  id: string;
  direction: "left" | "right";
  recommendationHeader?: string;
  listItems?: string[];
}
