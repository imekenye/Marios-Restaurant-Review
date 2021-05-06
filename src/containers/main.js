import React from "react";

import { Main } from "../components";

export default function MainContainer({ children }) {
  return (
    <>
      <Main>{children}</Main>
    </>
  );
}
