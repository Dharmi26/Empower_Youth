import React from 'react';

const Card = ({ training }) => {
  return (
    <div className="p-4 mb-4 w-full md:w-1/2 lg:w-1/3">
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold">{training.trainingName}</h2>
        <p className="text-gray-600 font-light text-sm mb-2">{training.trainingPartner}</p>
        <p className="text-gray-600 mb-2">Cost: {training.trainingCost}</p>
        <p className="text-gray-600 mb-2">Period: {training.trainingPeriod}</p>
      </div>
    </div>
  );
};

const CardList = ({trainings}) => {
  return (
    <div className="flex flex-wrap justify-center text-center m-4">
      {trainings.map((training) => (
        <Card key={training.id} training={training} />
      ))}
    </div>
  );
};

export default CardList;
