const NewsList = ({
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
      <div className="flex gap-2">
        <div className="w-1/3">
          {/* <div className="rounded-xl w-56 h-56"> */}
          <img className="w-68 h-56 rounded-l-xl " src={image} alt="" />
          {/* </div> */}
        </div>
        <div className="w-2/3">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 h-56 bg-white p-2 rounded-r-2xl">
              <div className="flex flex-row gap-2">
                {category.map((item, index) => {
                  const bgColor = color[index];
                  return (
                    <button
                      key={index}
                      className={`bg-${bgColor}-300 text-${bgColor}-900 p-2 rounded-md`}
                    >
                      Category
                    </button>
                  );
                })}
                <button className="bg-orange-200 text-orange-900 p-2 rounded-lg mr-2">
                  Category
                </button>
              </div>
              <p className="text-black text-3xl font-bold">News Title</p>
              <p className="text-black font-sans">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ad
                iure voluptate aliquam? Quos perspiciatis repellendus, nulla
                iusto consequatur aut fuga? Facere, odio quia! Fugit ipsum cum
                sapiente atque quidem voluptates vero.
              </p>
              <p className="text-sm text-gray-500 font-bold">6 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsList;
