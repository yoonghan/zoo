"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { Link } from "../Link";
import style from "./carousel.module.css";

export type CardItem = {
  link: string;
  shortDescription: string;
  img: {
    alt: string;
    src: string;
    width: number;
    height: number;
  };
};

type CarouselProp = {
  model: CardItem[];
};

function Card({ shortDescription, img, link }: CardItem) {
  return (
    <div className={style.card}>
      <Link href={link}>
        <Image
          src={img.src}
          width={img.width}
          height={img.height}
          alt={img.alt}
        />
        <div className={style.label}>{shortDescription}</div>
      </Link>
    </div>
  );
}

const settings = {
  dots: false,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: true,
      },
    },
  ],
};

export function Carousel({ model }: CarouselProp) {
  return (
    <div className="pb-10 px-10">
      <Slider {...settings}>
        {model.map((cardItem) => (
          <Card key={cardItem.link + cardItem.shortDescription} {...cardItem} />
        ))}
      </Slider>
    </div>
  );
}
