import React from 'react';
import axios from 'axios';
// function checkLoc() 
// {
//   return(<div>
//   <h3>404 page not found</h3>
//   <p>We are sorry but the page you are looking for does not exist.</p>
// </div>);

// }
class App extends React.Component {

  constructor (props)
  {
    super(props);
    this.state = {
      data : '',
      query:'',
      
    };

  }

  getLoc = async (e) =>{
    e.preventDefault(); 
    
  //     if (compareVar.indexOf(e.target.value))
  //  {}
    const url = `https://us1.locationiq.com/v1/search.php?key=pk.ef272e05af798be0da59b36a8f8ca07f&q=${this.state.query}&format=json`;
    let req={};
    
    try{req = await axios.get(url) } catch {alert('wrong location') 
    ; return };
    this.setState ({
      data: req.data[0],
      
    })
  
//  let compareVar =req.data[0].display_name;
//  let q = this.state.query;
//  console.log(compareVar);
// compareVar.toLowerCase();
// q.toLowerCase();
//     if (compareVar.includes(q) === true)
//    { 
//     this.setState ({
//       data: req.data[0],
      
//     })}
//     else 
//     {
//       alert('wrong Location');
//     }
    
   
   
  
    

  };
updateQuery = (e) => {
  
  this.setState({
    query: e.target.value
  });
}
  render() {
    // 
  
    return (
      <div>
        <h1>City Explorer</h1>
        <form onSubmit={this.getLoc}>
          <input onChange={this.updateQuery} type='text' placeholder='city name' />
          <br></br>
           <input type='submit' value ='get city'   /> 
        </form>
       
        <p>
          {this.state.data.display_name}

        </p>
        <br/>
        <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.d36871f015649f915282f374cff76628&q&center=${this.state.data.lat},${this.state.data.lon}&zoom=10`}
 alt='' />
      </div>
    )
  }
}
export default App;