const {ConferencePaper,JournalPaper} = require("../schemas");

const parseConferences = async (req,fileList) => {
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
    for(let i = 0;i<fileList.length;i++){
        await ConferencePaper.create({
            register_no : register_no,
            author_name : conference_authors[i],
            paper_name : conference_paper_names[i],
            isbn_number : conference_isbn_numbers[i],
            conference_name : conference_names[i],
            volume_number : conference_volume_number[i],
            page_number : conference_page_number[i],
            period_from : conference_start_periods[i],
            period_to : conference_end_periods[i],
            nationality : conference_types[i],
            document_path : fileList[i].path,
            place : conference_places[i]
        });
    }
}

const parseJournals = async (req,fileList) => {
    const register_no = req.body.register_no;
    const journal_authors = req.body.journal_authors;
    const journal_paper_names = req.body.journal_paper_names;
    const issn_numbers = req.body.journalissn_numbers;
    const journal_names = req.body.journal_names;
    const journal_volume_numbers = req.body.journal_volume_numbers;
    const journal_page_numbers = req.body.journal_page_numbers;
    const journal_start_periods = req.body.journal_start_periods;
    const journal_end_periods = req.body.journal_end_periods;
    const types = req.body.journalTypes;
    const journal_impact_factors = req.body.journal_impact_factors;
    const journal_publisher_names = req.body.journal_publisher_names; 

    for(let i =0 ;i<fileList.length;i++){
        await JournalPaper.create({
            register_no : register_no,
            author_name : journal_authors[i],
            paper_name : journal_paper_names[i],
            issn_number : issn_numbers[i],
            journal_name : journal_names[i],
            volume_number : journal_volume_numbers[i],
            page_number : journal_page_numbers[i],
            nationality : types[i],
            document_path : fileList[i].path,
            impact_factor : journal_impact_factors[i],
            publisher_name : journal_publisher_names[i],
            period_from : journal_start_periods[i],
            period_to : journal_end_periods[i]
        })
    }
}

module.exports = {
    parseConferences,
    parseJournals
}