import { Card, CardActionArea, CardContent, Typography } from '@mui/material'
import { Entry } from '../../interfaces'

interface EntryCardProps {
  entry: Entry
}

export function EntryCard({ entry }: EntryCardProps) {
  return (
    <Card sx={{
      marginBottom: 1
    }}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>{entry.description}</Typography>
        </CardContent>

        <CardContent sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
          <Typography variant='body2'>hace 30 minutos</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
