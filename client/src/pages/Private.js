import React, {useState,useEffect} from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SectorCards/SearchBar';
import CardList from '../components/SectorCards/CardList';
import { LiaBusinessTimeSolid } from 'react-icons/lia';
import axios from 'axios';

const Private = () => {
  const [course, setCourse] = React.useState([]);
  const [filteredTrainings, setFilteredTrainings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/course/courses")
      .then((response) => {
        console.log('API Response:', response.data);
        setCourse(response.data.courses);
        setFilteredTrainings(response.data.courses.filter(course => course.domainName === 'Private'));
      })
      .catch((error) => {
        console.error('Error fetching course data:', error);
      });
  }, []);

  const handleSearch = (query) => {
    let filtered = course.filter((training) =>
      training.courseName.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredTrainings(filtered);
  };
  return (
    <div>
      <Navbar />

      <div className='flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-indigo-300 py-12 font-semibold text-white text-4xl sm:py-20 md:py-32 lg:py-36'>
        <LiaBusinessTimeSolid />
        <p className='mt-4'>PRIVATE</p>
      </div>

      <SearchBar onSearch={handleSearch}/>

      <div className='container mx-50'>
        <CardList trainings={filteredTrainings}/>
      </div>
    </div>
  );
};

export default Private;
