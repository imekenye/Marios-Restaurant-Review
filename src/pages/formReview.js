import React, { useContext, useState } from 'react';
import { ReviewForm, Restaurant, Review } from '../components';
import RatingIcon from '../components/RatingIcon';
import StarRating from '../components/StarRating';
import {
  HeaderContainer,
  MainContainer,
  MapContainer,
  RestaurantContainer,
} from '../containers';
import PlacesContext from '../contexts/places-context';
import { MdKeyboardBackspace } from 'react-icons/md';

export default function FormReview({ history, match }) {
  const { reviews, db } = useContext(PlacesContext);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [submit, setSubmit] = useState({
    author_name: '',
    rating: 0,
    text: '',
  });

  const onMouseEnter = (index) => {
    setHoverRating(index);
  };
  const onMouseLeave = () => {
    setHoverRating(0);
  };
  const onSaveRating = (index) => {
    setRating(index);
  };
  const handleChange = (e) => {
    setSubmit({ ...submit, [e.target.name]: e.target.value, rating: rating });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => {
      e.target[0].value = '';
      e.target[1].value = '';
      e.target[2].value = '';
      setRating(0);
      db.collection('reviews')
        .doc(`${reviews.place_id}`)
        .update({
          ...reviews,
          reviews: [...reviews.reviews, submit],
        });
      console.log(e, submit);
    }, 2000);
  };

  return (
    <>
      <HeaderContainer />
      <MainContainer>
        <MapContainer />
        <RestaurantContainer>
          <>
            <span className="back__form" onClick={() => history.goBack()}>
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
            {/* <hr /> */}
          </>

          <ReviewForm onSubmit={(event) => onSubmit(event)}>
            <ReviewForm.Title>
              What did you think about {reviews.name.replace(/ .*/, '')}?
            </ReviewForm.Title>
            <ReviewForm.Rating>
              {[1, 2, 3, 4, 5].map((index) => {
                return (
                  <RatingIcon
                    index={index}
                    // onChange={() => setRating(rating)}
                    rating={rating}
                    hoverRating={hoverRating}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    onSaveRating={onSaveRating}
                  />
                );
              })}
            </ReviewForm.Rating>
            <ReviewForm.FirstName
              value={submit.author_name}
              name="author_name"
              type="text"
              placeholder="Name"
              onChange={handleChange}
            />
            {/* <ReviewForm.LastName
          name="lastname"
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
        /> */}
            <ReviewForm.Review
              value={submit.text}
              name="text"
              placeholder="Review"
              onChange={handleChange}
            ></ReviewForm.Review>
            <ReviewForm.Button type="submit">Share Review</ReviewForm.Button>
          </ReviewForm>
        </RestaurantContainer>
      </MainContainer>
    </>
  );
}
