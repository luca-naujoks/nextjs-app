"use client"
import {Card, CardContent, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {useState, useEffect} from "react";
import {ChevronDown} from "@deemlol/next-icons";
import {ChevronLeft} from "lucide-react";
import {Note} from "@/interfaces";

export default function Page() {
    const [notes, setNotes] = useState<Note[]>([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/leave_a_note`, { method: "GET" });
            const json = await res.json();
            console.log(json);
            setNotes(json);
        }
        fetchData();
    }, []);

    return (
        <div className="grid grid-cols-3 gap-2 h-full p-2 2xl:p-4 overflow-y-scroll">
            <NoteInput/>
            { notes.map((note: Note, index: number) => (
                    <Card className="h-fit p-1 rounded-md gap-2 2xl:gap-6 dark" key={index}>
                        <CardHeader className="px-2">
                            <CardTitle className={`flex w-full justify-between text-sm`}>
                                {note.Name || "Anonymous"} - {note.Stars} Stars
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="px-2">
                            <p>{note.Note}</p>
                        </CardContent>
                    </Card>
            ))}
        </div>
    );
}

// Input field/Control to create a note
// Connect the client session to be able to edit/delete your made node.
function NoteInput() {
    const [cardOpen, setCardOpen] = useState(false);
    const [note, setNote] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [stars, setStars] = useState<number>(0)

    async function handleSubmit() {
        const url = `http://localhost:3000/leave_a_note?name=${name}&note=${note}&stars${stars}`
        await fetch(url, {
            method: "POST",

        })
    }

    return (
        <Card className="h-fit p-1 rounded-md gap-2 2xl:gap-6 dark">
            <CardHeader className="px-2">
                <CardTitle className={`flex w-full justify-between text-sm`}>Feel free to leave a note <button className={"cursor-pointer"} onClick={() => setCardOpen(!cardOpen)}>{cardOpen ? <ChevronDown/> : <ChevronLeft/> }</button></CardTitle>
            </CardHeader>
            <CardContent className={cardOpen ? "px-2" : "hidden"}>
                <form onSubmit={() => handleSubmit()}>
                    <div className="flex flex-col gap-2 2xl:gap-6">
                        <Input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Name (Optional)"
                        />
                        <Input
                            id="note"
                            type="text"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            placeholder="Your Note goes here"
                            required
                        />
                        <Input
                            id="stars"
                            type="number"
                            //value={stars}
                            onChange={(e) => setStars(parseInt(e.target.value))}
                            placeholder="Review Stars (default is 0)"
                            required
                        />
                    </div>
                </form>
            </CardContent>
            <CardFooter className={cardOpen ? "px-2 pb-2" : "hidden"}>
                <Button type="submit" className={`w-full`} disabled={note.length <= 0}>
                    Post
                </Button>
            </CardFooter>
        </Card>
    )
}
