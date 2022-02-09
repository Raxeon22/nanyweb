import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Headphones from "../../../assets/headphones.jpg";
import baseURL from "../../../middleware/BaseURL";
import Action from "../../../middleware/API";
import { useParams } from "react-router-dom";


const Products = [
  {
    image: Headphones
  },
  {
    image: Headphones
  },
  {
    image: Headphones
  },
  {
    image: Headphones
  }
  ,
  {
    image: Headphones
  }
]
const ProductPageSlider = ({ images }) => {
  const { id } = useParams()
  const [productImages, setProductImages] = useState([])
  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await Action.get(`/product?_id=${ id }`)
        setProductImages(data.data[0].image)

      } catch (error) {
        console.log(error)
      }

    }
    getProduct()
  })
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={ baseURL + productImages[i] } />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    cssEase: "linear",
    autoPlay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="indiv-showcase">
      <Slider className="react-slider" { ...settings }>
        { productImages.map((val) => {
          return (
            <div className="each-slid overflow-hidden">
              <img
                src={ baseURL + val }
                width="100%"
                height="400"
                alt=""
                className="p-1"
              />
            </div>
          );
        }) }
      </Slider>
    </div>
  );
};
export default ProductPageSlider;
