import { type DragEvent, useMemo } from 'react'
import { List, Paper } from '@mui/material'

import { useEntry, useUi } from '../../hooks'
import { EntryStatus } from '../../interfaces'
import { EntryCard } from './entry-card'
import styles from './entry-list.module.css'

interface EntryListProps {
  status: EntryStatus
}

export function EntryList({ status }: EntryListProps) {
  const { entries, updatedEntry } = useEntry()
  const { isDragging, endDragging } = useUi()

  const entriesByStatus = useMemo(() => entries.filter(
    (entry) => entry.status === status
  ), [entries])

  const allowDrop = (evt: DragEvent<HTMLDivElement>) => {
    evt.preventDefault()
  }

  // Here drop the drag on the father EntryList. 👀 This on a div
  const onDropEntry = (evt: DragEvent<HTMLDivElement>) => {
    const id = evt.dataTransfer.getData('text/plain')
    const entry = entries.find(e => e._id === id)

    if (entry != null && entry !== undefined) {
      entry.status = status // mutate the status
      updatedEntry(entry) // update the entry of the state
      endDragging()
    }
  }

  return (
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={isDragging ? styles.dragging : ''}
    >
      <Paper sx={{
        height: 'calc(100vh - 180px)',
        overflow: 'auto',
        padding: '3px 5px',
        backgroundColor: 'transparent'
      }}
      >
        <List sx={{
          opacity: isDragging ? 0.2 : 1,
          transition: 'all .3s'
        }}
        >
          {entriesByStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  )
}
