import Cover from "../../components/Cover";

export const metadata = {
  title: "About",
  description: "About the Wanderlust practice project.",
};

export default function AboutPage() {
  return (
    <>
      <div className="page-heading">
        <div className="container">
          <h1>About Wanderlust</h1>
        </div>
      </div>
      <section className="section">
        <div className="container about-grid">
          <Cover file="about.jpg" alt="A traveller with a backpack" />
          <div>
            <p>
              Wanderlust is a make-believe travel blog that I built to practise Next.js. It uses the App Router,
              a page for every story and a small filter on the stories page.
            </p>
            <p>
              The stories are short sample articles about well-known places in Bangladesh. They are written for
              this practice project, so please check current travel information before you plan a real trip.
            </p>
            <p>
              The site is built with Next.js and React and uses plain CSS. There are no animations and no
              database. All the stories live in one file, <code>data/posts.js</code>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
