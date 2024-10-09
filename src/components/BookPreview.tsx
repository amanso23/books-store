import { useViewTransitions } from "../hooks/useViewTransitions";

const BookPreview = ({ id, title, image, size }: { id: number; title: string; image: string; size?: string }) => {
    const defaultSize = "w-full h-full object-cover max-w-full";
    const sizeAux = size;
    const {navigateWithTransition, scrollToTop} = useViewTransitions()

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault(); 
        const targetPath = `/books/${id}`
        scrollToTop()
        navigateWithTransition(targetPath) 
        
    };

    return (
        <button
            onClick={handleClick} 
            className="hover:scale-105 inline-block transition-all hover:contrast-125 hover:shadow-2xl"
        >
            <img
                src={image}
                alt={`Portada del libro ${title}`}
                className={`aspect-[389/500] ${sizeAux ? sizeAux : defaultSize} rounded-tr-lg rounded-br-lg`}
            />
        </button>
    );
};

export default BookPreview;