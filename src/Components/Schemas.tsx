import React from 'react';

interface SchemaDropdownProps {
  schemaOptions: { label: string; value: string }[];
  selectedSchemas: string[];
  setSelectOneSchema: React.Dispatch<React.SetStateAction<string>>;
}

const SchemaDropdown: React.FC<SchemaDropdownProps> = ({
  schemaOptions,
  selectedSchemas,
  setSelectOneSchema,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectOneSchema(e.target.value);
  };

  return (
    <div className="schema-dropdown">
      <select onChange={handleChange} >
        <option value="">Select schema</option>
        {schemaOptions.map((option) =>
           (!selectedSchemas.includes(option.value) ?
           <option key={option.value} value={option.value}>
           {option.label}
         </option>: null)
        )}
      </select>
    </div>
  );
};

export default SchemaDropdown;
