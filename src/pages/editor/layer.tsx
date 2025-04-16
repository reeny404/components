type Props = {
  children: [React.ReactNode, React.ReactNode];
};

function EditorLayer({ children: [inputs, editor] }: Props) {
  return (
    <div className="h-screen grid grid-rows-[48px_1fr] text-gray-900 text-center">
      <header className="flex items-center justify-center gap-x-10 bg-gray-100 text-2xl font-bold">
        GNB
      </header>
      <div className="grid grid-cols-[400px_1fr_300px] h-full">
        <nav className="px-4 flex flex-col items-center justify-center gap-y-4 bg-gray-300">
          <span className="mt-32 text-2xl font-bold">LNB</span>
          {inputs}
        </nav>
        {editor}
        <div className="px-4 flex flex-col items-center justify-center gap-y-4 bg-gray-300">
          <span className="text-2xl font-bold">Right Panel</span>
          <div className="space-x-4"></div>
        </div>
      </div>
    </div>
  );
}

export default EditorLayer;
