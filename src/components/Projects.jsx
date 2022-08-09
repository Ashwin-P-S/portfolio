import "./styles/projects.css"
import works from "./assets/works.svg"

function Projects() {

    return (
        <div className="projectsBox" data-aos={"fade-down"} >

            <div className="works">
                <p> My Recent Works </p>
                <p> Here's a few projects I've developed </p>
            </div>

            <div className="img">
                <img src={works} alt="works" />
            </div>

            <div className="worksBox">

                <div className="projects">
                    {"<"} / {">"} <br />
                    <h3> Weather App </h3>
                    <div className="desc">
                        <p>
                            The Weather Forecasting Application using API.<br />
                            Get a quick Weather Forecast for any location
                        </p>

                    </div>
                    <div className="codeBtn">
                        <a className="input" href="https://weatherscrapper.netlify.app" target="_blank" rel="noopener noreferrer">
                            Visit {">"}
                        </a>
                        <a className="input" href="https://github.com/Ashwin-P-S/WeatherApp" target="_blank" rel="noopener noreferrer">
                            Code {">"}
                        </a>
                    </div>
                </div>

                <div className="projects">
                    {"<"} / {">"} <br />
                    <h3> Task Tracker </h3>
                    <div className="desc">
                        <p>
                            A Simple Task Tracking Application.<br />
                            This Application was bootstrapped with Create-React-App
                        </p>

                    </div>
                    <div className="codeBtn">
                        <a className="input" href="https://tracktasker.netlify.app" target="_blank" rel="noopener noreferrer">
                            Visit {">"}
                        </a>
                        <a className="input" href="https://github.com/Ashwin-P-S/react-task-tracker" target="_blank" rel="noopener noreferrer">
                            Code {">"}
                        </a>
                    </div>

                </div>

                <div className="projects">
                    {"<"} / {">"}
                    <h3> Railway Reservation System </h3>
                    <div className="desc">
                        <p>
                            An Reservation System to Book/Cancel Tickets.<br />
                            This is an Mini Project written in C Language
                        </p>

                    </div>
                    <div className="codeBtn">
                        <a className="input" href="https://github.com/Ashwin-P-S/MiniProject_RRS" target="_blank" rel="noopener noreferrer">
                            View Project {">"}
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Projects