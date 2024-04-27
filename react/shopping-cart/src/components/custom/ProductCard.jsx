import { Link } from "react-router-dom";
import CardRating from "./CardRating";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const ProductCard = ({ data }) => {
    console.log(data.id);
    return (
        <Card sx={{ maxWidth: 245 }} elevation={0}>
            <CardActionArea component={Link} to={`${data.id}`}>
                <CardMedia
                    component="img"
                    image={data.image}
                    alt={data.title}
                    sx={{ height: "300px", objectFit: "contain" }}
                    // className="max-h-[300px] object-contain"
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="p"
                        component="div"
                        className=""
                    >
                        {data.title}
                    </Typography>
                    <div className="flex items-center  gap-4">
                        <CardRating ratingValue={data.rating.rate} />
                        <p className="text-sm pb-2">({data.rating.count})</p>
                    </div>
                    <Typography
                        gutterBottom
                        variant="p"
                        component="div"
                        className="font-bold"
                    >
                        ${data.price}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default ProductCard;
