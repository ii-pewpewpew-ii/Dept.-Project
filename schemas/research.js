const Sequelize = require("sequelize")
const sequelize = require("../utils/dbconnection")

const ResearchDetails = sequelize.define("DIST_Research_Scholar_Research", {
    register_no: {
        allowNull: false,
        type: Sequelize.TEXT,
        primaryKey: true,
        unique: true
    },
    researcher_name: {
        allowNull: false,
        type: Sequelize.TEXT
    },
    research_topic: {
        allowNull: false,
        type: Sequelize.TEXT
    },
    research_abstract: {
        allowNull: false,
        type: Sequelize.TEXT
    },
    research_supervisor_name: {
        allowNull: false,
        type: Sequelize.TEXT
    },
    research_supervisor_address: {
        allowNull: false,
        type: Sequelize.TEXT
    },
    research_supervisor_phone_no: {
        allowNull: false,
        type: Sequelize.TEXT
    },
    research_supervisor_email: {
        allowNull: false,
        type: Sequelize.TEXT
    },
    supervisor_id : {
        allowNull : false,
        type : Sequelize.TEXT
    }
},//{
   // freezeTableName : true
//}
)

const PersonalDetails = sequelize.define("DIST_Research_Scholar_Personal", {
    register_no: {
        primaryKey: true,
        allowNull: false,
        unique: true,
        type: Sequelize.TEXT
    },
    first_name: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    last_name: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    guardian_name: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    date_of_birth: {
        type: Sequelize.DATE,
        allowNull: false
    },
    date_of_joining: {
        type: Sequelize.DATE,
        allowNull: false
    },
    phone: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    address: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    permanent_address: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    email_id: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true,
        validator: { isEmail: true, notNull: true, notEmpty: true }
    },
    mode_of_education: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    education: {
        type: Sequelize.TEXT,
        allowNull: false
    }
},{
    freezeTableName : true
}
);
const JournalPaper = sequelize.define("DIST_Journal_Papers", {
    paperid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true
    },
    register_no: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    author_name: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    paper_name: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    issn_number: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    journal_name: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    volume_number: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    page_number: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    period_from: {
        type: Sequelize.DATE,
        allowNull: false
    },
    period_to: {
        type: Sequelize.DATE,
        allowNull: false
    },
    nationality: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    document_path: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    impact_factor: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    publisher_name: {
        type: Sequelize.TEXT,
        allowNull: false
    }
},{
    freezeTableName : true
}
);


const ConferencePaper = sequelize.define("DIST_Conference_Papers", {
    paperid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true
    },
    register_no: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    author_name: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    paper_name: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    isbn_number: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    conference_name: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    volume_number: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    page_number: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    period_from: {
        type: Sequelize.DATE,
        allowNull: false
    },
    period_to: {
        type: Sequelize.DATE,
        allowNull: false
    },
    nationality: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    document_path: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    place: {
        type: Sequelize.TEXT,
        allowNull: false
    },

},{
   freezeTableName : true
}
);

const Seminars = sequelize.define("DIST_Seminars", {
    seminar_id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
    },
    seminar_name: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    location: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    register_no: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    period_from: {
        type: Sequelize.DATE,
        allowNull: false
    },
    period_to: {
        type: Sequelize.DATE,
        allowNull: false
    },
    document_path: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    type: {
        type: Sequelize.TEXT,
        allowNull: false
    }

},
{
   freezeTableName : true
}
);

const Workshops = sequelize.define("DIST_workshops", {
    workshop_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    workshop_title: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    workshop_organiser: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    location: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    document_path: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    nationality: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    period_from: {
        type: Sequelize.DATE,
        allowNull: false
    },
    period_to : {
        type : Sequelize.DATE,
        allowNull : false,
    },
    register_no: {
        type: Sequelize.TEXT,
        allowNull: false
    }


},
{
   freezeTableName : true
}
)
PersonalDetails.hasOne(ResearchDetails, {
    foreignKey: 'register_no'
  });
  ResearchDetails.belongsTo(PersonalDetails, {
    foreignKey: 'register_no'
  });

module.exports = {
    ResearchDetails,
    Workshops,
    Seminars,
    PersonalDetails,
    ConferencePaper,
    JournalPaper
}