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
  productId: number;
};

const AddToCartButtons: React.FC<Props> = () => {
  return (
    <Grid container flexDirection={"column"} alignItems={"center"} gap={0.5}>
      <ButtonStyled color="primary">
        <Remove fontSize="small" />
      </ButtonStyled>
      <Typography fontWeight={500}>3</Typography>
      <ButtonStyled color="primary">
        <Add fontSize="small" />
      </ButtonStyled>
    </Grid>
  );
};

export default AddToCartButtons;
