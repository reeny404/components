import { Button } from '../components/Button';

export default function HomePage() {
  return (
    <main className="h-screen flex flex-col items-center justify-center text-center gap-y-4">
      <h1 className="text-3xl font-bold text-blue-500">hello world</h1>
      <Button href="/editor" label="editor" />
    </main>
  );
}
