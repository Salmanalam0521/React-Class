
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
import NameList from './functional_components/NameList';
import StyleSheet from './functional_components/StyleSheet';
import Inline from './functional_components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css';
import Form from './class_components/Form';

function App() {
  return (
    <div className='App'>
      
     <Form></Form>
      
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
       <UserGreeting></UserGreeting>
       <NameList></NameList>
       <StyleSheet primary={false}></StyleSheet>
       <Inline></Inline>
      */}
      {/* <h1 className='error'>Error</h1>
     <h1 className={styles.success}>Success</h1> */}
    </div>
  );
}

export default App;
