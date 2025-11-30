import { Navbar, Welcome ,Dock, Home } from "./components";
import { Draggable } from "gsap/Draggable";
import gsap from "gsap"
import {Terminal, Safari,Resume,Finder,TextFile,ImageFile,Contact,Photos}  from "./Windows";

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
      <Finder/>
      <TextFile/>
      <ImageFile/>
      <Photos/>
      <Contact/>
      <Home/>
    </main>
  )
}

export default App
