import React from 'react'

export default class MutComp extends React.Component {

  state = {
    testDisplay: 'This is mutable',
    theNest: {
      theName: "Uncle Frank"
    }
  }

  render() {
    return (
      <div>
        <div>
          <h1>
            {this.state.testDisplay}
          </h1>
        </div>
        <br />
        <div>
          <h1>
            Nested: {this.state.theNest.theName}
          </h1>
        </div>
        <br />
        <button onClick={() => console.log(this.state)}>State</button>
        <br />

        <div>
          <br />
          {"The OnClick Function: () => console.log(this.state.theNorst.theName)"}
          <button onClick={() => console.log(this.state.theNorst.theName)}>Request Bad Name</button>
        </div>

        <div>
          <br />
          <p>{"The OnClick Function: () => this.setState({theNest: 'BadValue'})"}</p>
          <button onClick={() => {
            this.setState({ theNest: "BadValue" })
          }}>Bad SetState</button>
        </div>

        <div>
          <br />
          <p>{"The OnClick Function: () => {this.state.theNest = 'BadValue'}"}</p>
          <button onClick={() => {
            this.state.theNest = "BadValue"
            console.log(this.state)
          }}>Bad Assignment</button>
        </div>

      </div>
    )
  }
}