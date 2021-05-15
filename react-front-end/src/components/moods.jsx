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
          <button
              value="Depressed"
              onClick={handleClick}
              className="gradient-button gradient-button-1"
            >
              Depressed
            </button>
            <input
              className="PandaImage"
              type="image"
              src={require("../images/DepressedBack.png")}
              alt="DepressedPanda"
            />           
          </div>
          <div className="SingleMood">
          <button
              value="Anxious"
              onClick={handleClick}
              className="gradient-button gradient-button-2"
            >
              Anxious
            </button>
            <input
              className="PandaImage"
              type="image"
              src={require("../images/AnxiousBack.png")}
              alt="AnxiousPanda"
            />
          </div>
          <div className="SingleMood">
          <button value="Angry" onClick={handleClick} className="gradient-button gradient-button-3">
              Angry
            </button>
            <input
              className="PandaImage"
              type="image"
              src={require("../images/AngryBack.png")}
              alt="AngryPanda"
            />    
            <div className="circle-one"></div>      
          </div>
          <div className="SingleMood">
          <button
              value="Scared"
              onClick={handleClick}
              className="gradient-button gradient-button-4"
            >
              Scared
            </button>
            <input
              className="PandaImage"
              type="image"
              src={require("../images/ScaredBack.png")}
              alt="ScaredPanda"
            />
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
