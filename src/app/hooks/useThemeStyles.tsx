import { useAppContext } from "../context/AppContext";

export default function useThemeStyles () {
    const { isDarkMode } = useAppContext();

    const mainStyle = isDarkMode ? "text-main-dark-foreground bg-main-dark-background" : "text-main-light-foreground bg-main-light-background";
    const cardStyle = isDarkMode ? "text-dark-foreground bg-dark-background" : "text-light-foreground bg-light-background";

    return {mainStyle, cardStyle}
}