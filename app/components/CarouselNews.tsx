"use client";

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface slide {
  id: number;
  title: string;
  img: string;
}

const slideData: slide[] = [
  {
    id: 1,
    title: "Sports",
    img: "https://thumbs.dreamstime.com/b/all-sports-balls-stadium-d-imaginary-sport-modelled-rendered-78672313.jpg",
  },
  {
    id: 2,
    title: "Business",
    img: "https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg",
  },
  {
    id: 3,
    title: "Politics",
    img: "https://www.imf.org/external/pubs/ft/fandd/2020/06/images/frieden-1600.jpg",
  },
  {
    id: 4,
    title: "Ecology",
    img: "https://cdn1.byjus.com/wp-content/uploads/2017/10/1-min-1.jpg",
  },
  {
    id: 5,
    title: "Tech",
    img: "https://img.freepik.com/free-photo/rpa-concept-with-blurry-hand-touching-screen_23-2149311914.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1718755200&semt=sph",
  },

  {
    id: 5,
    title: "Cinema",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl8M7XurabVxJpbPNvG3Fct2Nu5EbrUDxb1w&s",
  },

  {
    id: 5,
    title: "Music",
    img: "https://www.shutterstock.com/image-vector/music-my-life-silhouette-design-260nw-2024071982.jpg",
  },

  {
    id: 5,
    title: "Student Life",
    img: "https://media.istockphoto.com/id/539444770/photo/work-with-the-people-that-motivate-and-inspire-you.jpg?s=612x612&w=0&k=20&c=DNpkder0ZLzC5Aq0KQ_fiK4xa7CZPAh47-Vxw_R_9Ww=",
  },
];

interface DemoSliderProps {
  data?: slide[];
}
const CarouselNewsSlide: React.FC<DemoSliderProps> = ({ data }) => {
  return (
    <div>
      <Swiper
        spaceBetween={24}
        slidesPerView={5}
        autoplay={true}
        loop={true}
        modules={[Autoplay, Navigation, Pagination]}
      >
        {slideData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative rounded-md">
              <img
                className="w-[120px] h-[120px] md:h-44 md:w-44  lg:h-56 lg:w-56 rounded-2xl shadow-2xl  object-cover"
                src={item.img}
                alt=""
              />
              <div className="absolute bottom-2 left-0  w-full flex justify-center items-center ">
                <p className="text-white font-bold   text-center text-xl">
                  {item.title}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselNewsSlide;
