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
       
   
        <div className="flex justify-between items-center w-full">
          <Heading title={` Online class Session Link`} />
        </div>
        


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
  