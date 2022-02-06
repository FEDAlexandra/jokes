import React from 'react';

const Category = (props) => {
    const {
        value,
        handlerGetJokeByCategory,
        isActive,
        currentCategory } = props;

    return (
        <div
            onClick={handlerGetJokeByCategory}
            className={currentCategory === value
                ? isActive + ' list-group-item list-group-item-action '
                : 'list-group-item list-group-item-action '}>

            {value}
        </div>
    )
}

export default Category;