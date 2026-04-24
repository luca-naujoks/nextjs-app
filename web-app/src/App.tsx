import './App.css'
import "tailwindcss"
import {BrowserRouter as Router, Link, Route, Routes, useLocation} from "react-router";
import {Home} from "./components/Home.tsx";
import {Projects} from "./components/Projects.tsx";
import {Competencies} from "./components/Competencies.tsx";

function App() {
    return (
        <div className={"w-screen h-screen overflow-hidden"}>
            <Router>
                {/* Navigation */}
                <NavigationBar/>

                {/* Routes */
                }
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/competencies" element={<Competencies/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App

function NavigationBar() {
    let pathname = useLocation().pathname
    return (
        <nav className={"flex pr-4 pt-4 w-screen justify-center xl:justify-end gap-4"}>
            <Link className={pathname == "/" ? "link-active" : "link"} to="/">Home</Link>
            <Link className={pathname == "/competencies" ? "link-active" : "link"} to="/competencies">Competencies</Link>
            <Link className={pathname == "/projects" ? "link-active" : "link"} to="/projects">Projects</Link>
            <Link className={"link"} to="https://uptime.luca-naujoks.de/status/monitoring"
                  target={'_blank'}>Status</Link>
        </nav>
    )
}