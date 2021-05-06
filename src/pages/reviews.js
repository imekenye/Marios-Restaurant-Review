import React, { useEffect, useState } from 'react';
// Routing
import { Link } from 'react-router-dom';
// Components
import { Review, Restaurant, StreetView } from '../components';
import StarRating from '../components/StarRating';
// Containers
import {
  HeaderContainer,
  MainContainer,
  RestaurantContainer,
} from '../containers';

import { MdKeyboardBackspace } from 'react-icons/md';

export default function Reviews({ history, match, reviews }) {
  // review state
  const [review, setReview] = useState([]);
  // get review data from localStorage
  const reviewsData = JSON.parse(window.localStorage.getItem('reviews'));
  // get places data from localStorage
  const places = JSON.parse(window.localStorage.getItem('places'));
  // select/filter review
  const filteredPlace =
    places && places.filter((place) => match.params.id === place.place_id);
  // get streetViewUrl image from filtered review

  console.log(filteredPlace);
  const streetViewUrl = `https://maps.googleapis.com/maps/api/streetview?location=${
    filteredPlace && filteredPlace[0] && filteredPlace[0].geometry.location.lat
  },${
    filteredPlace && filteredPlace[0] && filteredPlace[0].geometry.location.lng
  }&size=456x456&key=${process.env.REACT_APP_STREET_API_KEY}`;
  // filter review according to params
  const filterReview =
    reviewsData &&
    reviewsData.filter((review) => review.place_id === match.params.id);
  // on initial load or reload
  useEffect(() => {
    if (!reviews) return;
    setReview(filterReview);
  }, [match.params.id, reviews]);

  return (
    <>
      <HeaderContainer showRating={false} />
      <MainContainer>
        <StreetView>
          <StreetView.Image src={streetViewUrl} />
        </StreetView>
        <RestaurantContainer>
          {review[0] && (
            <Review>
              <Restaurant.Title>
                <Review.Header>
                  <span className="back" onClick={() => history.push('/')}>
                    <MdKeyboardBackspace />
                    Back
                  </span>
                  <Restaurant.Title>{review[0].name}</Restaurant.Title>
                  <Restaurant.Location>
                    {review[0].formatted_address}
                  </Restaurant.Location>
                  <Restaurant.Rating>
                    <StarRating total={review[0].rating} />
                  </Restaurant.Rating>
                  <Review.Button>
                    <Link to={`/reviewform/${review[0].place_id}`}>
                      Add Review
                    </Link>
                  </Review.Button>
                </Review.Header>
              </Restaurant.Title>
              <Review.Body>
                {review[0].reviews ? (
                  review[0].reviews.map((review) => (
                    <>
                      <Review.Title>{review.author_name}</Review.Title>
                      <Review.Rating>
                        <StarRating total={review.rating} />
                      </Review.Rating>
                      <Review.Text>{review.text}</Review.Text>
                    </>
                  ))
                ) : (
                  <>
                    <Review.Text>No reviews!</Review.Text>
                  </>
                )}
              </Review.Body>
            </Review>
          )}
        </RestaurantContainer>
      </MainContainer>
    </>
  );
}
