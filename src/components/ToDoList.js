import React, { useState } from 'react';
import '../style/textStyle.css'; 
import '../style/toDoListStyle.css'; 

function Form() {
  const [nameList, setNameList] = useState([]);
  const [data, setData] = useState('');
  const [businees, setBusiness] = useState('');

  const sendName = (event) => {
    event.preventDefault();
    setNameList([...nameList, { data, businees }]);
    setData('');
    setBusiness('');
  };

  const renderList = () => {
    const items = [];
    nameList.forEach((item, index) => {
      items.push(<li key={index}>{item.data} {item.businees}</li>);
    });
    return items;
  };

  return (
    <div class="FormMain">
      <div class="FormBlock">
      <h1 class="HeadingH2">To-Do List</h1>
        <form onSubmit={sendName}>
          <input placeholder="Дата" value={data} type="date" onChange={(e) => setData(e.target.value)}/>
          <input placeholder="Дело" value={businees} onChange={(e) => setBusiness(e.target.value)}/>
          <button type="submit">Добавить</button>
        </form>
        <div class="OutputBlock">
          <ul>
            {renderList()}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Form;