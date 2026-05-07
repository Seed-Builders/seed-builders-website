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
                content={"Nutrition is the science of how food and nutrients affect the body’s growth, energy, health, and overall functioning."}
                // section={NutritionContent.section}
                icon="graphs.svg"
                id="nutrition"
                cropImg={false}
                recommendationHeader={"Nutrition science includes but is not limited to:"}
                listItems={[
                    "Energy Balance & Metabolism",
                    "Protein",
                    "Carbohydrates",
                    "Dietary Fats",
                    "Vitamins & Minerals",
                    "Hydration",
                    "Nutrient Timing",
                    "Supplements",
                    "Alcohol",
                    "The Role of Diet in Chronic Disease",
                    "The Psychology of Weight control and Behavior Change",
                    "Body Composition Testing",
                    "Navigating the Real World",
                    "Nutrition Hot Topics and Controversies",
                    "Breaking Through Plateaus",
                    "Recipes and Cooking Demonstrations",
                ]}

            />

            {/* <ContentBlock
                direction="left"
                title={"Amounts"}
                content={"How much of eat food your eat is arguably just as important as what you eat."}
                // section={NutritionContent.section}
                icon="amounts.png"
                id="nutrition"
                cropImg={false}
                recommendationHeader={t("We Recommend Nutrition")}
                listItems={[
                    t("Find your target for daily calory intake depending on your weight, activity level, goals, and general daily metabolic burn rate."),
                    t("Decide on your target macros (protein, carbs, and fat)."),
                    t("Use tracker apps like Macros make sure you're on track."),
                    t("Be aware of your sources of getting each vitamin and mineral."),
                    // t("Eating a small amount of starchy foods"),
                    // t("Eating little to no added sugar"),
                    // t("Decide on a daily target of calories and macronutrients"),
                ]}

            /> */}

            {/* <ContentBlock
                direction="right"
                title={"Food Selection"}
                content={"Here at Seed Builders we're biased towards a seed heavy diet. The Seed Builders Foundational Foods Pyramid is a recommended baseline of foundational foods and proportions for eating them. Note that it's fine to mix in foods not mentioned in this foundational food pyramid."}
                // section={NutritionContent.section}
                icon="Seed-Builders-Foundational-Foods-Pyramid.png"
                id="nutrition"
                cropImg={false}
                recommendationHeader={t("We Recommend Nutrition")}
                listItems={[
                    t("Eating TONS of seeds"),
                    t("Eating lots of low starch vegetables"),
                    t("Eating some fruit"),
                    t("Eating a small amount of starchy foods"),
                    t("Eating little to no added sugar"),
                    "Notice how the foods we should eat the MOST happen to also be the lowest in terms of glycemic index and insulin affects.",
                    "These foundational foods are what we recommend eating all day, every day– but it's perfectly fine to mix in other foods not mentioned here.",
                    // t("Decide on a daily target of calories and macronutrients"),
                ]}

            /> */}

            {/* <ContentBlock
                direction="left"
                title={"Vitamins & Minerals"}
                content={"In order to sustain overall general wellbeing and avoid diseases in the long run it is important to get within the recommended ranges for all known vitamins and minerals used by the human body."}
                // section={NutritionContent.section}
                icon="supplements.png"
                id="nutrition"
                cropImg={false}
                recommendationHeader={t("Vitamins & Minerals and their core functions:")}
                listItems={[
                    "Vitamin A: Vision (especially night vision), Immune function, Skin & cell growth",
                    "Vitamin D: Calcium absorption, Bone strength, Immune regulation, Hormone-like functions",
                    "Vitamin E: Antioxidant (protects cells from damage), Supports immune system",
                    "Vitamin K: Blood clotting, Bone metabolism",

                    "Vitamin C: Collagen production (skin, joints), Antioxidant, Immune support, Helps absorb iron",
                    "Vitamin B1: (Thiamine), Converts carbs → energy, Nerve function",
                    "Vitamin B2: (Riboflavin), Energy production, Supports skin & eyes",
                    "Vitamin B3: (Niacin), Energy metabolism, DNA repair, Nervous system support",
                    "Vitamin B5: (Pantothenic Acid), Hormone production, Fat metabolism",
                    "Vitamin B6: (Pyridoxine), Amino acid metabolism, Neurotransmitter production",
                    "Vitamin B7: (Biotin), Fat/carb metabolism, Hair, skin, nails",
                    "Vitamin B9: (Folate), DNA synthesis, Red blood cell formation, Critical in pregnancy",
                    "Vitamin B12: (Cobalamin), Nerve function, Red blood cell production, DNA synthesis",

                    "Calcium: Bones & teeth, Muscle contraction, Nerve signaling",
                    "Magnesium: 300+ enzyme reactions, Muscle & nerve function, Sleep & relaxation",
                    "Potassium: Fluid balance, Muscle contractions (including heart), Blood pressure regulation",
                    "Sodium: Fluid balance, Nerve impulses",
                    "Phosphorus: Bone structure, Energy production (ATP)",
                    "Sulfur: Protein structure, Detox pathways",

                    "Iron: Oxygen transport (hemoglobin)",
                    "Zinc: Immune function, Wound healing, Hormone production",
                    "Iodine: Thyroid hormone production (metabolism control)",
                    "Selenium: Antioxidant, Thyroid support",
                    "Copper: Iron metabolism, Connective tissue formation",
                    "Manganese: Bone formation, Metabolism",
                    "Chromium: Blood sugar regulation (insulin sensitivity)",
                    "Molybdenum: Enzyme function, Detoxification processes"
                ]}

            /> */}

            <ContentBlock
                direction="right"
                title={"Individual Foods"}
                content={`Although we LOVE hemp hearts and other seeds, we technically cannot recommend any one individual food without knowing your medical history, prescriptions, the rest of your diet, etc. Consult with your doctor(s) and find foods you enjoy, that are minimally processed, and that together hit all your targets.`}
                // section={NutritionContent.section}
                icon="seeds.png"
                id="nutrition"
                cropImg={false}
                recommendationHeader={''}
                listItems={[
                    // ""

                //    "Iodine - You can easily get iodine from iodized salt. Some foods with it are marine sources such as fish/seaweed, and/or other animal sources such as dairy/eggs.",
                //    "B12 - You can get B12 from either animal products (meat, dairy), fortified foods such as plant milks or cereal, and / or sublingual tablets or tinctures.",
                //    "Calcium - Get Calcium from dairy, leafy greens, almonds, sood foods like tofu, fortified foods, and/or vitamin tablets.",
                //    "Vitamin D - Foods with Vitamin D are primarily fatty fish (salmon, tuna, sardines), fish liver oils, egg yolks, alongside fortified products like milk, orange juice, and cereals. UV-exposed mushrooms and fortified plant-based milks (soy, almond, oat) also offer good sources." 
                   // t("Eating a small amount of starchy foods"),
                   // t("Eating little to no added sugar"),
                   // t("Decide on a daily target of calories and macronutrients"),
                ]}

            />



        </Container>
    );
};

export default withTranslation()(Nutrition);
