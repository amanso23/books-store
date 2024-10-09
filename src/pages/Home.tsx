import Title from "../components/Title"
import ListOfBooks from "../components/ListOfBooks"
import { Book } from "../types"



interface Props {
    books: Book[]
}

const Home: React.FC<Props> = ({books}) => {

    return (
            <main className="m-auto max-w-4xl">
                <Title 
                    title="Libros de"
                    subtitle="programación"
                />
                <ListOfBooks books={books} />
            </main>
        
)}

export default Home