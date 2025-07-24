"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import style from "./imageslider.module.css";
import { useState } from "react";

const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
        arrows: true,
      },
    },
  ],
};

type ImageItem = {
  url: string;
  caption: string;
};

type ImageSliderProps = {
  width: number;
  height: number;
  model: ImageItem[];
};

export function ImageSlider({ width, height, model }: Readonly<ImageSliderProps>) {
  const [selectedImage, setSelectedImage] = useState(model[0]);

  const onImageClick = (image: ImageItem) => () => {
    setSelectedImage(image);
  };

  return (
    <div className={`pb-10 px-10 ${style.container}`}>
      <figure className="flex justify-center flex-col text-center items-center pb-8">
        <Image
          src={selectedImage.url}
          width={width}
          height={height}
          alt={selectedImage.caption}
          style={{ objectFit: "contain", maxHeight: height }}
        />
        <figcaption>{selectedImage.caption}</figcaption>
      </figure>

      <div className={style.slider}>
        <Slider {...settings}>
          {model.map((image) => (
            <div key={image.url}>
              <Image
                width={width / 5}
                height={height / 5}
                src={image.url}
                alt={image.caption}
                style={{ objectFit: "none", maxHeight: height / 5 }}
                className={image.url === selectedImage.url ? "border-2" : ""}
                onClick={onImageClick(image)}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
