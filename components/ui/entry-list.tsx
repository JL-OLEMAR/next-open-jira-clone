import { useMemo } from 'react'
import { List, Paper } from '@mui/material'

import { useEntry } from '../../hooks'
import { EntryCard } from './entry-card'
import { EntryStatus } from '../../interfaces'

interface EntryListProps {
  status: EntryStatus
}

export function EntryList({ status }: EntryListProps) {
  const { entries } = useEntry()

  const entriesByStatus = useMemo(() => entries.filter(
    (entry) => entry.status === status
  ), [entries])

  return (
    <div>
      <Paper sx={{
        height: 'calc(100vh - 180px)',
        overflow: 'auto',
        padding: '3px 5px',
        backgroundColor: 'transparent'
      }}
      >
        <List sx={{ opacity: 1 }}>
          {entriesByStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  )
}
