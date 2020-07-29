import React,{useState} from 'react'
import InpuText from '../../components/form/InpuText'
import InputSelect from '../../components/form/InputSelect'

const Home =() =>{
    const [formData,setFormData] = useState({})

    const handleChange = (e:any) =>{
        e.preventDefault()
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e:any) =>{
        e.preventDefault()
        console.log(formData)
    }
    return(
        <>
        <div style={{width: '20%'}}>
            <form onSubmit={handleSubmit}>
                <InpuText name='input1' type='text' placeholder='este es el primer test' id='input1' required='true' onChange={handleChange}/>
                <InputSelect id='select' placeholder="xd" name="xd" data={[{id:0,name:'asd'},{id:1,name:'asjhd'}]} onChange={handleChange}/>
                <input type="submit" value="as"/>
            </form>
        </div>
        </>
    )
}
export default Home;