import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

export default function CardRating({ ratingValue }) {
    return (
        <Box
            sx={{
                "& > legend": { mt: 2 },
            }}
        >
            <Rating
                name="simple-controlled"
                value={ratingValue}
                precision={0.5}
                readOnly
            />
        </Box>
    );
}
