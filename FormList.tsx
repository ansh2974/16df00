import React from 'react';
import { useFormContext } from '../context/FormContext';
import FieldMapping from './FieldMapping';

const FormList: React.FC = () => {
  const { forms } = useFormContext();

  if (!forms.length) return <p>Loading forms...</p>;

  return (
    <div>
      {forms.map((form) => (
        <div key={form.id} className="form-item">
          <h3>{form.data.name}</h3>
          <FieldMapping formId={form.id} fields={Object.keys(form.data.input_mapping || {})} />
        </div>
      ))}
    </div>
  );
};

export default FormList;
