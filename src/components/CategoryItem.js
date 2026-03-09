import './CategoryItem.css';

function CategoryItem(props)
{
    const {strCategory, strCategoryThumb, strCategoryDescription} = props;
    return(
        <div className='card'>
            <img src={strCategoryThumb} alt={strCategory} />
            <h2>{strCategory}</h2>
            <p>{strCategory}</p>
            <div className='card-action'>
                <a href='#1'>Watch category</a>
            </div>
        </div>
    )
}
export default CategoryItem;