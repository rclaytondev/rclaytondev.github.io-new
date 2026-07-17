"use client";

import { ProjectData, PROJECTS } from "./projects";

import "../stylesheets/global.css";
import "../stylesheets/click-effects.css";
import "../stylesheets/scrollbar.css";
import "../stylesheets/style.css";

import "../stylesheets/default-layout.css";
import "../stylesheets/wide-layout.css";
import { useState } from "react";
import classNames from "classnames";


type ProjectProps = ProjectData & {
	selected: boolean,
	onClick: () => void,
	lightBackground: boolean
};

function Project({ id, title, description, button, selected, lightBackground, image, onClick }: ProjectProps) {
	const imageStyle = { backgroundImage: `url(${image.src})` };
	const containerClass = classNames("project", {
		"selected": selected,
		"light-background": lightBackground
	});
	return (
		<article id={id} onClick={onClick} className={containerClass}>
			<div className="background-image" style={imageStyle}></div>
			<div className="project-link">
				<div className="project-text">
					<p className="project-description-title">{title}</p>
					<p className="project-description">{description}</p>
					<a href={button.url} target="_blank" className="play-button">{button.text}</a>
				</div>
			</div>
		</article>
	);
};

export default function Portfolio() {
	const [selectedID, setSelectedID] = useState(null as string | null);

	const handleClick = (id: string) => {
		setSelectedID(selectedID === id ? null : id);
	};

	const projects = PROJECTS.map(p => (
		<Project {...p} key={p.id} selected={selectedID === p.id} onClick={() => handleClick(p.id)}/>
	));

	return (<div id="portfolio-container">
		<section id="portfolio"> {projects} </section>
	</div>);
}
