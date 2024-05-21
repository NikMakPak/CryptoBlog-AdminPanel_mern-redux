import React from "react";
import MainLayout from "../../components/MainLayout";

const NotFound = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">404 - Страница не найдена</h1>
        <p className="text-gray-500 mb-8">
          Извините, но страница, которую вы искали, не существует.
        </p>
        <a
          href="/"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Вернуться на главную
        </a>
      </div>
    </MainLayout>
  );
};

export default NotFound;
