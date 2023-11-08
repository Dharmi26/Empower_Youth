import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SectorCards/SearchBar';
import CardList from '../components/SectorCards/CardList';
import { IoBusinessSharp } from 'react-icons/io5';

// const training = [
//   {
//     id: 1,
//     trainingName: 'Training 1',
//     trainingPeriod: '3 months',
//     trainingCost: '$500',
//     trainingDescription: 'This is the description for Training 1.',
//     logoUrl: 'training1.jpg',
//   },
//   {
//     id: 2,
//     trainingName: 'Training 2',
//     trainingPeriod: '2 months',
//     trainingCost: '$400',
//     trainingDescription: 'This is the description for Training 2.',
//     logoUrl: 'training2.jpg',
//   },
//   {
//     id: 3,
//     trainingName: 'Training 3',
//     trainingPeriod: '4 months',
//     trainingCost: '$600',
//     trainingDescription: 'This is the description for Training 3.',
//     logoUrl: 'training3.jpg',
//   },
// ];


const Entrepreneurship = () => {
  const [trainings] = useState([
    {
      id: 1,
      trainingName: 'Training 1',
      trainingPeriod: '3 months',
      trainingCost: '$500',
      trainingPartner: 'Udemy'
    },
    {
      id: 2,
      trainingName: 'Training 2',
      trainingPeriod: '2 months',
      trainingCost: '$400',
      trainingPartner: 'Udemy'
    },
    {
      id: 3,
      trainingName: 'Training 3',
      trainingPeriod: '4 months',
      trainingCost: '$600',
      trainingPartner: 'Udemy'
    },
    // Add more training data as needed
  ]);
  
  const [filteredTrainings, setFilteredTrainings] = useState(trainings);
  
  const handleSearch = (query) => {
    const filtered = trainings.filter((training) =>
      training.trainingName.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredTrainings(filtered);
  };
  return (
    <div>
      <Navbar />

      <div className='flex flex-col items-center justify-center bg-gradient-to-r from-pink-400 to-orange-400 py-12 font-semibold text-white text-4xl sm:py-20 md:py-32 lg:py-36'>
        <IoBusinessSharp />
        <p className='mt-4'>ENTREPRENEURSHIP</p>
      </div>

      <SearchBar onSearch={handleSearch}/>

      <div className='container mx-50'>
        <CardList trainings={filteredTrainings} />
      </div>
    </div>
  );
};

export default Entrepreneurship;
