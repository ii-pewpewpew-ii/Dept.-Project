const { ConferencePaper, JournalPaper, Seminars, Workshops } = require("../schemas");

const parseConferences = async (req, fileList) => {
    const conference_names = req.body.conference_names;
    const conference_authors = req.body.conference_authors;
    const conference_paper_names = req.body.conference_paper_names
    const conference_isbn_numbers = req.body.conference_isbn_numbers;
    const conference_volume_number = req.body.conference_volume_numbers;
    const conference_page_number = req.body.conference_page_numbers;
    const conference_start_periods = req.body.conference_start_periods;
    const conference_end_periods = req.body.conference_end_periods;
    const conference_types = req.body.conference_types;
    const conference_places = req.body.conference_places;
    const register_no = req.body.register_no;
    for (let i = 0; i < fileList.length; i++) {
        await ConferencePaper.create({
            register_no: register_no,
            author_name: conference_authors[i],
            paper_name: conference_paper_names[i],
            isbn_number: conference_isbn_numbers[i],
            conference_name: conference_names[i],
            volume_number: conference_volume_number[i],
            page_number: conference_page_number[i],
            period_from: conference_start_periods[i],
            period_to: conference_end_periods[i],
            nationality: conference_types[i],
            document_path: fileList[i].path,
            place: conference_places[i]
        });
    }
}

const parseJournals = async (req, fileList) => {
    const register_no = req.body.register_no;
    const journal_authors = req.body.journal_authors;
    const journal_paper_names = req.body.journal_paper_names;
    const issn_numbers = req.body.journalissn_numbers;
    const journal_names = req.body.journal_names;
    const journal_volume_numbers = req.body.journal_volume_numbers;
    const journal_page_numbers = req.body.journal_page_numbers;
    const journal_start_periods = req.body.journal_start_periods;
    const journal_end_periods = req.body.journal_end_periods;
    const types = req.body.journal_types;
    const journal_impact_factors = req.body.journal_impact_factors;
    const journal_publisher_names = req.body.journal_publisher_names;

    for (let i = 0; i < fileList.length; i++) {
        await JournalPaper.create({
            register_no: register_no,
            author_name: journal_authors[i],
            paper_name: journal_paper_names[i],
            issn_number: issn_numbers[i],
            journal_name: journal_names[i],
            volume_number: journal_volume_numbers[i],
            page_number: journal_page_numbers[i],
            nationality: types[i],
            document_path: fileList[i].path,
            impact_factor: journal_impact_factors[i],
            publisher_name: journal_publisher_names[i],
            period_from: journal_start_periods[i],
            period_to: journal_end_periods[i]
        })
    }
}

const parseSeminars = async (req, fileList) => {
    const register_no = req.body.register_no;
    const seminar_names = req.body.seminar_names;
    const seminar_start_periods = req.body.seminar_start_periods;
    const seminar_end_periods = req.body.seminar_end_periods;
    const seminar_locations = req.body.seminar_locations;
    const types = req.body.seminar_types;

    for (let i = 0; i < fileList.length; i++) {
        await Seminars.create({
            register_no: register_no[i],
            seminar_name: seminar_names[i],
            period_from: seminar_start_periods[i],
            period_to: seminar_end_periods[i],
            location: seminar_locations[i],
            document_path: fileList[i].path
        })
    }
}

const parseWorkshops = async (req, fileList) => {
    console.log(fileList)
    
    const register_no = req.body.register_no;
    const workshop_names = req.body.workshop_names;
    const workshop_titles = req.body.workshop_titles;
    const workshop_organisers = req.body.workshop_organisers;
    const workshop_locations = req.body.workshop_locations;
    const types = req.body.workshop_types;
    const period_to = req.body.period_to;
    const period_from = req.body.period_from;
    console.log(fileList.length)
    if (fileList.length > 1){
    for (let i = 0; i < fileList.length; i++) {
        await Workshops.create({
            workshop_title: workshop_titles[i],
            workshop_organiser: workshop_organisers[i],
            register_no: register_no,
            workshop_name: workshop_names[i],
            location: workshop_locations[i],
            nationality: types[i],
            document_path: fileList[i].path,
            period_to : period_to[i],
            workshop_location : workshop_locations[i],
            period_from : period_from[i]
        })
    }}
    else{
        await Workshops.create({
            workshop_title: workshop_titles,
            workshop_organiser: workshop_organisers,
            register_no: register_no,
            workshop_name: workshop_names,
            workshop_locations: workshop_locations,
            nationality: types,
            document_path: fileList[0].path,
            period_to : period_to,
            location: workshop_locations,
            period_from : period_from
        })
    }
}

module.exports = {
    parseSeminars,
    parseConferences,
    parseJournals,
    parseWorkshops
}