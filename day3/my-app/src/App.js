
import './App.css';

import './App.css';
import BlackBar from './components/BlackBar';
import Link from './components/Link';

function App() {
  return (
    <>
      <div className="container">
        <BlackBar name="FREE NEW OFFERS FOR NEW CUSTOMERS"/>
      </div>
      <div className="links">
        <Link name="DRESS"/>
        <Link name="BOTTOMS"/>
        <Link name="TOPS"/>
        <Link name="ACCESSORIES"/>
        <Link name="OUTWARE"/>
        <Link name="SLEEPWARE"/>
      </div>
    </>
  );
}

export default App;
