

let links = []

let title = 'Тестовый заголовок'


fetch('https://run.mocky.io/v3/1c7a6bba-1418-4e94-9b78-1b7b383ac443')
.then(response => {
    return response.json()
})
.then(data => {
    // троеточие отправляет не Массив а только его содержимое
    links.push(...data)
    let container = document.querySelector('.nav-links')
    container.innerHTML =''
    links.forEach(item => {
        let link = `
        <a href="#" onclick="navigation('${item.path}')">${item.title}</a>
        `
        container.innerHTML += link
    })
})
