import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardText,
  CardMenu,
  IconButton,
} from "react-mdl";
import "./Projects.css";

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://images.unsplash.com/photo-1603297638322-c7a08d52966c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8aHRtbCUyMGNzcyUyMGphdmFzY3JpcHR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60) center / cover",
              }}
            >
              MERN stack projects
            </CardTitle>
            <CardText>
              Valhalla and The-Slapp is a full CRUD e-commerce web app built on
              the MERN stack and includes authentication
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Live</Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://images.unsplash.com/photo-1603297638322-c7a08d52966c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8aHRtbCUyMGNzcyUyMGphdmFzY3JpcHR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60) center / cover",
              }}
            >
              MERN stack projects
            </CardTitle>
            <CardText>
              Valhalla and The-Slapp is a full CRUD e-commerce web app built on
              the MERN stack and includes authentication
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Live</Button>
            </CardActions>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url(https://images.unsplash.com/photo-1603297638322-c7a08d52966c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8aHRtbCUyMGNzcyUyMGphdmFzY3JpcHR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60) center / cover",
            }}
          >
            Vanilla javascript projects
          </CardTitle>
          <CardText>
            Brew-Haus is a brewery locator built with vanilla javascript and
            consumes the Mapbox and Brewery APIs.
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Live</Button>
          </CardActions>
        </Card>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url(https://images.unsplash.com/photo-1603297638322-c7a08d52966c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8aHRtbCUyMGNzcyUyMGphdmFzY3JpcHR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60) center / cover",
            }}
          >
            React on rails projects
          </CardTitle>
          <CardText>
            Tortuga is a web app built on the React on Rails and includes
            authentication.
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Live</Button>
          </CardActions>
        </Card>
      );
    } else {
      return (
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url(https://images.unsplash.com/photo-1603297638322-c7a08d52966c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8aHRtbCUyMGNzcyUyMGphdmFzY3JpcHR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60) center / cover",
            }}
          >
            React on airtable projects
          </CardTitle>
          <CardText>
            Classified is an inventory management system with React frontend and
            Airtable backend. It allow the user to to see which cars are readily
            available on the lot and which ones are rented.
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Live</Button>
          </CardActions>
        </Card>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>MERN</Tab>
          <Tab>HTML-CSS-JS</Tab>
          <Tab>React-RAILS</Tab>
          <Tab>React-Airtable</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
