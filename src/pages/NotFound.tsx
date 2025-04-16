import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gray-50">
      <div className="text-center">
        {/* 404 텍스트 */}
        <h1 className="text-9xl font-bold text-gray-700">404</h1>

        {/* 제목 */}
        <h2 className="mt-4 text-2xl font-semibold text-gray-700">
          페이지를 찾을 수 없습니다
        </h2>

        {/* 설명 */}
        <p className="mt-4 text-gray-500">
          요청하신 페이지가 삭제되었거나 주소가 변경되었을 수 있습니다.
        </p>

        {/* 버튼 그룹 */}
        <div className="mt-8 flex gap-4 justify-center">
          <button
            onClick={handleGoBack}
            className="px-6 py-3 text-gray-700 bg-gray-200 rounded-lg outline-none hover:bg-gray-300 transition-colors duration-200"
          >
            이전 페이지
          </button>
          <button
            onClick={handleGoHome}
            className="px-6 py-3 text-white bg-blue-500 rounded-lg outline-none hover:bg-blue-600 transition-colors duration-200"
          >
            홈으로 가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
