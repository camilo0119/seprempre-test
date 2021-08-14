import React from 'react'

const FeaturedIcon = ({data}) => {
    return (
        <div className="icons-feature">
            <img src={data.url} alt={data.title}/>
            <p className="title">{data.title}</p>
        </div>
    )
}

export default FeaturedIcon;