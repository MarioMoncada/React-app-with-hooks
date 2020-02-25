import React, { useState } from "react";

function CounterVotes() {
  const [count, setCont] = useState(0);
  const [VotesMessage, setMessagesVotes] = useState("Ingresa tu voto");
  function handleClick() {
    return setCont(count + 1);
  }
  function handleMessage(e) {
    if (e.target.value(count) === 2) {
      return setMessagesVotes(" no puedes votar mas");
    }
  }

  return (
    <div className="wraperCounterVote">
      <div></div>
      <input value={count} onChange={handleMessage}></input>
      <button className="btn-Votes" onClick={handleClick}>
        VOTE
      </button>
    </div>
  );
}

export default CounterVotes;
