import { format, parseISO } from 'date-fns'

const formatDate = (input: string): string => {
  const date = parseISO(input)
  return format(date, 'do LLLL yyyy')
}

export default formatDate
