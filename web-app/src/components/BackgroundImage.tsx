export function BackgroundImage({src}: { src: string }) {
    return (
        <img src={src} alt={"background Image"} role={"presentation"}
             loading={"eager"}
             fetchPriority={"high"} className="absolute top-0 left-0 -z-10 w-screen h-screen object-cover"/>
    )
}