import React, { Component } from 'react';

class Form extends Component {
  render() {
    return(
      <div>
        <input/>
      </div>
    )
  }
}

export default Form;

// import React, { Component } from 'react';
// import Search from './Search';

// export default class Form extends Component {
//   state = {
//     term: '',
//     location: ''
//   };

//   change = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };

//   onSubmit = e => {
//     e.preventDefault();
//     // this.props.onSubmit(this.state);
//   //  {Search()}
   
//     // this.setState({
//     //   term: '',
//     //   location: ''
//     // });
//   };

//   render() {
//     return (
//       <form>
//         <input placeholder="term"
//           name="term"
//           value={this.state.term}
//           onChange={e => this.change(e)}
//         />
//         <br />
//         <input placeholder="location"
//           name="location"
//           value={this.state.location}
//           onChange={e => this.change(e)}
//         />
//         <br />
//         <button onClick={e => this.onSubmit(e)}>Submit</button>
//       </form>
//     )
//   }

// }
