import React from 'react'

const GenderBox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className='flex'>
      <div className="form-control">
  <label className="label cursor-pointer gap-2">
    <span className="label-text">Male</span>
    <input type="radio" name="radio-10" className="radio checked:bg-blue-500 border-slate-900" checked={selectedGender === "male"}
						onChange={() => onCheckboxChange("male")}/>
  </label>
</div>
<div className="form-control">
  <label className={'label cursor-pointer gap-2 ${selectedGender === "female" ? "selected" : ""}'}>
    <span className="label-text">Female</span>
    <input type="radio" name="radio-10" className="radio checked:bg-blue-500  border-slate-900"  checked={selectedGender === "female"}
						onChange={() => onCheckboxChange("female")} />
  </label>
</div>
    </div>
  )
}

export default GenderBox