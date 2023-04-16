const {
    ResearchDetails,
    PersonalDetails,
    ConferencePaper,
    JournalPaper,
    researchScholarResearch
} = require("../../schemas");

const {
    parseConferences,
    parseJournals,
    parseWorkshops
} = require("../../utils");
const { parseSeminars } = require("../../utils/parsefiles");

const registerScholar = async (req, res) => {
    try {
        researchDetails = new researchScholarResearch(req)
        const files = req.files;
        const parseFiles = {}
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const fieldName = file.fieldName;
            if (!parseFiles[fieldName]) {
                parseFiles[fieldName] = []
            }
            parseFiles[fieldName].push(file);
        }
        if (parseFiles["conferences"])
            await parseConferences(req, parseFiles["conferences"]);
        if (parseFiles["journals"])
            await parseJournals(req, parseFiles["journals"]);
        if (parseFiles["seminars"])
            await parseSeminars(req, parseFiles["seminars"]);
        if (parseFiles["workshops"])
            await parseWorkshops(req, parseFiles["workshops"])

        return res.status(200).send({ message: "Details Registered Successfully" })
    }
    catch (err) {
        return res.status(500).send({ message: "Server-Error" });
    }

}