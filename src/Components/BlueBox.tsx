import React from 'react';
import { SchemaOption } from '../App';

interface BlueBoxProps {
    selectedSchemas: string[];
    availableSchemas: SchemaOption[]; // Expecting the availableSchemas prop here
}

const BlueBox: React.FC<BlueBoxProps> = ({ selectedSchemas, availableSchemas }) => {
    // const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    //     console.log(event)
    //     const selectedValue = event.target.value;
    //     console.log(selectedValue); // Use the selected value here
    //   };
    const SchemaDropDowns = ({ schema }: { schema: string, selectedSchemas:string[] }) => {
        // const filtered:string[]=selectedSchemas.filter((item:string)=>item !=schema);
        return (
            <select >
                <option value={schema}>{schema}</option>
                {availableSchemas.filter((SelSchema)=>!selectedSchemas.includes(SelSchema.value)).map((item, index) => (
                    <option key={index} value={item.value}>{item.label}</option> 
                ))}
            </select>
        );
    };

    return (
        <div className='mb-3'>
            {selectedSchemas.map((schema, index) => (
                <div className='m-2' key={index}>
                    <SchemaDropDowns schema={schema} selectedSchemas={selectedSchemas}/>
                </div>
            ))}
        </div>
    );
};

export default BlueBox;