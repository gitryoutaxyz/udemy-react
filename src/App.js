
import react from 'react';
import React,{ Component} from 'react';

// クラスコンポーネント記述
class App extends Component{
  render(){
    const greeting ='Hi'
    const dom = <React.Fragment><h1>{greeting}</h1><input type='text' onClick={()=>{console.log('im click')}}/></React.Fragment>;
    return dom;
  }
}
// // functionコンポーネント記述
// function App() {
//   const greeting ='Hi'
//   // const dom = <React.Fragment><h1>{greeting}</h1><input type='text' onClick={()=>{console.log('im click')}}/></React.Fragment>;
//   return (
//     <React.Fragment><h1>{greeting}</h1><input type='text' onClick={()=>{console.log('im click')}}/></React.Fragment>
//   );
// }

export default App;
