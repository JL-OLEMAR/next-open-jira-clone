import { Card, CardContent, CardHeader, Grid } from '@mui/material'
import { Layout } from '../components/layouts'

export default function Home() {
  return (
    <Layout title='Home - OpenJira'>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='TODO' />

            <CardContent>
              {/* Add a new entry */}
              {/* List of entries */}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='IN PROGESS' />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='DONE' />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}
