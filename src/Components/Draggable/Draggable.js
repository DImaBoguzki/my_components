import React,{ useState } from 'react';

export default function Draggable({items}) {

  console.log("Draggable re render")

  const [list, setList] = useState(items);
  const [sourceElement,setSourceElement] = useState(null);

  const swapItem=(f,s)=>{
    if(s===undefined || s==="" || f===undefined || f==="")
      return;
    if(s===f)
      return;
    
    let sortList = [...list];
    let temp=sortList[f];
    sortList[f]=sortList[s];
    sortList[s]=temp;
    setList(sortList);
  }

  const handleDragStart = (e) => {
    setSourceElement(e.target.id)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }
  const handleDragEnter = (e) => {
    e.target.classList.add('over'); 
    console.log(e.view ) 
  }

  const handleDragLeave = (e) => {
    e.target.classList.remove('over')
  }

  const handleDrop = (e) => {
    //event.stopPropagation();
    if(e.target.id!==sourceElement){
      swapItem(sourceElement,e.target.id);
    }
    e.target.classList.remove('over')
  }

  const handleDragEnd = (e) => {
    console.log(e.target.id,"Drag End");
    // set in server new order....
    //call back
  }


  return (
    <div className="dragabble-container">
      {
        list.map((el,i)=>{
          return(
            <div 
              className="draggable"
              key={i}
              id={i} 
              draggable='true' 
              onDragStart={handleDragStart} 
              onDragOver={handleDragOver} 
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onDragEnd={handleDragEnd}>
              <img src={el} />
            </div>
          )
        })
      }
    </div>
  )
}
