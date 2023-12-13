import React from "react";
import { AuthProvider } from "./components/AuthContext";

//additionals imports


function App() {
  return (
    //Wrapping the AppContent component with AuthProvider to provide authentication context
    <AuthProvider>
      <AppContent/>
    </AuthProvider>
  );
}

export default App;
