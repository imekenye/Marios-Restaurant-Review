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
  // handle input state
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [review, setReview] = useState();

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
  const handleReview = (e) => {
    setSubmit({
      author_name: `${firstname} ${lastname}`,
      rating: rating,
      text: review,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    e.target[0].value = '';
    e.target[1].value = '';
    e.target[2].value = '';
    // setRating(0);
    db.collection('reviews')
      .doc(`${reviews.place_id}`)
      .update({
        ...reviews,
        reviews: [...reviews.reviews, submit],
      });
    setTimeout(() => {
      history.goBack();
    }, 2000);
    console.log(e, submit);
  };

  return (
    <>
      <HeaderContainer showRating={false} />
      <MainContainer>
        <RestaurantContainer style={{ gridColumn: '1/-1' }}>
          <>
            <span className="back__form" onClick={() => history.goBack()}>
              <MdKeyboardBackspace />
              Back
            </span>
            <Restaurant.Title style={{ textAlign: 'center' }}>
              {reviews.name}
            </Restaurant.Title>
            <Restaurant.Location style={{ textAlign: 'center' }}>
              {reviews.formatted_address}
            </Restaurant.Location>
            <Restaurant.Rating style={{ textAlign: 'center' }}>
              <StarRating total={reviews.rating} />
            </Restaurant.Rating>
            {/* <hr /> */}
          </>

          <ReviewForm onSubmit={onSubmit}>
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
              name="author_name"
              type="text"
              placeholder="Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <ReviewForm.LastName
              name="lastname"
              type="text"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
            <ReviewForm.Review
              name="text"
              placeholder="Review"
              onChange={(e) => setReview(e.target.value)}
            ></ReviewForm.Review>
            <ReviewForm.Button type="submit" onClick={handleReview}>
              Share Review
            </ReviewForm.Button>
          </ReviewForm>
        </RestaurantContainer>
      </MainContainer>
    </>
  );
}
