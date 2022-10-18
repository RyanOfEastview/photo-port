import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">Who Am I?</h1>
			</div>
			<div className="center">
				<img
					src={require('../../assets/images/profile.jpg')}
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
				<p>
          I'm an aspiring web developer with ten years of 
          administrative experience in the Federal Government.
          I have a certification in Business Data Analysis from
          Cornell University and I am currently working on a Web
          Development Coding Bootcamp with Carleton
          University. I have ten years of administrative 
          experience with the Federal Government in an an 
          Emergency Management and Business Continuity Officer 
          role.
          
				</p>
				<p>
          I am searching for an opportunity as a full-stack web 
          developer where I can use my recently obtained skills 
          to bring positive change to a company that I deem a 
          good fit for my values and skillset.
				</p>
			</div>
		</section>
	);
}

export default About;