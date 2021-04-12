import './App.css';
import { Greet } from './components/Greet/Greet';
import Welcome from './components/Welcome/Welcome';
import Message from './components/Message/Message';
import Counter from './components/Counter/Counter';
import EventHandler from './components/EventHandler/EventHandler';
import ClassClick from './components/ClassClick/ClassClick';
import EventBind from './components/EventBind/EventBind';
// import ParentComponent from './components/ParentComponent/ParentComponent';
import ConditionalRendering from './components/ConditionalRendering/ConditionalRendering';
import ListRendering from './components/ListRendering/ListRendering';
import Stylesheets from './components/Stylesheets/Stylesheets';
import InlineStylesheets from './components/InlineStylesheets/InlineStylesheets';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './components/Form/Form';
import Fragments from './components/Fragments/Fragments';
import Table from './components/Fragments/Table';
import ParentComponent from './components/PureComponent/ParentComponent';

function App() {
  return (
    <div className="App">
      {/* <ParentComponent/> */}
      {/* <ConditionalRendering /> */}
      {/* <h3>Class Component</h3>
      <Welcome name="Aishwarya" location="Manali" />
      <Welcome name="Satish" location="Australia" />
      <Welcome name="Sanu" location="Paris" />
      <Welcome name="Kalpana" location="Rajsthan" />

      <hr />
      <h3>Functional components</h3>
      <Greet name="Aishwarya" location="Manali" >
        Let's plan trip.
      </Greet>
      <Greet name="Sakshi" location="North India" />
      <Greet name="Ankita" location="Goa" />

      <hr />
      <Message />

      <hr />
      <Counter />

      <hr />
      <EventHandler />

      <hr/>
      <ClassClick/> */}

      {/* <hr/>
      <EventBind /> */}
      {/* <ListRendering /> */}
      {/* <Stylesheets primary={true}/> */}

      {/* <InlineStylesheets/>
      <h3 className="error">Error</h3>
      <h3 className={styles.success}>Success</h3> */}
      
      {/* <hr/>
      <Form /> */}
      
      {/* <Fragments/>
      <hr/> */}

      {/* <Table />
      <hr/> */}

      <ParentComponent />
    </div>
  );
}

export default App;
