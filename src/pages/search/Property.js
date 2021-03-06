import React from 'react';
import PropTypes from 'prop-types';

function Property(props) {
    const { data } = props;
    return (
        <article>
            <img scr ="./images/result01.jpg" className="property__image" alt="house" />
            <div className="property__details">
                <p className="property__details__header">
                    Country: {data.country}
                </p>
                <p className="property__details__header">
                    City: {data.city}
                </p>
                <p className="property__details__discription">
                    {data.description}
                </p>
                <p className="property__details__description">
                    Address: {data.address}
                </p>
                <p className="property__details__description">
                    Owner: {data.user}
                </p>
            </div>
        </article>
    )
}

export { Property };

Property.proTypes = {
    data: PropTypes.object.isRequired
}
