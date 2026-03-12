import { useEffect, useState } from 'react';
import './Category.css';
import { getFilteredCategory } from '../api';
import { useNavigate, useParams } from 'react-router-dom';
import MealList from './MealList';

function Category()
{
    const {name} = useParams();
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true); // Добавьте это
    const navigate = useNavigate();
    let goBack = () => navigate(-1);

    useEffect(() => {
        setLoading(true); // Включаем загрузку
        getFilteredCategory(name).then(data => {
            setMeals(data.meals || []);
            setLoading(false); // Выключаем загрузку
        });
    }, [name]);

    if (loading) return <p>Загрузка...</p>; // Показываем текст, пока данные грузятся

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