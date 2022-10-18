import React from 'react';
// import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'Run Buddy',
			description:
				'****ADD DESCRIPTION*****',
			image: 'runBuddy.jpg',
			technologies: [
				'HTML/CSS',
				'JavaScript',
			],
			github: 'https://ryanofeastview.github.io/run-buddy/',
		},
		{
			name: 'Group4 Live Music Finder',
			description:
                '****ADD DESCRIPTION*****',
			image: 'group4music.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
			],
			github: 'https://github.com/RyanOfEastview/group4-music',
			deployed: 'https://ryanofeastview.github.io/group4-music/',
		},
		{
			name: 'Flash Beats',
			description:
                '****ADD DESCRIPTION*****',
			image: 'weatherDashboard.jpg',
			technologies: ['HTML/CSS', 'JavaScript', 'jQuery'],
			github: 'https://github.com/RyanOfEastview/weather-dashboard',
			deployed: 'https://ryanofeastview.github.io/weather-dashboard/',
		},
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
                    <li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
				</ul>				
			</div>
		</section>
	);
}

export default Portfolio;