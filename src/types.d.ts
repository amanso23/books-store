export interface Book {
    id: number
    title: string
    image: string
    author: {
        name: string
        image: string
    }
    description: string
    hashtags: string[]
    publication_date: string
    related_books_ids : number[]
}