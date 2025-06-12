import { FaDesktop, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  const icon =
    theme === "light" ? <FaSun className="text-yellow-400" /> :
    theme === "dark" ? <FaMoon className="text-blue-400" /> :
    <FaDesktop className="text-black" />;

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-white transition cursor-pointer"
    >
      {icon}
    </button>
  );
};

export default ThemeToggle;
