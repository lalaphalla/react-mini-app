import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [Edit, setEdit] = useState("Edit");
  const [playerName, setplayerName] = useState(initialName)

  function handleClick() {
    isEditing ? setEdit("Edit") : setEdit("Save");
    // not good  practice
    // setIsEditing(!isEditing);
    // best Practice
    setIsEditing((editing) => !editing)

  }
  /**
   *
   *
   * @param {*} event automaticall give from handleChange function
   */
  function handleChange(event){
    setplayerName(event.target.value)
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    // value = {name} assign name to input value
    // value = {name} overwrite any changes we're trying to do
    // value can change to defaultValue
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>;
  }
  return (
    <li className={isActive ? "highlight-player" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>

      <button onClick={handleClick}>{Edit}</button>
    </li>
  );
}
