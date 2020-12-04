const fs = require('fs')

const listDirRec = async directory => {
    const fileList = []

    try {
        fs.accessSync(directory, fs.constants.R_OK)
        const files = fs.readdirSync(directory)

        files.forEach(async file => {
            let children = []
            if (fs.lstatSync(`${directory}/${file}`).isFile()) {
                fileList.push({
                    name: file,
                    type: 'doc',
                    path: `${directory}/${file}`,
                    children
                })
            }
            if (fs.lstatSync(`${directory}/${file}`).isDirectory()) {
                fileList.push({
                    name: file,
                    type: 'dir',
                    path: `${directory}/${file}`,
                    children: await listDirRec(`${directory}/${file}`)
                })
            }
        })
    } catch (error) {

    }
    return fileList
}

module.exports = {
    listDirs: async folder => {
        return await listDirRec(folder)
    },

    readFile: async path => {
        const data = fs.readFileSync(path)
        return `data:image/png;base64,${Buffer.from(data).toString('base64')}`
    }
}