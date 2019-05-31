import React, { Component } from "react";
import { getJobs } from "../../actions";

class JobsFeed extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getJobs());
  }

  render() {
    const { jobs } = this.props;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <div>
              {jobs.map(job => (
                <div key={job.id}>
                  <span>{job.position}</span>
                  <span>{job.employer}</span>
                  <span>{job.posted}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JobsFeed;
