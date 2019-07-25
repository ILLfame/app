import React, { Component } from 'react';

import debounce from '../utils/debounce';

export default class ScrollWrapper extends Component {
    wrapperRef = React.createRef();

    componentDidMount() {
      document.addEventListener('scroll', this.trackScrollingDebounced);
    }

    componentWillUnmount() {
      document.removeEventListener('scroll', this.trackScrollingDebounced);
    }

    isBottom = element => element.getBoundingClientRect().bottom <= window.innerHeight;

    trackScrolling = () => {
      if (this.isBottom(this.wrapperRef.current)) {
        this.props.handler();
      }
    };

    trackScrollingDebounced = debounce(this.trackScrolling, 250);

    render() {
      const { children } = this.props;

      return (
        <div ref={this.wrapperRef}>
          {children}
        </div>
      );
    }
}
