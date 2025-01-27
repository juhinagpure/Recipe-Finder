import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { ROUTES } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <div className="px-4 md:px-12 lg:px-20 min-h-svh grid grid-rows-[auto_1fr] gap-5">
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
