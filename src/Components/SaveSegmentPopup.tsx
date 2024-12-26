import React, { useState } from 'react';
import BlueBox from './BlueBox';
import { SchemaOption } from './types/Schema';

const schemaOptions: SchemaOption[] = [
  { label: 'First Name', value: 'first_name' },
  { label: 'Last Name', value: 'last_name' },
  { label: 'Gender', value: 'gender' },
  { label: 'Age', value: 'age' },
  { label: 'Account Name', value: 'account_name' },
  { label: 'City', value: 'city' },
  { label: 'State', value: 'state' }
];

interface SaveSegmentPopupProps {
  onClose: () => void;
}

const SaveSegmentPopup: React.FC<SaveSegmentPopupProps> = ({ onClose }) => {
  const [segmentName, setSegmentName] = useState<string>('');
  const [selectedSchemas, setSelectedSchemas] = useState<string[]>([]);
  const [currentSchema, setCurrentSchema] = useState<string>('');

  const handleAddSchema = () => {
    if (currentSchema && !selectedSchemas.includes(currentSchema)) {
      setSelectedSchemas([...selectedSchemas, currentSchema]);
      setCurrentSchema('');
    }
  };

  const handleSaveSegment = () => {
    const formattedData = {
      segment_name: segmentName,
      schemas: selectedSchemas.map(schema => ({
        label: schemaOptions.find(opt => opt.value === schema)?.label || '',
        value: schema
      }))
    };

    console.log('Saved Segment Data:', formattedData);
    onClose(); // Close offcanvas after save
  };

  const availableOptions = schemaOptions.filter(
    option => !selectedSchemas.includes(option.value)
  );

  return (
     <div className="offcanvas offcanvas-end show" tabIndex={-1}>
      <div className="offcanvas-header">
        <h3 className="offcanvas-title">Save Segment</h3>
        <button
          type="button"
          className="btn-close"
          onClick={onClose}
        ></button>
      </div>
      <div className="offcanvas-body">
          <div className='mb-5'>
          <label className='mb-3'>Enter the name of the segment</label>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Name of the segment"
              value={segmentName}
              onChange={e => setSegmentName(e.target.value)}
            />
          </div>
        <p className='mb-5'>To save your segment, you need to add the schemas to build the query</p>

         {/* Blue Box */}
         <BlueBox
          selectedSchemas={selectedSchemas}
          setSelectedSchemas={setSelectedSchemas}
          schemaOptions={schemaOptions}
        />

        <div className='p-3 '>
          <select
            className="form-select mb-2"
            value={currentSchema}
            onChange={e => setCurrentSchema(e.target.value)}
          >
            <option value="">Select Schema</option>
            {availableOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <button className="btn btn-primary mb-2" onClick={handleAddSchema}>
            + Add new schema
          </button>
        </div>

       

      </div>
        <div className="offcanvas-footer p-3 bg-light">
          <button className="btn text-white saveSegment me-2" onClick={handleSaveSegment}>
            Save Segment
          </button>
          <button className="btn text-danger bg-white"  onClick={onClose}>
            Close
          </button>
        </div>
    </div>
  );
};

export default SaveSegmentPopup;
