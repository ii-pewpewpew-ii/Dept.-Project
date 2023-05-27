const { error } = require("cli");
const {
    ResearchDetails,
    Workshops,
    Seminars,
    PersonalDetails,
    ConferencePaper,
    JournalPaper
} = require("../schemas");
const { Op } = require("sequelize");


const handleDocumentRetrieveRequests = async (req, res) => {
    try {
        const from_date = req.body.from_date;
        const to_date = req.body.to_date;
        const document_category = req.body.document_category;
        const register_no = req.body.register_no;
        const scope = req.body.scope;
        if (from_date && to_date && document_category) {
            res = await retrieveUsingDates(req, res);
            return res;
        }
        else if (document_category && scope) {
            res = await retrieveUsingScope(req, res);
            return res;
        } else if (document_category) {
            res = await retrieveUsingType(req, res);
            return res;
        }
        return res.status(400).json({ message: "Invalid Query" });
    }
    catch (err) {
        console.error(err);
    }
}

const retrieveUsingDates = async (req, res) => {
    try {
        const from = req.body.from_date;
        const to = req.body.to_date;
        const document_category = req.body.document_category;
        const register_no = req.body.register_no;
        var document_model;

        switch (document_category) {
            case "workshops":
                document_model = Workshops;
                break;
            case "conferencepapers":
                document_model = ConferencePaper;
                break;
            case "journals":
                document_model = JournalPaper;
                break;
            case "seminars":
                document_model = Seminars;
                break;
            default:
                return res.status(400).json({ message: "Invalid document category" });
        }
        const data = await document_model.findAll({
            where: {
                register_no: register_no,
                [Op.gte]: from,
                [Op.lte]: to
            }
        });

        return res.status(200).json(data);
    }
    catch (err) {
        console.error(err);
        return res.status(500).send({ message: "Server Error" });
    }
}

const retrieveUsingType = async (req, res) => {
    const document_category = req.body.document_category;
    const register_no = req.body.register_no;
    var document_model;
    switch (document_category) {
        case "workshops":
            document_model = Workshops;
            break;
        case "conferencepapers":
            document_model = ConferencePaper;
            break;
        case "journals":
            document_model = JournalPaper;
            break;
        case "seminars":
            document_model = Seminars;
            break;
        default:
            return res.status(400).json({ message: "Invalid document category" });
    }
    const data = await document_model.findAll({
        where: {
            register_no: register_no,
        }
    })
    return res.status(200).json(data);

}

const retrieveUsingScope = async (req, res) => {
    const register_no = req.body.register_no;
    const document_category = req.body.document_category;
    const scope = req.body.scope;
    var document_model;
    switch (document_category) {
        case "workshops":
            document_model = Workshops;
            break;
        case "conferencepapers":
            document_model = ConferencePaper;
            break;
        case "journals":
            document_model = JournalPaper;
            break;
        case "seminars":
            document_model = Seminars;
            break;
        default:
            return res.status(400).json({ message: "Invalid document category" });
    }
    const data = await document_model.findAll({
        where: {
            register_no: register_no,
            nationality: scope,
        }
    });
    if (!data)
        return res.status(200).json({ message: "No Records to show" });
    return res.status(200).json(data);
}

const retrievePersonalData = async (req, res) => {
    const register_no = req.body.register_no;
    const data = await PersonalDetails.findOne({
        where: {
            register_no: register_no
        }
    });
    if (data)
        return res.status(200).json(data);
    return res.status(404).send({ message: "Roll no not found in Register" });
}

const retrieveResearchData = async (req, res) => {
    const register_no = req.body.register_no;
    const data = await ResearchDetails.findOne({
        where: {
            register_no: register_no
        }
    });
    if (data)
        return res.status(200).json(data);
    return res.status(404).send({ message: "Roll no not found in Register" });
}

const handleRetrieveScholar = async (req, res) => {
    try {
        const supervisor_id = req.body.supervisor_id;
        const joining_date = new Date(req.body.date);
        if (!joining_date) {
            joining_date = new Date("1950-01-01");
        }
        const researchDetails = await PersonalDetails.findAll({
            include: [{
                model: ResearchDetails,
                where: {
                    supervisor_id: supervisor_id,

                }
            }],
            where: {
                date_of_joining: {
                    [Op.gte]: joining_date
                }
            }
        });
        return res.status(200).json(researchDetails);
    } catch (err) {
        return res.status(400).json({ message: "Failed" });
    }

}

const retrieveUsingRegisterNumber = async (req, res) => {
    try {
        const register_no = req.body.register_no;
        const personalData = await PersonalDetails.findOne({
            where: {
                register_no: register_no
            }
        });
        const researchData = await ResearchDetails.findOne({
            where: { register_no: register_no }
        });
        const journalData = await JournalPaper.findAll({
            where: { register_no: register_no }
        });
        const conferencePapers = await ConferencePaper.findAll({
            where: { register_no: register_no }
        });
        const workshops = await Workshops.findAll({
            where: { register_no: register_no }
        });
        const finalRes = {
            register_no: register_no,
            personalData: personalData,
            researchData: researchData,
            journalData: journalData,
            conferencePapers: conferencePapers,
            workshops: workshops
        }
        return res.status(200).json(finalRes);
    }
    catch (err) {
        console.error(err);
        return res.status(400).json({ message: "Server Error" });
    }
}

module.exports = {
    handleRetrieveScholar,
    handleDocumentRetrieveRequests,
    retrieveUsingDates,
    retrieveUsingType,
    retrieveUsingScope,
    retrievePersonalData,
    retrieveResearchData,
    retrieveUsingRegisterNumber
}