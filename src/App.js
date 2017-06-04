/*global chrome*/
import React, { Component } from 'react';
import './App.css';
import QRCode from 'qrcode.react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { url: '' }
  }

  renderStatus(url) {
    this.setState({ url })
  }

  render() {
    const { url } = this.state
    return (
      <div>
        <div>QRCode</div>
        <div className="url">
          {url}
        </div>
        <QRCode value={url} size={270} />
      </div>
    );
  }

  componentDidMount() {
    var queryInfo = {
      active: true,
      currentWindow: true
    }
    
    chrome.tabs.query(queryInfo, (tabs) => {
      const tab = tabs[0]
      const url = tab.url
      this.setState({ url })
    })
  }
}

export default App;
