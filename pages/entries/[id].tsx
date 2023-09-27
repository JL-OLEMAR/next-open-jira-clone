import { type ChangeEvent, useState, useMemo } from 'react'
import type { GetServerSideProps } from 'next'
import {
  Button,
  capitalize,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  TextField
} from '@mui/material'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'

import { dbEntries } from '../../database'
import { useEntry } from '../../hooks'
import { Layout } from '../../components/layouts'
import { Entry, EntryStatus } from '../../interfaces'

const validStatus: EntryStatus[] = ['todo', 'in-progress', 'done']

export default function EntryPage({ entry }: { entry: Entry }) {
  const [inputValue, setInputValue] = useState(entry.description)
  const [status, setStatus] = useState<EntryStatus>(entry.status)
  const [isTouched, setIsTouched] = useState(false)
  const { updatedEntry } = useEntry()

  const isNotValidStatus = useMemo(
    () => inputValue.length <= 0 && isTouched,
    [inputValue, isTouched]
  )

  const onInputValueChanged = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValue(e.target.value)
  }

  const onStatusChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value as EntryStatus)
  }

  const onSaveEntry = async () => {
    if (inputValue.trim().length === 0) return

    await updatedEntry({
      ...entry,
      description: inputValue,
      status
    }, true)
  }

  return (
    <Layout title={`${entry.description.substring(0, 20)}...`}>
      <Grid
        container
        justifyContent='center'
        sx={{ marginTop: 2 }}
      >
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader
              title='Entry:'
              subheader='Created 30 minutes ago'
            />

            <CardContent>
              {/* Input Text Field */}
              <TextField
                sx={{ marginTop: 2, marginBottom: 2 }}
                fullWidth
                placeholder='Edit entry'
                autoFocus
                autoComplete='false'
                multiline
                label='Edit entry'
                value={inputValue}
                onChange={onInputValueChanged}
                error={isNotValidStatus}
                helperText={isNotValidStatus && 'Field required *'}
                onBlur={() => setIsTouched(true)}
              />

              {/* Radio State */}
              <FormControl>
                <FormLabel>State: </FormLabel>
                <RadioGroup
                  row
                  value={status}
                  onChange={onStatusChanged}
                >
                  {
                    validStatus.map(option => (
                      <FormControlLabel
                        key={option}
                        value={option}
                        control={<Radio />}
                        label={capitalize(option)}
                      />
                    ))
                  }
                </RadioGroup>
              </FormControl>
            </CardContent>

            <CardActions>
              <Button
                startIcon={<SaveOutlinedIcon />}
                variant='contained'
                fullWidth
                type='button'
                onClick={() => { void onSaveEntry() }}
                disabled={inputValue.length <= 0}
              >
                Save
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <IconButton sx={{
        position: 'fixed',
        bottom: 30,
        right: 30,
        backgroundColor: 'error.dark'
      }}
      >
        <DeleteOutlinedIcon />
      </IconButton>

    </Layout>
  )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string }

  const entry = await dbEntries.getEntryById(id)

  if (!entry) {
    return {
      redirect: {
        destination: '/',
        permanent: false // Exist but not permanent
      }
    }
  }

  return {
    props: {
      entry
    }
  }
}
