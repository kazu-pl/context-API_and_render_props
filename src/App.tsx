import AuthProvider from "common/wrappers/ThemeWrapper";
import Account from "components/Account";

import RenderPropParent from "components/RenderPropParent";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Account />
        <RenderPropParent />
      </AuthProvider>
    </div>
  );
}

export default App;
