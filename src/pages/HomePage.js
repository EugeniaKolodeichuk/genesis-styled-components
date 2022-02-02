import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import * as filmsAPI from "../services/apiService";
import {
  StyledMain,
  StyledTitle,
  StyledListOrder,
  StyledItemsOrder,
  StyledLink,
} from "../styled/Homepage";
/* import styles from "./views.module.css"; */

export default function HomePage() {
  const location = useLocation();

  const [films, setFilms] = useState([]);

  useEffect(() => {
    filmsAPI.fetchPopularFilms().then(setFilms);
  }, []);

  return (
    <StyledMain>
      <StyledTitle>Trending today</StyledTitle>
      <StyledListOrder>
        {films.results &&
          films.results.map((film) => (
            <StyledItemsOrder key={film.id}>
              <StyledLink
                to={{
                  pathname: `/movies/${film.id}`,
                  state: { from: location },
                }}
              >
                {film.title}
                {film.name}
              </StyledLink>
            </StyledItemsOrder>
          ))}
      </StyledListOrder>
    </StyledMain>
  );
}
