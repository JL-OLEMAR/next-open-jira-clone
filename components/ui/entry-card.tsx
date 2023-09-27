import { type DragEvent } from 'react'
import { useRouter } from 'next/router'
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'

import { useTimeAgo, useUi } from '../../hooks'
import { type Entry } from '../../interfaces'

interface EntryCardProps {
  entry: Entry
}

export function EntryCard({ entry }: EntryCardProps) {
  const router = useRouter()
  const { startDragging, endDragging } = useUi()
  const { timeAgo } = useTimeAgo(entry.createdAt)

  // Here start the drag on children EntryCard
  const onDragStart = (evt: DragEvent<HTMLDivElement>) => {
    evt.dataTransfer.setData('text/plain', entry._id)

    startDragging()
  }

  // Here end the drag on children EntryCard
  const onDragEnd = () => {
    endDragging()
  }

  const onClick = () => {
    void router.push(`/entries/${entry._id}`)
  }

  return (
    <Card
      onClick={onClick}
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

        <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
          <Typography variant='body2'>{timeAgo}</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}
