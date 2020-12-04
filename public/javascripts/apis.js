const baseApi = 'http://localhost:3000'

const api = (method, url, data) => {
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response)
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                })
            }
        }
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            })
        }
        if (method == "POST" && data) {
            xhr.send(data)
        } else {
            xhr.send()
        }
    })
}
