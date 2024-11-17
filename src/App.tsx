import React, { Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import PrivateRoute from "./components/routes/PrivateRoute";
import { CircularProgress } from "@mui/material";
import PublicRoute from "./components/routes/PublicRoute";

const App: React.FC = () => {
  const [IsLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Suspense
        fallback={
          <div>
            <CircularProgress />
          </div>
        }
      >
        <Routes>
          <Route
            element={
              <PrivateRoute
                IsLoggedIn={IsLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          >
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route element={<PublicRoute isLoggedIn={IsLoggedIn} />}>
            <Route
              path="/login"
              element={<LoginPage setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
