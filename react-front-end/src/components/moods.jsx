import React from "react";
import { useHistory } from "react-router-dom";
import MenuAppBar from "./navbar";

const Moods = (props) => {
  const history = useHistory();
  function handleClick(e) {
    history.push(`/moods/${e.target.value}`);
  }

  return (
    <>
      <MenuAppBar />
      <article className="MoodsPage">
        <section className="MoodsCard">
          <div className="SingleMood">
            <input
              className="PandaImage"
              type="image"
              src={require("../images/newPanda.png")}
              alt="DepressedPanda"
            />
            <button
              value="Depressed"
              onClick={handleClick}
              className="DepressedButton"
            >
              Depressed
            </button>
          </div>
          <div className="SingleMood">
            <input
              className="PandaImage"
              type="image"
              src={require("../images/newPanda.png")}
              alt="AnxiousPanda"
            />
            <button
              value="Anxious"
              onClick={handleClick}
              className="AnxiousButton"
            >
              Anxious
            </button>
          </div>
          <div className="SingleMood">
            <input
              className="PandaImage"
              type="image"
              src={require("../images/newPanda.png")}
              alt="AngryPanda"
            />
            <button value="Angry" onClick={handleClick} className="AngryButton">
              Angry
            </button>
          </div>
          <div className="SingleMood">
            <input
              className="PandaImage"
              type="image"
              src={require("../images/newPanda.png")}
              alt="ScaredPanda"
            />
            <button
              value="Scared"
              onClick={handleClick}
              className="ScaredButton"
            >
              Scared
            </button>
          </div>
        </section>
        <section className="ResourceButtons">
          <p>More Resources</p>
          <a href={props.newsArticle[1]} target="_blank"><p>Inspiring Articles..</p>
            {props.newsArticle[0]}
          </a>
          <div className="CenterButtons">
            <a
              href="https://www.betterhelp.com/helpme/?utm_source=AdWords&utm_medium=Search_PPC_c&utm_term=betterhelp_e&utm_content=113425365251&network=g&placement=&target=&matchtype=e&utm_campaign=10969405372&ad_type=text&adposition=&gclid=Cj0KCQjws-OEBhCkARIsAPhOkIZjT-gD9dfHaAXRWFPjDRtLjjcQPLfVxiUrsLcsDJOAQZwFgRjkqLoaAmt1EALw_wcB&not_found=1&gor=helpme"
              target="_blank"
              rel="noopener noreferrer"
            >
              BetterHelp
            </a>
            <a
              href="https://www.goodnewsnetwork.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GoodNewsNetwork
            </a>
          </div>
          <a href="/meditation" rel="noopener noreferrer">
            Meditate With Hiroki
          </a>
        </section>
      </article>
    </>
  );
};

export default Moods;
