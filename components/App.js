import React from "react";
import Header from "./Header.js";
import TableRow from "./TableRow.js";
import EventRow from "./EventRow.js";

class App extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if(nextState.counter > 10) {
      return false;
    } else {
      return true;
    }
  };

  constructor() {
    super();

    this.incrCounter = this.incrCounter.bind(this);
    this.addRow = this.addRow.bind(this);

    this.state = {
      counter: 0,
      users:
      [
        {
          "id":1,
          "name":"Foo",
          "age":"20"
        },

        {
          "id":2,
          "name":"Bar",
          "age":"30"
        }
      ]
    }
  };

  incrCounter() {
    this.setState({counter: this.state.counter+1});
  };

  addRow() {
    let users = this.state.users;
    let lastUserId = users.slice(-1)[0].id;
    let anotherUser = { "id": lastUserId + 1,
                        "name": "Demo",
                        "age": "25"
                      }

    users.push(anotherUser);
    this.setState({ users: users });
  };

  render() {
      return (
         <div>
           <Header />
           <p><strong>Coming from state</strong></p>
           <table className="stateTable">
             <tbody>
               {this.state.users.map((person, i) => <TableRow key={i} data={person} />)}
             </tbody>
           </table>
           <a href="javascript:;" onClick={this.addRow}>Add Row</a>

           <p><strong>Coming from props</strong></p>
           <table className="propTable">
             <thead>
               <tr>
                 <th>ID</th>
                 <th>NAME</th>
                 <th>No OF DAYS</th>
               </tr>
             </thead>
             <tbody>
               {this.props.eventsData.events.map((event, i) => <EventRow key={i} data={event} />)}
             </tbody>
           </table>

           <p><strong>Updating state</strong></p>
           <a href="javascript:;" onClick={this.incrCounter}>Click Here...</a>
           <span>{this.state.counter}</span>
         </div>
      );
   }
}

App.propTypes = {
  eventsData: React.PropTypes.object
}

App.defaultProps = {
  eventsData: {
    users: []
  }
}

export default App;
