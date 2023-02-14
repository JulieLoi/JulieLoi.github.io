import { 
    Card, CardActions, CardContent, CardMedia, 
    Typography, Button, Stack, Chip
} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { projectType } from "../types/types";

interface ICardProps {
    project: projectType,
    docker?: boolean,
}

const ProjectCard: React.FC<ICardProps> = ({ project }) => {

    const buttonStyle = { fontSize: "14px", fontWeight: 600 };

    return (
        <>
        <Card sx={{ border: "1px solid red", borderRadius: "1rem" }}>
            <CardMedia
                sx={{ height: 200 }}
                image={project.imagePath}
                title={project.name}
            />
            <CardContent>
                <Stack spacing={1}>
                    <Typography gutterBottom variant="h3" component="div"
                        sx={{ textDecoration: "underline" }}
                    >
                        {project.name}
                    </Typography>
                    <Stack display="flex" direction="row" spacing={1}>
                        {project.labels.map((label) => (
                            <Chip label={label} variant="outlined" />
                        ))}
                    </Stack>
                    <Typography variant="h5" color="text.secondary">
                        {project.description} 
                    </Typography>
                </Stack>
            </CardContent>
            <CardActions>
                <Stack direction="row" display="flex" spacing={2}>
                    <Button variant="outlined" sx={buttonStyle} startIcon={<GitHubIcon />} 
                        href={project.githubLink} target="_blank"
                    >
                        Github Repository
                    </Button>
                    {project.dockerLink &&
                        <Button variant="outlined" sx={buttonStyle} startIcon={<OpenInNewIcon />}
                            href={project.dockerLink} target="_blank"
                        >
                            Docker Hub Images
                        </Button>
                    }
                </Stack>
            </CardActions>
        </Card>
        </>
    )
}

export default ProjectCard
