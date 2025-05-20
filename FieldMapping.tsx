import React, { useState } from 'react';
import PrefillModal from './PrefillModal';

interface FieldMappingProps {
  formId: string;
  fields: string[];
}

const FieldMapping: React.FC<FieldMappingProps> = ({ formId, fields }) => {
  const [mappings, setMappings] = useState<{ [key: string]: string }>({});
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentField, setCurrentField] = useState<string | null>(null);

  const handleAddMapping = (field: string) => {
    setCurrentField(field);
    setIsModalOpen(true);
  };

  const handleSaveMapping = (source: string) => {
    if (currentField) {
      setMappings((prev) => ({ ...prev, [currentField]: source }));
    }
  };

  const handleClearMapping = (field: string) => {
    setMappings((prev) => {
      const updated = { ...prev };
      delete updated[field];
      return updated;
    });
  };

  return (
    <div>
      {fields.map((field) => (
        <div key={field} className="field-item">
          <span>{field}</span>
          {mappings[field] ? (
            <>
              <span>Prefilled from: {mappings[field]}</span>
              <button onClick={() => handleClearMapping(field)}>Clear</button>
            </>
          ) : (
            <button onClick={() => handleAddMapping(field)}>Add Prefill</button>
          )}
        </div>
      ))}
      {isModalOpen && (
        <PrefillModal
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveMapping}
          availableSources={['Global Source 1', 'Global Source 2']}
        />
      )}
    </div>
  );
};

export default FieldMapping;
