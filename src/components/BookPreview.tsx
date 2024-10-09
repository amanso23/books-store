import { Link } from "react-router-dom"

const BookPreview = ({id, title, image, size}: {id: number, title: string, image:string, size?: string}) => {

    const defaultSize = "w-full h-full object-cover max-w-full"
    const sizeAux = size
    
    return (
       <Link to={`/books/${id}`} className="hover:scale-105 inline-block tranistion-all hover:contrast-125 hover:shadow-2xl">
        <img src={image} alt={`Portada del libro ${title}`} className={`aspect-[389/500] ${sizeAux? sizeAux : defaultSize} rounded-tr-lg rounded-br-lg`} />
       </Link>
    )
}

export default BookPreview