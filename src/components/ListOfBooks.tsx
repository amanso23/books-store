import { Book } from "../types";
import BookPreview from "./BookPreview";

interface Props {
    books: Book[]
}

const ListOfBooks: React.FC<Props> = ({ books }) => {
    return (
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-12 px-4">
            {books.length > 0 ? (
                books.map(({ id, title, image }) => (
                    <li key={id}> 
                        <BookPreview
                            id={id}
                            title={title}
                            image={image}
                            
                        />
                    </li>
                ))
            ) : (
                "No hay libros disponibles"
            )}
        </ul>
    );
};

export default ListOfBooks;
