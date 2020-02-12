/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from 'react';

const Rating = (props) => {
  const {
    id,
  } = props;
  const starRating = [
    `star5-${id}`,
    `star4half-${id}`,
    `star4-${id}`,
    `star3half-${id}`,
    `star3-${id}`,
    `star2half-${id}`,
    `star2-${id}`,
    `star1half-${id}`,
    `star1-${id}`,
    `starhalf-${id}`,
  ];
  return (
    <fieldset className="rating">
      <input type="radio" id={starRating[0]} name="rating" value="5" />
      <label className="full" htmlFor={starRating[0]} title="Awesome - 5 stars" />
      <input type="radio" id={starRating[1]} name="rating" value="4 and a half" />
      <label className="half" htmlFor={starRating[1]} title="Pretty good - 4.5 stars" />
      <input type="radio" id={starRating[2]} name="rating" value="4" />
      <label className="full" htmlFor={starRating[2]} title="Pretty good - 4 stars" />
      <input type="radio" id={starRating[3]} name="rating" value="3 and a half" />
      <label className="half" htmlFor={starRating[3]} title="Meh - 3.5 stars" />
      <input type="radio" id={starRating[4]} name="rating" value="3" />
      <label className="full" htmlFor={starRating[4]} title="Meh - 3 stars" />
      <input type="radio" id={starRating[5]} name="rating" value="2 and a half" />
      <label className="half" htmlFor={starRating[5]} title="Kinda bad - 2.5 stars" />
      <input type="radio" id={starRating[6]} name="rating" value="2" />
      <label className="full" htmlFor={starRating[6]} title="Kinda bad - 2 stars" />
      <input type="radio" id={starRating[7]} name="rating" value="1 and a half" />
      <label className="half" htmlFor={starRating[7]} title="Meh - 1.5 stars" />
      <input type="radio" id={starRating[8]} name="rating" value="1" />
      <label className="full" htmlFor={starRating[8]} title="Sucks big time - 1 star" />
      <input type="radio" id={starRating[9]} name="rating" value="half" />
      <label className="half" htmlFor={starRating[9]} title="Sucks big time - 0.5 stars" />
    </fieldset>
  );
};

export default Rating;
