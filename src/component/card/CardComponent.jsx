import React from "react";

// material
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHoriz from "@material-ui/icons/MoreHorizOutlined";

import { CardImg } from "../styled";

const CardComponent = props => {
  const { photoList } = props;
  return (
    <Card style={{ minWidth: "65%" }}>
      <CardHeader
        avatar={<Avatar aria-label="Recipe">R</Avatar>}
        action={
          <IconButton aria-label="Settings">
            <MoreHoriz />
          </IconButton>
        }
        title="Kang"
        subheader={photoList.photo_time}
      />
      {/* <CardMedia image="%PUBLIC_URL%/test.png" title="Paella dish" /> */}
      <CardImg src={photoList.photo_binary} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {photoList.photo_location}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
