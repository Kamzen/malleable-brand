

const Fetch = (url,method,data,callback) => {

    try{

        fetch(url,
        {
            method : method,
            body : JSON.stringify(data),

            headers : {
                'Accept': 'application/form-data',
                'Content-Type': 'application/json',
            }

        }).then(resp => {
            return resp.json();
        }).then(data => {

            callback(data);

        })


    }catch(e){

      console.log(e)

    }

}

export default Fetch;