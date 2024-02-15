import React from "react";

function HomePage() {
  return (
    <main className="center" id="main">
      <section>
        <div className="page-area">
          <article>
            <h1>Stay on track</h1>
            <p>
              Do you know where you are spending your money? If you really stop
              to track it down, you would get surprised! Proper budget
              management depends on real data... and this app will help you with
              that!
            </p>
          </article>
          <article>
            <h1>Alerts</h1>
            <p>
              What if your clothing budget ended? You will get an alert. The
              goal is to never go over the budget.
            </p>
          </article>
          <article>
            <h1>Results</h1>
            <p>
              People who stick to a financial plan, budgeting every expense, get
              out of debt faster! Also, they to live happier lives... since they
              expend without guilt or fear... because they know it is all good
              and accounted for.
            </p>
          </article>
          <article>
            <h1>Free</h1>
            <p>
              This app is free!!! And you are the only one holding your data!
            </p>
          </article>
          <article>
            <h1>Stay on track</h1>
            <p>
              Do you know where you are spending your money? If you really stop
              to track it down, you would get surprised! Proper budget
              management depends on real data... and this app will help you with
              that!
            </p>
          </article>
          <article>
            <h1>Alerts</h1>
            <p>
              What if your clothing budget ended? You will get an alert. The
              goal is to never go over the budget.
            </p>
          </article>
          <article>
            <h1>Results</h1>
            <p>
              People who stick to a financial plan, budgeting every expense, get
              out of debt faster! Also, they to live happier lives... since they
              expend without guilt or fear... because they know it is all good
              and accounted for.
            </p>
          </article>
          <article>
            <h1>Chart</h1>
            <figure>
              <canvas
                id="myChart"
                width="400"
                height="400"
                aria-label="Budget Chart"
                alt="Budget Chart"
                aria-roledescription="Pie Chart"
              ></canvas>
            </figure>
          </article>
        </div>
      </section>
      {/* <section id="newChart" style="height: 500px">
        <h1>D3JS Chart</h1>
        <button class="randomize">Randomize</button>
      </section> */}
      <section id="newChart">
        <h1>D3JS Chart</h1>
        <button className="randomize">Randomize</button>
      </section>

      <br />
      <hr />
      <br />
      <a href="#top" className="backTop">
        Skip to top
      </a>
    </main>
  );
}

export default HomePage;
