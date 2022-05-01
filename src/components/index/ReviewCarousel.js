import React from "react";
import ReviewCard from "./ReviewCard";
import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviewData = [
  {
    text: "Alex and Tamara did an amazing job deep cleaning our home after major renovations. They were professional, friendly, and efficient. I will definitely book and recommend future cleaning services from them!",
    name: "Jacqueline",
  },
  {
    text: "Just moved into my new apartment at the beginning of the month. Wilson and Farr came a couple days before my move in day and did a deep clean of my small apartment in just a few hours....a job that would have taken a few days on my own. They made this old apartment feel like a new house and made it feel like it was mine. Thank you so much for making my transition period better and way less stressful. I'm going to recommend their cleaning services to anyone who needs it.",
    name: "Ryan",
  },
  {
    text: "I was not disappointed! The job fulfilled my expectations and more. I would highly recommend to others and use again.",
    name: "Maria",
  },
  {
    text: "I hired Tamara and Alex to clean one of my listings as part of the move out service. They are a hard working, young, local couple with great energy and integrity. What I loved is that they were punctual, professional and clear in in their communication leading up to the appointment. I couldn't be more happy with the service provided and would highly recommend hiring them to any realtor, property manager or home owner in the Annapolis Valley. Keep up the good work!",
    name: "Melanie",
  },
  {
    text: "Very thorough, very professional. When they came in, my new place hadn't had a top to bottom scrub since I'd moved in in the summer. Feels like a new home!",
    name: "Wes",
  },
  {
    text: "Wilson and Farr are the best at what they do. If it is your personal home or commercial cleaning you will not be disappointed. They go above and beyond any cleaning service. Their costomer service and professionalism will leave you confident knowing your are getting the best quality cleaning! You will not be disappointed!",
    name: "Ashley",
  },
  {
    text: "Wilson and Farr are always professional and reliable. They clean my workspace from top to bottom in a timely manner. I so appreciate having reminders from them and when they reach out to me to get squeezed in when they're getting full. Such thoughtfulness. Their attention to detail is second to none and I'm always so happy with the end result. Highly recommend!",
    name: "Sarah",
  },
  {
    text: "Wilson and Farr saved us this past year with a new baby by helping keep our house in shape. Every time they came in to do a deep clean, I felt like I was on cloud nine. My house has never felt better ☺️",
    name: "Meaghan",
  },
];


const ReviewCarousel = () => {

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    draggable: true,
    swipeToSlide: true,
    adaptiveHeight: false,
  };

  return (
    <div className="w-2/3 py-6" >
      <Slider {...settings} >
        {reviewData.map((review, i) => (
          <ReviewCard key={i} {...review} />
        ))}
      </Slider>
    </div>
  );
};

export default ReviewCarousel;
