
import './App.css';
// import Greet from './functional_components/Greet';
import { Greet } from './functional_components/Greet';
import Welcome from './class_components/Welcome';
import Hello from './functional_components/Hello';
import Message from './class_components/Message';
import Counter from './class_components/Counter';
import FunctionClick from './functional_components/FunctionClick';
import ClassClick from './class_components/ClassClick';
import EventBind from './class_components/EventBind';
import ParentComponent from './class_components/ParentComponent';
import UserGreeting from './class_components/UserGreeting';
function App() {
  return (
    <div className='App'>
      
     <UserGreeting></UserGreeting>

      
      {/* 
      <Counter/>
      <Message/>
      <Greet name="Salman">
        <p>This is child of Greet Compo</p>
      </Greet>
      <Welcome name="Java"><button>Action</button></Welcome>
      <Welcome name="Java"/>
      <Hello name="React"><button>Action</button></Hello> 
      <FunctionClick/>
      <ClassClick></ClassClick>
       <EventBind></EventBind>
       <ParentComponent></ParentComponent>
      */}
    </div>
  );
}

export default App;
