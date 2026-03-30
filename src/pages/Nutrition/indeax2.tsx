import { lazy } from "react";
import { withTranslation, TFunction } from "react-i18next";
import ContentBlock from "../../components/ContentBlock";

const Container = lazy(() => import("../../common/Container"));

const Nutrition = ({ t }: { t: TFunction }) => {
    return (
        <Container>

            <ContentBlock
                direction="left"
                title={t("Nutrition Title")}
                content={""}
                // section={NutritionContent.section}
                icon="graphs.svg"
                id="nutrition"
                cropImg={false}
                recommendationHeader={"Nutrition is about basically three things:"}
                listItems={[
                    "1) Food Selection",
                    "2) Amounts",
                    "3) Vitamins & Minerals",
                ]}

            />

            <ContentBlock
                direction="left"
                title={"Food Selection"}
                content={"The Seeds Builders Pyramid is a conservative baseline of foundational foods and proportions your should eat them. Note that it is OK to sparingly mix in foods not mentioned in this foundational food pyramid."}
                // section={NutritionContent.section}
                icon="graphs.svg"
                id="nutrition"
                cropImg={false}
                recommendationHeader={t("We Recommend Nutrition")}
                listItems={[
                    t("Eating TONS of seeds"),
                    t("Eating lots of low starch vegetables"),
                    t("Eating some fruit"),
                    t("Eating a small amount of starchy foods"),
                    t("Eating little to no added sugar"),
                    // t("Decide on a daily target of calories and macronutrients"),
                ]}

            />


            <ContentBlock
                direction="left"
                title={"Amounts"}
                content={"How much of eat food your eat is arguably just as important as what you eat."}
                // section={NutritionContent.section}
                icon="graphs.svg"
                id="nutrition"
                cropImg={false}
                recommendationHeader={t("We Recommend Nutrition")}
                listItems={[
                    t("Find your target for daily calory intake depending on your weight, activity level, goals, and general daily metabolic burn rate."),
                    t("Decide on your target macros (protein, carbs, and fat)."),
                    t("Use tracker apps like Macros to keep yourself honest."),
                    // t("Eating a small amount of starchy foods"),
                    // t("Eating little to no added sugar"),
                    // t("Decide on a daily target of calories and macronutrients"),
                ]}

            />

            <ContentBlock
                direction="left"
                title={"Vitamins & Minerals"}
                content={"In order to sustain overall general wellbeing and avoid diseases in the long run it is important to get within the recommended ranges for all known vitamins and minerals used by the human body."}
                // section={NutritionContent.section}
                icon="graphs.svg"
                id="nutrition"
                cropImg={false}
                recommendationHeader={t("Important ones to be mindful of (especially for pure vegans):")}
                listItems={[
                    "B12",
                    "Calium",
                    "Iondine",
                    // t("Eating a small amount of starchy foods"),
                    // t("Eating little to no added sugar"),
                    // t("Decide on a daily target of calories and macronutrients"),
                ]}

            />



        </Container>
    );
};

export default withTranslation()(Nutrition);
