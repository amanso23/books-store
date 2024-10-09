import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Book } from '../types';
import BookPreview from './BookPreview';

interface Props {
  books: Book[];
}

const BookDetail: React.FC<Props> = ({ books }) => {
  const { id } = useParams<{ id: string }>();
  const bookId = parseInt(id || '0', 10)
  const book = books.find((book) => book.id === bookId);

  if (!book) {
    return <Navigate to="/404" replace />;
  }

  const relatedBooks = books.filter(b => book.related_books_ids.includes(b.id));


  return (
    <main className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="md:col-span-1">
          <div className="sticky top-16">
            <img
              className="w-full h-auto object-cover rounded-tr-lg rounded-br-lg shadow-xl"
              src={book.image}
              alt={`Cover of ${book.title}`}
            />
            <div className="mt-8 space-y-4">
              <button className="w-full bg-black text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-800 transition-colors duration-300 shadow-md text-lg">
                Comprar ahora
              </button>
              <Link to="/" >
                <button className="w-full bg-white text-black font-semibold py-2 px-4 mt-4 rounded-md hover:bg-gray-100 transition-colors duration-300 border border-gray-300 shadow-sm text-lg">
                    Ver todos
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 space-y-10">
          <div>
            <h1 className="text-5xl font-black text-gray-900 leading-tight mb-6">{book.title}</h1>
            <div className="flex items-center space-x-4">
              <img
                src={book.author.image}
                alt={book.author.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-gray-200"
              />
              <div>
                <p className="text-2xl font-semibold text-gray-900">{book.author.name}</p>
                <p className="text-md text-gray-500">Published on {book.publication_date}</p>
              </div>
            </div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">{book.description}</p>
          <div className="flex flex-wrap gap-2">
            {book.hashtags.map((tag, index) => (
              <span
                key={index}
                className="bg-[#333333] text-white px-2 py-1">
                {tag}
              </span>
            ))}
          </div>
          <div className="pt-10 border-t border-gray-200">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6 ml-4">Relacionados</h2>
            <section className='flex items-center flex-wrap gap-x-2 p-4 rounded mt-8 overflow-x-auto'>
                {relatedBooks?.length > 0 && relatedBooks.map((relatedBook) => (
                    <div className="flex-shrink-0 max-w-[150px]" key={relatedBook.id}>
                        <BookPreview 
                            id={relatedBook.id}
                            title={relatedBook.title}
                            image={relatedBook.image}
                        />
                    </div>
                ))}
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BookDetail;