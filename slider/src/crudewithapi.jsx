import React from "react";

import { Route, Routes } from "react-router-dom";
import { Crudapi } from "./CRUDAPI";

export const Crudewithapi = () => {
  return (
    <div>
      <Routes>
        <Route path="/crudwithapi" element={<Crudapi></Crudapi>} />
      </Routes>
    </div>
  );
};
