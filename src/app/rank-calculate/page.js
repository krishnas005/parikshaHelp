import React from 'react';

const generateRandomID = () => {
  return Math.floor(1000 + Math.random() * 9000); // Generates a random 4-digit number
};

const indianMaleNames = [
  "Aarav",
  "Vihaan",
  "Advik",
  "Aryan",
  "Reyansh",
  "Arnav",
  "Shivansh",
  "Vivaan",
  "Aditya",
  "Kabir",
  "Sai",
  "Ayaan",
  "Krishna",
  "Ishaan",
  "Atharva",
  "Rudra",
  "Aarush",
  "Shaurya",
  "Yash",
  "Mohammed",
  "Rohan",
  "Arjun",
  "Ritvik",
  "Veer",
  "Ranveer",
  "Siddharth",
  "Dhruv",
  "Aryan",
  "Arush",
  "Vihaan",
  "Aadi",
  "Ahaan",
  "Darsh",
  "Daksh",
  "Ansh",
  "Aaryan",
  "Shreyansh",
  "Mohammad",
  "Pranav",
  "Atharv",
  "Rishabh",
  "Kian",
  "Shaurya",
  "Parth",
  "Vedant",
  "Kabir",
  "Aarav",
  "Krishaan",
  "Hridaan",
  "Dhruv",
  "Aarush",
  "Krish",
  "Rian",
  "Rudransh",
  "Abeer",
  "Arjun",
  "Aarush",
  "Arham",
  "Advaith",
  "Vihaan",
  "Reyansh"
];

const dummyData = indianMaleNames.map((name, index) => ({
  id: index + 1,
  registrationID: generateRandomID(),
  name: name,
  rank: `Rank ${index + 1}`
}));

const Table = () => {
  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <h2 className="text-2xl font-semibold py-4 pt-4 text-center">Candidates ranks:</h2>
      <p className="text-lg mb-4 text-center">Note: List is created carefully by taking conisderations various parameters to bring out fairer methods to conduct recruitment process </p>
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-gray-200">
          <thead>
            <tr>
              <th className="border px-4 py-2 bg-gray-300">Registration ID</th>
              <th className="border px-4 py-2 bg-gray-300">Name</th>
              <th className="border px-4 py-2 bg-gray-300">Rank</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((data) => (
              <tr key={data.id}>
                <td className="border px-4 py-2">{data.registrationID}</td>
                <td className="border px-4 py-2">{data.name}</td>
                <td className="border px-4 py-2">{data.rank}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
