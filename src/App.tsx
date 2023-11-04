import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import UserMsg from "./components/UserMsg";

export default function App() {
  const [userMessage, setUserMessage] = useState('')

  return (
    <div className="App">
      <Header />
      <Home setUserMessage={setUserMessage}/>
      <UserMsg userMessage={userMessage} setUserMessage={setUserMessage}/>
    </div>
  )
}
