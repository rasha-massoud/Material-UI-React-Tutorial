import { Skeleton } from "@mui/material";

const Loading = ({ children, sx }) => {
    return (
        <Skeleton 
            sx={sx}
            animation="wave"
        >
            {children}
        </Skeleton>
    )
}

export default Loading;
