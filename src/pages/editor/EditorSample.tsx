import clsx from 'clsx';
import { useState } from 'react';
import EditorLayer from './layer';

const CANVAS_W = 1000; // px
const CANVAS_H = 850; // px

type GridLineSpec = {
  lineCount: number; // 실제 줄 갯수 계산
  totalLineCount: number; // canvasSize가 꽉차게 넣기 위한 줄 갯수 계산
  lineGap: number; // realSize :  realGridGap = canvasSize : lineGap
  totalPixels: number; // 실제 줄 갯수 * 줄 간격
  isValid: boolean; // 선+간격 모두 그리기 위해 필요한 길이가 canvasSize보다 작은지 확인
};

const calculateLineSpec = (
  canvasSize: number,
  realSize: number,
  realGridGap: number,
): Pick<GridLineSpec, 'lineCount' | 'lineGap'> => {
  const lineCount = Math.floor(realSize / realGridGap);
  const lineGap = Math.floor((canvasSize * realGridGap) / realSize);

  return {
    lineCount,
    lineGap,
  };
};

const calculateTotalLineCount = (
  canvasSize: number,
  lineGap: number,
): number => {
  return Math.min(Math.floor(canvasSize / lineGap), canvasSize);
};

function EditorSample() {
  const [realInterval, setRealInterval] = useState<number>(100);
  const [realW, setRealW] = useState<number>(300000);
  const [realH, setRealH] = useState<number>(300000);

  // const calculate = useCallback((canvasSize: number, realSize: number, realGridGap: number): GridLineSpec=> {
  //   const lineCount = Math.floor(realSize / realGridGap);
  //   const lineGap = Math.floor(canvasSize * realGridGap / realSize);
  //   const totalLineCount = Math.min(Math.floor(canvasSize / lineGap), canvasSize)
  //   const totalPixels = lineCount * lineGap;

  //   return {
  //     lineCount,
  //     totalLineCount,
  //     lineGap,
  //     totalPixels,
  //     isValid: totalPixels <= canvasSize,
  //   };
  // }, []);

  const hLineSpec = calculateLineSpec(CANVAS_H, realW, realInterval);
  const vLineSpec = calculateLineSpec(CANVAS_W, realH, realInterval);
  const canvasInterval = Math.min(hLineSpec.lineGap, vLineSpec.lineGap);

  const hLineCount = calculateTotalLineCount(CANVAS_H, canvasInterval);
  const vLineCount = calculateTotalLineCount(CANVAS_W, canvasInterval);

  return (
    <EditorLayer>
      <div
        className="grid grid-rows-2 items-center justify-center gap-y-4"
        aria-label="데이터 설정"
      >
        <div className="flex items-center justify-between gap-x-2">
          <span className="text-sm text-gray-500">W</span>
          <input
            type="number"
            className="px-2 py-1 rounded bg-white border border-white hover:border-gray-800 xoutline-none border-box"
            value={realW}
            onChange={(e) => setRealW(Number(e.target.value))}
            step={10000}
          />
        </div>
        <div className="flex items-center justify-between gap-x-2">
          <span className="text-sm text-gray-500">H</span>
          <input
            type="number"
            className="px-2 py-1 rounded bg-white border border-white hover:border-gray-800 xoutline-none border-box"
            value={realH}
            onChange={(e) => setRealH(Number(e.target.value))}
            step={10000}
          />
        </div>
        <div className="flex items-center justify-between gap-x-2">
          <span className="text-sm text-gray-500">Line Gap</span>
          <input
            type="number"
            className="px-2 py-1 w-24 rounded bg-white border border-gray-200 hover:border-gray-800 xoutline-none border-box"
            value={realInterval}
            onChange={(e) => setRealInterval(Number(e.target.value))}
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
        <div className=" text-xs text-gray-400">
          <div className="flex gap-x-2">
            <span>H</span>
            <span className="break-all text-sm">
              {JSON.stringify(hLineSpec)}
            </span>
          </div>
          <div className="flex gap-x-2">
            <span>V</span>
            <span className="break-all text-sm">
              {JSON.stringify(vLineSpec)}
            </span>
          </div>
        </div>
      </div>
      <main className="flex items-center justify-center">
        <section
          aria-label="editor"
          className="bg-white #overflow-hidden"
          style={{
            width: CANVAS_W,
            height: CANVAS_H,
          }}
        >
          <HorizontalGridLine
            lineGap={canvasInterval}
            lineCount={hLineSpec.lineCount}
            totalLineCount={hLineCount}
          />
          <VerticalGridLine
            lineGap={canvasInterval}
            lineCount={vLineSpec.lineCount}
            totalLineCount={vLineCount}
          />
        </section>
      </main>
    </EditorLayer>
  );
}

export default EditorSample;

type GridLineProps = Pick<
  GridLineSpec,
  'lineCount' | 'totalLineCount' | 'lineGap'
>;

function VerticalGridLine({
  lineCount,
  totalLineCount,
  lineGap,
}: GridLineProps) {
  return (
    <div
      className="absolute size-full flex"
      style={{ width: CANVAS_W, height: CANVAS_H }}
      aria-label="세로 grid 그리기"
    >
      {Array.from({ length: totalLineCount }).map((_, i) => {
        const index = i + 1;
        const isMainGrid = (index + 1) % 10 === 0;
        const isLast = index === lineCount;

        return (
          <>
            <div
              key={index}
              style={{ width: lineGap }}
              className={clsx(
                'h-full border-r',
                isMainGrid ? 'border-gray-800' : 'border-gray-400',
              )}
            ></div>
            {(isMainGrid || isLast) && (
              <div className="relative text-white text-xs">
                <div
                  className={clsx(
                    'absolute -top-5 -left-2',
                    isLast && 'text-blue-200 font-bold z-10 bg-black',
                  )}
                >
                  {index + 1}
                </div>
              </div>
            )}
          </>
        );
      })}
    </div>
  );
}

function HorizontalGridLine({
  lineCount,
  totalLineCount,
  lineGap,
}: GridLineProps) {
  return (
    <div
      className="absolute size-full flex flex-col"
      style={{ width: CANVAS_W, height: CANVAS_H }}
      aria-label="가로 grid 그리기"
    >
      {Array.from({ length: totalLineCount }).map((_, i) => {
        const index = i + 1;
        const isMainGrid = (index + 1) % 10 === 0;
        const isLast = index === lineCount;

        return (
          <>
            <div
              key={index}
              style={{ height: lineGap }}
              className={clsx(
                'w-full border-b',
                isMainGrid ? 'border-gray-800' : 'border-gray-400',
              )}
            ></div>
            {(isMainGrid || isLast) && (
              <div className="relative text-white text-xs text-right">
                <div
                  className={clsx(
                    'absolute -top-2.5 -left-8',
                    isLast && 'text-blue-200 font-bold z-10 bg-black',
                  )}
                >
                  {index + 1}
                </div>
              </div>
            )}
          </>
        );
      })}
    </div>
  );
}
