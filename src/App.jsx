import { Navbar, Welcome ,Dock } from "./components";
import { Draggable } from "gsap/Draggable";
import gsap from "gsap"
import {Terminal,  Safari,Resume}  from "./Windows";

gsap.registerPlugin(Draggable)


const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
      <Safari/>
      <Resume/>
    </main>
  )
}

export default App
