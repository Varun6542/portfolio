import { createContext, useContext, useEffect, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";

type Theme= "system" | "dark" | "light"

interface ThemeContextType{
    theme: Theme;
    setTheme: Dispatch<SetStateAction<Theme>>
    systemTheme: Theme;
}

const ThemeContext=createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider=({children}:{children: ReactNode})=>{
    const [theme,setTheme]=useState<Theme>(()=>{
        const savedTheme=localStorage.getItem("theme") as Theme | null;
        return savedTheme || "system";
    })

    const [systemTheme,setSystemTheme]=useState<Theme>("light");


    useEffect(()=>{
        const isDark=window.matchMedia("(prefers-color-scheme: dark)").matches;
        setSystemTheme(isDark ? "dark" : "light")
    },[])

    useEffect(()=>{
        const root=window.document.documentElement;

        const applyTheme=()=>{
            const finalTheme= theme==="system" ? systemTheme : theme;
            if(finalTheme==="dark")
                root.classList.add("dark")
            else
                root.classList.remove("dark")
        }

        applyTheme();
        localStorage.setItem("theme",theme);
    },[theme,systemTheme])

    useEffect(()=>{
        const mediaQuery=window.matchMedia("(prefers-color-scheme: dark)")
        const handleChange=()=>{
            const isDark=mediaQuery.matches;
            setSystemTheme(isDark ? "dark" : "light")

            if(theme==="system"){
                const root=window.document.documentElement;
                isDark ? root.classList.add("dark") : root.classList.remove("dark");
            }
        }
        mediaQuery.addEventListener("change",handleChange);
        return ()=> mediaQuery.removeEventListener("change",handleChange)
    },[theme])

    return(
        <ThemeContext.Provider value={{theme,setTheme,systemTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

// export const useTheme=()=>useContext(ThemeContext)

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
