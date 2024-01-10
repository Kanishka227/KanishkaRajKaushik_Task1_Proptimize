import React , {useEffect, useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const[ data, setData] = useState([]);
  const[searchApiData, setSearchApiData] = useState([]);
  const[filterVal , setFilterVal] = useState('')
  useEffect(() =>{
        const fetchData=()=>{
          fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(json => {
            setData(json)
            setSearchApiData(json)
          })
          
        }
        fetchData();
  },[])
  const handleFilter=(e)=>{
     if(e.target.value == ''){
      setData(searchApiData)
     }
     else{
      const filterResult = searchApiData.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()) || item.username.toLowerCase().includes(e.target.value.toLowerCase()) || item.email.toLowerCase().includes(e.target.value.toLowerCase()) || item.phone.toLowerCase().includes(e.target.value.toLowerCase()))
      setData(filterResult)
     }
     setFilterVal(e.target.value)
  }
  return (
    <div>
      <div>
          <input className="search"placeholder="Search" value={filterVal}onInput={(e)=>handleFilter(e)}></input>
      </div>
      <div>
          <table>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            {
              data.map(item =>{
                  return(
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.username}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                    </tr>
                  )
              })
            }
          </table>
      </div>
    </div>

    
  );
}

export default App;
