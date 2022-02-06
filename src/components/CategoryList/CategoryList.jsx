import React from 'react';
import Category from '../Category/Category';

class CategoryList extends React.Component {

    render() {
        const {
            handlerGetJokeByCategory,
            categories,
            currentCategory,
            isActive,
            cb } = this.props;

        return (
            <div className='col-3 my-2'>
                <div className='list-group text-center'>
                    {categories.map((item, index, array) => {
                        return cb(index, array, <Category
                            handlerGetJokeByCategory={handlerGetJokeByCategory}
                            key={index}
                            value={item}
                            isActive={isActive}
                            currentCategory={currentCategory}
                        />)
                    })}
                </div>
            </div>
        )
    }
}

export default CategoryList;