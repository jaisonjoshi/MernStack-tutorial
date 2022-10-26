import './packages.css';
import {useState, useEffect} from 'react';
import PackageDetails from '../components/package/PackageDetails';


const Packagespage = () => {
    const [packages, setPackages] = useState(null);
    useEffect(() => {
        const fetchPackages = async () => {
            const response = await fetch('/api/packages');
            const json = await response.json();


            if(response.ok){
                setPackages(json);
            }
        }

        fetchPackages();
    }, [])

    return(
        <div className="packages">
            {packages && packages.map(pack => (
                <PackageDetails pack={pack} key={pack._id} />
            ))}
        </div>
    )
}


export default Packagespage;