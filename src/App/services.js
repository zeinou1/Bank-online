let GetToken = () => {
    let token = localStorage.getItem('user', token)
    console.log(token);
}
export const services = {GetToken} 