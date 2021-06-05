import axios from 'axios'

const endPoint = "https://localhost:44389/Customer/"

export const getCustomers = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(endPoint + "GetCustomers").then(res => resolve(res.data)).catch(error => reject(error))
    })
}
export const addCustomer = (item) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url: endPoint + 'AddCustomer',
            data: {
                "Name": item.name,
                "Lastname": item.lastname,
                "PhoneNumber": item.phoneNumber
            }
        })
            .then(function (res) {
                resolve(res)
            })
            .catch(function (error) {
                reject(error);
            });
    })
}