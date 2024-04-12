import React, { useState } from 'react'
import axios from 'axios'
import { createNewRoom } from '../../Rtmp/api';
import { useNavigate } from 'react-router-dom'
const CreateStream = () => {

    let navigate = useNavigate();
  const [formData, setFormData] = useState({title: "",description: "",thumbnail: "",tags:""});
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    // const {data} = await axios.post('http://localhost:5000/api/newstream', formData)
    const meetingId = await createNewRoom();
    navigate(`/stream/creator/${meetingId}`);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen dark">
        <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-200 mb-4 text-center">New Stream Setup</h2>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <input placeholder="Title" name='title' value={formData.title} onChange={handleChange} className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-green transition ease-in-out duration-150" type="text" />
            <input placeholder="Description" name='description' value={formData.description} onChange={handleChange} className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-green transition ease-in-out duration-150" type="text" />
            <input placeholder="Thumbnail" name='thumbnail' value={formData.thumbnail} onChange={handleChange} className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-green transition ease-in-out duration-150" type="file" />
            <textarea placeholder="Tags" name='tags' value={formData.tags} onChange={handleChange} className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-green transition ease-in-out duration-150" />
            <button className="bg-gradient-to-r from-lime-400 to-green text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-green hover:to-lime-400 transition ease-in-out duration-150" type="submit">Create</button>
          </form>
        </div>
      </div>
  )
}

export default CreateStream
