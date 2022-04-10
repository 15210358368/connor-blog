import React from "react";

const About = () =>{
    return(
        <div className="mb-20">
            <h1
            className="sm:text-4xl text-2xl font-bold mt-6 mb-6 text-gray-900">
                About Me
                </h1>
                <img className = "mb-4 w-2/5 h-2/5 text-center"src = "../../images/connor.jpeg"></img>
            <p className="mx-auto leading-relaxed text-base mb-4">A passionate software engineer, a quick learner, and a reliable team player.  With strong ownership during working, I have achieved excellent results in the past three years. When I worked in an online learning company, I was fascinated by the new technologies and how the techniques changed people's learning methods and experiences. So, after I earned my first master's degree, I decided to come back to the techniques field and try to make some changes.
            </p>
            <p className="mx-auto leading-relaxed text-base mb-4">Currently, I am learning at Northeastern University in a Master of Science in Information System program focus on web and mobile development. Before this, I worked in the Online education industry and did product research, functions planning, and UI layout design. And I also assisted during development using HTML/CSS/JS and Alibaba Cloud deployment.  I gained so much experience from the process of product development from 0 to 1.
            </p>
            <p className="mx-auto leading-relaxed text-base mb-4">Now I am actively looking for a Co-op or Internship in related software engineer positions. I hope to utilize my former experience and abilities to contribute and achieve more in the coming new teams.
</p>
<p className="mx-auto leading-relaxed text-base mb-4">Technical Skills:

Front-End: HTML, CSS, JavaScript, React, Angular, Bootstrap
Back-End: Node.JS, Express, MongoDB, Java, AWS, SpringBoot
Data: Python(NumPy, Pandas, Matplotlib, sklearn), MySQL
Others: Git, Unity3D(C#), Axure, Modao, Tableau</p>
            
        </div>
    )
}

export default About 