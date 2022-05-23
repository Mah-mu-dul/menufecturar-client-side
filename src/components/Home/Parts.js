import React, { useEffect, useState } from 'react';

const Parts = () => {
        const [books, setBooks] = useState([]);
        useEffect(() => {
          fetch("services.json")
            .then((res) => res.json())
            .then((data) => setBooks(data));
        }, []);

    return (
        <div>
            <p>{books.length}</p>
        </div>
    );
};

export default Parts;