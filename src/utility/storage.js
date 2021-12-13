const storeName = "highscores"
const store = localStorage.getItem(storeName)
if(!store || store.length ===0) localStorage.setItem(storeName, JSON.stringify([{username: 'blofland', score: 1000000}]))
const get = () => {
    return JSON.parse(localStorage.getItem(storeName))
}
const write = (newStore) => {
    localStorage.setItem(storeName, JSON.stringify(newStore))
    return get()
}

export default {get, write}
