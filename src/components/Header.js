import React from "react";
import CharacterList from "./CharacterList";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <CharacterList/>
    </header>
  );
}
