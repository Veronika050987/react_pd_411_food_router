import { useEffect, useState } from 'react';
import './Category.css';
import { getFilteredCategory } from '../api';
import { useNavigate, useParams } from 'react-router-dom';
import MealList from './MealList';

function Category()
{
    const {name} = useParams();
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    let goBack = () => navigate(-1);

    useEffect(() => {
        setLoading(true); // Включаем загрузку
        getFilteredCategory(name).then(data => {
            setMeals(data.meals || []);
            setLoading(false); // Выключаем загрузку
        });
    }, [name]);

    if (loading) return( 
    <div>
     <p style={{color:'#006400', fontSize: '55px', fontWeight: 'bold'}}>(๑ᵔ⤙ᵔ๑)</p>
     <p style={{color:'#006400', fontSize: '30px'}}>Preparing recipes for you...</p>
    </div>
    )
    

    return (
        <div className='wrap'>
            <MealList meals={meals} />
            <button className='btn' onClick={goBack}>Go back</button>
        </div>
    );
    // const {name} = useParams();
    // const [meals, setMeals] = useState([]);
    // const navigate = useNavigate();
    // let goBack = () => navigate(-1);
    // useEffect
    // (
    //     () =>
    //     {
    //         getFilteredCategory(name).then(data => setMeals(data.meals));
    //     },[name]
    // );
    // return (
    //     <div className='wrap'>
    //         <MealList meals={meals} />
    //         <button className='btn' onClick={goBack}>Go back</button>
    //     </div>
            
    // )
}
export default Category;