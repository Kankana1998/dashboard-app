import { ThemeProvider } from "@mui/material/styles";

import theme from "./styles/theme";

import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
