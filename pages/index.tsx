import type { NextPage } from "next";
import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import { Layout } from "../components/layout";
import { EntryList } from "../components/ui";

const HomePage: NextPage = () => {
  return (
    <Layout title="Home - OpenJira">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Pendientes" />

            {/* Agregar una nueva entrada */}
            {/* Listar las entradas */}
            <EntryList />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="En Progreso " />

            {/* Agregar una nueva entrada */}
            {/* Listar las entradas */}
            <EntryList />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Completadas" />

            {/* Agregar una nueva entrada */}
            {/* Listar las entradas */}
            <EntryList />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;
