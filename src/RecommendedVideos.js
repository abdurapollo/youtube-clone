import React from 'react'
import './RecommendedVideos.css'
import VideoCard from './VideoCard'

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
             <h1>Recommended</h1>
             <VideoCard />
        </div>
    )
}

export default RecommendedVideos
