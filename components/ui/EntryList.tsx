import { Paper, List } from "@mui/material";
import { EntryCard } from "./";

export const EntryList = () => {
  return (
    // TODO: Aqui haremos drop
    <div>
      <Paper
        sx={{
          height: "calc(100vh - 180px)",
          overflow: "scroll",
          backgroundColor: "transparent",
          padding: "1px 5px",
        }}
      >
        {/* TODO: Cambiara si estoy haciendo drag o no */}
        <List sx={{ opacity: 1 }}>
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
        </List>
      </Paper>
    </div>
  );
};
