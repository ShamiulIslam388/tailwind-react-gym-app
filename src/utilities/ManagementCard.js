const ManagementCard = ({ data }) => {
  console.log("data", data);
  return (
    <div className="flex flex-col py-4">
      <div className="flex">
        <img src={data.imageM} className="w-24 mr-2" />
        <div className="text-xs">{data.description}</div>
      </div>
      <div className="text-xs mt-2">{data.date}</div>
    </div>
  );
};

export default ManagementCard;
