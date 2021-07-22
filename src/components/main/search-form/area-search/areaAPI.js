import axios from "axios";

const addressesAPIurl = "https://data.gov.il/api/3/action/datastore_search";

const searchAutoComplete = async (value) => {
    try {
        const res = await axios.get(addressesAPIurl, {
            params: {
                resource_id: "9ad3862c-8391-4b2f-84a4-2d4c68625f4b",
                q: value,
                limit: 10,
            },
        });
        const records = res.data.result.records;
        const resultArray = [];
        for (let record of records) {
            resultArray.push([record["שם_ישוב"], record["שם_רחוב"]]);
        }

        return resultArray;
    } catch (err) {
        console.log(err.response.data.message);
    }
};

export default searchAutoComplete