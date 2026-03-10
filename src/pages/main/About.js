import './About.css';

function About({text})
{
    return(
        <div className='wrap' style={{textAlign:'center', padding:'20px 20px', 
        backgroundColor: "#FFF0F5", minHeight: "100vh", width: "100%", 
        boxSizing: "border-box"}}>
            <h2>{text.title}</h2>
            <p>{text.description}</p>
        </div>
    )
}
export default About;