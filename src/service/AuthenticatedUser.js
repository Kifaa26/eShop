import axios from 'axios'
function applyToken(token) {
    if (token) {
        axios.defaults.header = {
            Authorization: `${token}`
        }
    }
}
export {
    applyToken
}