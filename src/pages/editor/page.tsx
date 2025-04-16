import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const calculateInterval = (length: number, n: number) => {
  return (length - n) / n + 1; // 선 사이의 간격
};

function EditorTestPage() {
  const { interval: initData } = useParams();
  const [interval, setInterval] = useState<number>(100);
  const [width, setWidth] = useState<number>(300000);
  const [height, setHeight] = useState<number>(150000);

  useEffect(() => {
    const data = Number(initData);
    if (data) {
      setInterval(data);
    }
  }, [initData]);

  const horizontalLineCount = width / interval;
  const verticalLineCount = height / interval;

  const hInterval = calculateInterval(width, interval);
  const vInterval = calculateInterval(height, interval);

  console.log('1', horizontalLineCount, verticalLineCount);
  console.log('2', width, height);
  console.log('3', hInterval, vInterval, interval);

  return (
    <div className="h-screen grid grid-rows-[48px_1fr] text-gray-900 text-center">
      <header className="flex items-center justify-center gap-x-10 bg-gray-100">
        <span className="text-2xl font-bold">GNB</span>
        <span> | </span>
        <div>
          <div className="flex items-center justify-between gap-x-2">
            <span className="text-sm text-gray-400">W</span>
            <input
              type="number"
              className="w-4/5 p-2 rounded bg-white border border-white hover:border-gray-800 xoutline-none border-box"
              value={width}
              onChange={(e) => setWidth(Number(e.target.value))}
            />
            <span className="text-sm text-gray-400">H</span>
            <input
              type="number"
              className="w-4/5 p-2 rounded bg-white border border-white hover:border-gray-800 xoutline-none border-box"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
            />
          </div>
        </div>
      </header>
      <div className="grid grid-cols-[400px_1fr_300px] h-full">
        <nav className="px-4 flex flex-col items-center justify-center gap-y-4 bg-gray-300">
          <span className="text-2xl font-bold">LNB</span>
          <div className="space-x-4">
            <span>Grid Interval</span>
            <input
              type="number"
              className="p-2 w-24 rounded bg-white border border-gray-200 hover:border-gray-800 xoutline-none border-box"
              value={interval}
              onChange={(e) => setInterval(Number(e.target.value))}
              min={100}
              step={100}
              list="defaultNumbers"
            />
            <datalist id="defaultNumbers">
              <option value="100"></option>
              <option value="1000"></option>
              <option value="5000"></option>
              <option value="10000"></option>
              <option value="100000"></option>
            </datalist>
          </div>
        </nav>
        <section className="flex items-center justify-center">
          <main className="w-[1000px] h-[850px] bg-white #overflow-hidden">
            {/* <div className="size-full py-0.5 ">
              {Array.from({ length: horizontalLineCount }).map((_, index) => (
                <div key={index} className="py-0.5 w-full border-t border-gray-400"></div>
              ))}
            </div> */}
            <div className="size-full flex px-0.5">
              {Array.from({ length: verticalLineCount }).map((_, index) => (
                <>
                  <div
                    key={index}
                    className="pr-0.5 h-full border-l border-gray-400"
                  ></div>
                  {index % 10 === 0 && (
                    <div className="relative text-white text-xs">
                      <div className="absolute -top-5 -left-2">{index}</div>
                    </div>
                  )}
                </>
              ))}
            </div>
          </main>
        </section>
        <div className="px-4 flex flex-col items-center justify-center gap-y-4 bg-gray-300">
          <span className="text-2xl font-bold">Right Panel</span>
          <div className="space-x-4"></div>
        </div>
      </div>
    </div>
  );
}

export default EditorTestPage;
