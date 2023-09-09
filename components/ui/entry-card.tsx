import { type DragEvent } from 'react'
import { Card, CardActionArea, CardContent, Typography } from '@mui/material'

import { useUi } from '../../hooks'
import { type Entry } from '../../interfaces'

interface EntryCardProps {
  entry: Entry
}

export function EntryCard({ entry }: EntryCardProps) {
  const { startDragging, endDragging } = useUi()

  // Here start the drag on children EntryCard
  const onDragStart = (evt: DragEvent<HTMLDivElement>) => {
    evt.dataTransfer.setData('text/plain', entry._id)

    startDragging()
  }

  // Here end the drag on children EntryCard
  const onDragEnd = () => {
    endDragging()
  }

  return (
    <Card
      sx={{ marginBottom: 1 }}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>
            {entry.description}
          </Typography>
        </CardContent>

        <CardContent sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
          <Typography variant='body2'>30 minutes ago</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
