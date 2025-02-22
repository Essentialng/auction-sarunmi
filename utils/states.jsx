import { statesData } from '@/utils/location';


const States = ({inputStyle, formik}) => {
  return (
    <div>
      <select
        value={formik.values.state}
        name='state'
        className={`w-full ${inputStyle}`}
        onChange={formik.handleChange}
        required
      >
        {statesData.map((stateObj, index) => {
          const stateName = Object.keys(stateObj)[0];
          return (
              <option value={stateName}>{stateName}</option>
          
          );
        })}
      </select>
    </div>
  );
  
};

export default States;
