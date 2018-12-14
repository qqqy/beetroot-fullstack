import React from 'react'
import { Link } from 'react-router-dom'

export default function(){
  return( 
  <div>This is TestOne<div>
  </div><Link to='/testtwo'>
  <button>TestTwo</button>
  </Link></div>
)
}

// import React, { Component } from 'react';
// import { Link } from 'react-router-dom'

// export default class Home extends Component {
//   render() {
//     return (
//       <div className="box">
//         <Link to='/classlist/MATH1010'>
//           <button className='btn'>Math 1010</button>
//         </Link>
//         <Link to='/classlist/ENG2010' >
//           <button className='btn'>English 2010</button>
//         </Link>
//         <Link to='/classlist/BIO2020' >
//           <button className='btn'>Biology 2020</button>
//         </Link>
//       </div>
//     );
//   }
// }

// import React, { Component } from 'react';
// import { Link , Switch, Route } from 'react-router-dom'
// // import History from '../History/History.js'
// // import Contact from '../Contact/Contact.js'

// export default class About extends Component {
//   aboutPage(){
//     return(
//     <div>
//   <h1 className='title'>About WestSide University:</h1>
//   <p>
//     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eu lorem et ultricies. In porta lorem at dui semper porttitor. Nullam quis cursus dui. Cras tincidunt vehicula tellus eu facilisis. Donec nisi turpis, iaculis et arcu a, aliquet ultrices nisl. Nam in pharetra odio, ac blandit metus. Suspendisse potenti. Praesent elementum diam non orci cursus rutrum. Pellentesque condimentum ultrices dignissim. Sed a tempor ligula, vel luctus sapien. Mauris vehicula rutrum massa. Duis condimentum, ex quis ullamcorper rhoncus, erat libero tempor arcu, condimentum facilisis tellus lectus ut nunc. Pellentesque vitae faucibus diam. Vestibulum eu erat ex. Ut justo neque, varius aliquet erat vel, scelerisque convallis lacus. Mauris semper lorem mauris, sed dignissim eros consectetur nec.
//   </p>
// </div>)
//   }

//   render() {
//     return (
//       <div>
//         <div className='subnav'>
//         {/* <Link className='subnav_links' to='/about'><h3>About</h3></Link>
//         <Link className='subnav_links' to='/about/history'><h3>History</h3></Link>
//         <Link className='subnav_links' to='/about/contact'><h3>Contact</h3></Link> */}
//         </div>
//         <div className='box'>
//         <Switch>
//           {/* <Route component={ History } path='/about/history' />
//           <Route component={ Contact } path='/about/contact' /> */}
//           <Route  render={() => {
//             return(
//               <div>
//             <h1 className='title'>About WestSide University:</h1>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eu lorem et ultricies. In porta lorem at dui semper porttitor. Nullam quis cursus dui. Cras tincidunt vehicula tellus eu facilisis. Donec nisi turpis, iaculis et arcu a, aliquet ultrices nisl. Nam in pharetra odio, ac blandit metus. Suspendisse potenti. Praesent elementum diam non orci cursus rutrum. Pellentesque condimentum ultrices dignissim. Sed a tempor ligula, vel luctus sapien. Mauris vehicula rutrum massa. Duis condimentum, ex quis ullamcorper rhoncus, erat libero tempor arcu, condimentum facilisis tellus lectus ut nunc. Pellentesque vitae faucibus diam. Vestibulum eu erat ex. Ut justo neque, varius aliquet erat vel, scelerisque convallis lacus. Mauris semper lorem mauris, sed dignissim eros consectetur nec.
//             </p>
//           </div>)
//           }} to="/" exact/>
//         </Switch>
//         </div>
//       </div>
//     )
//   }
// }
