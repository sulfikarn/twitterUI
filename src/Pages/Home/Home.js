import Card from "../../Components/Card/Card";
import "./Home.css";
import tweetImg from "../../assets/image/download.png";
import moonImg from "../../assets/image/moon.png"
import { tweetData } from "../../utils/tweetData";
import catImage from '../../assets/image/cat.jpg'

function Home() {
  return (
    <>
      <section className="col-sm-6 feed-main">
        <div className="row wrap-feed">
          <h2>New Feed</h2>
          <hr />
          <header>
            {/* <nav class="navbar navbar-light bg-light"></nav> */}
            <div className="add-post">
              <img src={tweetImg} alt="profile" />
              <input
                className="input-form"
                type="text"
                placeholder="Whats happening?"
              />
              <button className="btn btn-primary pull-right">Tweet</button>
            </div>
          </header>
        </div>
        <div className="row">
          <div className="feed">
            {tweetData &&
              tweetData.map((item, index) => {
                return (
                  <>
                    <div className="tweet" key={item.id}>
                      <Card items={item} />
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </section>

      <section className="col-sm-3 wrap-treding">
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>

        <div className="trending-feed">
          <div className="row">
            <div className="trend">
              <h4 className="trend-text">
                <b>Trends For You</b>
              </h4>
              <hr />
              <div className="trending-tweet">
                <p>Treding Worldwide</p>
                <h5 className="heading">
                  <b>#BrekinNews</b>
                </h5>
                <div className="trend-news">
                  <div className="news">
                    <h5 className="news-headline">
                      <b>Space</b>
                    </h5>
                    <p>Lunar photography improves the discovery of the moon</p>
                  </div>
                  <img src={moonImg} alt="img" />
                </div>
                <hr />
              </div>
              <div className="trending-tweet">
                <p>Treding Worldwide</p>
                <h5 className="heading">
                  <b>#BrekinNews</b>
                </h5>
                <div className="trend-news">
                  <div className="news">
                    <h5 className="news-headline">
                      <b>Animals</b>
                    </h5>
                    <p>These cats are redy for For <br/>#InternationalCatDay</p>
                  </div>
                  <img src={catImage} alt="img" />
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;