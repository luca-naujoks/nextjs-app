import {Label} from "@/components/ui/label";
import {Button} from "./ui/button";
import {Slider} from "@/components/ui/slider";
import {SwitchButton} from "@/components/ui/switchButton";
import {Checkbox} from "./ui/checkbox";
import Image from "next/image";

export function InfoPanel() {
    return (
        <div className={`w-1/5 h-full `}>
      <span className={`flex items-center gap-2 2xl:gap-4 h-1/12 2xl:h-1/7`}>
          <Image
              src="https://avatars.githubusercontent.com/u/88344957?v=4&size=512"
              alt="luca-naujoks"
              width={64}
              height={64}
              style={{borderRadius: "50%"}}
              loading={"lazy"}
          />
      <h1>luca-naujoks</h1>
      </span>
            <form
                className={`flex flex-col justify-between w-full h-11/12 2xl:h-6/7 border-2 border-foreground bg-foreground/50 p-4 rounded-lg`}>
                <h2>Software Integrator</h2>

                <div className={"flex flex-col gap-2 2xl:gap-4"}>
                    <Label htmlFor="gender" className={`font-semibold -mb-1`}>Gender</Label>
                    <SwitchButton leftLabel={"Male"} rightLabel={"Female"} disabled/>
                </div>

                <div className={"flex flex-col gap-2 2xl:gap-4"}>
                    <Label htmlFor="age" className={`font-semibold -mb-1`}>Age</Label>
                    <div className={`flex gap-2`} id={`age`}>
                        20
                        <Slider defaultValue={[20]} max={92} step={1} className={``} disabled/>
                        92
                    </div>
                </div>

                <div className={"flex flex-col gap-2 2xl:gap-4"}>
                    <Label htmlFor="origin" className={`font-semibold -mb-1`}>Origin</Label>
                    <Button id={`origin`} className={`w-fit bg-chart-4`} disabled>Germany</Button>
                </div>

                <div className={"flex flex-col gap-2 2xl:gap-4"}>
                    <Label htmlFor="origin" className={`font-semibold -mb-1`}>Languages</Label>
                    <div className="flex items-center gap-3">
                        <Label htmlFor="german">German</Label>
                        <Checkbox id="german" checked aria-readonly/>
                    </div>
                    <div className="flex items-center gap-3">
                        <Label htmlFor="english">English</Label>
                        <Checkbox id="english" checked aria-readonly/>
                    </div>
                    <div className="flex items-center gap-3">
                        <Label htmlFor="japanese">Japanese (learning)</Label>
                        <Checkbox id="japanese" disabled/>
                    </div>
                </div>

                <div className={"flex flex-col gap-2 2xl:gap-4"}>
                    <Label className={`font-semibold -mb-1`}>Social Contacts</Label>
                    <a href={"https://github.com/luca-naujoks"} className="contactLink">
                        @github/luca-naujoks
                    </a>
                    <a href={"https://www.linkedin.com/in/luca-naujoks/"} className="contactLink">
                        @linkedin/luca-naujoks
                    </a>
                    <a href={"mailto:business@luca-naujoks.de"} className="contactLink">
                        @email/business@luca-naujoks.de
                    </a>
                </div>
            </form>
        </div>
    );
}
