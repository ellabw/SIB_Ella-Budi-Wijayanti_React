import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <nav><ul>
            <li><a href="#" className="logo">QTemu</a></li>
            <li>{" "}<a href="#">Create Meetup</a>{" "}</li>
            <li><a href="#">Explore</a></li>
            <li className="login"><a href="#">Login</a></li>
          </ul></nav>
        </header>
        <main>
          <section className="profile">
            <div className="image">
              <img src="" alt="" />
            </div>
            <div className="about">
              <h3>Hacktiv8 Meetup</h3>
              <p>Location <span className="location">Jakarta, Indonesia</span>{" "}</p>
              <p>Members <span className="members">1,078</span>{" "}</p>
              <p>Organizers <span className="organizers">Adhy Wiranata</span></p>
              <a href="#" className="join">Join Us</a>
            </div>
          </section>

          <h3>Next Meetup</h3>
          <article className="firstArticle">
            <p><b>Awesome Meetup and event</b>{" "}</p>
            <p className="date">25 January 2019</p>
            <p><b>Hello, Javascript & Node.js Ninjas!<br />
                Get Ready for our montly meetup JakartaJS! This will be our fifth meetup of 2018! <br />
                The meetup format will contain some short stories and technical talks. <br /> 
                If you have a short announcement you'd like to share with the audience, you may do so during open mic announcements. <br />
                <br />
                Remember to bring a photo ID to get throught building security.{" "}
                <br /> <br />
                ..... <br /> <br />
                See you there! <br />
                <br />
                Best,Hengki, Giovanni, Sofian, Riza, Agung The JakartaJS Organizers
            </b></p>
          </article>

          <h3>About Meetup</h3>
          <article className="secondArticle">
            <p> Come and meet other developers interested in the JavaScript and it's library in the Greater Jakarta area </p>
            <p>Twitter: @JakartaJS and we use the hastag #jakartajs</p>
          </article>

          <div className="headerMembers">
            <div class="header">
              <h3> Members </h3>
              <h4> See all</h4>
            </div>
          </div>

          <article className="thirdArticle">
            <div className="profileMembers">
              <div className="image">
                <img src="" alt="" />
              </div>
              <div class="nameProfile">
                <p>Organizers</p>
                <p>Adhy Wiranata<span>4 others.</span></p>
              </div>
            </div>
          </article>

          <div class="headerMembers">
            <div class="header">
              <h3>Past Meetups</h3>
              <h4>See all</h4>
            </div>
          </div>
          <article className="btn">
            <div class="card">
              <div class="first">
                <p>27 November 2017</p><hr />
                <p>#39 JakartaJS April Meetup with kumparan</p>
                <p>139 <span>went</span></p>
                <div class="view"><p>View</p></div>
              </div>
              <div class="second">
                <p>27 October 2017</p><hr />
                <p>#38 JakartaJS April Meetup with BliBli</p>
                <p>113 <span>went</span></p>
                <div class="view"><p>View</p>{" "}</div>
              </div>
              <div class="third">
                <p>27 September 2017</p><hr />
                <p>#37 JakartaJS April Meetup with Hacktiv8</p>
                <p>110 <span>went</span></p>
                <div class="view"><p>View</p></div>
              </div>
            </div>
          </article>
          <div class="line"></div>
        </main>
        <footer>
          <p>Copyright Hacktiv8 2018</p>
        </footer>
      </div>
      <div className="clear"></div>
    </div>
  );
}

export default App;
