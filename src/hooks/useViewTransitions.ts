import { useNavigate } from "react-router-dom";

export const useViewTransitions = () => {
    const navigate = useNavigate();

    const navigateWithTransition = (targetPath?: string) => {
        const defaultPath = "/";
        const targetPathAux = targetPath ? targetPath : defaultPath;

        if (document.startViewTransition) {
            document.startViewTransition(() => {
                navigate(targetPathAux);
            });
        } else {
            navigate(targetPathAux);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return {
        navigateWithTransition,
        scrollToTop

    } 
};