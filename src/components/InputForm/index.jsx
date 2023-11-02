import React from 'react';

const InputForm = ({ value, onChange }) => {
  return (
    <div style={{ marginBottom: '20px', textAlign: 'center' }}>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter text..."
        style={{ width: '300px', fontSize: '16px' }}
      />
    </div>
  );
};

export default InputForm;
