import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

const Portfolio = () => {
  return (
    <div id="portfolioContainer">
      <CardDeck>
        <Card>
          <Card.Img variant="top" src="/images/Beer.png" alt="DishOut" />
          <Card.Body>
            <Card.Title>Beer Here</Card.Title>
            <Card.Text>Use our app the find Breweries near you!</Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link
              href="https://keeleybb.github.io/12_11_Beer_Here/index.html"
              target="_blank"
            >
              Web Link
            </Card.Link>
            <Card.Link
              href="https://github.com/keeleybb/12_11_Beer_Here"
              target="_blank"
            >
              Github Link
            </Card.Link>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="/images/Nerdify.png"
            alt="Daily Planner"
          />
          <Card.Body>
            <Card.Title>Nerdify</Card.Title>
            <Card.Text>
              Are you a little nerdy? Use our app to find people who have are
              apart of the same fandom, like the same games, and have similar
              interests as you.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link
              href="https://calm-reef-29496.herokuapp.com/"
              target="_blank"
            >
              Web Link
            </Card.Link>
            <Card.Link
              href="https://github.com/hmbudzinski/ProjectTwo"
              target="_blank"
            >
              Github Link
            </Card.Link>
          </Card.Body>
        </Card>
      </CardDeck>
      <CardDeck>
        <Card>
          <Card.Img
            variant="top"
            src="/images/Planner.png"
            alt="Password Generator"
          />
          <Card.Body>
            <Card.Title>Day Planner</Card.Title>
            <Card.Text>Schedule your day hour by hour.</Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link
              href="https://melg30.github.io/scheduler/"
              target="_blank"
            >
              Web Link
            </Card.Link>
            <Card.Link
              href="https://github.com/melg30/scheduler"
              target="_blank"
            >
              Github Link
            </Card.Link>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="/images/Weather.png" alt="Code Quiz" />
          <Card.Body>
            <Card.Title>Weather Dashboard</Card.Title>
            <Card.Text>
              Going out of town for the weekend? Search the 5 day weather
              forecast so you are prepared for rain or shine!
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link
              href="https://melg30.github.io/weather-dashboard/"
              target="_blank"
            >
              Web Link
            </Card.Link>
            <Card.Link
              href="https://github.com/melg30/weather-dashboard"
              target="_blank"
            >
              Github Link
            </Card.Link>
          </Card.Body>
        </Card>
      </CardDeck>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src="/images/Workout.png" alt="Burger" />
          <Card.Body>
            <Card.Title>Fitness Tracker</Card.Title>
            <Card.Text>
              Track your workouts, add to previous workouts, and see your
              progress!
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link
              href="https://warm-bayou-56967.herokuapp.com/"
              target="_blank"
            >
              Web Link
            </Card.Link>
            <Card.Link
              href="https://github.com/melg30/workout_tracker"
              target="_blank"
            >
              Github Link
            </Card.Link>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="/images/Team Generator.png"
            alt="Note Taker"
          />
          <Card.Body>
            <Card.Title>Employee Summary</Card.Title>
            <Card.Text>
              Generate a team through the command-line and create a team roster
              that displays in the browser!
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link
              href="https://github.com/melg30/employee_summary"
              target="_blank"
            >
              Github Link
            </Card.Link>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
};

export default Portfolio;
