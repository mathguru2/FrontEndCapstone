import "./HomePage.css";
import Resteraunt1 from "../assets/Resteraunt1.jpg";
import Tree from "../assets/Tree.jpg";
import Lemonade from "../assets/Lemonade.jpg";

export default function HomePage() {
  return (
    <>
      <main>
        <section className="promo-banner">
          <h1>Promotional Banner</h1>
        </section>
        <section className="content-columns">
          <div className="column">
            <img src={Resteraunt1} alt="Cozy Resteraunt" />
            <article>Wonderful atmosphere!</article>
          </div>
          <div className="column">
            <img src={Lemonade} alt="Lemonade" />
            <article>Try some of our famous lemonade!</article>
          </div>
          <div className="column">
            <img src={Tree} alt="A tree" />
            <article>Always environmentally aware</article>
          </div>
        </section>
      </main>
    </>
  );
}
