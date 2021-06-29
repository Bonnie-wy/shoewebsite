import { useEffect, useState } from "react";

const UseCategoryItems = (id) => {
  const [categoryItems, setCategoryItems] = useState();
  const [error, setError] = useState();

  console.log('useCategory :', categoryItems);

  useEffect(() => {
    fetch(`/items/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        console.log('Sup');
        return response.json();
      })
      .then((data) => {
        setCategoryItems(data);
        console.log('Data :', data);
      })
      .catch((error) => {
        setError(error);
      });
  },[id]);

  return {
    categoryItems: categoryItems,
    error: error
  };
};

export default UseCategoryItems;



//   useEffect(() => {
//     const fetchData = async () => {
//         try {
//             console.log("Fetching items");
//             const res = await fetch(`/items/${id}`);
//             if (!res.ok) {
//                 throw new Error(`Unexpected status code: ${res.status}`);
//             }
//             console.log("Fetched items");
//             const jsonData = await res.json();
//             setCategoryItems(jsonData);
//         } catch (error) {
//             console.error(error);
//             setError(error);
//         }
//     };
//     fetchData();
// }, [id]);
