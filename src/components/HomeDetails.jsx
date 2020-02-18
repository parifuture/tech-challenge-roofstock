import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HomeDetails = ({toggleHouseDetailComponent, props, selectedHouseData}) => {
  const streetAddress = selectedHouseData.streetAddress;
  const cityStateZip = selectedHouseData.cityStateZip;
  let imagesArray = [];
  if (selectedHouseData.imageCollection) {
    imagesArray = selectedHouseData.imageCollection.map((img) => <img key={img.id} src={img.url} alt="img_" />);
  } else {
    imagesArray = [
      <img key={1} src="https://picsum.photos/550" alt="Bedroom 1" />,
      <img key={2} src="https://picsum.photos/600" alt="Bedroom 1" />,
      <img key={3} src="https://picsum.photos/700" alt="Bedroom 1" />,
      <img key={4} src="https://picsum.photos/750" alt="Bedroom 1" />,
      <img key={5} src="https://picsum.photos/800" alt="Bedroom 1" />,
      <img key={6} src="https://picsum.photos/850" alt="Bedroom 1" />,
    ];
  }
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
    <div>
      <div className="mb-5">
        <a href="#" onClick={(event) => toggleHouseDetailComponent()} className="cursor-pointer bg-blue-600 hover:bg-blue-500 shadow-xl px-5 py-2 inline-block text-blue-100 hover:text-white rounded">Go Back</a>
      </div>
      <div className="flex mb-4">
        <div className="w-3/5">
          <div className="h-128">
            <div className="min-h-full rounded-lg shadow-lg overflow-show">
              <Slider {...settings}>
                {imagesArray}
              </Slider>
            </div>
          </div>
        </div>
        <div className="w-2/5 p-2 text-center">
          <div className="bg-white shadow p-4 rounded w-128">
            <h2>Address</h2>
            <h3>{streetAddress}</h3>
            <h3>{cityStateZip}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};


export default HomeDetails;
