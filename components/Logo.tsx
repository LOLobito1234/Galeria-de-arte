import Image from "next/image";
import logo from "../public/Images/logo.ico";

export default function Logo() {
    return (
     <Image
        src={logo}
        alt="Logo"
        width={50}
        height={40}
        className="rounded-xl"
      />
    )
}