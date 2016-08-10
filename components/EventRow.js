import React from "react";

class EventRow extends React.Component {
   render() {
     var centerText = {
       textAlign: 'center'
     }

     var largeTd = {
       width: 500
     }

     return (
       <tr style={centerText}>
         <td>{this.props.data.id}</td>
         <td style={largeTd}>{this.props.data.name}</td>
         <td>{this.props.data.no_of_days}</td>
       </tr>
     );
   }
}

export default EventRow;