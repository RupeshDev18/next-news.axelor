import Image from "next/image";

const NewsBox = ({
  image,
  category,
  color,
}: {
  image: string;
  category: number[];
  color: string[];
}) => {
  return (
    <div className="flex flex-col w-1/2 justify-center items-center rounded-sm overflow-hidden shadow-md  h-full">
      <div className="w-full !h-[250px] relative">
        <Image fill src={image} className="object-cover" alt="" />
      </div>
      <div className="flex flex-col gap-4 p-2 rounded-b-2xl h-full ">
        <div className="flex flex-row gap-2">
          {category.map((item, index) => {
            const bgColor = color[item] || "violet";
            return (
              <button
                key={index}
                className={`bg-${bgColor}-300 text-${bgColor}-900 p-2 rounded-lg mr-2`}
              >
                Category
              </button>
            );
          })}
        </div>
        <p className="text-black text-2xl font-bold">News Title</p>
        <p className="text-black font-sans overflow-hidden">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ad iure
          voluptate aliquam?
        </p>
        <p className="text-sm text-gray-500 font-bold ">6 hours ago</p>
      </div>
    </div>
  );
};
export default NewsBox;
