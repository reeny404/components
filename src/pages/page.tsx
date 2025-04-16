import { Button } from '../components/Button';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <main className="flex flex-1 text-3xl font-bold text-blue-500">
        hello world
      </main>
      <Button href="/editor" label="editor" />
    </div>
  );
}
