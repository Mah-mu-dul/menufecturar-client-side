import React ,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const Purchese = () => {
    const [item, setItem] = useState({});
        const { id } = useParams();

   useEffect(() => {
     const url = `http://localhost:5000/services/${id}`;
     fetch(url)
       .then((res) => res.json())
       .then((data) => setItem(data));
   }, []);
   console.log(item);
    return (
        <div>
            kicu ekta
            <p>{item.name}</p>
           
        </div>
    );
};

export default Purchese;