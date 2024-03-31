import React,{useState,useContext} from 'react';


//context creation
const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

//function for access
export function useTheme() {
    return useContext(ThemeContext)
}
//function for update
export function useThemeUpdate(){
    return useContext(ThemeUpdateContext)
}

export function ThemeProvider({children}){
    const[darkTheme,setDarkTheme] = useState(true);

    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
        console.log("Theme toggled")
    }

    return(
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}
