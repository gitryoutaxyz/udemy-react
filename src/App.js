
import react from 'react';


// functionコンポーネント記述
const App = () => {

  const profiles = [
    { name: 'taro', age: 15 },
    { name: 'json', age: 18 },
    { name: 'ace', }
  ];
  const jobs =[
    {name:"daiku"},
    {name:"baseBall"}
  ]
  // return()内はjsxなのでjavascriptを記述するときは{}でくくる
  return (
    <div>
      {profiles.map((profile,index) => {
        // タグ<User />で関数を紐付 keyがないとエラー
        return <User name={profile.name} age={profile.age} key={index}/>
      })
      }
      {
      jobs.map((job,index)=>{
        return <Job name={job.name} key={index}/>
      })
      }
    </div>
  )
}

const User = (props) => {
  return <div>I'am {props.name},{props.age}</div>
}
// デフォルト値を持たせる
User.defaultProps = {
  age:1
}

const Job =(props)=>{
  return <div>
    my job is {props.name}
  </div>
}

export default App;
