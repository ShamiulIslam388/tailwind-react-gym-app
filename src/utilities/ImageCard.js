const ImageCard = ({ image }) => {
  return (
    <div className="w-full text-center border border-gray-200">
      <img
        src={image.imageM}
        alt=""
        className="h-48 object-cover w-full"
        style={{ height: "220px" }}
      />
      <div className="text-gray-500 py-3">{image.description}</div>
    </div>
  );
};

export default ImageCard;
