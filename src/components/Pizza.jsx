import { useState, useEffect } from "react";
import PizzaList from "./PizzaList";

//Creación de la primer constante

const term = "Pizza";

export default function Pizza() {
  //Empezamos a crear los estados y los asignamos a un array vacío
  //Variable data y su estado setData
  const [data, setData] = useState([]);
  //Variable id y su estado MaxId iniciado en 0
  const [maxId, setMaxId] = useState(0);

  //Manejo del useEffect mediante la emulación de una API
  useEffect(() => {
    fetchPizzaData();
  }, []);

  //Envolvemos a la API en una constante
  const fetchPizzaData = () => {
    // Simulamos el fetching de la data desde la API
    const pizzaData = [
      {
        id: 1,
        name: "Margherita",
        description: "Tomato sauce, mozzarella, and basil",
      },
      {
        id: 2,
        name: "Pepperoni",
        description: "Tomato sauce, mozzarella, and pepperoni",
      },
      {
        id: 3,
        name: "Hawaiian",
        description: "Tomato sauce, mozzarella, ham, and pineapple",
      },
    ];
    setData(pizzaData); //Mostrar la data
    setMaxId(Math.max(...pizzaData.map((pizza) => pizza.id))); //hace una copia de la data, la mapea y después la muestra por el Id más alto
  };
  /*
        Creación de las funciones que manejarán las operaciones CRUD
        */

  //Función CREATE

  const handleCreate = (item) => {
    //Simula la creación de un elemento en la API
    const newItem = { ...item, id: data.length + 1 };
    setData([...data, newItem]);
    setMaxId(maxId + 1);
  };

  const handleUpdate = () => {
    //Simula la actualización  de un elemento en la API
    // eslint-disable-next-line no-undef
    const updateData = data.filter((pizza) => pizza.id !== id);
    setData(updateData);
  };

  const handleDelete = (id) => {
    //Simula la eliminación  de un elemento en la API
    const updateData = data.filter((pizza) => pizza.id !== id);
    setData(updateData);
  };

  return (
    <>
      <PizzaList
        name={term}
        data={data}
        onCreate={handleCreate}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
    </>
  );
}