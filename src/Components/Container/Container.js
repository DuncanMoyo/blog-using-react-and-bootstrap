import React, { Component } from "react";
import Post_Preview from "../Post_Preview/Post_Preview";

export class Container extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <Post_Preview /> 
            <Post_Preview /> 
            <Post_Preview /> 
            <Post_Preview /> 
            <div className="clearfix">
              <a className="btn btn-primary float-right" href="#">
                Older Posts &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Container;
