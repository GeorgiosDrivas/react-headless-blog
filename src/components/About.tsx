export default function About() {
  return (
    <>
      <div className="container" id="contact">
        <section>
          <h2>About this project</h2>
          <p>
            This project is a simple blog that uses WordPress as a headless CMS
            and React and SASS for the frontend.
            <br />
          </p>
        </section>
        <section>
          <h2>Tech Stach</h2>
          <div id="tech-stack">
            <div className="tech-stack-item">
              <img src="/wordpress.png" alt="WordPress" />
              <p>WordPress</p>
            </div>
            <div className="tech-stack-item">
              <img src="/react.png" alt="React" />
              <p>React</p>
            </div>
            <div className="tech-stack-item">
              <img src="/typescript.png" alt="TypeScript" />
              <p>TypeScript</p>
            </div>
            <div className="tech-stack-item">
              <img src="/sass.png" alt="SASS" />
              <p>SASS</p>
            </div>
          </div>
        </section>
        <section>
          <h2>Resources</h2>
          <div id="contact_resources">
            <a
              href="https://github.com/GeorgiosDrivas/react-headless-blog"
              target="_blank"
            >
              Github repository link
            </a>
            <a
              href="https://www.linkedin.com/in/drivasgeorgios/"
              target="_blank"
            >
              LinkedIn Profile
            </a>
            <a href="https://www.georgiosdrivas.eu/" target="_blank">
              Portfolio website
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
