import React, { useRef, useEffect, useState } from "react"
import YouTube from "react-youtube"
import { Progress } from "@/components/ui/progress"
import { FaYoutube } from "react-icons/fa"

const StudyResource = ({video, grade, subject}) => {
  const playerRef = useRef(null)
  const [progress, setProgress] = useState(
    Number(localStorage.getItem("yt_progress")) || 0
  )
  const [channel, setChannel] = useState("")
  const [title, setTitle] = useState("")

  // track progress
  useEffect(() => {
    const interval = setInterval(() => {
      if (playerRef.current) {
        const currentTime = playerRef.current.getCurrentTime()
        const duration = playerRef.current.getDuration()

        if (duration > 0) {
          const percent = Math.round((currentTime / duration) * 100)
          setProgress(percent)
          localStorage.setItem("yt_progress", percent.toString())
        }
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const opts = {
    height: "200",
    width: "100%",
    playerVars: { 
      autoplay: 0,
      modestbranding: 1,   
      rel: 0,              
    },
  }

  return (
    <div className="w-65">
      {/* Video Preview */}
      <div className="w-full h-40 bg-black rounded-2xl overflow-hidden">
        <YouTube
          videoId={video}
          opts={opts}
          onReady={(event) => {
            playerRef.current = event.target
            const videoData = event.target.getVideoData()
            setChannel(videoData.author) 
            setTitle(videoData.title)   
          }}
          className="w-full h-full"
        />
      </div>

      {/* Card Body */}
      <div className="mt-4">
        {/* Category Badge */}
        <span className="inline-flex items-center text-xs font-medium px-2 py-1 rounded-md bg-purple-100 text-purple-600 mb-2">
          <span className="mr-1 text-sm">{"</>"}</span> {subject}
        </span>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
           Grade {grade + subject}
        </h3>

        {/* Progress bar */}
        <div className="w-full mb-3">
          <Progress value={progress} className="h-1.5 [&>div]:bg-purple-500" />
        </div>

        {/* Channel Info */}
        <div className="flex items-center gap-2">
          <FaYoutube className="text-red-600 text-xl" />
          <div>
            <p className="text-sm font-semibold text-gray-900">
              {channel || 'Loading...'}
            </p>
            <p className="text-xs text-gray-500">{title}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudyResource
