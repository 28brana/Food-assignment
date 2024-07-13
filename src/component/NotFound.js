import React from "react";
import { Stack, Typography } from "@mui/material";

const NoDataFound = () => {
    return (
        <Stack
            alignItems="center"
            justifyContent="center"
            height="100%"
            width="100%"
            sx={{ color: "#ffffff" }}
            py={5}
        >
            <Typography variant="h5" gutterBottom>
                No Data Found 😞
            </Typography>
        </Stack>
    );
};

export default NoDataFound;
