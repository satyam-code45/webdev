import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
  <div className="flex flex-col h-screen w-screen justify-center items-center ">
    <h1 className="font-bold text-3xl">Todo Application</h1>
    <div className="flex p-4 space-x-4">
        <Link href="/signin" className="border p-2 rounded-md hover:text-yellow-500 ">Sign in</Link>
        <Link href="/signup" className="border p-2 rounded-md hover:text-yellow-500">Sign up</Link>
    </div>
  </div>
  );
}
