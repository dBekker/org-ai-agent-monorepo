export default ({ env }: { env: (name: string, defaultValue?: string) => string }) => ({
  connection: {
    client: 'postgres',
    connection: env('DATABASE_URL'),
  },
})
