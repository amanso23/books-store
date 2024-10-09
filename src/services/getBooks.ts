export const getBooks = async() => {
    const url = "/data/books.json"
    try{
        const response = await fetch(url)

        if(!response.ok){
            throw new Error(`Error en la solicitud ${response}`)
        }

        const data = await response.json()
        
        return data

    }catch(error){
        console.error(error)
        throw error
    }
}