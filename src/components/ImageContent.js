import ImageCard from "../utilities/ImageCard";
import { ImageData } from "../Data";
const ImageContent = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {ImageData.map((image, index) => {
        return <ImageCard key={index} image={image} />;
      })}
    </div>
  );
};

export default ImageContent;
