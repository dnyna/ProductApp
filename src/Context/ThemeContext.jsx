import { createContext, useState } from "react"


export const ThemeToggleContex = createContext()


const ThemeContext = ({ children }) => {
    const [mode, setMode] = useState(false)

    const ToggleTheme =  () => {
        setMode(!mode)
    };

    const Theme = {
        backgroundColor :mode ?'black':'white',
        color : mode ? 'white': 'black',
        CardColor: mode ? 'white': 'black',
    }


    return (
        <ThemeToggleContex.Provider
            value={{
                Theme,
                mode,
                ToggleTheme
            }}>
            {children}
        </ThemeToggleContex.Provider>
    )
}

export default ThemeContext