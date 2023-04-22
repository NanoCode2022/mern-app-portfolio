import { About } from "./components/About"
import { Banner } from "./components/Banner"
import { Contacts } from "./components/Contacts"
import { Nav } from "./components/Nav"
import { Projects } from "./components/Projects"


function App() {

  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Banner/>
      <Nav/>
      <About/>
      <Projects/>
      <Contacts/>
    </div>
  )
}

export default App
