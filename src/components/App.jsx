import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";
function entryCard(emojipedia) {
  return (
    <Entry
      key={emojipedia.id}
      emoji={emojipedia.emoji}
      name={emojipedia.name}
      meaning={emojipedia.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(entryCard)}</dl>
    </div>
  );
}

export default App;
