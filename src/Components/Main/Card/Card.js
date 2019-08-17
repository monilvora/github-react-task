import React from "react";

const Card = ({ cardInfo }) => {
  return (
    <div className="Card-list">
      { cardInfo.name ? <p>Name: {cardInfo.name}</p> : null}
      <p>Followers: {cardInfo.followers}</p>
      <p>Total repos: {cardInfo.public_repos}</p>
    </div>
  );
};

export default Card;
