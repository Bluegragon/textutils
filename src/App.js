
import './App.css';
// import Introduction from './components/Introduction';

 import ButtonAppBar from './components/navbar';
// import IntroPara from './components/para1';
// import SkillSet from './skillset';

import Textutils from './pages/textutils';

function App() {
  return (
    <div className="App">
      {/* <ButtonAppBar/>
      <Introduction/>
      <IntroPara/>
     <SkillSet/> */}
     <ButtonAppBar title={"TextUtils"}/>
     <Textutils/>
    </div>
  );
}

export default App;
