import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CarouselNewsSlide from "../components/CarouselNews";
import FeaturedNews from "../components/FeatureNews";
import NewsList from "../components/NewsList";
import NewsBox from "../components/NewsBox";
import Image from "next/image";

const NewsPage = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col gap-10 bg-gray-200  px-10 py-5">
        {/* News Section Starts */}
        <div className="flex flex-row gap-5 w-full h-[400px]">
          <div className="relative w-1/2 h-full rounded-2xl shadow-2xl">
            <div className="absolute top-0 left-0 p-4 rounded-2xl">
              <button className="bg-violet-300 text-violet-900 p-2 rounded-lg mr-2">
                Category
              </button>
              <button className="bg-orange-200 text-orange-600 p-2 rounded-lg">
                Category
              </button>
            </div>
            <Image
              className="w-full h-full rounded-2xl object-cover"
              width={100}
              height={100}
              src="https://media.istockphoto.com/id/496719837/photo/motivation-fuels-the-human-engine.jpg?s=612x612&w=0&k=20&c=kz5YL7dYzmQpbRTbEafeFshJ3nSslVoJ5Hypf0uxYzI="
              alt="image"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-md"></div>
            <div className="absolute bottom-0 left-0 p-4 flex flex-col gap-2">
              <p className="text-white text-3xl font-bold">News Title</p>
              <p className="text-white font-sans">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ad
                iure voluptate aliquam? Quos perspiciatis repellendus, nulla
                iusto consequatur aut fuga? Facere, odio quia! Fugit ipsum cum
                sapiente atque quidem voluptates vero.
              </p>
              <p className="text-sm text-white font-bold">8 hours ago</p>
            </div>
          </div>
          <div className="w-1/2 flex flex-row gap-6 h-full">
            <NewsBox
              image="https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg"
              category={[1, 2]}
              color={["violet", "orange"]}
            />
            <NewsBox
              image="https://img.freepik.com/premium-photo/mans-hand-holds-watch-watches-time-pass-labyrinth-into-future-end-time-world_896675-1223.jpg"
              category={[1]}
              color={["orange"]}
            />
          </div>
        </div>
        {/* Carousel Section Starts */}
        <CarouselNewsSlide />
        {/* FeaturedNews Section Starts */}
        <div className="flex flex-row gap-5  w-full">
          <div className="w-2/5 p-5  bg-white rounded-2xl">
            <p className="text-black font-bold text-2xl font-sans">
              Featured News
            </p>
            <div className="flex mt-5 p-2 flex-col gap-3">
              <FeaturedNews
                category={[1]}
                image="https://st4.depositphotos.com/12985790/25532/i/450/depositphotos_255322186-stock-photo-attractive-happy-freelancer-using-laptop.jpg"
                title="News Title"
                text="6 hours ago"
              />
              <FeaturedNews
                category={[1]}
                image="https://bocdn.ecotree.green/blog/0001/01/ad46dbb447cd0e9a6aeecd64cc2bd332b0cbcb79.jpeg?d=960x540"
                title="News Title"
                text="8 hours ago"
              />
              <FeaturedNews
                category={[1, 2]}
                image="https://img.freepik.com/free-photo/low-angle-shot-tall-city-building-with-blue-sky-background-new-york_181624-20345.jpg"
                title="News Title"
                text="1 day ago"
              />
              <FeaturedNews
                category={[1, 2, 3]}
                image="https://img.lovepik.com/background/20211030/medium/lovepik-foreign-city-scenery-mobile-phone-wallpaper-background-image_400385031.jpg"
                title="News Title"
                text="2 days ago"
              />
              <FeaturedNews
                category={[1, 2, 3]}
                image="https://media.istockphoto.com/id/481686206/photo/boxing-power.jpg?s=612x612&w=0&k=20&c=-zms0hnbqMWKd4oCRY_-99_aYNtvrEweZEMsgCgl_wE="
                title="News Title"
                text="2 days ago"
              />
            </div>
          </div>

          <div className="w-2/3 flex flex-col gap-5">
            <NewsList
              image="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-winter-mountains-with-inversion-during-golden-hour-free-photo.jpg?w=600&quality=80"
              category={[1, 2]}
              color={["violet", "green"]}
            />
            <NewsList
              image="https://images.pexels.com/photos/1367276/pexels-photo-1367276.jpeg?cs=srgb&dl=pexels-rebrand-cities-581004-1367276.jpg&fm=jpg"
              category={[1]}
              color={["violet"]}
            />
            <NewsList
              image="https://cdn.pixabay.com/photo/2022/02/15/13/00/building-7014904_640.jpg"
              category={[1]}
              color={["green"]}
            />
            <NewsList
              image="https://cdn.pixabay.com/photo/2017/01/14/10/56/people-1979261_640.jpg"
              category={[1, 2]}
              color={["violet", "orange"]}
            />
          </div>
        </div>
        {/* Footer Section Starts */}
        <div className="flex row gap-5">
          <NewsBox
            image="https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg"
            category={[1, 2]}
            color={["violet", "orange"]}
          />
          <NewsBox
            image="https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg"
            category={[1, 2]}
            color={["violet", "orange"]}
          />
          <NewsBox
            image="https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg"
            category={[1, 2]}
            color={["violet", "orange"]}
          />
          <NewsBox
            image="https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg"
            category={[1, 2]}
            color={["violet", "orange"]}
          />

          <NewsBox
            image="https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg"
            category={[1, 2]}
            color={["violet", "orange"]}
          />
        </div>
      </div>
    </>
  );
};

export default NewsPage;
