import superjson from 'superjson'

export default {
  transformer: superjson,
  errorFormatter({ shape }) {
    return shape
  },
}
