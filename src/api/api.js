import axios from 'axios'

// export default {
//     getData: () =>
//     axios({
//         'method':'GET',
//         'url':'https://api.data.gov.in/resource/52509217-a220-4f78-981b-59c5c307a196?api-key=579b464db66ec23bdd0000017ae4b033b80c41827525aa8cb93f4903&format=json&offset=0&limit=10000',
//         'headers': {
//             'content-type':'application/octet-stream',
//             'x-rapidapi-host':'api.data.gov.in',
//             'x-rapidapi-key': process.env.RAPIDAPI_KEY
//         },
//         'params': {
//             'search':'parameter',
//         },
//     })
// }

const
    requestApi = () => ({
        method: 'GET',
        url: 'https://api.data.gov.in/resource/52509217-a220-4f78-981b-59c5c307a196?api-key=579b464db66ec23bdd0000017ae4b033b80c41827525aa8cb93f4903&format=json&offset=0&limit=10000'
    });

export const getelectric = () => {
    // console.log("satra")
    const url = requestApi()
    return axios(url)
        .then(res => {
            console.log("success")
            const
                { data, status } = res,
                details = data;

            return { details, statusCode: status };

        })
        .catch(err => (err, () => ({

            details: { data: [] },
            statusCode: err.response.status.status,
            statusMessage: (() => {
                console.log("fails")
                if (typeof err.response.data === 'string') {
                    return err.response.data;
                } else {
                    let key, val = err.response.data;
                    for (key in val) {
                        return val[key] ? val[key] : val;
                    }
                }
            })()
        })));
};


// var axios = require("axios").default;



const
    FuelApi = () => ({
        method: 'GET',
        url: 'https://daily-fuel-prices-india.p.rapidapi.com/api/proxy/hp/states/%7Bstatecode%7D',
        headers: {
            'x-rapidapi-host': 'daily-fuel-prices-india.p.rapidapi.com',
            'x-rapidapi-key': '3b2694950cmshb50524933b10de3p17dc25jsnf6532ba454d6'
        }
    });

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });


export const getfuelprice = () => {
    // console.log("satra")
    const url = FuelApi()
    return axios(url)
        .then(res => {
            console.log("success")
            const
                { data, status } = res,
                details = data;
            console.log(data)
            return { details, statusCode: status };

        })
        .catch(err => (err, () => ({

            details: { data: [] },
            statusCode: err.response.status.status,
            statusMessage: (() => {
                console.log("fails")
                if (typeof err.response.data === 'string') {
                    return err.response.data;
                } else {
                    let key, val = err.response.data;
                    for (key in val) {
                        return val[key] ? val[key] : val;
                    }
                }
            })()
        })));
};
