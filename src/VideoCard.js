import React from 'react'

function VideoCard({ image, title, channel, views, timestanp, channelImage }) {
    return (
        <div className="videoCard">
            <img src={ image } alt="" />
            <div className="videoCard__info">
                <Avatar 
                  className="videoCard__avatar"
                  alt={channel}
                  src={channelImage}
                />
                <div className="video__text">
                  <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} . {timestamp}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
