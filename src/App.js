import React from "react";
import { userContext } from "./context";
import Content from "./context-content";

export default function App(){
  return(
    <userContextProvider value={'Tom Jerry'}>
      <Content/>
    </userContextProvider>
  )
}
