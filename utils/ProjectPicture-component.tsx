import {stringToColor} from "@/utils/stringToColor";

export function ProjectPicture({title}: { title: string }) {

    const titleInitials = title.split(/[\s\-&]+/).map((word) => word[0]).join("");
    const backgroundColor = stringToColor(title);

    return (
        <div className={`flex justify-center items-center w-16 h-16 mb-2 bg-gray-200 rounded-lg`} >
            <h1 className={`text-xl font-semibold`}>{titleInitials}</h1>
        </div>
    )
}