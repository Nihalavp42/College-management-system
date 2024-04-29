import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { baseApiURL } from '../../baseUrl';
import Heading from "../../components/Heading";
import './online.css'; // Import external CSS file
const OnlineClassSession = () => {
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [resources, setResources] = useState([]);
  
    const fetchResources = async () => {
      try {
        const response = await axios.get(`${baseApiURL()}/onlineclass/getResources`);
        if (response.data.success) {
          setResources(response.data.resources);
        }
      } catch (error) {
        console.error('Error fetching resources:', error);
      }
    };
  
    useEffect(() => {
      fetchResources();
    }, []);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post(`${baseApiURL()}/onlineclass/addResource`, { title, link });
        if (response.data.success) {
          fetchResources(); // Reload resources after successful submission
          setTitle('');
          setLink('');
        }
      } catch (error) {
        console.error('Error adding resource:', error);
      }
    };
  
    return (
      <div className="container">
        <form onSubmit={handleSubmit} className="form">
   
        <div className="flex justify-between items-center w-full">
          <Heading title={`Upload Online class Session Link`} />
        </div>
        <div className="w-full flex justify-evenly items-center mt-12">
          <div className="w-1/2 flex flex-col justify-center items-center">
            <p className="mb-4 text-xl font-medium">Add Class Link</p>
            {/* Input field for Title */}
            <div className="w-[70%]">
              <input
                type="text"
                placeholder='Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <br/>
            {/* Input field for Class Link */}
            <div className="w-[70%]">
              <input
                type="text"
                placeholder='Class Link'
                value={link}
                onChange={(e) => setLink(e.target.value)}
                className="w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            {/* Submit button */}
            <button
              type="submit"
              className="bg-blue-500 px-6 py-3 rounded-sm my-6 text-white"
            >
              Add Link
            </button>
          </div>
        </div>
      </form>


        <h2>Resource List</h2>
        <div className='card'>
        <div className="card-content">
        <ul className="resource-list">
          {resources.map((resource) => (



            <li key={resource._id} className="resource-item">
              <strong>Title: {resource.title}</strong> <br/>

            
        <a href={resource.link}>Link: {resource.link}</a></li>
          ))}
        </ul>
        </div>
        </div>
      </div>
    );
  };
  
  export default OnlineClassSession;
  