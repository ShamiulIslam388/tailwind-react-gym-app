import ReactImage from "./ReactImage";
const ImageCard = ({ image }) => {
  return (
    <div className="w-full text-center border border-gray-200">
      <img
        src={image.imageM}
        alt="gallery image"
        style={{ height: "220px" }}
        className="w-full object-cover"
      />
      <div className="text-gray-500 py-3">{image.description}</div>
    </div>
  );
};

export default ImageCard;
