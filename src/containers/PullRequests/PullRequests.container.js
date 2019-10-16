import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as dataActions from "./PullRequests.actions";

import { Header, Segment, Image, List, Container, Loader, Message } from "semantic-ui-react";
import Paginator from '../../components/Pagination.component';


class PullRequests extends Component {

  state = {
    activePage: 1
  }

  componentDidMount() {
    const { repoName } = this.props.match.params;
    this.props.actions.getPullRequestsRequest(repoName);
  }


  handleChangePagination = (event, { activePage }) =>
    this.setState({
      activePage
    })

  render() {
    const { pullRequestsDetail= [], errorMessage, isFetching } = this.props.state;
    if (isFetching) {
      return <div><Loader style={{ display: "block" }} content="Pull Requests loading" /></div>;
    }
    if (errorMessage) {
      return <Message color="red">ERROR! PLEASE CHECK API</Message>;
    }

    const { repoName } = this.props.match.params;
    const { activePage } = this.state;

    return (
      <div>
        <Segment>
          <Container>
            <Header>{ repoName } Pull Requests</Header>
          </Container>
        </Segment>
        <Container style={{ "marginTop": "2em" }}>
          {pullRequestsDetail &&
            pullRequestsDetail
            .slice(
                  (activePage - 1) * 10,
                  activePage * 10
                )
              .map((pullRequestsDetail, index) =>
              <List.Item key={pullRequestsDetail.id}>
                <Image style={{ width: "40px" }} className="card-image" src={pullRequestsDetail.user.avatar_url} />
                <List.Content>
                  <List.Header>
                    {pullRequestsDetail.user.login}
                  </List.Header>
                  {pullRequestsDetail.description}
                </List.Content>
              </List.Item>
            )}
        </Container>
        <Paginator
            onPageChange={this.handleChangePagination}
            activePage={this.state.activePage}
            totalItem={pullRequestsDetail.length}></Paginator>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: {
      ...state.pullRequests
    }
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(dataActions, dispatch)
  };
};

PullRequests.propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(PullRequests);