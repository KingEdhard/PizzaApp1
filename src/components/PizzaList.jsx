/* Este es el código del archivo PizzaList.jsx */
import PropTypes from 'prop-types';
import { useState } from "react";
// Aquí importas los iconos que quieres usar de Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function PizzaList({name, data, onCreate, onUpdate, onDelete, error}) {
    const [formData, setFormData] = useState({id:'', name: '', description:'' });
    const [editingId, setEditingId] = useState(null);
    
    //Manejo de los eventos 
    const handleFormChange = (event)=>{
        const {name, value} = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]:value,
        }));  
    };

    const handleSubmit = (event)=>{
        event.preventDefault();
        if (editingId){
            onUpdate(formData);
            setEditingId(null)
        } else{
            onCreate(formData);
        }
        setFormData({id:' ', name: '', description: ''});
    };

    const handleEdit = (item)=>{
        setEditingId(item.id);
        setFormData({
            id: item.id,
            name:item.name,
            description: item.description
        })
    };

    const handleCancelEdit = ()=>{
        setEditingId(null);
        setFormData({id:'', name:'', description:''})
    }
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">New {name}</h2>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col space-y-4 bg-gray-50 p-4 rounded-md shadow-md"
            >
                {/* Aquí usas el sistema de rejilla de Tailwind CSS para poner los campos y el botón en línea */}
                <div className="grid grid-cols-12 gap-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleFormChange}
                        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 col-start-3 col-span-2"
                        required
                    />
                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleFormChange}
                        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 col-start-6 col-span-2"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded col-start-9 col-span-2"
                    >
                        {editingId ? 'Update' : 'Create'}
                    </button>
                    {editingId && (
                        <button
                            type="button"
                            onClick={handleCancelEdit}
                            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                        >
                            Cancel
                        </button>
                    )}
   
                </div>
            </form>
   
            {error && <div className="text-red-500">{error.message}</div>}
            <h2 className="text-2xl font-bold mt-4 mb-2">{name}s</h2>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Name</th>
                            <th scope="col" className="px-6 py-3">Description</th>
                            <th scope="col" className="px-6 py-3"><span className="sr-only">Edit</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr
                                key={item.id}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                            >
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {item.name}
                                </td>
                                <td className="px-6 py-4">{item.description}</td>
                                <td className="px-6 py-4 text-right">
                                    {/* Aquí usas el componente <FontAwesomeIcon> para renderizar los iconos en tu interfaz */}
                                    <button
                                        onClick={() => handleEdit(item)}
                                        className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600"
                                    >
                                        <FontAwesomeIcon icon={faEdit} /> {/* Aquí renderizas el icono de editar */}
                                    </button>
                                    <button
                                        onClick={() => onDelete(item.id)}
                                        className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 ml-2"
                                    >
                                        <FontAwesomeIcon icon={faTrash} /> {/* Aquí renderizas el icono de basura */}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
// Aquí defines los tipos de las props usando la función shape de PropTypes
PizzaList.propTypes = {
    name: PropTypes.string.isRequired, // Una prop de tipo string y requerida
    data: PropTypes.arrayOf(PropTypes.shape({ // Una prop de tipo array de objetos con ciertas propiedades y requerida
        id: PropTypes.string.isRequired, // Una propiedad de tipo string y requerida
        name: PropTypes.string.isRequired, // Una propiedad de tipo string y requerida
        description: PropTypes.string.isRequired, // Una propiedad de tipo string y requerida
    })).isRequired,
    onCreate: PropTypes.func.isRequired, // Una prop de tipo función y requerida
    onUpdate: PropTypes.func.isRequired, // Una prop de tipo función y requerida
    onDelete: PropTypes.func.isRequired, // Una prop de tipo función y requerida
    error: PropTypes.object, // Una prop de tipo objeto y opcional
};
