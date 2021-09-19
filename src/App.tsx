import AuthProvider from "common/wrappers/ThemeWrapper";
import Account from "components/Account";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Account />
      </AuthProvider>
    </div>
  );
}

export default App;
