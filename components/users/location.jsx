import React, { useState } from 'react';
import { statesData } from '@/utils/location';


const SelectStateLGA = ({input_style, formValues, setFormValues}) => {
  

  const changeHandler = (e) => {
    const { name, value } = e.target; 
    for (let stateName in statesData) {
        const stateObj = Object.keys(statesData[stateName])
        const foundState = statesData[stateName][stateObj].includes(value);
        if(foundState){
            setFormValues((prev)=>({
                ...prev,
                [name] : `${stateObj[0]}/${value}`
            }))
        }
    }
};

  return (
    <div>
      {/* Single select dropdown with optgroup */}
      <select
        value={formValues.location}
        name='location'
        onChange={changeHandler}
        className="w-1/2 p-2 border border-gray-300 bg-[#F4FDFF] outline-none"
      >
        <option className={input_style} value="">{formValues.location}</option>
        {statesData.map((stateObj, index) => {
          const stateName = Object.keys(stateObj)[0];
          const lgas = stateObj[stateName];
          
          return (
            <optgroup key={index} label={stateName}>
              {lgas.map((lga, i) => (
                <option key={i} value={lga}>{lga}</option>
              ))}
            </optgroup>
          );
        })}
      </select>
    </div>
  );
};

export default SelectStateLGA;
