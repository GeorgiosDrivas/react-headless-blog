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
          <ul>
            <li>WordPress API</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>SASS</li>
            <li>Vite</li>
            <li>React Router</li>
          </ul>
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
