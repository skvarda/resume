var express = require('express');
var app = express();

app.get('/resume', function (req, res) {
  console.log('hello friend');
  res.setHeader('Content-Type', 'application/json');
  res.send({
  "fullName": "Sean Michael Kvarda",
  "contactInfo": {
    "physicalAddress": {
      "streetAddress": "100 Taylor Ave North Apt A306",
      "city": "Seattle",
      "state": "WA",
      "zip" : "98109"
    },
    "phoneNumber": "8058899818",
    "emailAddress": "skvarda@gmail.com"
  },
  "profileHighlights": [
    "Strong background in SaaS sales and client services with fast growing technology companies", 
    "Deep understanding of business processes, process improvement, and business systems",
    "Consultative approach to customer engagements with a focus on finding what will bring them success",
    "Basic knowledge of programming and database languages such as SQL, Python, HTML and CSS",
    "Go-to person in the office for tech questions and constantly educating colleagues on best practices",
    "Commitment to integrity, conscientiousness, professionalism, and always growing & improving"
    ],
  "workExperience": [
    {
      "jobTitle": "Market Development Representative",
      "company": "DocuSign Inc.",
      "location": "Seattle, WA",
      "startDate": "5/2015",
      "endDate": "Current",
      "jobDuties": [
        "Generated qualified sales leads through lead generation campaigns and discovery calls",
        "Collaborated with executives, managers, and end users to analyze document processes",
        "Presented thoughtful solutions utilizing DocuSign’s platform and partner tools",
        "Produced sales projections and quarterly sales reports to show performance metrics",
        "Utilized enterprise business technology stack including Office Suite, Salesforce, DocuSign, Okta, Concur"
        ]
    },
    {
      "jobTitle": "Non-Profit and International Account Executive / Partner Manager",      
      "company": "SP Marketplace",
      "location": "Penn Valley, CA",
      "startDate": "5/2013",
      "endDate": "5/2015",
      "jobDuties": [
        "Connected with decision makers to evaluate their current processes and uncover solutions using SharePoint",
        "Conducted peer-to-peer, consultative sales calls across a variety of cross-functional departments",
        "Drove prospects from initial interest in software/services through demo, purchasing, and implementation",
        "Qualified prospective partners over a series of calls to determine eligibility and strategic fit",
        "Created and implemented partner program components such as a partner portal and training materials"]
    }
  ],
  "education": {
    "school": "California State University, Chico",
    "major": "Bachelor of Science in Business Administration",
    "option": "Marketing",
    "graduation": "Graduated Spring 2014"
  },
  "activites": [
    {
      "name": "Sweet 16 Sales Competition",
      "timeline": "Fall 2013",
      "description": [
        "Selected as one of the 'Elite 8' sales students in a senior level sales course at CSU, Chico",
        "Enhanced selling skills by participating in regular sales role plays with professors"]
    },
    {
      "name": "Business Concept Competition",
      "timeline": "Fall 2013",
      "description": [
        "Placed 3rd out of a total of 100 competitors in a school sponsored entrepreneurial contest",
        "Presented business concept to an audience of several hundred attendees"]
    },
    {
      "name": "Delta Sigma Pi: Professional Business Fraternity (Chancellor)",
      "timeline": "Initiated Fall 2015",
      "description": [
        "Assumed control at all general and executive business meetings as the Chapter's Presiding Officer",
        "Enforced the Chapter's adherence to bylaws, policies and procedures as Chief Judicial Officer"]
    }
  ]
});
});

app.listen(3000, '198.199.115.158', function () {
  console.log('Example app listening on port 3000!');
});
