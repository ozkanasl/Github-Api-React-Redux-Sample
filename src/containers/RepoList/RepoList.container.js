import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Header, Segment, Loader, Container, Message, List } from "semantic-ui-react";
import * as dataActions from "./RepoList.actions";

import RepoItem from './RepoList.Item.component';
import Paginator from '../../components/Pagination.component';



class RepoList extends Component {

  state = {
    activePage: 1
  }

  componentDidMount() {
    this.props.actions.getRepoListRequest();
  }


  handleChangePagination = (event, { activePage }) =>
    this.setState({
      activePage
    })

  render() {
    const { data= [], isFetching, errorMessage } = this.props.state;
    const { activePage } = this.state;

    if (isFetching) {
      return <div><Loader style={{ display: "block" }} content="Repository loading" /></div>;
    }
    if (errorMessage) {
      return <Message color="red">ERROR! PLEASE CHECK API</Message>;
    }
    return (
      <div>
        <Segment>
          <Container>
            <Header>ReactJs Repository</Header>
          </Container>
        </Segment>
        <Container style={{ "marginTop": "2em" }}>
          <List celled id="repo-list">
            {!!data &&
              data
              .slice(
                  (activePage - 1) * 10,
                  activePage * 10
                )
                .map((data, index) =>
              <RepoItem repo={data} key={data.id} />
            )}
          </List>
          <Paginator
            onPageChange={this.handleChangePagination}
            activePage={this.state.activePage}
            totalItem={data.length}></Paginator>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: {
      ...state.repoList
    }
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(dataActions, dispatch)
  };
};

RepoList.propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoList);