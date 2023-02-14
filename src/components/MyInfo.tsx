import { Paper, Stack, Box, Divider, Typography, Button, useMediaQuery } from "@mui/material";

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const MyInfo: React.FC = () => {

    const isNonMobileScreens = useMediaQuery("(min-width: 1200px)");    // Mobile/PC

    return (
        <Paper sx={{ p: "2rem", m: "1rem", borderRadius: "1rem" }}>
        <Stack spacing={2}>
            <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="My Portrait" className="portrait" />
            <Typography variant="h1" sx={{ textAlign: "center" }}>Julie Loi</Typography>
            <Typography>Position (Programmer - specify)</Typography>
            <Typography>Description, mention degree</Typography>
            <Divider />
            {isNonMobileScreens ?
                <Stack spacing={1}>
                    <Buttons />
                </Stack>
                :
                <Box sx={{ display: "flex", justifyContent: "space-around"}}>
                    <Buttons />
                </Box>
            }
            
        </Stack>
        </Paper>
    )
}

// Github, LinkedIn, Download Resume Buttons
const Buttons = () => {

    const isNonMobileScreens = useMediaQuery("(min-width: 1200px)");    // Mobile/PC

    const buttonVariant = "outlined";
    const buttonStyle = {
        m: isNonMobileScreens ? "" : "10px",
        fontSize: "16px",
        fontWeight: 600
    }
    

    return (
        <>
            <Button fullWidth variant={buttonVariant} 
                sx={buttonStyle} startIcon={<GitHubIcon />} 
                href="https://github.com/JulieLoi" target="_blank"
            >
                Github
            </Button>
            <Button fullWidth variant={buttonVariant} 
                sx={buttonStyle} startIcon={<LinkedInIcon />} 
                href="https://www.linkedin.com/in/julie-loi-646722257/" target="_blank"
            >
                LinkedIn
            </Button>
            <Button fullWidth variant={buttonVariant} 
                sx={buttonStyle} startIcon={<FileDownloadIcon />} 
            > 
                Download Resume
            </Button>
        </>
    )
}

export default MyInfo

/*
<div className={homeStyle["sidebar__container"]}>
            <span className={homeStyle["sidebar__name"]}>Julie Loi</span>
            <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="My Portrait" className={homeStyle["sidebar__portrait"]} />
            <br />
            <span className={homeStyle["sidebar__text"]}>
            small description
            degree
            </span>
            <br />
            <hr />
            <span className={`${homeStyle["sidebar__text"]} ${homeStyle["sidebar__link"]}`} 
                onClick={() => window.open("https://www.linkedin.com/")}
            >
                View my LinkedIn Profile
            </span>
            <br />
            <span className={`${homeStyle["sidebar__text"]} ${homeStyle["sidebar__link"]}`} 
                onClick={() => window.open("https://github.com/JulieLoi")}
            >
                View my Github Profile
            </span>
        </div>

*/