import { Paper, Stack, Divider, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";
import projectsData from "../data/data";

const Portfolio: React.FC = () => {
    return (
        <Paper sx={{ p: "2rem", m: "1rem", borderRadius: "1rem" }}>
            <Typography gutterBottom variant="h1">Portfolio Projects</Typography>
            <Stack spacing={4}>
                {projectsData.map((project) => (
                    <>
                        <ProjectCard project={project} />
                        <Divider />
                    </>
                ))}
            </Stack>
        </Paper>
    )
}

export default Portfolio


/*
right side content...
            <br />
            made up of mapping cards. Create type for portfolio item. Create component for it..
            <br />
            portfolio -order by newest... line break in between each one.
            <br />
            Portfolio Item: name, date published, last updated, github link, link on github page if it exists.
            <br />
            More Stuff: image of the project? small description of the project. Languages used. Tell us about the project and what has been done.
            <br />
            Skills learned/used in the project...
            <br />
            <img src="images/example.png" alt="example"/>
            <br />
            <br />
            <br />
            <br />
*/