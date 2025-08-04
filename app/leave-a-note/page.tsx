"use client"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {useState} from "react";

export default function Page() {
    return (
        <div className="h-full flex flex-col">
            <NoteInput/>
            <NoteClipboard/>
        </div>
    );
}

// Input field/Control to create a note
// Connect the client session to be able to edit/delete your made node.
function NoteInput() {
    const [note, setNote] = useState("")
    return (
        <Card className="w-full max-w-sm rounded-md">
            <CardHeader>
                <CardTitle>Feel free to leave a note</CardTitle>
                <CardDescription>
                    Enter your note below and smash the &#34;Post&#34; button
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="flex flex-col gap-6">
                        <Input
                            id="note"
                            type="text"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            placeholder="Your Note goes here"
                            required
                        />
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Button type="submit" className={`w-full`} disabled={note.length <= 0}>
                    Post
                </Button>
            </CardFooter>
        </Card>
    )
}


// Show Notes/Messages/Reviews made
function NoteClipboard() {
    return (
        <div className={"w-full h-full"}></div>
    )
}
