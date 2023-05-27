const { ResearchDetails, PersonalDetails } = require("../../schemas");

const fetchGuideData = async (req, res) => {
    try {
        const supervisor_id = req.body.supervisor_id;
        data = await PersonalDetails.findAll({
            include: [{
                model: ResearchDetails,
                where: { supervisor_id: supervisor_id }
            }]
        })
        return res.status(200).json(data);
    }
    catch (err) {
        console.error(err);
        return res.status(400).send({ message: "Could not fetch guide data" });
    }
}

module.exports = { fetchGuideData }