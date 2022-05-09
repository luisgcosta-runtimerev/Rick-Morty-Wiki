import React from 'react'

export default function FilterBtn({name, index, setPageNumber, task}) {
  return (
    <div>
        <style jsx='true'>
            {`

                .x:cheched + label{
                    background-color: #0b5ed7
                    color: white
                }
            
                input[type="radio"] {
                    display:none;
                }
            `}
        </style>
        <div className="form-check">
            <input 
            onClick={()=> {
                setPageNumber(1)
                task(name);
            }}
            className="form-check-input x"
            type="radio" 
            name={name} 
            id={`${name}-${index}`} />
                <label className="btn btn-outline-primary" htmlFor={`${name}-${index}`}>
                    {name}
                </label>
        </div>
    </div>
  )
}
