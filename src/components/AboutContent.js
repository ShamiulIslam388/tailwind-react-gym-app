import BannerImage from "../images/banner-1.jpg";
import ManagementCard from "../utilities/ManagementCard";
import { aboutpageData } from "../Data.js";
const HomeContent = () => {
  return (
    <div className="container md:py-12 flex flex-col py-8 md:flex-row items-start justify-between gap-10 md:gap-20">
      <div className="md:w-full">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">
          Gym Management System
        </h1>
        <div className="h-8 mb-6">
          <img src={BannerImage} alt="about_img" className="h-full" />
        </div>
        <p className="text-gray-700 mt-4 text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam possimus
          accusantium at quidem est officiis doloribus tempore ipsum laudantium
          blanditiis, consectetur quibusdam atque perspiciatis temporibus
          cupiditate quisquam cumque qui nobis. Odio consequuntur quasi aperiam
          quos veniam deleniti fugiat, soluta aliquid non eius laborum voluptas
          nostrum impedit porro dolores vero dignissimos iusto obcaecati
        </p>
        <p className="text-gray-700 mt-4 text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          animi dolorem recusandae fugit impedit facere voluptatibus et officia
          architecto, fugiat consectetur nulla dolores libero quo distinctio ad,
          ut consequuntur laborum non blanditiis debitis tenetur, quidem
          sapiente! Odio, illum quae perferendis quibusdam veritatis dolorum
          molestiae aspernatur soluta quis commodi delectus cum possimus nobis
          nulla nemo sapiente expedita neque cumque reprehenderit consequuntur
          cupiditate aliquam. Nisi minima officiis temporibus dolores
        </p>
      </div>
      <div className="md:w-6/12">
        <h2 className="text-3xl mb-4 font-semibold">Shift Management</h2>
        {aboutpageData.map((data, index) => (
          <ManagementCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default HomeContent;
