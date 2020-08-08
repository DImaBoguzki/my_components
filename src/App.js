import React from 'react';
import EditInput from './Components/EditInput/EditInput';
import CheckBoxInput from './Components/CheckBoxInput/CheckBoxInput';
import ImgInput from './Components/ImgInput/ImgInput';
import Draggable from './Components/Draggable/Draggable';

const arr=[
  {Id:1, Title:'', Price:5.15, unpublished: false},
  {Id:2, Title:'', Price: 15.12, unpublished: false},
  {Id:3, Title:'', Price: 55.15, unpublished: false},
];
const srcArr=[
  'http://localhost/yuli_server/img/1.jpg',
  'http://localhost/yuli_server/img/2.jpg',
  'http://localhost/yuli_server/img/3.jpg',
  'http://localhost/yuli_server/img/4.jpg',
  'http://localhost/yuli_server/img/5.jpg',
  'http://localhost/yuli_server/img/6.jpg',
  'http://localhost/yuli_server/img/7.jpg'
]
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      items:[]
    }
  }
  componentDidMount=()=>{
    this.setState({items:arr});
  }
  componentDidUpdate=(prevState)=>{
    //console.log(this.state.items,"re render app");
  }
  setPartName=(id,paramName,value)=>{
    let newItems = this.state.items;
    let item = newItems.find(el=>el.Id===id);
    if(item!==undefined){
      item[paramName]=value;
      this.setState({items:newItems});
    }
    // set in server
  }
  render(){
    return (
      <div className="App">
        {
          this.state.items.map((el,i)=>{
            return (
              <div key={i} className='inputs-group flex-container'>
                <div className="col-3">
                  <EditInput 
                    id={el.Id} value={el.Title} paramName={'Title'} 
                    callBack={this.setPartName}  />
                </div>
                <div className="col-3">
                  <EditInput 
                    id={el.Id} value={el.Price} paramName={'Price'} 
                    callBack={this.setPartName} />
                </div>
                <div className="col-3">
                  <CheckBoxInput 
                    title={"סתם"} 
                    clear={true}
                    id={el.Id} value={el.unpublished} paramName={'unpublicshed'} 
                    callBack={this.setPartName}
                  />
                </div>
                <div className="col-4">
                  <ImgInput />
                </div>
              </div>
            )
          })
        }
        <Draggable items={srcArr} type={"img"}/>
        </div>
    );
  }
}

export default App;

