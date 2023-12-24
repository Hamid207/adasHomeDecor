import { Route, Routes } from "react-router-dom";
import Layouts from "./components/layouts/Layouts";
import HomePage from "./pages/home/HomePage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
