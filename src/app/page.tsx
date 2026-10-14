import Link from "next/link";

export default function Home() {
  return (
    <main className="p-24 text-center">
      <h1 className="text-4xl font-bold mb-4">Production Next.js Starter</h1>
      <p className="text-gray-500 mb-8">
        Infrastructure initialized. Configure .env and lib/ to start building.
      </p>
      <Link href="/dashboard" className="text-indigo-600 underline">
        Enter Dashboard
      </Link>
    </main>
  );
}
