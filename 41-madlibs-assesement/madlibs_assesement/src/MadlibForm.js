import {useState} from 'react'

const MadlibForm = () => {
    const [formData, setFormData] = useState({
          noun: "",
          noun2: "",
          adjective: "",
          color: ""
    });

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(formData => ({
          ...formData,
          [name]: value
        }));
      };

    return (
        <div>
            <h1>Madlibs!</h1>
            <input 
                value={formData.noun}
                onChange={handleChange} 
                name='noun' 
                placeholder='noun'>
             </input>
            <br></br>
            <input 
                value={formData.noun2} 
                onChange={handleChange}
                name='noun2'
                placeholder='noun2'>    
            </input>
            <br></br>
            <input 
                value={formData.adjective} 
                onChange={handleChange} 
                name='adjective' 
                placeholder='adjective'>
            </input>
            <br></br>
            <input 
                value={formData.color} 
                onChange={handleChange} 
                name='color' 
                placeholder='color'>
             </input>
            <br></br>
            <button>Get Story</button>
        </div>
    )
}

export default MadlibForm;