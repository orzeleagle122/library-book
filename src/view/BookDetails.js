import React from 'react';

const BookDetails = ({location}) => {
    const {query} = location;
    if(!query) {
        return (
            <>
                nie ma takiej ksiązki ziomek więc łap błąd 404, elo
            </>
        )
    }

    return ( 
        <>
            {query.title}
        </>
     );
}
 
export default BookDetails;