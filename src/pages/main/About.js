import './About.css';
import myImage from '../../images/welcome.png';

function About({text})
{
    return(
        <div className='wrap' style={{textAlign:"center", padding:"0 20px", fontFamily:'Poppins'}}>
            <h2><img src={myImage} alt="Welcome" className="about-image" />{text.title}</h2>
            <p>{text.description}</p>
            {/* <h1><img src={myImage} alt="Welcome" className="about-image" /></h1> */}
        </div>
    )
}
export default About;