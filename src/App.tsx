import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { ROUTES } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <div className="px-8 md:px-16 lg:px-24 min-h-svh grid grid-rows-[auto_1fr] gap-5">
        <Header />

        <Routes>
          {ROUTES.map((route) => (
            <Route {...route} />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
