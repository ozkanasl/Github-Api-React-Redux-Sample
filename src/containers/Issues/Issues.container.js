import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as dataActions from "./Issues.actions";


import { Header, Segment, Image, List, Container, Loader, Message } from "semantic-ui-react";
import Paginator from '../../components/Pagination.component';


class Issues extends Component {

  state = {
    activePage: 1
  }

  componentDidMount() {
    const { repoName } = this.props.match.params;
    this.props.actions.getIssuesRequest(repoName);
  }

  handleChangePagination = (event, { activePage }) =>
    this.setState({
      activePage
    })

  render() {

    const { issuesList = [], errorMessage, isFetching } = this.props.state;
    if (isFetching) {
      return <div><Loader style={{ display: "block" }} content="Issues loading" /></div>;
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
            <Header>{repoName} Issues</Header>
          </Container>
        </Segment>
        <Container style={{ "marginTop": "2em" }}>
          <List>
            {
              issuesList &&
              issuesList
                .slice(
                  (activePage - 1) * 10,
                  activePage * 10
                )
                .map((issuesList, index) =>
                  <List.Item key={issuesList.id}>
                    <Image style={{ width: "40px" }} className="card-image" src={issuesList.user.avatar_url} />
                    <List.Content>
                      <List.Header>
                        {issuesList.title}
                      </List.Header>
                      {issuesList.login}
                    </List.Content>
                    <p>{issuesList.state}</p>
                  </List.Item>
                )
            }
          </List>
          <Paginator
            onPageChange={this.handleChangePagination}
            activePage={this.state.activePage}
            totalItem={issuesList.length}></Paginator>

        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: {
      ...state.issues
    }
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(dataActions, dispatch)
  };
};

Issues.propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Issues);