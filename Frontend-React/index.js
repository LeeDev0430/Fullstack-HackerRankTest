import React from 'react';

function Dropdown({ options, labelText, onChange }) {
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
  };

  return (
    <div className="elementSet">
      <select data-testid="dropdown" onChange={handleSelectChange}>
        {/* Do not remove this default option as this is needed in testing */}
        <option value={labelText} key={labelText} disabled>
          {labelText}
        </option>
        {options.map((option, index) => (
          <option value={option} key={index}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
