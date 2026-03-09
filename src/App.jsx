import UserGreeting from './UserGreeting.jsx';

function App() {
  return(
    <>
      <UserGreeting isLoggedIn={false} username = "Bimo"/>
      <UserGreeting/>
    </>
  );

}

export default App
