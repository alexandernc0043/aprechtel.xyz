import type {Metadata} from "next";
import BottomNav from "@/components/BottomNav";

export const metadata: Metadata = {
    title: "Home",
    description: "Homepage",
};

export default function Home() {
    return (
        <div className="w-screen h-screen bg-[url('/wyoming.jpg')] bg-cover overflow-hidden">
            <header className="absolute left-0 top-2/3 ml-6 sm:ml-12 md:ml-24 text-center sm:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-white">Computer Science Student</h2>
                <h1 className="text-3xl sm:text-4xl md:text-6xl text-white">Hi, I&apos;m <span
                    className={"text-blue-400"}>Alexander Prechtel</span><br/>From Charlotte, North Carolina</h1>
            </header>
            <BottomNav items={[
                {href: "/", label: "Home"},
                {href: "https://instructions.aprechtel.xyz", label: "Instructions (ITIS-3135)", target: "_blank"},
            ]}/>
        </div>
    );
}
