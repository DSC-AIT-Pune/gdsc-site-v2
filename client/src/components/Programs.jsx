import React, { Component } from "react";
import { Grid } from "@mui/material";
import Button from "../components/Button";
import "../styles/components/programs.css";

class ExpandedLayout extends Component {
  constructor(props) {
    super(props);
    this.state = { orientation: "row" };
    if (this.props.id % 2 == 0) {
      this.orientation = "row";
      this.align = "left";
    } else {
      this.orientation = "row-reverse";
      this.align = "right";
    }
  }

  render() {
    return (
      <Grid
        container
        spacing={2}
        className="programs-expandGrid"
        style={{
          padding: "2%",
          flexDirection: this.orientation,
          display: "flex",
        }}
      >
        <Grid
          item
          lg={6}
          md={12}
          xs={12}
          className="programs-imageGrid"
          style={{ textAlign: this.align, padding: "24px" }}
        >
          <img src={this.props.img}></img>
        </Grid>
        <Grid
          item
          lg={6}
          md={12}
          xs={12}
          className="programs-contentArea"
          style={{
            textAlign: this.align,
            // borderTop: "2px dotted black",
            // borderBottom: "2px dotted black",
            // borderRight: this.orientation === "row" ? "2px dotted black" : "",
            // borderLeft: this.orientation != "row" ? "2px dotted black" : "",
          }}
        >
          <div className="programs-contentHead">
            <span>{this.props.heading}</span>
          </div>
          <div className="programs-contentText">
            <span>{this.props.text}</span>
          </div>
          <div className="programs-contentBottom">
            <Button text={"Know More"} url={this.props.url}></Button>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default ExpandedLayout;
