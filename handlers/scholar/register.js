
const {
    parseConferences,
    parseJournals,
    parseWorkshops,
    registerResearch
} = require("../../utils");
const { parseSeminars } = require("../../utils/parsefiles");

const registerScholar = async (req, res) => {
    try {
        //console.log(typeof req.files)
        const files = req.files;

        console.log(files)
        await registerResearch(req);
        if (files && files["conferences"])
            await parseConferences(req, files["conferences"]);
        if (files && files["journals"])
            await parseJournals(req, files["journals"]);
        if (files && files["seminars"])
            await parseSeminars(req, files["seminars"]);
        if (files && files["workshops"])
        {
            await parseWorkshops(req, files["workshops"])
}
        return res.status(200).send({ message: "Details Registered Successfully" })
    
    }
    catch (err) {
        console.error(err.message);
        return res.status(500).send({ message: "Server-Error" });
    }

}
module.exports = {registerScholar}