import './CategoryItem.css';

function CategoryItem(props)
{
    const {strCategory, strCategoryThumb, strCategoryDescription} = props;
    return(
        <div className='card' style={{backgroundColor: "#F0FFF0"}}>
            <img src={strCategoryThumb} alt={strCategory} />
            <h2>{strCategory}</h2>
            <p>{strCategoryDescription}</p>
            <div className='card-action'>
                <a href='#1'>Watch category</a>
            </div>
        </div>
    )
}
export default CategoryItem;