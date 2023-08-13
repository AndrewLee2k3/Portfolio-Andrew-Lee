import Section from "../layouts/Section";
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 xs:hidden lgl:inline-flex dark:bg-[#0c1821] hover:bg-designColor dark:hover:bg-black duration-300 rounded-md text-2xl text-gray-800 dark:text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowTwo dark:shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12  xs:hidden lgl:inline-flex dark:bg-[#0c1821] hover:bg-designColor dark:hover:bg-black duration-300 rounded-md text-2xl text-gray-800 dark:text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowTwo dark:shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}
import { testimonialOne, testimonialTwo, quote } from "../../assets";
import { useState } from "react";
const Testimonial = () => {
  const [dotActive, setDocActive] = useState(0);
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "#f9743e",
                borderRadius: "50%",
                cursor: "pointer",
              }
            : {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "gray",
                borderRadius: "50%",
                cursor: "pointer",
              }
        }
      ></div>
    ),
  };
  return (
    <Section id="testimonial" title="What Client Say" des="Testimonial">
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          <div className="w-full ">
            <div className="w-full p-5 h-auto flex flex-col lgl:flex-row justify-between">
              <div
                className="flex flex-col md:flex-row lgl:flex-col justify-center 
              md:justify-start lgl:justify-center
              gap-8 p-8 rounded-lg w-full lgl:w-[35%] h-full dark:bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowTwo dark:shadow-shadowOne"
              >
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={testimonialOne}
                  alt="testimonal"
                />

                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    Bound - Trolola
                  </p>
                  <h3 className="text-2xl font-bold">Jone Duone Joe</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Operation Officer
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />

                <div className="w-full flex flex-col justify-between gap-4 lgl:gap-8 h-[70%] py-10 dark:bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowTwo dark:shadow-shadowOne p-4 lgl:p-8">
                  <div className="flex flex-col justify-between  py-6 border-b-2 border-b-gray-400">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide ">
                        Travel Mobile App Design.
                      </h3>
                      <p className="text-base text-gray-400 mt-3">
                        via Upwork - Mar 4, 2015 - Aug 30, 2021 test
                      </p>
                    </div>
                    <div className="text-designColor flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                    dolorum, eos natus ipsum numquam veniam officia
                    necessitatibus ratione quos debitis exercitationem
                    repudiandae facilis id neque nihil accusantium perspiciatis
                    repellat? Iste.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full ">
            <div className="w-full p-5 h-auto flex flex-col lgl:flex-row justify-between">
              <div
                className="flex flex-col md:flex-row lgl:flex-col justify-center 
              md:justify-start lgl:justify-center
              gap-8 p-8 rounded-lg w-full lgl:w-[35%] h-full dark:bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowTwo dark:shadow-shadowOne"
              >
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={testimonialTwo}
                  alt="testimonal"
                />

                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    Bound - Trolola
                  </p>
                  <h3 className="text-2xl font-bold">Jone Duone Joe</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Operation Officer
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />

                <div className="w-full flex flex-col justify-between gap-4 lgl:gap-8 h-[70%] py-10 dark:bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowTwo dark:shadow-shadowOne p-4 lgl:p-8">
                  <div className="flex flex-col justify-between  py-6 border-b-2 border-b-gray-400">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide ">
                        Travel Mobile App Design.
                      </h3>
                      <p className="text-base text-gray-400 mt-3">
                        via Upwork - Mar 4, 2015 - Aug 30, 2021 test
                      </p>
                    </div>
                    <div className="text-designColor flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                    dolorum, eos natus ipsum numquam veniam officia
                    necessitatibus ratione quos debitis exercitationem
                    repudiandae facilis id neque nihil accusantium perspiciatis
                    repellat? Iste.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </Section>
  );
};

export default Testimonial;
