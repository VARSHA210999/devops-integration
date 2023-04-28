import React from 'react';
import { v4 as uuidv4 } from 'uuid';
uuidv4();


const initialList = [
  {
    id: 'a',
    name: 'Robin',
  },
  {
    id: 'b',
    name: 'Dennis',
  },
];

const App = () => {
    const [listData, setListData] = React.useState({
        list: initialList,
        isShowList: true,
      });
    const [name, setName] = React.useState('');

    function handleChange(event : any) {
        setName(event.target.value);
      }
    
      function handleAdd() {
       const newList = listData.list.concat({
            name,
            id: uuidv4(),
          });
      
          setListData({ ...listData, list: newList });
      
          setName('');
      }

  return (
    <div>
      <div>
      <AddItem
        name={name}
        onChange={handleChange}
        onAdd={handleAdd}
      />

    {listData.isShowList && <List list={listData.list} />}
    </div>
    </div>
  );
};

const AddItem = ({ name, onChange, onAdd } : {name : any,onChange : any, onAdd : any}) => (
    <div>
      <input type="text" value={name} onChange={onChange} />
      <button type="button" onClick={onAdd}>
        Add
      </button>
    </div>
  );
  
  const List = ({ list  } : {list : any}) => (
    <ul>
      {list.map((item : any) => (
        <li key={item.id}>{item.name}</li>
      ))}
      {console.log(list)}
    </ul>
  );

export default App;

// import React from 'react';
// import { v4 as uuidv4 } from 'uuid';
// uuidv4();


//   const initialList = [
//     {
//       id: "1",
//       col1: 'Varsha', 
//       col2: 'Kumaran', 
//       col3: "varsha@gmail.com", 
//       col4: "9003559937", 
//       col5: ".net", 
//       col6: "React" 
//     },
//     {
//       id: "2", 
//       col1: 'Nithesh', 
//       col2: 'Kumaran', 
//       col3: "nithesh@gmail.com", 
//       col4: "9003559937", 
//       col5: ".net", 
//       col6: "React"
//     },
       
//   ];

// const App = () => {
//     const [listData, setListData] = React.useState({
//         list: initialList,
//         isShowList: true,
//       });
//     const [col1, setName] = React.useState('');
//     const [col2, setCompanyName] = React.useState('');
//     const [col3, setEmail] = React.useState('');
//     const [col4, setPhoneNo] = React.useState('');
//     const [col5, setSourceTech] = React.useState('');
//     const [col6, setTargetTech] = React.useState('');

//     // function handleChange(event : any) {
//     //     setName(event.target.value);
//     //   }

//     const changeName = (event: any) => {
//       setName(event.target.value);
//     };
  
//     const changeCompanyName = (event: any) => {
//       setCompanyName(event.target.value);
//     };
  
//     const changeEmail = (event: any) => {
//       setEmail(event.target.value);
//     };
//     const changePhoneNo = (event: any) => {
//       setPhoneNo(event.target.value);
//     };
//     const changeSourceTech = (event: any) => {
//       setSourceTech(event.target.value);
//     };
//     const changeTargetTech = (event: any) => {
//       setTargetTech(event.target.value);
//     };
    
//       function handleAdd() {
//        const newList = listData.list.concat({
//             col1,col2,col3,col4,col5,col6,
//             id: uuidv4(),
//           });
      
//           setListData({ ...listData, list: newList });
      
//           setName('');
//           setCompanyName('');
//           setEmail('');
//           setPhoneNo('');
//           setSourceTech('');
//           setTargetTech('');
//       }

//   return (
//     <div>
//       <div>
//       <label>Name</label>  
//       <input type="text" value={col1} onChange={changeName} />
//       </div>
//       <div>
//       <label>company name</label>
//       <input type="text" value={col2} onChange={changeCompanyName} />
//       </div>
//       <div>
//       <label>email</label>
//       <input type="text" value={col3} onChange={changeEmail} />
//       </div>
//       <div>
//       <label>phone number</label>
//       <input type="text" value={col4} onChange={changePhoneNo} />
//       </div>
//       <div>
//       <label>source </label>
//       <input type="text" value={col5} onChange={changeSourceTech} />
//       </div>
//       <div>
//       <label>target</label>
//       <input type="text" value={col6} onChange={changeTargetTech} />
//       </div>
//       <button type="button" onClick={handleAdd}>
//         Add
//       </button>
//       {listData.isShowList && <List list={listData.list} />}
//     </div>
//   );
// }
  
// const List = ({ list  } : {list : any}) => (
//   <ul>
//     {list.map((item : any) => (
//       <li key={item.id}>{item.name}</li>
//     ))}
//     {console.log(list)}
//   </ul>
// );
// export default App;