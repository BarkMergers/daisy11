//import React from 'React';

function Rating({value, onChange, stars}) {

    const updateValue = function (value) {

        if (typeof onChange === 'function')
            onChange(value);
    }

    stars = stars || 5;
    value = value || Math.ceil(stars / 2); 
    const starList = Array.from(Array(stars).keys())

    //updateValue(value);


    return (
    
        <div className="rating">
            {
                starList.map((i) => {
                    return <input type="radio" onClick={() => updateValue(i + 1)} name={"rating-1"} className="mask mask-star" defaultChecked={i + 1 == value ? true : false}  aria-label={(i + 1) + " star"}  />
                })
            }
            
        </div>
    );


}

export default Rating;


//<input type="radio" onClick={() => updateValue(1)} name="rating-1" className="mask mask-star" aria-label="1 star" />
//            <input type="radio" onChange={() => updateValue(2) } name="rating-1" className="mask mask-star" aria-label="2 star" defaultChecked />
//            <input type="radio" onChange={() => updateValue(3) } name="rating-1" className="mask mask-star" aria-label="3 star" />
//            <input type="radio" onChange={() => updateValue(4) } name="rating-1" className="mask mask-star" aria-label="4 star" />
//            <input type="radio" onChange={() => updateValue(5) } name="rating-1" className="mask mask-star" aria-label="5 star" />