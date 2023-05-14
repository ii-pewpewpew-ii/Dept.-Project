const { ResearchDetails, PersonalDetails } = require("../../schemas/research");

const fetchDashboard = async (req, res) => {
    try {
        const email_id = req.body.email_id;
        const personalDetailsData = await PersonalDetails.findOne({
            where: {
                email_id: email_id,
            }
        })
        const register_no = personalDetailsData.register_no;
        const researchDetailsData = await ResearchDetails.findOne({
            where: {
                register_no: register_no
            }
        })
        const resJson = {
            personalDetails: personalDetailsData,
            researchDetails: researchDetailsData
        }
        return res.status(200).json(resJson)
    }
    catch (err) {
        console.error(err);
        return res.status(400).send({ message: "Could not load dashboard" });
    }
}

module.exports = {fetchDashboard};