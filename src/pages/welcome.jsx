
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
const translations = {
  en: {
    welcome: "Welcome Back",
    loginToAccount: "Login to your account",
    email: "Email",
    password: "Password",
    show: "Show",
    hide: "Hide",
    login: "Login",
    dontHaveAccount: "Don't have an account?",
    register: "Register",
    language: "Language",
  },
  ar: {
    welcome: "مرحبًا بعودتك",
    loginToAccount: "سجل الدخول إلى حسابك",
    email: "البريد الإلكتروني",
    password: "كلمة المرور",
    show: "إظهار",
    hide: "إخفاء",
    login: "تسجيل الدخول",
    dontHaveAccount: "ليس لديك حساب؟",
    register: "تسجيل",
    language: "اللغة",
  },
  he: {
    welcome: "ברוך שובך",
    loginToAccount: "התחבר לחשבון שלך",
    email: "אימייל",
    password: "סיסמה",
    show: "הצג",
    hide: "הסתר",
    login: "התחברות",
    dontHaveAccount: "אין לך חשבון?",
    register: "הרשמה",
    language: "שפה",
  },
};
const rtlLanguages = ["ar", "he"];
import bgImg from "../assets/pexels-bertellifotografia-17315404.jpg";
import stacklyLogo from "../assets/logo.png";

export default function Login() {
  const [language, setLanguage] = useState("en");
  const t = translations[language];
  const isRTL = rtlLanguages.includes(language);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = null;
    if (email === "admin@enkonix.in" && password === "admin123") {
      user = {
        name: "Admin",
        email: "admin@enkonix.in",
        password: "admin123",
        registeredAt: "N/A"
      };
    } else {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      user = users.find((u) => u.email === email && u.password === password);
    }
    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      let loginHistory = JSON.parse(localStorage.getItem("loginHistory")) || [];
      loginHistory.push({
        email: user.email,
        name: user.name,
        loginTime: new Date().toLocaleString(),
      });
      localStorage.setItem("loginHistory", JSON.stringify(loginHistory));
      navigate("/admin");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div
      className={`min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat${darkTheme ? " bg-gray-900" : ""}`}
      style={{ backgroundImage: `url(${bgImg})` }}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="w-full max-w-md mx-auto p-6 rounded-2xl shadow-2xl bg-white bg-opacity-40 backdrop-blur-lg flex flex-col items-center relative">
        {/* Top row: logo, language, theme */}
        <div className="w-full flex justify-between items-center mb-4">
          <img src={stacklyLogo} alt="Stackly Logo" className="h-10" />
          <div className="flex gap-2">
            <select
              className="rounded px-2 py-1 border border-[#a259c6] text-[#a259c6] bg-white"
              value={language}
              onChange={e => setLanguage(e.target.value)}
            >
              <option value="en">English</option>
              <option value="ar">العربية</option>
              <option value="he">עברית</option>
            </select>
            <button
              type="button"
              className="w-10 h-10 flex items-center justify-center rounded-full shadow transition z-10 bg-white text-[#232136]"
              onClick={() => setDarkTheme((prev) => !prev)}
              aria-label="Toggle dark theme"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-moon"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"></path></svg>
            </button>
          </div>
        </div>
        <h1 className="text-2xl font-bold mb-2 text-center text-white drop-shadow-lg">{t.welcome}</h1>
        <p className="mb-6 text-center text-white text-opacity-80">Please enter your details.</p>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <label className="block mb-1 font-semibold text-white text-opacity-90">E-mail</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-70 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a259c6]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your e-mail"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold text-white text-opacity-90">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-70 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a259c6]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold text-lg shadow-md mt-2"
          >
            Log in
          </button>
          <div className="mt-4 text-center">
            <a href="#" className="text-black text-opacity-80 hover:underline">Forgot password?</a>
          </div>
          <div className="mt-2 text-center text-black text-opacity-80">
            Don't have an account? <button type="button" className="text-red-500 hover:underline" onClick={() => navigate('/register')}>Register here</button>
          </div>
        </form>
      </div>
    </div>
  );
}
