import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../slider/styles.css";

import logo1 from "../../assets/images/banner/1.jpg"
import logo2 from "../../assets/images/banner/2.jpg"
import logo3 from "../../assets/images/banner/3.jpg"
import logo4 from "../../assets/images/banner/4.jpg"
import logo5 from "../../assets/images/banner/5.jpg"
import logo6 from "../../assets/images/banner/6.jpg"

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-[600px] w-full rounded-lg">
            <img src={logo5} className="w-full rounded-lg " />
            <div className="absolute rounded-lg lg:h-full md:h-full text-start flex items-center  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
              <div className="text-white lg:space-y-7 space-y-4 py-5 md:w-1/2 lg:pl-12 md:pl-14 pl-5">
                <h2 className="text-4xl lg:text-5xl w-[360px] md:text-5xl  font-bold">
                  Affordable Price For Car Servicing
                </h2>
                <p>
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="flex flex-col lg:flex-row md:flex-row gap-5">
                  <button className="btn btn-error ">Discover More</button>

                  <button className="btn btn-outline btn-accent">
                    Latest Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[600px] w-full rounded-lg">
            <img src={logo6} className="w-full rounded-lg " />
            <div className="absolute rounded-lg  lg:h-full md:h-full text-start flex items-center  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
              <div className="text-white lg:space-y-7 space-y-4 py-5 md:w-1/2 lg:pl-12 md:pl-14 pl-5">
                <h2 className="text-4xl lg:text-5xl w-[360px] md:text-5xl  font-bold">
                  Affordable Price For Car Servicing
                </h2>
                <p>
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="flex flex-col lg:flex-row md:flex-row gap-5">
                  <button className="btn btn-error ">Discover More</button>

                  <button className="btn btn-outline btn-accent">
                    Latest Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[600px] w-full rounded-lg">
            <img src={logo4} className="w-full rounded-lg" />
            <div className="absolute rounded-lg lg:h-full md:h-full text-start flex items-center  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
              <div className="text-white lg:space-y-7 space-y-4 py-5 md:w-1/2 lg:pl-12 md:pl-14 pl-5">
                <h2 className="text-4xl lg:text-5xl w-[360px] md:text-5xl  font-bold">
                  Affordable Price For Car Servicing
                </h2>
                <p>
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="flex flex-col lg:flex-row md:flex-row gap-5">
                  <button className="btn btn-error ">Discover More</button>

                  <button className="btn btn-outline btn-accent">
                    Latest Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[600px] w-full rounded-lg">
            <img src={logo3} className="w-full rounded-lg" />
            <div className="absolute rounded-lg lg:h-full md:h-full text-start flex items-center  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
              <div className="text-white lg:space-y-7 space-y-4 py-5 md:w-1/2 lg:pl-12 md:pl-14 pl-5">
                <h2 className="text-4xl lg:text-5xl w-[360px] md:text-5xl  font-bold">
                  Affordable Price For Car Servicing
                </h2>
                <p>
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="flex flex-col lg:flex-row md:flex-row gap-5">
                  <button className="btn btn-error ">Discover More</button>

                  <button className="btn btn-outline btn-accent">
                    Latest Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[600px] w-full rounded-lg">
            <img src={logo2} className="w-full rounded-lg" />
            <div className="absolute rounded-lg lg:h-full md:h-full text-start flex items-center  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
              <div className="text-white lg:space-y-7 space-y-4 py-5 md:w-1/2 lg:pl-12 md:pl-14 pl-5">
                <h2 className="text-4xl lg:text-5xl w-[360px] md:text-5xl  font-bold">
                  Affordable Price For Car Servicing
                </h2>
                <p>
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="flex flex-col lg:flex-row md:flex-row gap-5">
                  <button className="btn btn-error ">Discover More</button>

                  <button className="btn btn-outline btn-accent">
                    Latest Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[600px] w-full rounded-lg">
            <img src={logo1} className="w-full rounded-lg" />
            <div className="absolute rounded-lg lg:h-full md:h-full text-start flex items-center  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
              <div className="text-white lg:space-y-7 space-y-4 py-5 md:w-1/2 lg:pl-12 md:pl-14 pl-5">
                <h2 className="text-4xl lg:text-5xl w-[360px] md:text-5xl  font-bold">
                  Affordable Price For Car Servicing
                </h2>
                <p>
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="flex flex-col lg:flex-row md:flex-row gap-5">
                  <button className="btn btn-error ">Discover More</button>

                  <button className="btn btn-outline btn-accent">
                    Latest Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
