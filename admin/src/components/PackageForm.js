import { useState } from 'react';
import './packageform.css';


const PackageForm = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e)=> {
        e.preventDefault();

        const workout = {title, description, price};

        const response = await fetch('/api/packages', {
            method: 'post',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json();

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setError(null);
            setTitle('')
            setDescription('')
            setPrice()
            console.log("new package added")
        }
    }

    return(
        <div className="packageform">
            <h3>Add a new Package</h3>
            <form onSubmit={handleSubmit}>
                <label>Package Title</label>
                <input type="text" onChange={(e) => setTitle(e.target.value) } value={title}/>
                <label>Package Description</label>
                <input type="text" onChange={(e)=> setDescription(e.target.value)} value={description}/>
                <label>Package price</label>
                <input type="number" onChange={(e)=> setPrice(e.target.value)} value={price}/>
                <button>Add package</button>

                {error && <div>{error}</div>}
            </form>
        </div>
    )
}

export default PackageForm;