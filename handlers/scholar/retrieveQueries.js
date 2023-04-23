const { 
    ResearchDetails,
    Workshops,
    Seminars,
    PersonalDetails,
    ConferencePaper,
    JournalPaper 
} = require("../../schemas");
const {Op} = require("sequelize");


const retrieveUsingDates = async (req, res) => {
    try {
        const from = req.query.from_date;
        const to = req.query.to_date;
        const document_category = req.query.document_category;
        const register_no = req.query.register_no;
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
                [Op.gte] : from,
                [Op.lte] : to
            }
        });

        return  res.status(200).json(data);
    }
    catch (err) {
        console.error(err);
        return res.status(500).send({ message: "Server Error" });
    }
}

const retrieveUsingType = async (req,res) => {
    const document_category = req.query.document_category
    const register_no = req.query.register_no;
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
        where : {
            register_no : register_no,
        }
    })
    return res.status(200).json(data);


}

const retrieveUsingScope = async(req,res) => {
    const register_no = req.body.register_no;
    const document_category = req.body.document_category;
    const scope = req.body.scope;
    var document_model
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
        where : {
            register_no : register_no,
            nationality : scope,
        }
    })
    if(!data)
        return res.status(200).json({message : "No Records to show"});
    return res.status(200).json(data);
}

const retrievePersonalData = async(req,res) => {
    const register_no = req.body.register_no;
    const data = await PersonalDetails.findOne({
        where : {
            register_no : register_no
        }
    });
    if(data)
        return res.status(200).json(data);
    return res.status(404).send({message  : "Roll no not found in Register"});
}

const retrieveResearchData = async(req,res) => {
    const register_no = req.body.register_no;
    const data = await ResearchDetails.findOne( {
        where : {
            register_no : register_no
        }
    });
    if(data)
        return res.status(200).json(data);
    return res.status(404).send({message : "Roll no not found in Register"});
}

module.exports = {
    retrieveUsingDates,
    retrieveUsingType,
    retrievePersonalData,
    retrieveResearchData,
    retrieveUsingScope
}