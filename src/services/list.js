export function getList() {



    return fetch('http://localhost:8081/dashboard/admin/3?marketUnit=ALL', {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Allow": "*",
                "Content-type": "Application/json",
            }
        })
        .then(data => data.json())



}