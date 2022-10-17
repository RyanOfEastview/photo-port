import React from 'react'
import coverImage from "../../assets/cover/profile.jpg";

function About() {

  return (
    <section className="my-5" >
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "40%" }} alt="cover" />
      <div className="my-2">
        <p>
        I'm an aspiring web developer with ten years of administrative experience in the Federal Government.
        </p>
      </div>
    </section>
  )
}

export default About