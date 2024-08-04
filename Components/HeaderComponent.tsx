import Image from "next/image";
import logo from "@/public/logo.png";
import Link from "next/link";

export default function HeaderComponent() {
    return (
        <header className={"flex justify-center text-center items-center p-4 space-x-16 border-b border-blue-500 shadow-xl shadow-blue-100 mb-4"}>

            <ul className={"flex space-x-8"}>
                <li className={"text-blue-900 hover:text-blue-700"}>
                    <a href={"/"}>Ana Sayfa</a>
                </li>
                <li className={"text-blue-900 hover:text-blue-700"}>
                    <a href={"/hakkimizda"}>Hakkımızda</a>
                </li>
            </ul>
            <Link href={"/"}><Image src={logo} width={125} height={125} alt={"Kiriş Nakliyat"} /></Link>
            <ul className={"flex space-x-6"}>
                <li className={"text-blue-900 hover:text-blue-700"}>
                    <a href={"/hizmetlerimiz"}>Hizmetlerimiz</a>
                </li>
                <li className={"text-blue-900 hover:text-blue-700"}>
                    <a href={"/iletisim"}>İletişim</a>
                </li>
            </ul>
        </header>
    );
}