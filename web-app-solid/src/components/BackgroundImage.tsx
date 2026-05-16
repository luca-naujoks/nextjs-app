export function BackgroundImage({src}: { src: string }) {
    return (
        <img src={src}
             alt={"background Image"}
             role={"presentation"}
             fetchpriority={"high"}
             class="absolute top-0 left-0 z-0 w-screen h-dvh object-cover"/>
    )
}