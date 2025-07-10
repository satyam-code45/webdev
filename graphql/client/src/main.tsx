import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

console.log("uri: " + import.meta.env.VITE_GRAPHQL_SERVER);

const apolloClient = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHQL_SERVER,
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </StrictMode>
);
