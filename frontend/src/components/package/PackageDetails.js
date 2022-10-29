import './package.css';

const PackageDetails = ({pack}) => {
    return(
        <div className='packageDetails'>
            <h3>{pack.title}</h3>
            <p>{pack.description}</p>
            <h4>{pack.price}</h4>
          

        </div>
    )
}

export default PackageDetails;