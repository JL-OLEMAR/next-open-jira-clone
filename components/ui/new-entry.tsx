/* eslint-disable no-useless-return */
/* eslint-disable @typescript-eslint/indent */
import { type ChangeEvent, useState } from 'react'
import { Box, Button, TextField } from '@mui/material'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import { useEntry } from '../../hooks'

export function NewEntry() {
  const [isAdding, setIsAdding] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [isTouched, setIsTouched] = useState(false)
  const { addNewEntry } = useEntry()

  const onTextFieldChanged = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValue(e.target.value)
    setIsTouched(true)
  }

  const handleTaskSave = () => {
    if (inputValue.length === 0) return

    addNewEntry(inputValue)

    // reset
    setIsAdding(false)
    setIsTouched(false)
    setInputValue('')
  }

  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      {
        isAdding
          ? (
            <>
              <TextField
                fullWidth
                sx={{ marginTop: 2, marginBottom: 1 }}
                placeholder='Type new entry'
                autoFocus
                multiline
                label='New Entry'
                helperText={isTouched && inputValue.length <= 0 && 'Field required *'}
                error={isTouched && inputValue.length <= 0}
                value={inputValue}
                onChange={onTextFieldChanged}
                onBlur={() => setIsTouched(true)}
              />

              <Box display='flex' justifyContent='space-between'>
                <Button
                  onClick={() => setIsAdding(false)}
                  variant='outlined'
                >
                  Cancel
                </Button>

                <Button
                  onClick={handleTaskSave}
                  variant='outlined'
                  color='secondary'
                  endIcon={<SaveOutlinedIcon />}
                >
                  Save
                </Button>
              </Box>
            </>
          )
          : (
            <Button
              onClick={() => setIsAdding(true)}
              startIcon={<AddIcon />}
              fullWidth
              variant='outlined'
            >
              Add task
            </Button>
          )
      }

    </Box>
  )
}