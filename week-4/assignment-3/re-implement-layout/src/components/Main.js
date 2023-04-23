import React from "react";
import Banner from "./Banner";

function Main() {
  const [contentBox, setContentBox] = React.useState(true);
  function showContentBox() {
    setContentBox(false);
  }

  return (
    <main>
      <Banner />
      <section className="content">
        <h3>Section Title</h3>
        <div className="content-box">
          <div className="box">Content Box 1</div>
          <div className="box">Content Box 2</div>
          <div className="box">Content Box 3</div>
          <div className="box">Content Box 4</div>
        </div>

        <button className="action-button" onClick={showContentBox}>
          Call to Action
        </button>
        <div className={`content-box area-2 ${contentBox ? "hidden" : ""}`}>
          <div className="box">Content Box 5</div>
          <div className="box">Content Box 6</div>
          <div className="box">Content Box 7</div>
          <div className="box">Content Box 8</div>
        </div>
      </section>
    </main>
  );
}

export default Main;
