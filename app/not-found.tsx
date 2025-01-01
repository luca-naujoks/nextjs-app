"use client"

import {BasicCard} from "@/utils/cards-component";

export default function NotFound() {

    return (
        <div className="flex justify-center items-center h-screen">
            <BasicCard title="404 Page Not Found" leftContent="Sorry, this page does not exist currently."
                       pictorgram="/page-not-found.png"/>
        </div>
    )
}