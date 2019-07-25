import React, { Component } from 'react';

import ItemView from './item.view';
import ScrollWrapper from '../../components/scroll-wrapper';

export default class ListView extends Component {
  componentDidMount() {
    this.props.getData();
  }

    fetchMore = () => {
      const { pending } = this.props;

      if (!pending) {
        this.props.getData();
      }
    };

    render() {
      const { pending, data = [] } = this.props;
      const list = data.map(item => (
        <ItemView {...{
          item,
          key: item.id,
        }}
        />
      ));

      return (
        <ScrollWrapper handler={this.fetchMore}>
          {list}
          {pending ? <p>Loading...</p> : null}
        </ScrollWrapper>
      );
    }
}
