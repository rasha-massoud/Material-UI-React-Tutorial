import { Skeleton } from "@mui/material";

const Loading = ({ children }) => {
    return (
        <Skeleton 
            animation="wave"
        >
            {children}
        </Skeleton>
    )
}

export default Loading;
