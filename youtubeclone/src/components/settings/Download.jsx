import {Label} from '@mui/icons-material'
import {
    Button,
    Card,
    CardContent,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography
} from '@mui/material'
import React, {useState} from 'react'

function Download() {
    const [downloadQuality, setDownloadQuality] = useState("High")
    const [folderPath, setFolderPath] = useState("home/Downloads")
    const handleStorageFolder = () => {
        const input = document.createElement('input');
        input.type = "file";
        input.directory = true;
        input.webkitdirectory = true;
        input.style.display="none"
        input.onchange = (event) => {
            const files = event.target.files;
            if (files.length > 0) {
                setFolderPath(files[0].webkitRelativePath.split('/')[1]);
            }
        };
        document.body.appendChild(input)
        input.click();
        document.body.removeChild(input)
    };
    const handleChange = (event) => {
        setDownloadQuality(event.target.value)
    }
    return (
        <Stack sx={
            {
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                height: 'auto',
                justifySelf: "center"
            }
        }>
            <Card sx={
                {
                    width: '40%',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    padding: '50px 0',
                    justifyContent: 'center'

                }
            }>
                <CardContent sx={
                    {
                        display: 'flex',
                        gap: '30px',
                        flexDirection: 'column'
                    }
                }>
                    <Typography>
                        <FormControl>
                            <InputLabel id="download_preference">
                                Download Quality</InputLabel>
                            <Select labelId="download preferences" label="Download quality"
                                sx={
                                    {width: '200px'}
                                }
                                value={downloadQuality}
                                onChange={handleChange}>
                                <MenuItem value="High">High</MenuItem>
                                <MenuItem value="Medium">Medium</MenuItem>
                                <MenuItem value="Low">Low</MenuItem>

                            </Select>
                        </FormControl>
                    </Typography>
                    <FormControl>
                        <TextField type='text'
                           value={folderPath} ></TextField>
                        <Button onClick={handleStorageFolder}>Browse</Button>
                    </FormControl>

                </CardContent>
            </Card>
        </Stack>
    )
}

export default Download
