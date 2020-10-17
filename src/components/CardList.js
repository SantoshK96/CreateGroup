import React from 'react';
import Card from './Card';

const CardList = ({ UserImages }) => {
    return (
        <div>
            {
                UserImages.map((user, i) => {
                    return (
                        <Card
                            key={i}
                            id={UserImages[i].id}
                            image={UserImages[i].image}
                            name={UserImages[i].name}
                            price={UserImages[i].price}
                            description={UserImages[i].description}
                            category={UserImages[i].category}
                            label={UserImages[i].label}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;