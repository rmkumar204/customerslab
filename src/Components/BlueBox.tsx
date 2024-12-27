import React from 'react';
import { SchemaOption } from './types/Schema';

interface BlueBoxProps {
  selectedSchemas: string[];
  setSelectedSchemas: React.Dispatch<React.SetStateAction<string[]>>;
  schemaOptions: SchemaOption[];
}

const BlueBox: React.FC<BlueBoxProps> = ({
  selectedSchemas,
  setSelectedSchemas,
  schemaOptions,
}) => {
  const handleSchemaChange = (index: number, value: string) => {
   
    const updatedSchemas = [...selectedSchemas];
    updatedSchemas[index] = value;
    setSelectedSchemas([...new Set(updatedSchemas)]);
  };
 
  const getAvailableOptions = (currentValue: string): SchemaOption[] => {
    return schemaOptions.filter(
      option =>
        !selectedSchemas.includes(option.value) || option.value === currentValue
    );
  };

  const hanldeClick=(schema:string)=>{
    setSelectedSchemas(selectedSchemas.filter((item)=> item != schema))
  }
  return (
    <div className={`blue-box w-100 mb-4 ${selectedSchemas.length > 0 ? 'border border-2 border-primary-subtle':''} p-3 `}>
      {selectedSchemas.map((schema, index) => (
        <div className='mb-2 d-flex gap-2' key={index}>
          <select
            className='form-select'
            value={schema}
            onChange={e => handleSchemaChange(index, e.target.value)}
          >
            {getAvailableOptions(schema).map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <button className='btn  btn-outline-primary float-end' onClick={()=>hanldeClick(schema)}>-</button>
        </div>
      ))}
    </div>
  );
};

export default BlueBox;
