import React from "react";

function Banner() {
  const [welcomeMessage, setWelcomeMessage] = React.useState("Welcome Message");
  const changeMessage = () => {
    setWelcomeMessage("Have a Good Time!");
  };

  return (
    <section className="banner" onClick={changeMessage}>
      <h2>{welcomeMessage}</h2>
    </section>
  );
}

export default Banner;
