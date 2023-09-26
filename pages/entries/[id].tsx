import { type ChangeEvent, useState, useMemo } from 'react'
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

import { Layout } from '../../components/layouts'
import { EntryStatus } from '../../interfaces'

const validStatus: EntryStatus[] = ['todo', 'in-progress', 'done']

export default function EntryPage() {
  const [inputValue, setInputValue] = useState('')
  const [status, setStatus] = useState<EntryStatus>('todo')
  const [isTouched, setIsTouched] = useState(false)

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

  const onSaveEntry = () => {
    console.log({ inputValue }, { status })
  }

  return (
    <Layout title='Edit Entry'>
      <Grid
        container
        justifyContent='center'
        sx={{ marginTop: 2 }}
      >
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader
              title={`Entry: ${inputValue}`}
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
                onClick={onSaveEntry}
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
