import React from 'react'
import { Map, List, fromJs } from 'immutable'

export default class MutComp extends React.Component {

  state = Map({
    testDisplay: 'This is immutable',
    theNest: {
      theName: "Uncle Frank"
    }
  })

  render() {
    return (
      <div>
        <div>
          <h1>
            {this.state.getIn(["testDisplay"])}
          </h1>
        </div><br />
        <div>
          <h1>
            Nested: {this.state.getIn(["theNest", "theName"])}
          </h1>
          <br />
        </div>
        <button onClick={() => console.log(this.state)}>State</button>

        <div>
          <br />
          <p>
            {"The OnClick Function: () => console.log(this.state.getIn(['theNorst' , 'theName']))"}
            <br/>
            <button onClick={() => console.log(this.state.getIn(["theNorst", "theName"]))}>Request Bad Name</button>
          </p>
          <br />
        </div>

        <div>
          <div>{"The OnClick Function: () => this.setState({theNest: 'BadValue'})"}</div>
          <button onClick={() => {
            this.setState({ theNest: "BadValue" })
            console.log(this.state)
          }}>Bad SetState</button>
        </div>
        <br />

        <p>{"The OnClick Function: () => this.state.theNest = 'BadValue'"}</p>
        <button onClick={() => {
          this.state.theNest = "BadValue"
          console.log(this.state)
        }}>Bad Assignment</button>

      </div>
    )
  }
}