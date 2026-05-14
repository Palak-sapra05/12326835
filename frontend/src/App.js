import { BrowserRouter, Routes, Route } from "react-router-dom";

import Notifications from "./pages/Notifications";
import Priority from "./pages/Priority";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/notifications"
          element={<Notifications />}
        />

        <Route
          path="/priority"
          element={<Priority />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
