"use client";
import {Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Navigation} from "@/components/Navigation";
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@radix-ui/react-avatar";
import {useRouter} from "next/navigation";
import {Badge} from "@/components/ui/badge";

interface ProjectCardProps {
    name: string
    description?: string
    link?: string
    tags?: string[]
}
export default function Page() {
    return (
        <div className={`flex flex-col px-16`}>
            <h2 className={`w-full mb-4`}>My and Contributed Projects</h2>
            <div className={`grid grid-cols-3 gap-4 h-full w-full overflow-y-auto`}>
                <ProjectCard name={"test"} tags={["ts", "js", "react"]} description={"lorem impus asd asdd dsa  asd  das  asd  dsa  asd  das"} />
                <ProjectCard name={"test"}/>
                <ProjectCard name={"test"}/>
                <ProjectCard name={"test"}/>
                <ProjectCard name={"test"}/>
            </div>
        </div>
    );
}

function ProjectCard(props: ProjectCardProps) {
    const router = useRouter();
return (
    <Card className={`flex justify-between w-full h-fit`}>
        <CardHeader className={`flex`}>
            <Avatar className={`size-8`}>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
            <CardTitle>{props.name}</CardTitle>
                <CardDescription className={`flex gap-1`}>{props.tags?.map((tag) => (<Badge key={tag} variant={"outline"}>{tag}</Badge>))}</CardDescription>
            </div>
        </CardHeader>
        <CardContent>
            {props.description}
        </CardContent>
        <CardFooter className={`flex w-full justify-end`}>
            <Button onClick={() => router.push(props.link?? "")}>Visit on GitHub</Button>
        </CardFooter>
    </Card>
)
}
