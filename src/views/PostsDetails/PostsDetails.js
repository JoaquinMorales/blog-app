import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import { Search } from '../../components/Search';
import { Post } from '../../components/Post';
import { Comments } from '../../components/Comments';
import { Query } from '../../service';


export class PostsDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedPost: 0 };
    this.updateSelected = this.updateSelected.bind(this);
  }

  updateSelected(id) {
    this.setState({ selectedPost: id });
  }

  render() {
    return (
      <Segment>
        <Query params={{ method: 'get', url: 'posts' }}>
          {
            (response) => {
              const { data = [] } = response;
              const { state: { selectedPost } } = this;
              const titles = data.map(item => ({ key: item.id, value: item.title }));
              return (
                <React.Fragment>
                  <Segment key="searchSection" textAlign="center" basic><Search items={titles} onSelect={this.updateSelected} /></Segment>
                  {selectedPost !== 0
                    && (
                    <div>
                      <Post id={selectedPost} />
                      <Comments postId={selectedPost} />
                    </div>
                    )
                  }
                </React.Fragment>
              );
            }
          }
        </Query>
      </Segment>
    );
  }
}

export default PostsDetails;
