import React,{ useState } from 'react'
import {Props} from './types'
import './input.css'

export default (props:Props) => {
    const data = props.data;
    const name = props.name;
    const ph = props.placeholder;
    const id = props.id;
    const [selectedData,setSelectedData] = useState('')
    
  const handleChange = (event: any) => {
    setSelectedData(event.target.value);
    if (props.onChange) props.onChange(event);
  }

    let options = data.map(data =>(
        <option key={data.id} value={data.id}>
            {data.name}
        </option>
    ))
    return(
        <div className='input-container'>
            <select
            id = {id}
            name={name}
            defaultValue='selected'
            onChange={handleChange}>
                <option disabled value='selected'>Seleccionar {ph}</option>
                {options}
            </select>
        </div>
    )
}