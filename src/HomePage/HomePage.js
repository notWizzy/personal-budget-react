import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "chart.js/auto";
import * as d3 from "d3";

function HomePage() {
  const [budgetData, setBudgetData] = useState([]);
  const [myChart, setMyChart] = useState(null); // Define myChart state
  const [newBudgetData, setNewBudgetData] = useState([]);
  const [d3jsChart, setD3jsChart] = useState(null); // Define d3jsChart state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/budget");
        setBudgetData(response.data.myBudget);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (budgetData.length > 0) {
      renderChart();
    }
  }, [budgetData]);

  useEffect(() => {
    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, [myChart]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/newbudget");
        setNewBudgetData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (newBudgetData.length > 0) {
      renderD3jsChart();
    }
  }, [newBudgetData]);

  useEffect(() => {
    return () => {
      if (d3jsChart) {
        // Clean up the chart instance when the component unmounts
        d3jsChart.selectAll("*").remove();
      }
    };
  }, [d3jsChart]);

  const renderD3jsChart = () => {
    const data = newBudgetData.map((item) => ({
      label: item.label,
      value: item.value,
    }));

    const svgWidth = 500;
    const svgHeight = 500;
    const margin = { top: 20, right: 20, bottom: 20, left: 20 };
    const width = svgWidth - margin.left - margin.right;
    const height = svgHeight - margin.top - margin.bottom;
    const radius = Math.min(width, height) / 2;

    const svg = d3.select("#d3jsChart").append("svg")
      .attr("width", svgWidth)
      .attr("height", svgHeight)
      .append("g")
      .attr("transform", `translate(${svgWidth / 2}, ${svgHeight / 2})`);

    const color = d3.scaleOrdinal()
      .domain(data.map(d => d.label))
      .range(d3.schemeCategory10);

    const pie = d3.pie()
      .value(d => d.value);

    const data_ready = pie(data);

    svg.selectAll("whatever")
      .data(data_ready)
      .enter()
      .append('path')
      .attr('d', d3.arc()
        .innerRadius(0)
        .outerRadius(radius)
      )
      .attr('fill', d => color(d.data.label))
      .attr("stroke", "black")
      .style("stroke-width", "2px")
      .style("opacity", 0.7);

    // Adding labels
    svg.selectAll('mySlices')
      .data(data_ready)
      .enter()
      .append('text')
      .text(d => d.data.label)
      .attr("transform", d => `translate(${d3.arc().innerRadius(0).outerRadius(radius).centroid(d)})`)
      .style("text-anchor", "middle")
      .style("font-size", 12);

    setD3jsChart(svg);
  };

  const renderChart = () => {
    const ctx = document.getElementById("myChart");
    if (!ctx || !budgetData.length) return;

    if (myChart) {
      myChart.destroy();
    }

    const chart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: budgetData.map((item) => item.title),
        datasets: [
          {
            label: "Budget",
            data: budgetData.map((item) => item.budget),
            backgroundColor: [
              "#ffcd56",
              "#ff6384",
              "#36a2eb",
              "#fd6b19",
              "green",
              "red",
              "blue",
              "yellow",
              "purple",
              "orange",
            ],
            borderWidth: 1,
          },
        ],
      },
    });

    setMyChart(chart);
  };

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
      <section id="d3jsChart">
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
