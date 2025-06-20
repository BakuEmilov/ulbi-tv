import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root")!);

root.render(
  <div>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>
);
