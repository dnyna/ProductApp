import { createContext, useState } from "react"


export const ThemeToggleContex = createContext()


const ThemeContext = ({ children }) => {
    const [mode, setMode] = useState(false)

    const ToggleTheme = () => {
        setMode(!mode)
    };

    const Theme = {
        backgroundColor: mode ? 'black' : 'white',
        color: mode ? 'white' : 'black',
        CardColor: mode ? 'white' : 'black',
    }
    
    const GreyTheme = {
        backgroundColor: mode ? '#1a1919' : 'white',
        color: mode ? 'white' : '#1a1919',
        CardColor: mode ? 'white' : '#1a1919',
    }


    return (
        <ThemeToggleContex.Provider
            value={{
                Theme,
                mode,
                GreyTheme,
                ToggleTheme
            }}>
            {children}
        </ThemeToggleContex.Provider>
    )
}

export default ThemeContext