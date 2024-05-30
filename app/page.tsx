import SignIn from "@/components/SignIn";
import Link from 'next/link'
import { Button } from "@/components/ui/button";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-200 " >
      <h1 className="font-bold text-3xl justify-center items-center bg-blue-300 rounded-sm">This is a home page.</h1>
      <div className="flex justify-center items-center mt-4 gap-2">
        <h2 className="">Click button to register.</h2>
        <Link href="/signup">
        <Button className="flex bg-blue-500 hover:bg-blue-700" type="submit">
          Register
        </Button>
        </Link>
      </div>
    </main>
  );
}
