import "./App.css"
import {createSignal, Match, Switch} from 'solid-js'
import {Home} from "./components/home.tsx";
import {Projects} from "./components/projects.tsx";

import subtlePrism from "./assets/backgrounds/subtle-prism.svg";
import slantedGradient from "./assets/backgrounds/slanted-gradient.svg"


interface ITab {
    displayName: string,
    bg: string
}

function App() {
    const Nav: ITab[] = [
        {displayName: "Home", bg: slantedGradient},
        {displayName: "Projects", bg: subtlePrism},
    ]

    const [tab, setTab] = createSignal<ITab>(Nav[0])

    return (
        <div class={"app-body"} id={"body"}>
            <img src={tab().bg}
                 alt={"background Image"}
                 role={"presentation"}
                 fetchpriority={"low"}
                 class="background-image"
            />
            <div
                class="background-shadow bg-linear-to-r from-black from-20%  to-black/10 to-100%"
            />
            <div class={"nav-wrapper"}>
                <ul class="nav-bar">
                    {Nav.map((item: ITab) => (
                        <li
                            class={
                                tab().displayName === item.displayName
                                    ? "nav-item-active"
                                    : "nav-item"
                            }
                            onClick={() => setTab(item)}>
                            {item.displayName}
                        </li>
                    ))}
                    <li class="w-px h-4 bg-white/15 mx-1"/>
                    <a
                        href="https://uptime.luca-naujoks.de/status/monitoring"
                        target="_blank"
                        class={"nav-item"}>
                        Status
                    </a>
                </ul>
            </div>

            <Switch>
                <Match when={tab().displayName === "Home"}>
                    <Home/>
                </Match>
                <Match when={tab().displayName === "Projects"}>
                    <Projects/>
                </Match>
            </Switch>
        </div>
    )
}

export default App
