"use client";
const FeaturedNews = ({
  category,
  image,
  title,
  text,
}: {
  category: number[];
  image: string;
  title: string;
  text: string;
}) => {
  const colorMap: { [key: number]: string } = {
    1: "violet",
    2: "orange",
    3: "green",
  };

  return (
    <>
      <div className="flex flex-row w-full">
        <div className="w-1/3 rounded-2xl">
          <img src={image} className="w-40 h-32 rounded-2xl" alt="" />
        </div>
        <div className="w-2/3">
          <div className="flex justify-between">
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-2">
                {category.map((item, index) => {
                  const bgColor = colorMap[item] || "violet";
                  const textColor = colorMap[item] || "violet";
                  return (
                    <button
                      key={index}
                      className={`bg-${bgColor}-300 text-${textColor}-900 p-2 rounded-lg`}
                    >
                      Category
                    </button>
                  );
                })}
              </div>

              <p className="font-bold text-2xl text-black font-sans">{title}</p>
              <p className="text-sm font-bold text-gray-500">{text}</p>
            </div>
            <div className="rounded-xl bg-green-200 p-2 w-10 h-10 cursor-pointer border ">
              <p className="text-green-800 text-center">&rarr;</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default FeaturedNews;
