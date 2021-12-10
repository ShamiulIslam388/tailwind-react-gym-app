import ReactImage from "../utilities/ReactImage";
import HeroImage from "../images/banner.jpg";
const Hero = () => {
  return (
    <img
      src={HeroImage}
      alt="Hero"
      className="h-auto md:h-primary bg-cover object-cover w-full"
    />
  );
};

export default Hero;
