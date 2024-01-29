import {CircularProgress} from "@mui/material";
import {Box} from "@mui/system";

const Spinner = () => {
    const divStyle = {
        margin: 'auto',
    };

    return (
        <div style={divStyle}>
            <Box sx={{ display: 'flex' }}>
               <CircularProgress/>
            </Box>
        </div>
    )
}

export default Spinner;