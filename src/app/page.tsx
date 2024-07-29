import Image from "next/image";
import Button from "../components/partials/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 space-y-5">
      <h1 className="text-6xl">Stories</h1>
      <h2 className="text-5xl">Nouvelles fictives, par Ori Shun</h2>
      <Button href="/stories" className="text-2xl bg-color3 text-color2">Lire</Button>
    </main>
  );
}
