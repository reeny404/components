function EditorLayer() {
  return (
    <div className="h-screen grid grid-rows-[48px_1fr] text-gray-900 text-center">
      <header className="flex items-center justify-center text-2xl font-bold bg-gray-100">
        GNB
      </header>
      <div className="grid grid-cols-[300px_1fr] h-full">
        <nav className="flex items-center justify-center bg-gray-300">
          <span className="text-2xl font-bold">LNB</span>
        </nav>
        <main className="flex items-center justify-center">
          <div className="flex items-center justify-between">
            <span>hello world</span>
          </div>
        </main>
      </div>
    </div>
  );
}

export default EditorLayer;
