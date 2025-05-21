import React, { useEffect } from 'react';
import FormList from './FormList';
import { useFormContext } from './FormContext';
import { fetchForms } from './api';
import './styles/App.css';

const App: React.FC = () => {
  const { setForms } = useFormContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchForms();
        setForms(data.nodes);
      } catch (error) {
        console.error('Error fetching forms:', error);
      }
    };

    fetchData();
  }, [setForms]);

  return (
    <div className="App">
      <h1>Journey Builder React App</h1>
      <FormList />
    </div>
  );
};

export default App;
