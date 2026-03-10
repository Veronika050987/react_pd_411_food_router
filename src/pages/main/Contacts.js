import './Contacts.css';

function Contacts()
{
    const text=
    {
        title: "Contact",
        description: "Email: thedatadb@gmail.com"
    }
    return(
        <div className='wrap' style={{backgroundColor: "#e6f7ff", minHeight: "100vh", 
        width: "100%", padding: "20px", boxSizing: "border-box"}}>
            <h2>☏ Contacts</h2>
            <h3>{text.description}</h3>
        </div>
    )
}
export default Contacts;