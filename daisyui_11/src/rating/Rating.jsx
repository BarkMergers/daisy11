//import React from 'React';

function Rating({ value, onChange, stars }) {

    const updateValue = function (value) {

        if (typeof onChange === 'function')
            onChange(value);
    }

    stars = stars || 5;
    value = value || Math.ceil(stars / 2);
    const starList = Array.from(Array(stars).keys())

    return (

        <div className="rating">
            {
                starList.map((i, index) => {
                    return <input key={index} type="radio" onClick={() => updateValue(i + 1)} name={"rating-1"} className="mask mask-star" defaultChecked={i + 1 == value ? true : false} aria-label={(i + 1) + " star"} />
                })
            }

        </div>
    );
}
export default Rating;
