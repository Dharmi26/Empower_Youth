import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SectorCards/SearchBar';
import CardList from '../components/SectorCards/CardList';

const AllTrainings = () => {
  const [trainings] = useState([
    {
      id: 1,
      trainingName: 'Training 1',
      trainingPeriod: '3 months',
      trainingCost: '$500',
      trainingPartner: 'Udemy',
      sector: 'Government',
      background: 'Technical',
      cost: 'Paid',
    },
    {
      id: 2,
      trainingName: 'Training 2',
      trainingPeriod: '2 months',
      trainingCost: '$400',
      trainingPartner: 'Udemy',
      sector: 'Private',
      background: 'Non-Technical',
      cost: 'Unpaid',
    },
    {
      id: 3,
      trainingName: 'Training 3',
      trainingPeriod: '4 months',
      trainingCost: '$600',
      trainingPartner: 'Udemy',
      sector: 'Entrepreneurship',
      background: 'Art',
      cost: 'Paid',
    },
    // Add more training data as needed
  ]);

  const [filteredTrainings, setFilteredTrainings] = useState(trainings);

  const [selectedSector, setSelectedSector] = useState('');
  const [selectedBackground, setSelectedBackground] = useState('');
  const [selectedCost, setSelectedCost] = useState('');

  const handleSearch = (query) => {
    const filtered = trainings.filter((training) =>
      training.trainingName.toLowerCase().includes(query.toLowerCase())
    );

    if (selectedSector) {
      filtered = filtered.filter((training) => training.sector === selectedSector);
    }
    if (selectedBackground) {
      filtered = filtered.filter((training) => training.background === selectedBackground);
    }
    if (selectedCost) {
      filtered = filtered.filter((training) => training.cost === selectedCost);
    }

    setFilteredTrainings(filtered);
  };

  return (
    <div>
      <Navbar />

      <div className='flex flex-col items-center justify-center bg-gradient-to-r from-pink-400 to-orange-400 py-12 font-semibold text-white text-4xl sm:py-20 md:py-32 lg:py-36'>
        <p className='mt-4'>Explore your career,</p>
        <p className='mt-4'>Explore the trainings!</p>
      </div>

      <SearchBar onSearch={handleSearch} />

      <div className='container mx-50'>
        <div className='flex gap-6 items-center justify-center'>
          {/* Filter for Sector */}
          <select
            className='mt-4 p-2 border border-gray-300 rounded'
            onChange={(e) => setSelectedSector(e.target.value)}
          >
            <option value=''>Select Sector</option>
            <option value='Government'>Government</option>
            <option value='Private'>Private</option>
            <option value='Entrepreneurship'>Entrepreneurship</option>
          </select>

          {/* Filter for Background */}
          <select
            className='mt-4 p-2 border border-gray-300 rounded'
            onChange={(e) => setSelectedBackground(e.target.value)}
          >
            <option value=''>Select Background</option>
            <option value='Technical'>Technical</option>
            <option value='Non-Technical'>Non-Technical</option>
            <option value='Art'>Art</option>
          </select>

          {/* Filter for Cost */}
          <select
            className='mt-4 p-2 border border-gray-300 rounded'
            onChange={(e) => setSelectedCost(e.target.value)}
          >
            <option value=''>Select Cost</option>
            <option value='Paid'>Paid</option>
            <option value='Unpaid'>Unpaid</option>
          </select>
        </div>
        <CardList trainings={filteredTrainings} />
      </div>
    </div>
  );
};

export default AllTrainings;
