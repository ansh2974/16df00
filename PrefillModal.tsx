import React, { useState } from 'react';

interface PrefillModalProps {
  onClose: () => void;
  onSave: (mapping: string) => void;
  availableSources: string[];
}

const PrefillModal: React.FC<PrefillModalProps> = ({ onClose, onSave, availableSources }) => {
  const [selectedSource, setSelectedSource] = useState<string>('');

  const handleSave = () => {
    onSave(selectedSource);
    onClose();
  };

  return (
    <div className="modal">
      <h3>Configure Prefill</h3>
      <select value={selectedSource} onChange={(e) => setSelectedSource(e.target.value)}>
        <option value="">Select a source</option>
        {availableSources.map((source) => (
          <option key={source} value={source}>
            {source}
          </option>
        ))}
      </select>
      <button onClick={handleSave} disabled={!selectedSource}>
        Save
      </button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default PrefillModal;
