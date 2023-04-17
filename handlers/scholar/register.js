
const {
    parseConferences,
    parseJournals,
    parseWorkshops,
    registerResearch
} = require("../../utils");
const { parseSeminars } = require("../../utils/parsefiles");

const registerScholar = async (req, res) => {
    const parseFiles = {}
    try {
        
        if(req.files){
        const files = req.files;
        
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const fieldName = file.fieldName;
            if (!parseFiles[fieldName]) {
                parseFiles[fieldName] = []
            }
            parseFiles[fieldName].push(file);
        }
        }
        await registerResearch(req);
        if (parseFiles && parseFiles["conferences"])
            await parseConferences(req, parseFiles["conferences"]);
        if (parseFiles && parseFiles["journals"])
            await parseJournals(req, parseFiles["journals"]);
        if (parseFiles && parseFiles["seminars"])
            await parseSeminars(req, parseFiles["seminars"]);
        if (parseFiles && parseFiles["workshops"])
            await parseWorkshops(req, parseFiles["workshops"])

        return res.status(200).send({ message: "Details Registered Successfully" })
    
    }
    catch (err) {
        console.error(err.message);
        return res.status(500).send({ message: "Server-Error" });
    }

}
module.exports = {registerScholar}