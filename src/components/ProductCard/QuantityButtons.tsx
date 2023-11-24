import { useAppDispatch, useAppSelector } from "@/store";
import { cartSelectors } from "@/store/selectors";
import { cartActions } from "@/store/slices/cart.slice";
import { ProductListItem } from "@/types/product";
import { Add, Remove } from "@mui/icons-material";
import { Button, Grid, Typography, styled } from "@mui/material";

const ButtonStyled = styled(Button)(({ theme }) => ({
  width: 30,
  minWidth: 30,
  height: 30,
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: "6px",
}));

type Props = {
  product: ProductListItem;
};

const QuantityButtons: React.FC<Props> = ({ product }) => {
  const dispatch = useAppDispatch();
  const quantity = useAppSelector(
    cartSelectors.getProductQuantityById(product.id)
  );

  const onIncrementClick = () => {
    dispatch(cartActions.incrementQuantity(product));
  };

  const onDecrementClick = () => {
    dispatch(cartActions.decrementQuantity(product));
  };

  return (
    <Grid
      container
      flexDirection={"column"}
      justifyContent={"flex-end"}
      alignItems={"center"}
      height={"100%"}
      gap={0.5}
    >
      {quantity > 0 && (
        <>
          <ButtonStyled color="primary" onClick={onDecrementClick}>
            <Remove fontSize="small" />
          </ButtonStyled>
          <Typography fontWeight={500}>{quantity}</Typography>
        </>
      )}
      <ButtonStyled color="primary" onClick={onIncrementClick}>
        <Add fontSize="small" />
      </ButtonStyled>
    </Grid>
  );
};

export default QuantityButtons;