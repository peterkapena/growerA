import { ApolloClient, InMemoryCache } from "@apollo/client";
import { STR_TOKEN } from "./common";

export default new ApolloClient({
  uri: process.env.REACT_APP_GRAPH_URL,
  cache: new InMemoryCache(),
  headers: {
    authorization: sessionStorage.getItem(STR_TOKEN) || "",
  },
});
