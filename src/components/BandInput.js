import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ''
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  render() {
    return (
      <form onSubmit={(event => this.handleSubmit(event))}>
        <input type="text" value={this.state.name} onChange={this.handleChange} />
        <input type="submit" />
      </form>
    )
  }
}

export default BandInput
