import shortid from "shortid";
import defaultImage from "../../static/default_photo.png";
import {
  StyledMain,
  StyledListNoorder,
  StyledImage,
  StyledItemsNoorder,
} from "./StyledCast";

export default function Casts({ actors }) {
  return (
    <StyledMain>
      <StyledListNoorder>
        {actors.cast.length ? (
          actors.cast.map((actor) => (
            <StyledItemsNoorder key={shortid.generate()}>
              {actor.profile_path ? (
                <StyledImage
                  key={shortid.generate()}
                  width="150px"
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  alt={actor.original_name}
                />
              ) : (
                <StyledImage
                  key={shortid.generate()}
                  width="150px"
                  src={defaultImage}
                  alt={actor.original_name}
                />
              )}

              <p key={actor.id}>
                {actor.name}
                <br />
                <b>Character:</b> {actor.character}
              </p>
            </StyledItemsNoorder>
          ))
        ) : (
          <p>We don't have any information about cast</p>
        )}
      </StyledListNoorder>
    </StyledMain>
  );
}
