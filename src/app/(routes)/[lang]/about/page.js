import { getDictionary } from "@/dictionaries";
import CustomTitle from "@/app/components/ui/title/CustomTitle";
import CustomText from "@/app/components/ui/text/CustomText";

export const metadata = {
    title: "Space & Exploration - About Us",
    description: "About our website",
};

export default async function About({ params: { lang } }) {

    const t = await getDictionary(lang);

    return (
        <CustomTitle title={t.about.title}>
            <CustomText text={t.about.message} />
        </CustomTitle>
    );
}