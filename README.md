# Async Mirror

<div align="center">
    <a href="https://www.npmjs.com/package/@redtea/async-mirror"><img src="https://img.shields.io/npm/v/@redtea/async-mirror.svg" alt="Version" /></a>
    <a href="https://www.npmjs.com/package/@redtea/async-mirror"><img src="https://img.shields.io/npm/types/@redtea/async-mirror.svg" alt="Typings" /></a>
</div>

This library helps to represent any state of an asynchronous action as an object

## Installing

```bash
$ npm i -SE @redtea/async-mirror
```

## Use case

 - [React](#react) 

#### React

```JSX
import React from 'react';
import * as AsyncMirror from '@redtea/async-mirror';

class List extends React.Component {
  state = {
    list: AsyncMirror.pending()
  };
  
  componentDidMount() {
    this.tryFetchList();
  }
  
  async tryFetchList() {
    this.setState({
      list: AsyncMirror.pending()
    });
    
    try {
      const list = await fetchList();
      this.setState({
        list: AsyncMirror.resolve(list)
      });
    } catch(error) {
      this.setState({
        list: AsyncMirror.reject(error)
      });
    } 
  }
  
  render() {
    if (this.state.list.isPending) {
      return 'fetching...';
    }
    
    if (this.state.list.isRejected) {
      return this.state.list.reason.message;
    }
    
    const list = this.state.list.value;
    
    return (
      <ul>
        {
          list.map((text, index) => (
            <li key={index}>{text}</li>
          ))
        }
      </ul>
    );
  }
}
```
