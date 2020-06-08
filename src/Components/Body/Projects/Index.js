import React from "react";
import ProjectsHoc from "./ProjectsHoc";
import covid from "../../../Images/covid.jpg";
import food from "../../../Images/food.jpeg";
import Roll from "react-reveal/Roll";
export default function Projects() {
  return (
    <React.Fragment>
      <br />
      <br />
      <Roll left>
        <div className="container" id="projects">
          <h3>Projects</h3> <br />
          <div className="row ">
            <div className="col-md-4 col-sm-12">
              <ProjectsHoc
                title="COVID-19 Tracker"
                img={covid}
                link={"https://sufyantariq123.github.io/COVID-19-Tracker/ "}
                desc={
                  "  Track Covid-19 infected persons globally as well as country wise.Track death due to Covid-19 and recover patients globally and country wise.Line chart is used to display data globally. Bar Chart is used to display data Country wise.API is used to get the data."
                }
              />
            </div>
            <div className="col-md-4 col-sm-12">
              <ProjectsHoc
                title="Food Recipe Web App"
                img={food}
                link={"https://sufyantariq123.github.io/Food_Recipes/"}
                desc={
                  "Food recipe web application where user see the recipes of different things. Search bar for specific recipe. API is used to get the data. Bootstrap is used for design."
                }
              />
            </div>
            <div className="col-md-4 col-sm-12">
              <ProjectsHoc
                title="COVID-19 Tracker"
                img={covid}
                link={"https://sufyantariq123.github.io/COVID-19-Tracker/ "}
                desc={
                  "  Track Covid-19 infected persons globally as well as country wise.Track death due to Covid-19 and recover patients globally and country wise.Line chart is used to display data globally. Bar Chart is used to display data Country wise.API is used to get the data."
                }
              />
            </div>
            <div className="col-md-4 col-sm-12">
              <ProjectsHoc
                title="Food Recipe Web App"
                img={food}
                link={"https://sufyantariq123.github.io/Food_Recipes/"}
                desc={
                  "Food recipe web application where user see the recipes of different things. Search bar for specific recipe. API is used to get the data. Bootstrap is used for design."
                }
              />
            </div>
            <div className="col-md-4 col-sm-12">
              <ProjectsHoc
                title="COVID-19 Tracker"
                img={covid}
                link={"https://sufyantariq123.github.io/COVID-19-Tracker/ "}
                desc={
                  "  Track Covid-19 infected persons globally as well as country wise.Track death due to Covid-19 and recover patients globally and country wise.Line chart is used to display data globally. Bar Chart is used to display data Country wise.API is used to get the data."
                }
              />
            </div>
            <div className="col-md-4 col-sm-12">
              <ProjectsHoc
                title="Food Recipe Web App"
                img={food}
                link={"https://sufyantariq123.github.io/Food_Recipes/"}
                desc={
                  "Food recipe web application where user see the recipes of different things. Search bar for specific recipe. API is used to get the data. Bootstrap is used for design."
                }
              />
            </div>
          </div>
        </div>
      </Roll>
    </React.Fragment>
  );
}
