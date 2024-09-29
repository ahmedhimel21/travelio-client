import style from "../login/style.module.css";

import AuthDescription from "@/src/components/modules/auth/AuthDescription";
import RegisterForm from "@/src/components/modules/auth/RegisterForm";

const RegisterPage = () => {
  return (
    <div
      className={`min-h-screen flex items-center justify-center ${style.container}`}
    >
      <div className="transparent bg-white/10  rounded-lg shadow-lg flex flex-col md:flex-row w-full max-w-4xl">
        {/* Left Side (Text Section) */}
        <AuthDescription />
        {/* Right Side (Login Form) */}
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
