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
    <>
      <div className="flex flex-col w-1/2 justify-center items-center">
        <div className="h-60">
          <img className="rounded-2xl" src={image} alt="" />
        </div>
        <div className="flex flex-col gap-4 bg-white p-2 rounded-b-2xl">
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
          <p className="text-black text-3xl font-bold">News Title</p>
          <p className="text-black font-sans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ad iure
            voluptate aliquam? Quos perspiciatis repellendus, nulla iusto
            consequatur aut fuga? Facere, odio quia! Fugit ipsum cum sapiente
            atque quidem voluptates vero.
          </p>
          <p className="text-sm text-gray-500 font-bold">6 hours ago</p>
        </div>
      </div>
    </>
  );
};
export default NewsBox;
