import { Grid, GridItem } from "@chakra-ui/react";
import { MenuItem } from "../MenuItem";

export function Menu() {
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      w="100%"
      justify="space-between"
      align="center"
      mt={["10", "32"]}
      mx="auto"
      maxW="1160px"
      flexWrap="wrap"
      gap={[1, 5]}
    >
      <GridItem key="icon">
        <MenuItem icon="cocktail" text="vida noturna" />
      </GridItem>
      <GridItem key="icon">
        <MenuItem icon="surf" text="praia" />
      </GridItem>
      <GridItem key="icon">
        <MenuItem icon="building" text="moderno" />
      </GridItem>
      <GridItem key="icon">
        <MenuItem icon="museum" text="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <MenuItem icon="earth" text="e mais..." />
      </GridItem>
    </Grid>
  );
}
