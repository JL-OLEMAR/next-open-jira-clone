
interface SeedData {
  entries: SeedEntry[]
}

interface SeedEntry {
  description: string
  status: string
  createdAt: number
}

export const seedData: SeedData = {
  entries: [
    {
      description: 'Pending: de paid 1',
      status: 'todo',
      createdAt: Date.now()
    },
    {
      description: 'In progress: de paid 2',
      status: 'in-progress',
      createdAt: Date.now() - 1_000_000
    },
    {
      description: 'To do: de paid 3',
      status: 'done',
      createdAt: Date.now() - 100_000
    }
  ]
}
