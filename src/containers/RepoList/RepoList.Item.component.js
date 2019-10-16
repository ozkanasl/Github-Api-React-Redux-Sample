import React, { Component } from 'react'
import { Image, List, Icon } from "semantic-ui-react";
import { Link } from 'react-router-dom'


class RepoItem extends Component {
  render() {
    const { repo } = this.props;
    return (
      <List.Item>
        <Image style={{ width: "40px" }} className="card-image" src={repo.owner.avatar_url} />
        <List.Content>
          <List.Header>
            <Link to={{ pathname: `/${repo.name}` }}>{repo.name}</Link>
          </List.Header>
          {repo.description}
          <div>
            {repo.language ? <span><Icon style={{ color: "#F1E05A" }} disabled name='circle thin' />{repo.language}</span> : ''}
            <span>Forks: {repo.forks}</span>
            <span><Icon disabled name='star' />{repo.stargazers_count}</span>
            <span><Icon disabled name='eye' />{repo.watchers}</span>
          </div>
        </List.Content>
      </List.Item>
    )
  }
}
export default RepoItem;