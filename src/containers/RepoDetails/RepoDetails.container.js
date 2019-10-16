import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as dataActions from "./RepoDetails.actions";
import { Link } from 'react-router-dom'


import { Header, Segment, Loader, List, Container, Message, Icon } from "semantic-ui-react";


class RepoDetails extends Component {
  componentDidMount() {
    const { repoName } = this.props.match.params;
    this.props.actions.getRepoDetailsRequest(repoName);
  }

  render() {

    const { repoDetail= [], errorMessage, isFetching } = this.props.state;
    const { repoName } = this.props.match.params;

    if (isFetching) {
      return <div><Loader style={{ display: "block" }} content="Repository Details loading" /></div>;
    }
    if (errorMessage) {
      return <Message color="red">ERROR! PLEASE CHECK API</Message>;
    }
    return (
      <div>
        <Segment>
          <Container>
            <Header>{repoName} Details</Header>
          </Container>
        </Segment>
        <Container style={{ "marginTop": "2em" }}>
          <List>
            <List.Header>
              {repoDetail.name}
            </List.Header>
            <p>{repoDetail.description}</p>
            <List.Item>Forks: {repoDetail.forks}</List.Item>
            <List.Item><Icon disabled name='star' />{repoDetail.stargazers_count}</List.Item>
            <List.Item><Icon disabled name='eye' />{repoDetail.watchers}</List.Item>
            <List.Item><Link to={{ pathname: `/${repoDetail.name}/pulls` }}>Pull Requests</Link></List.Item>
            <List.Item><Link to={{ pathname: `/${repoDetail.name}/issues` }}>Issues</Link></List.Item>
          </List>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: {
      ...state.repoDetails
    }
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(dataActions, dispatch)
  };
};

RepoDetails.propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoDetails);