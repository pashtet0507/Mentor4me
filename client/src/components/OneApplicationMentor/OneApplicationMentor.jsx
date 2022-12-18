import React from 'react';
import './OneApplicationMentor.css';

export default function OneApplicationMentor({ review }) {
  console.log('review', review);
  return (
    <div className="blockReview" data-wow-duration="1.2s" data-wow-delay="0.8s">
      <div className="imgBlock">
        <img src={`/photos/${review?.Student.photo}`} alt="img" className="imgReview" />
      </div>
      <div className="textReview">
        <div className="nameStudent">{`${review?.Student?.firstName} ${review?.Student?.lastName}`}</div>
        <div className="dataReview">
          {`${new Date(review?.createdAt).toLocaleString().slice(0, 10)}`}

        </div>
        <div className="reviewDescr">
          {review?.comment}
        </div>
      </div>
      <div className="retingBlock">
        <div>
          <img className="iconStar" src="/icons/star.png" alt="logo" />
        </div>
        <div className="reting">
          (
          {`${review?.rating} / 5`}
          )
        </div>
      </div>
    </div>
  );
}
