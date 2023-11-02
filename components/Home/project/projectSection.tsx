import React from 'react'
import { ProjectImage } from './ProjectImage'

const ProjectSection = () => {
  return (
    <div className="flex relative overflow-x-scroll">
    {["/home/banner.jpg", "/home/banner1.jpg", "/home/banner2.jpg"].map(
      (item, index) => (
        <ProjectImage key={index} src={item} />
      )
    )}
  </div>  )
}

export default ProjectSection