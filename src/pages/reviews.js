import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Review, Restaurant } from '../components';
import StarRating from '../components/StarRating';
import {
  HeaderContainer,
  MainContainer,
  MapContainer,
  RestaurantContainer,
} from '../containers';
import PlacesContext from '../contexts/places-context';
import { MdKeyboardBackspace } from 'react-icons/md';

export default function Reviews({ history, match }) {
  const { reviews, getReview } = useContext(PlacesContext);
  console.log(match.path);

  return (
    <>
      <HeaderContainer />
      <MainContainer>
        <MapContainer />
        <RestaurantContainer>
          <Review>
            {reviews && (
              <Restaurant.Title>
                <Review.Header>
                  <span className="back" onClick={() => history.push('/')}>
                    <MdKeyboardBackspace />
                    Back
                  </span>
                  <Restaurant.Title>{reviews.name}</Restaurant.Title>
                  <Restaurant.Location>
                    {reviews.formatted_address}
                  </Restaurant.Location>
                  <Restaurant.Rating>
                    <StarRating total={reviews.rating} />
                  </Restaurant.Rating>
                  <Review.Button>
                    <Link to={`/reviewform/${reviews.place_id}`}>
                      Add Review
                    </Link>
                  </Review.Button>
                </Review.Header>
              </Restaurant.Title>
            )}

            <Review.Body>
              {reviews.reviews ? (
                reviews.reviews.map((review) => (
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
                  <Review.Text>There are no Reviews yet!</Review.Text>
                </>
              )}
            </Review.Body>
          </Review>
        </RestaurantContainer>
      </MainContainer>
    </>
  );
}
