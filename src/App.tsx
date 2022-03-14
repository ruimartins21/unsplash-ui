import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import "./App.scss";

import Home from "./pages/home";
import { store, persistor } from "./store";
import Sidebar from "./components/sidebar";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <main>
            <Sidebar />
            <div className="content-wrapper">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/photos/*" element={<Home />} />
              </Routes>
            </div>
          </main>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
