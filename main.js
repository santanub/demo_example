import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';

/* this should came from the server side */
var eventsData = {
  events:
  [
    {
      "id":1,
      "name":"Independance Day Sale",
      "no_of_days":"20"
    },

    {
      "id":2,
      "name":"Christmas Sale",
      "no_of_days":"7"
    }
  ]
};

ReactDom.render(<App eventsData={eventsData} />, document.getElementById('app'));