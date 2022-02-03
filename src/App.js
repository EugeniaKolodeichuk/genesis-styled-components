import { lazy, Suspense, createContext, useState } from "react";
import { Switch, Route } from "react-router";
import AppBar from "./components/AppBar/AppBar";
import Container from "./components/Container/Container";
import { GlobalStyle } from "./styled/StyledGlobal";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/Theme/StyledThemes";

const HomePage = lazy(() =>
  import("./pages/HomePage/HomePage.js" /*webpackChunkName: "home-page"*/)
);
const MoviesPage = lazy(() =>
  import("./pages/MoviesPage/MoviesPage.js" /*webpackChunkName: "movies-page"*/)
);
const NotFoundPage = lazy(() =>
  import(
    "./pages/NotFoundPage/NotFoundPage.js" /*webpackChunkName: "not-found-page"*/
  )
);
const MovieDetailsPage = lazy(() =>
  import(
    "./pages/MovieDetailsPage/MovieDetailsPage.js" /*webpackChunkName: "movies-details-page"*/
  )
);

export const ThemeContext = createContext({
  value: "light",
  setThemeValue: () => {},
});

export default function App() {
  const [themeValue, setThemeValue] = useState("light");
  console.log(themeValue);
  return (
    <>
      <ThemeContext.Provider value={{ value: themeValue, setThemeValue }}>
        <ThemeProvider theme={theme[themeValue]}>
          <GlobalStyle />
          <Container>
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
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}
