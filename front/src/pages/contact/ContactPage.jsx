import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import MainLayout from "../../components/MainLayout";

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    try {
      await axios.post("/api/feedback", data);
      alert("Ваша заявка принята, спасибо за обращение!");
    } catch (error) {
      console.error(error);
      alert(
        "Произошла ошибка при отправке заявки. Пожалуйста, попробуйте еще раз."
      );
    }
  };

  return (
    <MainLayout>
      <div className="container mx-auto my-10 px-4">
        <h1 className="text-3xl font-bold mb-6">Обратная связь</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-2">
              Имя
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "Поле имя обязательно" })}
              className={`w-full px-4 py-2 border rounded-md ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Поле email обязательно",
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Введите корректный email",
                },
              })}
              className={`w-full px-4 py-2 border rounded-md ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="question" className="block font-medium mb-2">
              Вопрос
            </label>
            <textarea
              id="question"
              {...register("question", { required: "Поле вопрос обязательно" })}
              className={`w-full px-4 py-2 border rounded-md ${
                errors.question ? "border-red-500" : "border-gray-300"
              }`}
            ></textarea>
            {errors.question && (
              <p className="text-red-500 text-sm mt-1">
                {errors.question.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="bg-primary text-white font-bold py-2 px-4 rounded-md disabled:opacity-50"
            disabled={!isValid}
          >
            Отправить
          </button>
        </form>
      </div>
    </MainLayout>
  );
};

export default ContactPage;
