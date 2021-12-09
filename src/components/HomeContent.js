import ManagementCard from "../utilities/ManagementCard";
import { managementData } from "../Data.js";
const HomeContent = () => {
  return (
    <div className="container md:py-20 flex flex-col py-8 md:flex-row items-start justify-between gap-10 md:gap-20">
      <div className="md:w-full">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">
          Gym Management System
        </h1>
        <p className="text-gray-700 mt-4 text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam possimus
          accusantium at quidem est officiis doloribus tempore ipsum laudantium
          blanditiis, consectetur quibusdam atque perspiciatis temporibus
          cupiditate quisquam cumque qui nobis. Odio consequuntur quasi aperiam
          quos veniam deleniti fugiat, soluta aliquid non eius laborum voluptas
          nostrum impedit porro dolores vero dignissimos iusto obcaecati
          consectetur aut inventore molestiae laudantium asperiores. Similique,
          beatae aut accusamus eos molestiae aperiam fugit aliquam? Ipsum
          aspernatur officia error placeat. Qui, incidunt commodi id corrupti
          ducimus maiores velit laboriosam nulla assumenda adipisci? Saepe
          quibusdam laudantium eaque consectetur praesentium, totam accusantium
          officia mollitia magnam iure assumenda impedit maiores natus!
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
          accusantium sed omnis illo placeat suscipit, natus beatae! Quidem eius
          quos reiciendis blanditiis maxime. Suscipit odio non saepe. Nisi
          quidem assumenda neque, commodi, sint sunt dicta molestiae culpa
          veniam veritatis, sequi architecto aperiam ab. Molestiae, facilis hic
          culpa quia asperiores quos quaerat, deserunt tempore totam rem aliquam
          reprehenderit suscipit magnam corporis odio quas eligendi, optio nam
          modi voluptatum nesciunt placeat dignissimos. Fuga debitis, illo
          voluptatibus cumque quasi inventore, recusandae aliquam a minima
          nostrum doloribus dicta cum? Animi voluptate molestiae voluptatem et
          omnis culpa nihil ipsum alias error impedit quibusdam quo nesciunt
          vitae officia, amet at, iure iusto perspiciatis possimus numquam
          laborum? Rem, fuga quia nihil eveniet asperiores, tenetur distinctio
          natus placeat vel sequi iusto illo. Numquam porro facere earum tempore
          itaque quidem repellendus dolores magnam blanditiis, nihil beatae
          aspernatur accusamus inventore iusto. Commodi.
        </p>
      </div>
      <div className="md:w-6/12">
        <h2 className="text-3xl mb-4 font-semibold">Package Management</h2>
        {managementData.map((data, index) => (
          <ManagementCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default HomeContent;
