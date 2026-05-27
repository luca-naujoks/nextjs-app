import {type Component, JSX, Suspense} from 'solid-js';
import {A, useLocation} from '@solidjs/router';

const App: Component<{ children?: JSX.Element }> = (props) => {
    const location = useLocation();

    const Nav: { href: string, displayName: string }[] = [
        {href: "/", displayName: "Home"},
        {href: "/competencies", displayName: "Competencies"},
        {href: "/projects", displayName: "Projects"},
    ]

    return (
        <div class={"max-h-screen max-w-screen overflow-hidden"}>
            <nav class="relative z-20 flex pr-4 pt-4 w-screen justify-center xl:justify-end gap-4">
                <ul class="flex items-center">
                    {Nav.map((item) => (
                        <li class="py-2 px-4">
                            <A href={item.href} class={location.pathname === item.href ? "link-active" : "link"}>
                                {item.displayName}
                            </A>
                        </li>
                    ))}
                    <li class={""}>
                        <a href="https://uptime.luca-naujoks.de/status/monitoring" target="_blank" class={"link"}>
                            Status
                        </a>
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
