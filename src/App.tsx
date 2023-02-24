import { useAppSelector } from "./redux/hooks";
import { theme } from "./redux/themeSlice";
import { ThemeProvider } from "@emotion/react";
// ----------------------------------------------------------------------
import { routes } from "./routes";
import { RouterProvider } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import apollo from "./apollo";

export default function App() {
  const themeState = useAppSelector((state) => state.theme);
  return (
    <ThemeProvider theme={theme(themeState.mode)}>
      <ApolloProvider client={apollo}>
        <RouterProvider router={routes} />
      </ApolloProvider>
    </ThemeProvider>
  );
}
