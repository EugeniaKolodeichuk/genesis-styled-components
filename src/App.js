import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router";
import AppBar from "./components/AppBar/AppBar";
import Container from "./components/Container/Container";
import { GlobalStyle } from "./styled/Global";
import styled, { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { DarkTheme, LightTheme } from "./styled/Themes";

const HomePage = lazy(() =>
  import("./pages/HomePage.js" /*webpackChunkName: "home-page"*/)
);
const MoviesPage = lazy(() =>
  import("./pages/MoviesPage.js" /*webpackChunkName: "movies-page"*/)
);
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage.js" /*webpackChunkName: "not-found-page"*/)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./pages/MovieDetailsPage.js" /*webpackChunkName: "movies-details-page"*/
  )
);

const ThemeDefault = {
  color: "black",
  background: "white",
};

const StyledButton = styled.button`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;

const StyledWrapper = styled.div`
  /* position: fixed; */
  top: 0;
  left: 0;
  width: 100%;
  /* height: 100%; */
  display: flex;
  justify-content: flex-end;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  transition: background 0.35s;
`;

export default function App() {
  const [theme, setTheme] = useState(ThemeDefault);

  const handleThemeToggled = () => {
    if (theme.id === "dark") {
      setTheme({
        ...ThemeDefault,
        ...LightTheme,
      });
    } else {
      setTheme({
        ...ThemeDefault,
        ...DarkTheme,
      });
    }
  };

  useEffect(() => {
    setTheme({ ...ThemeDefault, ...LightTheme });
  }, []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledWrapper>
          <Container>
            <StyledButton onClick={handleThemeToggled}>
              ToggleTheme
            </StyledButton>
            <AppBar />

            <Suspense fallback={<h1>Loading...</h1>}>
              <Switch>
                <Route path="/" exact>
                  <HomePage />
                </Route>

                <Route path="/movies" exact>
                  <MoviesPage />
                </Route>

                <Route path="/movies/:movieId">
                  <MovieDetailsPage />
                </Route>

                <Route>
                  <NotFoundPage />
                </Route>
              </Switch>
            </Suspense>
          </Container>
        </StyledWrapper>
      </ThemeProvider>
    </>
  );
}
