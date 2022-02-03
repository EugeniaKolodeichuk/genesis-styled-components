import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as filmsAPI from "../../services/apiService";
import {
  StyledButton,
  StyledForm,
  StyledInput,
  StyledListNoorder,
  StyledItemsNoorder,
  StyledLink,
} from "./StyledMoviesPage";

export default function MoviesPage() {
  const location = useLocation();
  const history = useHistory();

  const [search, setSearch] = useState([]);
  const [value, setValue] = useState("");

  const query = location.search.split("=");
  const [searchValue, setSearchValue] = useState(query[1]);

  useEffect(() => {
    if (!searchValue) {
      return;
    }

    filmsAPI.fetchSearchFilms(searchValue).then(setSearch);
  }, [searchValue]);

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (value.trim() === "") {
      toast.error("Please enter search request!");
      return;
    }
    history.push(`/movies?query=${value}`);
    setSearchValue(value);
    setValue("");
  };

  return (
    <StyledForm onSubmit={submitHandler}>
      <StyledInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search films"
        onChange={changeHandler}
        value={value}
      ></StyledInput>
      <StyledButton type="submit">Search</StyledButton>
      <hr />

      {search.results && !search.results.length && (
        <h1>{`No results for ${searchValue}`}</h1>
      )}

      {
        <StyledListNoorder>
          {search.results &&
            search.results.map((result) => (
              <StyledItemsNoorder key={result.id}>
                <StyledLink
                  to={{
                    pathname: `/movies/${result.id}`,
                    state: { from: location },
                  }}
                >
                  {result.original_title}
                </StyledLink>
              </StyledItemsNoorder>
            ))}
        </StyledListNoorder>
      }

      <ToastContainer autoClose={2000} />
    </StyledForm>
  );
}
