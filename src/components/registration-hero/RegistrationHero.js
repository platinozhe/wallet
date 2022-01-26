import HeroPicture from "./icon/hero-img.png";
import {
    Hero,
    HeroImage,
    HeroText,
    HeroWrapper,
} from "./style/registrationhero";

const RegistrationHero = () => {
    return (
        <Hero>
            <HeroWrapper>
                <HeroImage src={HeroPicture} />
                <HeroText>Finance App</HeroText>
            </HeroWrapper>
        </Hero>
    );
};

export default RegistrationHero;
