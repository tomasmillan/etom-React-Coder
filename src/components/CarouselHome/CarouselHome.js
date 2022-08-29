import Carousel from "nuka-carousel";
import "./CarouselStyle.scss";
import imgArray from "../../utils/imgArray";

export default function CarrouselHome() {
  return (
    <>
      <Carousel
        wrapAround={true}
        slidesToShow={4}
        autoplay={true}
        autoplayInterval={3000}
        cellAlign={"center"}
        pauseOnHover={false}
        className="carousel"
      >
        {imgArray.map((e) => (
          <img
            className="imgCarousel"
            src={e.img}
            alt="im a computer"
            key={e.id}
          />
        ))}
      </Carousel>
    </>
  );
}
