/* import styles from "./views.module.css"; */
import {
  StyledMain,
  StyledListNoorder,
  StyledItemsNoorder,
  StyledTitle,
} from "../styled/Reviews";

export default function Reviews({ reviews }) {
  return (
    <StyledMain>
      <StyledListNoorder>
        {reviews.results.length ? (
          reviews.results.map((review) => (
            <StyledItemsNoorder key={review.id}>
              <p>
                <b>Author:</b> {review.author}
              </p>

              <p> {review.content}</p>
            </StyledItemsNoorder>
          ))
        ) : (
          <StyledTitle>
            <b>We don't have any reviews for this movie</b>
          </StyledTitle>
        )}
      </StyledListNoorder>
    </StyledMain>
  );
}
