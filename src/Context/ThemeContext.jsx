// import { createContext, useState } from "react"


// export const ThemeToggleContex = createContext()


// const ThemeContext = ({ children }) => {
//     const [mode, setMode] = useState(false)

//     const ToggleTheme = async () => {
//         setMode(!mode)
//     };

//     const Theme = {
//         backgroundColor :mode ?'black':'white',
//         color : mode ? 'white': 'black',
//         CardColor: mode ? 'white': 'black',
//     }


//     return (
//         <ThemeContext.Provider
//             value={{
//                 Theme,
//                 mode,
//                 ToggleTheme
//             }}>
//             {children}
//         </ThemeContext.Provider>
//     )
// }

// export default ThemeContext