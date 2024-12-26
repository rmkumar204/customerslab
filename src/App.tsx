import { useState } from 'react';
import './App.css';
import SchemaDropdown from './Components/Schemas';
import BlueBox from './Components/BlueBox';

export interface SchemaOption {
    label: string;
    value: string;
}

export const schemaOptions: SchemaOption[] = [
    { label: 'First Name', value: 'First Name' },
    { label: 'Last Name', value: 'Last Name' },
    { label: 'Gender', value: 'Gender' },
    { label: 'Age', value: 'Age' },
    { label: 'Account Name', value: 'Account Name' },
    { label: 'City', value: 'City' },
    { label: 'State', value: 'State' },
];

function App() {
    const [segmentName, setSegmentName] = useState<string>('');
    const [selectedSchemas, setSelectedSchemas] = useState<string[]>([]);
    const [selectOneSchema, setSelectOneSchema] = useState<string>('');
    const [availableSchemas] = useState<SchemaOption[]>([...schemaOptions]);

    const handleSegmentNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSegmentName(e.target.value);
    };

    const handleAddNewSchema = () => {
      console.log('seelected',selectedSchemas)
      console.log('ss',selectOneSchema);
        if(selectOneSchema)
        setSelectedSchemas(prev => [...prev, selectOneSchema]);
        setSelectOneSchema('');
    };

    const handleSave = () => {
        // Save logic remains unchanged
        
    };

    return (
        <div className='vh-100'>
            <div className='w-100' style={{ backgroundColor: '#39AEBC' }}>
                <h3 className='p-4 text-white'>View Audience</h3>
            </div>
            <button className="btn btn-primary mt-5 ms-5" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Save Segment</button>
            <div className="offcanvas offcanvas-end" id="offcanvasRight" tabIndex={-1} aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header" style={{ backgroundColor: '#39AEBC' }}>
                    <h3 className="offcanvas-title text-white" id="offcanvasRightLabel">Save Segment</h3>
                </div>
                <div className="offcanvas-body">
                    <div className='mb-5'>
                        <label className='mb-3' htmlFor="segment">Enter the name of the segment</label>
                        <input className='form-control' type="text" value={segmentName} onChange={handleSegmentNameChange} placeholder="Segment Name" />
                    </div>

                    <p>To save your segment, you need to add the schemas to build the query</p>

                    <BlueBox selectedSchemas={selectedSchemas} availableSchemas={availableSchemas} />
                    <SchemaDropdown schemaOptions={availableSchemas} selectedSchemas={selectedSchemas} setSelectOneSchema={setSelectOneSchema} />
                    <button onClick={handleAddNewSchema}>+ Add New Schema</button>
                </div>
                <div className='container offcanvas-footer p-4 bg-light'>
                    <button className='btn me-3 text-white' style={{ background: '#41B494' }} onClick={handleSave}>Save segment</button>
                    <button className='btn text-danger' data-bs-dismiss="offcanvas" type='button' style={{ backgroundColor: 'white' }}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default App;