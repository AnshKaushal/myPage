import "./App.css";

function App() {
  return (
    <div>
      <div id="content">
        <div class="section">
          <img src={require("./images/bg.png")} alt="none" class="me" />
          <h1>Ansh Kaushal</h1>
          <h2 class="logo">Currently Studying In University</h2>
        </div>

        <div class="section">
          <h6>Projects</h6>

          <ul>
            <li>
              <h3>
                <a href="https://www.figma.com/@anshkaushal" rel="noreferrer" target={("_blank")}>
                  Figma Profile &#8680;
                </a>
              </h3>
              <p>My Designs and Animations</p>
            </li>
            <li>
              <h3>
                <a href="https://toogood.netlify.app/" rel="noreferrer" target={("_blank")}>My blog &#8680;</a>
              </h3>
              <p>My Programming Blog</p>
            </li>
            <li>
              <h3>
                <a href="https://themoonismine.netlify.app" rel="noreferrer" target={("_blank")}>
                  Moon Gallery &#8680;
                </a>
              </h3>
              <p>Only for the moon lovers</p>
            </li>
            <li>
              <h3>
                <a href="https://thetherapeuticclub.netlify.app" rel="noreferrer" target={("_blank")}>
                  The Therapeutic Club &#8680;
                </a>
              </h3>
              <p>Special club for people who would love to speak!</p>
            </li>
          </ul>
        </div>

        <div class="section links">
          <h6>My skills</h6>
          <a href="https://html.com/" rel="noreferrer" target={("_blank")} class="link">
            Html &#8680;
          </a>
          <a href="https://w3.org/" rel="noreferrer" target={("_blank")} class="link">
            Css &#8680;
          </a>
          <a href="https://javascript.com/" rel="noreferrer" target={("_blank")} class="link">
            Javascript &#8680;
          </a>
          <a href="https://reactjs.org" rel="noreferrer" target={("_blank")} class="link">
            Reactjs&#8680;
          </a>
          <a href="https://nextjs.org" rel="noreferrer" target={("_blank")} class="long link">
            Next.js &#8680;
          </a>
          <a href="https://anshkaushal.github.io/photoverse" rel="noreferrer" target={("_blank")} class="link">
            Photography &#8680;
          </a>
        </div>

        <div class="section links">
          <h6>Listen to my favourite music</h6>
          <a
            href="https://open.spotify.com/track/3M2wMYc84GuP0jzh5MWNN4"
            rel="noreferrer" target={("_blank")} class="link"
          >
            <strong>Jaan</strong> by Arjan Dhillon &#8680;
          </a>
          <a
            href="https://open.spotify.com/track/2MajsZJ85B49Rt1KWhu4P7"
            rel="noreferrer" target={("_blank")} class="link"
          >
            <strong>Blackberry Sap</strong> by Prem Dhillon &#8680;
          </a>
          <a
            href="https://open.spotify.com/track/2J2da9welNmoeeBDLl9fUk"
            rel="noreferrer" target={("_blank")} class="link"
          >
            <strong>Aroma</strong> by Sidhu Moose Wala &#8680;
          </a>
        </div>

        <div class="section links">
          <h6>See my favourite Graphics art</h6>
          <a href="https://www.instagram.com/p/CiG5FQvrBxW/" rel="noreferrer" target={("_blank")} class="link">
            Landscape &#8680;
          </a>
          <a href="https://www.instagram.com/p/CiN_dFMMB-6/" rel="noreferrer" target={("_blank")} class="link">
            Love for cars &#8680;
          </a>
        </div>

        <div class="section links">
          <h6>Some of my favourite photos</h6>
          <img
            src={require("./images/1.png")}
            alt="moon"
            style={{ width: "100%" }}
          />
          <img
            src={require("./images/2.png")}
            alt="moon"
            style={{ width: "100%" }}
          />
          <img
            src={require("./images/3.png")}
            alt="moon"
            style={{ width: "100%" }}
          />
          <img
            src={require("./images/4.png")}
            alt="moon"
            style={{ width: "100%" }}
          />
          <img
            src={require("./images/5.png")}
            alt="moon"
            style={{ width: "100%" }}
          />
          <img
            src={require("./images/6.png")}
            alt="moon"
            style={{ width: "100%" }}
          />
          <img
            src={require("./images/7.png")}
            alt="moon"
            style={{ width: "100%" }}
          />
        </div>

        <div class="section links">
          <h6>Contact </h6>
          <a href="mailto:anshhkhatri@gmail.com" rel="noreferrer" target={("_blank")} class="link">
            Email &#8680;
          </a>
          <a href="https://instagram.com/anshhkaushal" rel="noreferrer" target={("_blank")} class="link">
            Instagram &#8680;
          </a>
          <a href="https://toogood.netlify.app/" rel="noreferrer" target={("_blank")} class="link">
            Blog &#8680;
          </a>
          <a href="https://snapchat.com/add/anshhkaushal" rel="noreferrer" target={("_blank")} class="link">
            Snapchat &#8680;
          </a>
          <a href="https://github.com/AnshKaushal" rel="noreferrer" target={("_blank")} class="link">
            Github &#8680;
          </a>
        </div>
        <hr />
        <footer>
          <p style={{textAlign:"center"}}>Copyright Ansh Kaushal 2022</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
