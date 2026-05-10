import {type Component, JSX, Suspense} from 'solid-js';
import {A, useLocation} from '@solidjs/router';

const App: Component<{ children?: JSX.Element }> = (props) => {
    const location = useLocation();

    return (
        <div class={"max-h-screen w-screen"}>
            <nav class="relative z-20 flex pr-4 pt-4 w-screen justify-center xl:justify-end gap-4">
                <ul class="flex items-center">
                    <li class="py-2 px-4">
                        <A href="/" class={location.pathname == "/" ? "link-active" : "link"}>
                            Home
                        </A>
                    </li>
                    <li class="py-2 px-4">
                        <A href="/competencies" class={location.pathname == "/competencies" ? "link-active" : "link"}>
                            Competencies
                        </A>
                    </li>
                    <li class="py-2 px-4">
                        <A href="/projects" class={location.pathname == "/projects" ? "link-active" : "link"}>
                            Projects
                        </A>
                    </li>
                    <li class={""}>
                        <A href="https://uptime.luca-naujoks.de/status/monitoring" target="_blank" class={"link"}>
                            Status
                        </A>
                    </li>
                </ul>
            </nav>

            <main class={"h-full w-full"}>
                <Suspense>{props.children}</Suspense>
            </main>
        </div>
    );
};

export default App;
