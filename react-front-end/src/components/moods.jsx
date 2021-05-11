import React from "react";

const Moods = (props) => {
  let Parser = require('rss-parser');
  let parser = new Parser();

  (async () => {
    let feed = await parser.parseURL('https://cors-anywhere.herokuapp.com/https://www.goodnewsnetwork.org/category/news/inspiring/feed/');
  
    feed.items.slice(-1).forEach(item => {
      let titleLink = (item.title + ': ' + item.link);
      console.log(titleLink);
    });
  })();

  return (
    <article className="MoodsPage">
      <section className="Moods">
      <div className="MoodsTop">
        <div className="MoodBox">
        <input type="image" src={require("../images/newPanda.png")} alt="PandaImage"className="Mood" width="85%" />
      <h3>Depressed</h3>
      </div>
      <div className="MoodBox">
      <input type="image" src={require("../images/newPanda.png")} alt="PandaImage"className="Mood" width="85%" />
      <h3>Anxious</h3>
      </div>
      </div>
      <div className="MoodsBottom">
      <div className="MoodBox">
      <input type="image" src={require("../images/newPanda.png")} alt="PandaImage" className="Mood" width="85%" />
      <h3>Angry</h3>
      </div>
      <div className="MoodBox">
      <input type="image" src={require("../images/newPanda.png")} alt="PandaImage" className="Mood" width="85%" />
      <h3>Scared</h3>
      </div>
      </div>
      </section>
      <hr />
      <div className="MoreResources">
      <h3>More Resources<hr></hr></h3>
      <a
        href="https://www.betterhelp.com/helpme/?utm_source=AdWords&utm_medium=Search_PPC_c&utm_term=betterhelp_e&utm_content=113425365251&network=g&placement=&target=&matchtype=e&utm_campaign=10969405372&ad_type=text&adposition=&gclid=Cj0KCQjws-OEBhCkARIsAPhOkIZjT-gD9dfHaAXRWFPjDRtLjjcQPLfVxiUrsLcsDJOAQZwFgRjkqLoaAmt1EALw_wcB&not_found=1&gor=helpme"
        target="_blank" rel="noopener noreferrer"
      >
        BetterHelp
      </a>
      <a href="https://www.goodnewsnetwork.org/" target="_blank" rel="noopener noreferrer">
        GoodNewsNetwork
      </a>
      </div>
    </article>
  );
};

export default Moods;
