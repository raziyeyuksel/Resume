import SOCIAL from '@salesforce/resourceUrl/SOCIAL'
import Rozie from '@salesforce/resourceUrl/rozie';
export const PROFILE_IMAGE = Rozie

export const SOCIAL_LINKS=[
  
    {
        type: "github",
        label: "github/ryuksel",
        link: "https://github.com/raziyeyuksel",
        icon: SOCIAL + '/SOCIAL/github.svg'
    },
    {
        type: "linkedin",
        label: "linkedin/Rozie",
        link: "https://www.linkedin.com/in/rozie-yuksel-46609623a/",
        icon: SOCIAL + '/SOCIAL/linkedin.svg'
    },
    {
        type: "website",
        label: "website/ryuksel",
        link: "https://raziye-dev-ed.my.site.com/portfolio/s ",
        icon: SOCIAL + '/SOCIAL/twitter.svg'
    },

    {
        type: "trailhead",
        label: "trailhead/Rozie",
        link: "https://www.salesforce.com/trailblazer/ryuksel",
        icon: SOCIAL + '/SOCIAL/trailhead.svg'
    }
]

export const USER_DETAILS={
    NAME:'RAZIYE(ROZIE) YUKSEL',
    ROLE:'Salesforce Administrator/ Developer',
    EMAIL:'tyrozie44@gmail.com',
    PHONE:'281 544 0298'
}

export const CAREER_SUMMARY={
    HEADING:"CAREER SUMMARY",
    DESCRIPTION: "Well-versed 4X certified Salesforce Administrator with 3+ years experience in Salesforce Customization, Picklists, Custom Formula, Fields, Lookups, Master-Details, Flow Customization of Reports and Dashboards. Good understanding of APEX, Visualforce and LWC. Great interpersonal and communication skills, focused, self-motivated, organized, and quick learner. ",
    KEYS_POINTS:[
        "Salesforce Administrator,App Bulder and Devoloper Certificates",
        "Designed, implemented, and deployed various custom objects, fields, tabs, components, validation rules, workflows, flows, approval processes, and auto-response rules for the Salesforce application. ",
        "Focused, self-motivated, organized, and quick learner.",
        "Experience in using Data Loader, Dataloader.io, Data Import Wizard and Workbench for data manipulation and migration in Salesforce ",
    ]
}

export const EXPERIENCE_DATA={
    HEADING: "Work Experience",
    EXPERIENCES: [
        {
            ROLE: "Salesforce Administrator",
            COMPANY_NAME: "ChangeForce Foundation",
            DURATION: "2022 - Present",
            DESCRIPTION:
                "I was responsible for the day-to-day configuration, support, maintenance, and improvement of the organization’s database. Working closely with fundraising, program management, and marketing staff, the administrator will identify, develop, and deploy new business processes. ",
            DESCRIPTION_POINTS: [
                "Handle basic administrative functions including user maintenance, modification of page layouts, generation of reports and dashboards, creation of new fields and other routine tasks.",
                "Gather detailed requests for improvements or changes to the system, and implement these changes as appropriate.",
                "Automate processes using Salesforce tools such as process builder, flow automation, validation rules.",
                "Manage less complex Salesforce integrations - those not handled by a Salesforce Developer or Consultant/Partner.",
                "Identify, install and maintain appropriate apps from the AppExchange for event management, mass email, document merge, and more.",
                "Identify and gather requirements from users and stakeholders. ",
                "Worked with Lightning Framework, Lightning components, Lightning events and Salesforce Lightning Design system and had experience in Software Development Lifecycle (SDLC) process, coding standards, change control, and version management including CI/CD.",
                "Support team members and monitor user adoption of Salesforce tools in your organization. ",
                "Resolve user support tickets. ",

            ],
            TECHNOLOGIES_USED: {
                HEADING: 'Technologies used',
                LIST: [
                    "Apex",
                    "Javascript",
                    "HTML5",
                    
                ]
            },
        },
        {
            ROLE: "Salesforce Administrator",
            COMPANY_NAME: "Macrocosm Services and Solutions",
            DURATION: "2020 - 2022",
            DESCRIPTION:
                "Administered and monitored the Salesforce CRM application, created and updated database designs and data models, improved user adoption by 30% via a program of platform enhancements, designed, implemented, and deployed various custom objects, fields, tabs, components, validation rules, workflows, flows, approval processes, and auto-response rules for the Salesforce application, and had experience in Salesforce implementation and development. ",
            DESCRIPTION_POINTS: [
                " Administered and monitored the Salesforce CRM application and created workflow rules, page layouts, approval process, tasks, email alerts, field updates and outbound messages.",
                "Created tabular, summary and matrix reports and set up report email schedules for higher management.",
                "Designed, implemented, and deployed various custom objects, fields, tabs, components, validation rules, workflows, flows, approval processes, and auto-response rules for the Salesforce application.",
                "Experienced in using Data Loader, Dataloader.io, Data Import Wizard and Workbench for data manipulation and migration in Salesforce.",
                "Maintained user profiles including adding new users, amending existing accounts, validating system permissions, restricting and opening up data access, and maintaining role hierarchies.",
                "Responsible for the day-to-day configurations, support, maintenance and improvement of Salesforce.com. ",
                "Worked with Lightning Framework, Lightning components, Lightning events and Salesforce Lightning Design system and had experience in Software Development Lifecycle (SDLC) process, coding standards, change control, and version management including CI/CD.",
                "Experienced in Salesforce implementation and devolopment and writting Apex programing. ",
                "Salesforce integration tools like Mulesoft ",
                "improved user adoption by 30% via a program of platform enhancements, assisted in maintaining process flow maps and diagrams, and effectively utilized lookup, master-detail and many-to-many features.",

            ],
            TECHNOLOGIES_USED: {
                HEADING: 'Technologies used',
                LIST: [
                    "Apex",
                    "Javascript",
                    "HTML5",
                    
                ]
            },
        },
        {
            ROLE: "Salesforce Administrator",
            COMPANY_NAME: "Raindrop Foundation Inc",
            DURATION: "2019 - 2020",
            DESCRIPTION:
                " As a Salesforce Administrator I worked with Salesforce org to meet the nonprofit’s needs and goals, troubleshooting and solving problems in the org using a proven process, keeping the NPSP implementation healthy and optimized using NPSP Health Check and other tools, and learning and staying updated on the latest best practices and resources for NPSP administration. ",
            DESCRIPTION_POINTS: [
                "Created and updated database designs and data models, set and controlled user access levels across databases, and monitored user support tickets, user issues and employee workflows.",
                "Designed custom Formula Fields, Field Dependencies, Validation Rules, Escalation Rules, Time-triggered tasks, Approval Processes, Charts and Diagrams, created various profiles and users, and managed Security and Sharing rules for users.",
                "Effectively utilized lookup, master-detail and many-to-many features to establish the relationship among objects.",
                "Created various profiles and users, configured permission based on the organizational hierarchy.",
            ],
            TECHNOLOGIES_USED: {
                HEADING: 'Technologies used',
                LIST: [
                    "Salesforce NPSP Cloud",
                    "Salesforce",
                    
                    
                ]
            }
        },
       
    
    ]
}


 export const EDUCATION_DATA={
     ICON: SOCIAL + '/SOCIAL/education.svg',
     HEADING: "EDUCATION",
     LIST:[
         {
             NAME: "Bachelor's in Science and Literature",
             UNIVERSITY_NAME: "Marmara University-Istanbul",
             DURATION: "1994 - 1998",
         },
         
     ]
 }

 export const AWARDS_DATA={
     ICON: SOCIAL + '/SOCIAL/awards.svg',
     HEADING: "Superbadges",
     LIST: [
         {
             NAME: "Admin Super Set",
             DESCRIPTION:"Completed the capstone assessment to earn the Admin Super Set.",
         },
         {
             NAME: "Business Administration Specialist",
             DESCRIPTION:"Brighten up a new business unit with the Salesforce tools the team needs to succeed",
         },
         {
            NAME: "Security Specialist Superbadge",
            DESCRIPTION:"Completed the capstone assessment to earn the Security Specialist Superbadge",
        },
        {
            NAME: "Lightning Experience Reports & Dashboards Specialist",
            DESCRIPTION:"Designed powerful reports and dashboards to shine a light on your data.",
        },
     ]
 }

export const CERTIFICATION_DATA={
    ICON: SOCIAL + '/SOCIAL/certification.svg',
    HEADING: "CERTIFICATIONS",
    LIST: [
        {
            NAME: "Salesforce Certified Administrator(201)",
        },
        {
            NAME: "Salesforce Certified Advanced Administrator(211)",
        },
        {
            NAME: "Salesforce Certified Platform DeveloperI",
        },
        
        {
            NAME: "Salesforce Certified Platform App Builder",
        },
        
    ]
}

export const LANGUAGES_DATA={
    HEADING: "Languages",
    LIST: [
        {
            NAME: "English",
            LEVEL: "Professional",
        },
        {
            NAME: "Turkish",
            LEVEL: "Native",
        },
        
    ]
}

export const SKILLS_DATA ={
    HEADING: "SKILLS & TOOLS",
    SKILLS:[
        {
            HEADING: "FRONTEND",
            SKILLS_LIST: [
                { NAME: "Salesforce", LEVEL: "95" },
                { NAME: "Reporting", LEVEL: "85" },
                { NAME: "Lightning", LEVEL: "90" },
            ],
        },
        {
            HEADING: "BACKEND",
            SKILLS_LIST: [
                { NAME: "Apex", LEVEL: "75" },
                { NAME: "Java Script", LEVEL: "65" },
                { NAME: "Visualforce", LEVEL: "60" },
            ],
        },
        {
            HEADING: "CRM/CMS",
            SKILLS_LIST: [
                { NAME: "Salesforce", LEVEL: "90" },
                
            ],
        }
    ],
    OTHERS_SKILLS:{
        HEADING: 'OTHERS',
        SKILLS_LIST: [
            "Git",
            "Postman",
            ]
    }
}

export const INTERESTS_DATA = {
    HEADING: "Interests",
    LIST: ["Reading", "Cooking", "Traveling","Family Time"]
}