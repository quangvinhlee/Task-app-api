require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('65876ea56be16ac51def1c7d', {completed: true}).then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id, completed) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    
    return count
}

deleteTaskAndCount('6589498fea3597ea7de317c8').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})