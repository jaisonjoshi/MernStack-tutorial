import { Link } from 'react-router-dom';
import './home.css';


const Home = () => {
    return(
        <div className='home'>

            <div className="header">
                <h1>The best Tours in just 3 Clicks</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, magni alias id atque eum similique quaerat dolores sequi. Aliquam cumque dicta excepturi delectus at quas molestiae cum reprehenderit, quis molestias.</p>
                <div>
                <Link to="/packages"><button className='btn-header'>Explore</button></Link>
                </div>
            </div>


        </div>
    )
}


export default Home