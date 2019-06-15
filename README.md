# Cute promise state

Cute promise state manager for react and other.

Example: 

```JSX
import React, {Component} from 'react';
import {promiseState} from '@redtea/cute-promise-state';

class List extends Component {
  state = {
    list: promiseState([])
      .pending(true)
  };
  
  componentDidMount() {
    this.tryFetchList();
  }
  
  async tryFetchList() {
    this.setState({
      list: this.state.list
        .pending(true)
    });
    
    try {
      const list = await fetchList();
      this.setState({
        list: this.state.list.resolved(true, list)
      });
    } catch(error) {
      this.setState({
        list: this.state.list.rejected(true, error)
      });
    } 
  }
  
  render() {
    if (this.state.list.pending()) {
      return 'fetching...';
    }
    
    if (this.state.list.rejected()) {
      return 'fail fetching';
    }
    
    const list = this.state.list.result();
    
    return (
      <ul>
        list.map((text, index) => (<li key={index}>{text}</li>))
      </ul>
    );
  }
}
```
