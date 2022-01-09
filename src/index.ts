import day1 from './days/1'

const run = (day: string, callback: () => any) => {
    console.log(`Running: Day ${day}`)
    return callback()
}

const day: string = process.argv[2] || ''

switch (day) {
    case '1': run(day, day1); break
    default: console.log('type a number from 1 - 25')
}
