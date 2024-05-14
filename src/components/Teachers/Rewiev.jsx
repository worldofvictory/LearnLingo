import { FaStar } from 'react-icons/fa';
import {
  Reviewer,
  ReviewerComment,
  ReviewerExperience,
  Avatar,
  ReviewerItem,
  ReviewerList,
  ReviewerName,
  ReviewerRating,
  ReviewerWrapper,
} from './TeachersCard.styled';


export const ReviewerComponent = ({ experience, reviews }) => {
  return (
    <Reviewer>
      <ReviewerExperience>{experience}</ReviewerExperience>
      <ReviewerList>
        {reviews.map(({ reviewer_name, reviewer_rating, comment }, index) => (
          <ReviewerItem key={index}>
            <ReviewerWrapper>
              <Avatar> 
                {reviewer_name.slice(0, 1)}
              </Avatar>
              <div>
                <ReviewerName>{reviewer_name}</ReviewerName>
                <ReviewerRating>
                  <span>
                    <FaStar />
                  </span>
                  {reviewer_rating}
                </ReviewerRating>
              </div>
            </ReviewerWrapper>
            <ReviewerComment>{comment}</ReviewerComment>
          </ReviewerItem>
        ))}
      </ReviewerList>
    </Reviewer>
  );
};
