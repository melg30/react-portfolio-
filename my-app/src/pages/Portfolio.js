import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

const Portfolio = () => {
    return (
        <div id="portfolioContainer">
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src="/images/Screenshot (8).png" alt="DishOut" />
                    <Card.Body>
                        <Card.Title>DishOut</Card.Title>
                        <Card.Text>
                            Use our food & drink pages to enter 3 ingredients and get 5 recipe ideas that use them up!
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="https://kacox1251.github.io/DishOut/" target="_blank">Web Link</Card.Link>
                        <Card.Link href="https://github.com/kacox1251/DishOut" target="_blank">Repo Link</Card.Link>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="/images/Screenshot (17).png" alt="Daily Planner" />
                    <Card.Body>
                        <Card.Title>Daily Planner</Card.Title>
                        <Card.Text>
                            This is a day planner meant to help the user keep track of reminders or appointments for daily tasks!
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="https://prest261.github.io/Day-Planner/" target="_blank">Web Link</Card.Link>
                        <Card.Link href="https://github.com/Prest261/Day-Planner" target="_blank">Repo Link</Card.Link>
                    </Card.Body>
                </Card>
            </CardDeck>
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src="/images/Screenshot (18).png" alt="Password Generator" />
                    <Card.Body>
                        <Card.Title>Password Generator</Card.Title>
                        <Card.Text>
                            Generate a random password with special characters, lowercase letters, uppercase letters, and numeric characters!
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="https://prest261.github.io/Password-Generator/" target="_blank">Web Link</Card.Link>
                        <Card.Link href="https://github.com/Prest261/Password-Generator" target="_blank">Repo Link</Card.Link>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="/images/Screenshot (14).png" alt="Code Quiz" />
                    <Card.Body>
                        <Card.Title>Code Quiz</Card.Title>
                        <Card.Text>
                            Test your coding knowledge with a short timed quiz! High Score is saved so you can try again to improve your score!
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="https://prest261.github.io/Code-Quiz/" target="_blank">Web Link</Card.Link>
                        <Card.Link href="https://github.com/Prest261/Code-Quiz" target="_blank">Repo Link</Card.Link>
                    </Card.Body>
                </Card>
            </CardDeck>
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src="/images/Screenshot (28).png" alt="Burger" />
                    <Card.Body>
                        <Card.Title>Eat-Da-Burger</Card.Title>
                        <Card.Text>
                            Add any burger you want and choose to devour it at your leisure!!
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="https://desolate-caverns-30884.herokuapp.com/" target="_blank">Web Link</Card.Link>
                        <Card.Link href="https://github.com/Prest261/Handlebars-BurgerApp" target="_blank">Repo Link</Card.Link>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="/images/Screenshot (30).png" alt="Note Taker" />
                    <Card.Body>
                        <Card.Title>Note Taker</Card.Title>
                        <Card.Text>
                            Create, update and save notes, in this application!
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="https://damp-crag-01754.herokuapp.com/" target="_blank">Web Link</Card.Link>
                        <Card.Link href="https://github.com/Prest261/Note_Taker" target="_blank">Repo Link</Card.Link>
                    </Card.Body>
                </Card>
            </CardDeck>
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src="/images/Screenshot (29).png" alt="Employee Tracker" />
                    <Card.Body>
                        <Card.Title>Employee Tracker</Card.Title>
                        <Card.Text>
                            Easy to use command-line application to add, update, and remove employees,
                            roles, and departments!
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="https://github.com/Prest261/Employee_Tracker" target="blank">Repo Link</Card.Link>
                    </Card.Body>
                </Card>


                <Card>
                    <Card.Img variant="top" src="/images/Screenshot (32).png" alt="Employee Summary" />
                    <Card.Body>
                        <Card.Title>Employee Summary</Card.Title>
                        <Card.Text>
                            Generate a team through the command-line and create a team roster that
                            displays in the browser!
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>

                        <Card.Link href="https://github.com/Prest261/Employee_Summary" target="_blank">Repo Link</Card.Link>
                    </Card.Body>
                </Card>
            </CardDeck>
        </div>
    )
};

export default Portfolio;