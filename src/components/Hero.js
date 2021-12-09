import HeroImage from "../images/banner.jpg";
const Hero = () => {
  return (
    <div className="">
      <img
        src={HeroImage}
        alt="Hero"
        className="h-auto md:h-primary bg-cover object-cover w-full"
      />
    </div>
  );
};

export default Hero;
