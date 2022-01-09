import { readFile } from "../../utils/file"

const prepareData = () => {
    const data = readFile('/days/1/input.txt')
    const lines = data.split(/\n/)
    return lines.map((item) => parseInt(item))
}

export default () => {
    const data = prepareData()
    const result = data.reduce((result, current, index, arr) => {
        if (index === 0) return result
        const last = arr[index - 1]
        if (current > last) result += 1
        return result
    }, 0)
    console.log('Result:', result)
    return result

}
