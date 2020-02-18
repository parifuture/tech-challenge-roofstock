/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import Rating from './Rating';
import HomeDetails from './HomeDetails';

const currencyFormat = (num) => `${num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;

const processData = (props) => {
  const processedData = {};
  if (props) {
    const {
      id, address, financial, lease, mainImageUrl, physical, score, resources,
    } = props;
    processedData.id = id;
    processedData.streetAddress = `${address.address1} ${address.address2 || ''}`;
    processedData.cityStateZip = `${props.address.city}, ${props.address.state} ${props.address.zip}`;

    if (financial) {
      processedData.rentalPrice = `$${financial.monthlyRent}`;
    } else if (lease) {
      processedData.rentalPrice = `$${lease.leaseSummary.monthlyRent}`;
    } else {
      processedData.rentalPrice = 'N/A';
    }

    if (!mainImageUrl) {
      processedData.imageUrl = 'https://picsum.photos/228/145';
    } else {
      processedData.imageUrl = props.mainImageUrl;
    }

    if (physical) {
      processedData.bedBath = `${physical.bedRooms}bd, ${physical.bathRooms}ba | ${physical.squareFeet}sqft | Built in ${physical.yearBuilt}`;
    } else {
      processedData.bedBath = '2bd,2ba | 1250sqft | Built in 1987';
    }

    if (financial) {
      processedData.listPrice = `${financial.listPrice}`;
      processedData.monthlyRent = `${financial.monthlyRent}`;
      processedData.grossYield = Number.parseFloat((processedData.monthlyRent * 1200) / processedData.listPrice).toFixed(2);

      processedData.listPrice = `$${currencyFormat(processedData.listPrice)}`;
      processedData.monthlyRent = `$${currencyFormat(processedData.monthlyRent)}`;
    } else {
      processedData.listPrice = 'N/A';
      processedData.monthlyRent = 'N/A';
      processedData.grossYield = 'N/A';
    }

    if (score) {
      processedData.score = score;
    }

    if (resources) {
      processedData.imageCollection = resources.photos.map((photo) => ({
        id: photo.id,
        url: photo.url,
      }));
    }
  }
  return processedData;
};

const HomeItem = ({ props, showComponent, toggleHouseDetailComponent }) => {
  if (props) {
    const result = processData(props);

    return (
      <div className="w-full sm:w-1/2 md:w-1/5 mb-4 px-2">
        <div className="relative border bg-white rounded-lg border overflow-hidden">
          <picture className="block border-b">
            <img className="block" src={result.imageUrl} alt="Pictures Coming Soon" onClick={(event) => toggleHouseDetailComponent(result)} />
          </picture>
          <div className="opacity-50 relative -mt-12">
            <div className="bg-black shadow-lg">
              <div className="ml-1 mt-1 text-lg text-white font-medium">
                {result.listPrice}
              </div>
              <div className="flex items-baseline">
                <div className="subpixel-antialiased normal-case ml-2 text-white text-xs uppercase font-semibold tracking-wide">
                  {result.bedBath}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-flow-row grid-cols-2">
              <div className="flex">
                <div className="w-1/2 h-12 border-r pl-1 border-b">
                  <h3 className="text-gray-600 text-sm">Monthly Rent</h3>
                  <p>
                    {result.monthlyRent}
                  </p>
                </div>
                <div className="w-1/2 h-12 border-b pl-1">
                  <h3 className="text-gray-600 text-sm">Gross Yield</h3>
                  <p>
                    {result.grossYield}
                    %
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="w-1/2 h-12 border-r pl-1 border-b">
                  <h3 className="text-gray-600 text-sm">Total Return</h3>
                  <p>$580</p>
                </div>
                <div className="w-1/2 h-12 border-b pl-1">
                  <h3 className="text-gray-600 text-sm">Neighborhood</h3>
                  <Rating key={result.id} id={result.id} score={result.score} />
                </div>
              </div>
              <div className="flex">
                <div className="w-full h-12 pl-1">
                  <h3 className="text-base leading-tight">
                    {result.streetAddress}
                    {' '}
                    <br />
                    {' '}
                    {result.cityStateZip}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } return (
    <h1> Loading...</h1>
  );
};

export default HomeItem;
