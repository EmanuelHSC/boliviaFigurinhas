// src/components/productCard.jsx

import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch } from "react-redux";
import { Creators as CartActions } from "../store/ducks/cart";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function ProductCard({ name = "Default Name", description = "Default Description", image, price = "0.00", id, quantity = 0, rarity = "Default Rarity", condition = "Default Condition" }) {
  const dispatch = useDispatch();
  const [openAlert, setOpenAlert] = useState(false);
  const vertical = "bottom";
  const horizontal = "center";

  // const handleClickAlert = () => {
  //   setOpenAlert(true);
  // };

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

  const handleAddToCart = () => {
    dispatch(
      CartActions.addToCart({
        id,
        name,
        description,
        image,
        price,
        quantity,
        rarity,
        condition
      })
    );
  };

  return (
    <Card sx={{ width: 350, height: 480, m: 2, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <CardMedia
        component="img"
        sx={{
          height: 250,
          objectFit: "contain",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
        }}
        image={image || "https://via.placeholder.com/150"}
        alt={name}
      />
      <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 3 }}>
        <Typography gutterBottom variant="h3" component="div" sx={{ textAlign: "center", fontWeight: "bold", fontSize: "1.2rem" }}>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical" }}>
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical" }}>
           Condição: {condition} - {rarity}
        </Typography>
        <Typography variant="body1" color="text.primary" sx={{ fontWeight: "bold", textAlign: "center", mt: 2, fontSize: "1.1rem" }}>
         Valor R${price} | Quantidade: {quantity}
        </Typography>
        <Button variant="contained" sx={{ marginTop: 2, alignSelf: "center", width: "80%", height: 40 }} onClick={handleAddToCart}>
          <ShoppingCartIcon />
        </Button>
      </CardContent>
      <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleCloseAlert} anchorOrigin={{ vertical, horizontal }}>
        <Alert onClose={handleCloseAlert} severity="success" variant="filled" sx={{ width: "100%" }}>
          Produto adicionado ao carrinho!
        </Alert>
      </Snackbar>
    </Card>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  quantity: PropTypes.number,
  rarity: PropTypes.string,
  condition: PropTypes.string,
};

export default ProductCard;
