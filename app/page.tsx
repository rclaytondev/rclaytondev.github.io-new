"use client";

import { ProjectData, PROJECTS } from "./projects";

import "../stylesheets/click-effects.css";
import "../stylesheets/scrollbar.css";
import "../stylesheets/style.css";

import "../stylesheets/default-layout.css";
import "../stylesheets/wide-layout.css";
import { useState } from "react";


type ProjectProps = ProjectData & {
	selected: boolean,
	onClick: () => void
};

function Project({ id, title, description, button, selected, onClick }: ProjectProps) {
	const imageStyle = { backgroundImage: `url(/${id}.png)` };
	return (
		<article id={id} onClick={onClick} className={selected ? "selected" : ""}>
			<div className="background-image" style={imageStyle}></div>
			<div className="project-link">
				<div className="project-text">
					<p className="project-description-title">{title}</p>
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
	return (<section> {projects} </section>);
}
