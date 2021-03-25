const fs = require("fs");
const csv = require("csvtojson");
const { Parser } = require("jsontocsv");

(async () => {

    const points = await csv().fromFile("data.csv");
    console.log(points);


})();
