// src/components/CartItem.jsx

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { Creators as CartActions } from "../store/ducks/cart";

export default function CartItem({ id }) {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.cart.items.find((item) => item.id === id));

  if (!item) return null;

  const handleAddQtd = () => {
    if (item.quantity < item.stock) {
      dispatch(CartActions.updateQuantity(item, item.quantity + 1));
    }
  };

  const handleSubQtd = () => {
    if (!item) return;
    if (item.quantity > 1) {
      dispatch(CartActions.updateQuantity(item, item.quantity - 1));
    } else {
      dispatch(CartActions.removeFromCart(item));
    }
  };

  const handleRemoveItem = () => {
    dispatch(CartActions.removeFromCart(item));
  };

  const setNewQuantity = (e) => {
    if (!item) return;
    const newQuantity = parseInt(e.target?.value, 10);
    if (isNaN(newQuantity)) return;
    const validQuantity = Math.min(Math.max(newQuantity, 1), item.stock);
    dispatch(CartActions.updateQuantity(item, validQuantity));
  };

  return (
    <Container sx={{ display: "flex", maxWidth: "40%", alignItems: "center" }}>
      <CardMedia component="img" sx={{ width: 151 }} image={item.image} alt="Product image" />
      <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <CardContent sx={{ flex: "1 0 auto", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography component="div" variant="h6">
              {item.name}
            </Typography>
            <IconButton onClick={handleRemoveItem} sx={{ color: "red" }}>
              <DeleteIcon />
            </IconButton>
          </Box>
          <Container sx={{ m: 0, display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
            <Button sx={{ width: "40px", height: "40px", borderRadius: "50%" }} onClick={handleSubQtd} disabled={item.quantity <= 1}>
              -
            </Button>

            <OutlinedInput
              sx={{ width: 50 }}
              inputProps={{
                style: { textAlign: "center" },
                min: 1,
                max: item.stock,
              }}
              value={item.quantity}
              onChange={(e) => setNewQuantity(e)}
              key={id}
            />

            <Button sx={{ width: "40px", height: "40px", borderRadius: "50%" }} onClick={handleAddQtd} disabled={item.quantity >= item.stock}>
              +
            </Button>
          </Container>
          <Typography variant="h6" sx={{ fontWeight: "bold", marginTop: 2 }} component="div">
            R$ {item.price}
          </Typography>
        </CardContent>
      </Box>
    </Container>
  );
}
