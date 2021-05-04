export function getFormData() {



  return fetch('http://localhost:8081/survey/start/1/5', {
          headers: {
              "Access-Control-Allow-Origin": "*",
              "Allow": "*",
              "Content-type": "Application/json",
          }
      })
      .then(data => data.json());
      



}

/*export function getFormData() {
    return {
        "survey": {
          "surveyId": 1,
          "userId": 1,
          "surveyTitle": "Innovation Questionaire",
          "homePage": {
            "marketUnit": [
              {
                "value": "Please Select",
                "default": true
              },
              {
                "value": "Interactive",
                "default": false
              },
              {
                "value": "ASGR",
                "default": false
              }
            ],
            "clientGroup": [
              {
                "value": "Please Select",
                "default": true
              },
              {
                "value": "PRD",
                "default": false
              },
              {
                "value": "CMT",
                "default": false
              }
            ],
            "deliveryUnit": [
              {
                "value": "Please Select",
                "default": true
              },
              {
                "value": "PRD",
                "default": false
              },
              {
                "value": "CMT",
                "default": false
              }
            ],
            "clientName": [
              {
                "value": "Please Select",
                "default": true
              },
              {
                "value": "H&M",
                "default": false
              },
              {
                "value": "H&M",
                "default": false
              }
            ],
            "cal": [
              {
                "value": "Please Select",
                "default": true
              },
              {
                "value": "cora.stone",
                "default": false
              },
              {
                "value": "christof.innig",
                "default": false
              }
            ],
            "deliveryMD": [
              {
                "value": "Please Select",
                "default": true
              },
              {
                "value": "rajendra.joshi",
                "default": false
              },
              {
                "value": "tarandeep.s.chandhok",
                "default": false
              }
            ],
            "innovationLead": 'RAM'
          },
          "innovationParams": [
            {
              "id": 1,
              "innovationParam": "Understand Client Challenges and Objectives",
              "orderId": 1,
              "questions": [
                {
                  "id": 1,
                  "question": "Do you have discussed innovation program in the account with your client?",
                  "orderId": 1,
                  "options": [
                    {
                      "orderId": 1,
                      "answer": "Please Select",
                      "value": "1_1_1_0",
                      "default": true
                    },
                    {
                      "orderId": 2,
                      "answer": "No, I haven't discussed any innovation program with client at this point in time",
                      "value": "1_1_2_0",
                      "default": false
                    },
                    {
                      "orderId": 3,
                      "answer": "Yes, the discussion has come in few meetings where Accenture capabilities in driving innovation were mentioned but hasn?t progressed thereafter",
                      "value": "1_1_3_1",
                      "default": false
                    },
                    {
                      "orderId": 4,
                      "answer": "Yes, I have regular connects with clients talking on innovation program and objectives within the account",
                      "value": "1_1_4_2",
                      "default": false
                    },
                    {
                      "orderId": 5,
                      "answer": "Yes, I have strategic level connects with senior stakeholders where innovation is a key contributor to business bottomline and brand value where also Accenture is a key partner in driving growth of business",
                      "value": "1_1_5_3",
                      "default": false
                    }
                  ]
                },
                {
                  "id": 2,
                  "question": "Do you understand your client business challenges?",
                  "orderId": 2,
                  "options": [
                    {
                      "orderId": 1,
                      "answer": "Please Select",
                      "value": "1_2_6_0",
                      "default": true
                    },
                    {
                      "orderId": 2,
                      "answer": "Not particularly other than the line of business Accenture is contracted to work and deliver",
                      "value": "1_2_7_0",
                      "default": false
                    },
                    {
                      "orderId": 3,
                      "answer": "Yes we are aware, but we don?t necessarily talk about it as we are not driven by contractual obligations to delve into other sides of business",
                      "value": "1_2_8_1",
                      "default": false
                    },
                    {
                      "orderId": 4,
                      "answer": "Yes, we are aware about the client business challenges and they are being discussed at project deliverable connects with business stakeholders",
                      "value": "1_2_9_2",
                      "default": false
                    },
                    {
                      "orderId": 5,
                      "answer": "Yes, client business challenges are discussed at CXO levels with ATCI and do constitute a strategic lever for Accenture to develop/sustain business relationship in the future",
                      "value": "1_2_10_3",
                      "default": false
                    }
                  ]
                },
                {
                  "id": 3,
                  "question": "Have you been shared with business objectives of your client partners?",
                  "orderId": 3,
                  "options": [
                    {
                      "orderId": 1,
                      "answer": "Please Select",
                      "value": "1_3_11_0",
                      "default": true
                    },
                    {
                      "orderId": 2,
                      "answer": "No, I am not privy to client business objectives",
                      "value": "1_3_12_0",
                      "default": false
                    },
                    {
                      "orderId": 3,
                      "answer": "Yes, I am aware of client business objectives ",
                      "value": "1_3_13_1",
                      "default": false
                    },
                    {
                      "orderId": 4,
                      "answer": "Yes, I am shared with client business objectives and interact with only those business units closer to our contractual deliverables to discuss their challenges and offer solutions",
                      "value": "1_3_14_2",
                      "default": false
                    },
                    {
                      "orderId": 5,
                      "answer": "Yes, I am shared client business objectives by business CXOs and am in a strategic partnership with the business units to help attaining results on the client objectives",
                      "value": "1_3_15_3",
                      "default": false
                    }
                  ]
                },
                {
                  "id": 4,
                  "question": "Are you aware of long term and short term strategic goals of your client?",
                  "orderId": 4,
                  "options": [
                    {
                      "orderId": 1,
                      "answer": "Please Select",
                      "value": "1_4_16_0",
                      "default": true
                    },
                    {
                      "orderId": 2,
                      "answer": "No, I am not aware of long-term and short-term strategic goals of my client",
                      "value": "1_4_17_0",
                      "default": false
                    },
                    {
                      "orderId": 3,
                      "answer": "Yes, I am aware of the long term and short term goals of our client but are aligned through contracted deliverables with our client",
                      "value": "1_4_18_1",
                      "default": false
                    },
                    {
                      "orderId": 4,
                      "answer": "Yes, I am aware of the strategic goals and we have discussions with business counterparts where we can source work to align deliverables with the goals",
                      "value": "1_4_19_2",
                      "default": false
                    },
                    {
                      "orderId": 5,
                      "answer": "Yes, I am aligned with the client's strategic goals and my pipeline of work is being shaped and defined by these strategic business goals",
                      "value": "1_4_20_3",
                      "default": false
                    }
                  ]
                },
                {
                  "id": 5,
                  "question": "Is your project aligned to deliver business value to the client?",
                  "orderId": 5,
                  "options": [
                    {
                      "orderId": 1,
                      "answer": "Please Select",
                      "value": "1_5_21_0",
                      "default": true
                    },
                    {
                      "orderId": 2,
                      "answer": "No, as my resources are only aligned with current technologies and tech platforms mandated by the contractual deliverables",
                      "value": "1_5_22_0",
                      "default": false
                    },
                    {
                      "orderId": 3,
                      "answer": "No, as my resource strategy is primarily driven for delivering exisiting technology solutions contracted by client and would require new workforce onboarding for niche solutions thereby adding a possibility of sourcing delay",
                      "value": "1_5_23_1",
                      "default": false
                    },
                    {
                      "orderId": 4,
                      "answer": "Yes, I can deliver new solutions and technologies with my current workforce as I have strategically upgraded knowledge of key resources to start working on new technology solutions albeit a few",
                      "value": "1_5_24_2",
                      "default": false
                    },
                    {
                      "orderId": 5,
                      "answer": "Yes, I have strategically resourced my project to deliver new technologies and solutions to clients considering current work and future pipeline of assignments",
                      "value": "1_5_25_3",
                      "default": false
                    }
                  ]
                }
              ]
            },
            {
              "id": 2,
              "innovationParam": "Innovation Capabilities within engagement",
              "orderId": 2,
              "questions": [
                {
                  "id": 6,
                  "question": "What is the level of employee engagement in innovation within your project?",
                  "orderId": 1,
                  "options": [
                    {
                      "orderId": 1,
                      "answer": "Please Select",
                      "value": "2_6_26_0",
                      "default": true
                    },
                    {
                      "orderId": 2,
                      "answer": "Employees across all levels are not aware of any innovation initiative within account",
                      "value": "2_6_27_0",
                      "default": false
                    },
                    {
                      "orderId": 3,
                      "answer": "Employees across all levels are aware of innovation program in the account",
                      "value": "2_6_28_1",
                      "default": false
                    },
                    {
                      "orderId": 4,
                      "answer": "Employees across all levels are aware and capable of new ideas and are driven to work on new ideas",
                      "value": "2_6_29_2",
                      "default": false
                    },
                    {
                      "orderId": 5,
                      "answer": "Employees across all levels are driven to work for innovation across the project deliverables where new pipeline of work is defined based on innovative ideas pertaining to client business challenges and strategic goals",
                      "value": "2_6_30_3",
                      "default": false
                    }
                  ]
                },
                {
                  "id": 7,
                  "question": "What has been the diversity of view, voice and experience of participation?",
                  "orderId": 2,
                  "options": [
                    {
                      "orderId": 1,
                      "answer": "Please Select",
                      "value": "2_7_31_0",
                      "default": true
                    },
                    {
                      "orderId": 2,
                      "answer": "Not much participation across levels in innovation program / initiatives across either ATCI or account",
                      "value": "2_7_32_0",
                      "default": false
                    },
                    {
                      "orderId": 3,
                      "answer": "Offshore senior resources and delivery managers are aligned to business challenges and objectives",
                      "value": "2_7_33_1",
                      "default": false
                    },
                    {
                      "orderId": 4,
                      "answer": "Offshore senior resources and managers are aligned and have connect sessions to discuss objectives and goals with the wider team",
                      "value": "2_7_34_2",
                      "default": false
                    },
                    {
                      "orderId": 5,
                      "answer": "Regular connect sessions with clients to discuss business strategic goals and objectives wherein assignments are aligned to deliver solutions towards those objectives primarily driven by ATCI resources both at offshore and onshore",
                      "value": "2_7_35_3",
                      "default": false
                    }
                  ]
                },
                {
                  "id": 8,
                  "question": "What is the scope of new technology used for ideation?",
                  "orderId": 3,
                  "options": [
                    {
                      "orderId": 1,
                      "answer": "Please Select",
                      "value": "2_8_36_0",
                      "default": true
                    },
                    {
                      "orderId": 2,
                      "answer": "Technology scope is only defined by contractual deliverables",
                      "value": "2_8_37_0",
                      "default": false
                    },
                    {
                      "orderId": 3,
                      "answer": "We have discussion forums on new technologies and innovations but we don?t actively pursue those as not defined in the contract",
                      "value": "2_8_38_1",
                      "default": false
                    },
                    {
                      "orderId": 4,
                      "answer": "We propose solutions based on the scope of current work and the scope of new technologies and innovations is define by that scope of work only",
                      "value": "2_8_39_2",
                      "default": false
                    },
                    {
                      "orderId": 5,
                      "answer": "Ideas and solutions are ideated, discussed and designed using the latest SMAC technologies wherein strategic partnerships have been defined with vendors to deliver world class solutions based on latest technologies",
                      "value": "2_8_40_3",
                      "default": false
                    }
                  ]
                },
                {
                  "id": 9,
                  "question": "What is the level of participation in innovation bootcamps and new technology trainings?",
                  "orderId": 4,
                  "options": [
                    {
                      "orderId": 1,
                      "answer": "Please Select",
                      "value": "2_9_41_0",
                      "default": true
                    },
                    {
                      "orderId": 2,
                      "answer": "Trainings are only deliverables perspective and technology in scope of contractual delivery",
                      "value": "2_9_42_0",
                      "default": false
                    },
                    {
                      "orderId": 3,
                      "answer": "The resources participate as and when the trainings are announced.",
                      "value": "2_9_43_1",
                      "default": false
                    },
                    {
                      "orderId": 4,
                      "answer": "We have a training tracker tracking resources attending various bootcamps and technology trainings",
                      "value": "2_9_44_2",
                      "default": false
                    },
                    {
                      "orderId": 5,
                      "answer": "We have a training framework in place where resources are not only sent to targeted technology trainings and bootcamps but also we arrange for trainings whenever necessary to train resources on latest technologies for project deliverables",
                      "value": "2_9_45_3",
                      "default": false
                    }
                  ]
                },
                {
                  "id": 10,
                  "question": "Do you have infrastructure within engagement on innovative thinking?",
                  "orderId": 5,
                  "options": [
                    {
                      "orderId": 1,
                      "answer": "Please Select",
                      "value": "2_10_46_0",
                      "default": true
                    },
                    {
                      "orderId": 2,
                      "answer": "No, I don?t have any space designed like such.",
                      "value": "2_10_47_0",
                      "default": false
                    },
                    {
                      "orderId": 3,
                      "answer": "Yes, I make use of meeting rooms and office spaces for design discussions",
                      "value": "2_10_48_1",
                      "default": false
                    },
                    {
                      "orderId": 4,
                      "answer": "Yes, I have a design space built within the project space for design thinking discussions",
                      "value": "2_10_49_2",
                      "default": false
                    },
                    {
                      "orderId": 5,
                      "answer": "Yes, I have DT sessions planned on regular intervals making use of DT spaces within Accenture premises.",
                      "value": "2_10_50_3",
                      "default": false
                    }
                  ]
                }
              ]
            },
            {
              "id": 3,
              "innovationParam": "Client Co Innovation Framework",
              "orderId": 3,
              "questions": [
                {
                  "id": 11,
                  "question": "Do you have co-innovation framework in place?",
                  "orderId": 1,
                  "options": [
                    {
                      "orderId": 1,
                      "answer": "Please Select",
                      "value": "3_11_51_0",
                      "default": true
                    },
                    {
                      "orderId": 2,
                      "answer": "No, I don?t have any co-innovation framework defined",
                      "value": "3_11_52_0",
                      "default": false
                    },
                    {
                      "orderId": 3,
                      "answer": "No, I don?t have but am working on it and have planned for the near future",
                      "value": "3_11_53_1",
                      "default": false
                    },
                    {
                      "orderId": 4,
                      "answer": "Yes, but I have an adhoc framework with limited sponsorship as of now",
                      "value": "3_11_54_2",
                      "default": false
                    },
                    {
                      "orderId": 5,
                      "answer": "Yes, I have a proven innovation framework in place wherein I have joint innovation councils with the client discussing on new innovations and ideas generated in the project",
                      "value": "3_11_55_3",
                      "default": false
                    }
                  ]
                },
                {
                  "id": 12,
                  "question": "Do you have co-innovation roadmap defined?",
                  "orderId": 2,
                  "options": [
                    {
                      "orderId": 1,
                      "answer": "Please Select",
                      "value": "3_12_56_0",
                      "default": true
                    },
                    {
                      "orderId": 2,
                      "answer": "No, I don?t have any co-innovation roadmap defined and not foreseen in near future",
                      "value": "3_12_57_0",
                      "default": false
                    },
                    {
                      "orderId": 3,
                      "answer": "No, I don?t have but am working on it to define in the near future",
                      "value": "3_12_58_1",
                      "default": false
                    },
                    {
                      "orderId": 4,
                      "answer": "Yes, but I have an adhoc roadmap with limited sponsorship as of now",
                      "value": "3_12_59_2",
                      "default": false
                    },
                    {
                      "orderId": 5,
                      "answer": "Yes, I have a proven innovation roadmap in place wherein the business areas to focus on innovation are clearly defined and have the right business sponsorship in place",
                      "value": "3_12_60_3",
                      "default": false
                    }
                  ]
                },
                {
                  "id": 13,
                  "question": "Do you conduct co-innovation workshops with client?",
                  "orderId": 3,
                  "options": [
                    {
                      "orderId": 1,
                      "answer": "Please Select",
                      "value": "3_13_61_0",
                      "default": true
                    },
                    {
                      "orderId": 2,
                      "answer": "No, we don?t conduct any co-innovation workshops with or without client in my account",
                      "value": "3_13_62_0",
                      "default": false
                    },
                    {
                      "orderId": 3,
                      "answer": "No, I haven't conducted any workshops directly with client yet",
                      "value": "3_13_63_1",
                      "default": false
                    },
                    {
                      "orderId": 4,
                      "answer": "Yes, I have the co-innovation framework in place but is driven primarily by Accenture with low level participation from client",
                      "value": "3_13_64_2",
                      "default": false
                    },
                    {
                      "orderId": 5,
                      "answer": "Yes, I have a well proven co-innovation framework in place with frequent workshops with clients to discuss innovative ideas and business challenges",
                      "value": "3_13_65_3",
                      "default": false
                    }
                  ]
                },
                {
                  "id": 14,
                  "question": "Do you conduct co-innovation workshops within project?",
                  "orderId": 4,
                  "options": [
                    {
                      "orderId": 1,
                      "answer": "Please Select",
                      "value": "3_14_66_0",
                      "default": true
                    },
                    {
                      "orderId": 2,
                      "answer": "No, account does not conduct any co-innovation workshops within project at onshore or offshore with ATCI resource participation",
                      "value": "3_14_67_0",
                      "default": false
                    },
                    {
                      "orderId": 3,
                      "answer": "No, we do not conduct any co-innovation workshops at offshore though there are few discussions that do happen at onshore with ATCI participation.",
                      "value": "3_14_68_1",
                      "default": false
                    },
                    {
                      "orderId": 4,
                      "answer": "Yes, we have internal teams participating in adhoc workshops conducted within project both at onshore and offshore locations with ATCI resource participation",
                      "value": "3_14_69_2",
                      "default": false
                    },
                    {
                      "orderId": 5,
                      "answer": "Yes, we have a well proven co-innovation framework wherein regular connects and discussions take place within projects both at onshore and offshore and across and the outcomes are discussed in innovation councils with business",
                      "value": "3_14_70_3",
                      "default": false
                    }
                  ]
                }
              ]
            },
            {
              "id": 4,
              "innovationParam": "Degree of Innovation",
              "orderId": 4,
              "questions": [
                {
                  "id": 15,
                  "question": "What do you think you do- continuous improvement or incremental innovation?",
                  "orderId": 1,
                  "options": [
                    {
                      "orderId": 1,
                      "answer": "Please Select",
                      "value": "4_15_71_0",
                      "default": true
                    },
                    {
                      "orderId": 2,
                      "answer": "No, we are focused on contractual deliverables at this point in time and haven't thought on CI or incremental innovation as of yet",
                      "value": "4_15_72_0",
                      "default": false
                    },
                    {
                      "orderId": 3,
                      "answer": "Yes, we have continuous improvement driven outcomes within projects which are being shared and discussed with clients regularly",
                      "value": "4_15_73_1",
                      "default": false
                    },
                    {
                      "orderId": 4,
                      "answer": "Yes, we have small process level incremental innovation within projects based on the current understanding of the business objectives at large along with the CI driven outcomes",
                      "value": "4_15_74_2",
                      "default": false
                    },
                    {
                      "orderId": 5,
                      "answer": "Yes, we have not only CI driven outcomes but differential and unconventional approach to innovation resulting in significant gains to client",
                      "value": "4_15_75_3",
                      "default": false
                    }
                  ]
                },
                {
                  "id": 16,
                  "question": "Do you have any cases that you can quote as breakthrough innovation? ",
                  "orderId": 2,
                  "options": [
                    {
                      "orderId": 1,
                      "answer": "Please Select",
                      "value": "4_16_76_0",
                      "default": true
                    },
                    {
                      "orderId": 2,
                      "answer": "No, not heard of breakthrough innovation at all",
                      "value": "4_16_77_0",
                      "default": false
                    },
                    {
                      "orderId": 3,
                      "answer": "No, we don?t have any breakthrough innovation to mention yet but only CI driven initiatives",
                      "value": "4_16_78_1",
                      "default": false
                    },
                    {
                      "orderId": 4,
                      "answer": "No, our innovations are designed to address current business problems which are more step innovation and CI driven initiatives",
                      "value": "4_16_79_2",
                      "default": false
                    },
                    {
                      "orderId": 5,
                      "answer": "Yes, we have demonstrated breakthrough innovation through unconventional / out-of-box thinking resulting in strategic outcomes for the benefit of the client",
                      "value": "4_16_80_3",
                      "default": false
                    }
                  ]
                },
                {
                  "id": 17,
                  "question": "Do you have any transformational innovation?",
                  "orderId": 3,
                  "options": [
                    {
                      "orderId": 1,
                      "answer": "Please Select",
                      "value": "4_17_81_0",
                      "default": true
                    },
                    {
                      "orderId": 2,
                      "answer": "No, not heard of transformational innovation at all",
                      "value": "4_17_82_0",
                      "default": false
                    },
                    {
                      "orderId": 3,
                      "answer": "No, we have not seen any transformational innovation yet",
                      "value": "4_17_83_1",
                      "default": false
                    },
                    {
                      "orderId": 4,
                      "answer": "No, our innovations are designed to address current business problems which are more step innovation or CI driven initiatives",
                      "value": "4_17_84_2",
                      "default": false
                    },
                    {
                      "orderId": 5,
                      "answer": "Yes, we have demonstrated transformational innovation through unconventional / out-of-box thinking resulting in strategic outcomes for the benefit of the client",
                      "value": "4_17_85_3",
                      "default": false
                    }
                  ]
                }
              ]
            },
            {
              "id": 5,
              "innovationParam": "Client Value",
              "orderId": 5,
              "questions": [
                {
                  "id": 18,
                  "question": "Do you have any technology innovation using new technologies?",
                  "orderId": 1,
                  "options": [
                    {
                      "orderId": 1,
                      "answer": "Please Select",
                      "value": "5_18_86_0",
                      "default": true
                    },
                    {
                      "orderId": 2,
                      "answer": "No, we don?t have any new technologies other than what is prescribed by contract",
                      "value": "5_18_87_0",
                      "default": false
                    },
                    {
                      "orderId": 3,
                      "answer": "No, innovation approach is defined by client needs and are mostly looking to improve BAU legacy technologies",
                      "value": "5_18_88_1",
                      "default": false
                    },
                    {
                      "orderId": 4,
                      "answer": "Yes, to a small level where technologies are defined by scope of new work being done on newer technologies",
                      "value": "5_18_89_2",
                      "default": false
                    },
                    {
                      "orderId": 5,
                      "answer": "Yes, strong partnership with vendors and Accenture Labs etc. to bring latest SMAC/ digital technologies in the scope of work",
                      "value": "5_18_90_3",
                      "default": false
                    }
                  ]
                },
                {
                  "id": 19,
                  "question": "Do you have a co-innovation nomination?",
                  "orderId": 2,
                  "options": [
                    {
                      "orderId": 1,
                      "answer": "Please Select",
                      "value": "5_19_91_0",
                      "default": true
                    },
                    {
                      "orderId": 2,
                      "answer": "No, we don?t co-innovate with our client yet",
                      "value": "5_19_92_0",
                      "default": false
                    },
                    {
                      "orderId": 3,
                      "answer": "No, we don?t have any co-innovation nomination",
                      "value": "5_19_93_1",
                      "default": false
                    },
                    {
                      "orderId": 4,
                      "answer": "Yes, we have demonstrated co-innovation ideas in IG level forums",
                      "value": "5_19_94_2",
                      "default": false
                    },
                    {
                      "orderId": 5,
                      "answer": "Yes, we have demonstrated co-innovation ideas across IG level forums in ATCI driven co-innovation competitions.",
                      "value": "5_19_95_3",
                      "default": false
                    }
                  ]
                },
                {
                  "id": 20,
                  "question": "What is the stakeholder involvement level in innovation program?",
                  "orderId": 3,
                  "options": [
                    {
                      "orderId": 1,
                      "answer": "Please Select",
                      "value": "5_20_96_0",
                      "default": true
                    },
                    {
                      "orderId": 2,
                      "answer": "No involvement of client yet",
                      "value": "5_20_97_0",
                      "default": false
                    },
                    {
                      "orderId": 3,
                      "answer": "Individual business leads",
                      "value": "5_20_98_1",
                      "default": false
                    },
                    {
                      "orderId": 4,
                      "answer": "LoB executive sponsors",
                      "value": "5_20_99_2",
                      "default": false
                    },
                    {
                      "orderId": 5,
                      "answer": "CXO level participation and sponsorship in innovation initiatives",
                      "value": "5_20_100_3",
                      "default": false
                    }
                  ]
                },
                {
                  "id": 21,
                  "question": "What are the high impact ideas to the client?",
                  "orderId": 4,
                  "options": [
                    {
                      "orderId": 1,
                      "answer": "Please Select",
                      "value": "5_21_101_0",
                      "default": true
                    },
                    {
                      "orderId": 2,
                      "answer": "We have not discussed any high impact ideas with client yet",
                      "value": "5_21_102_0",
                      "default": false
                    },
                    {
                      "orderId": 3,
                      "answer": "No, we don?t have any high impact ideas suggested to client but are mostly CI driven outcomes",
                      "value": "5_21_103_1",
                      "default": false
                    },
                    {
                      "orderId": 4,
                      "answer": "Significant business benefits to client with value realized will be at least $5M-10M per year",
                      "value": "5_21_104_2",
                      "default": false
                    },
                    {
                      "orderId": 5,
                      "answer": "Very significant business benefits to client with value realized will be at least >$10M per year",
                      "value": "5_21_105_3",
                      "default": false
                    }
                  ]
                },
                {
                  "id": 22,
                  "question": "What are the business benefits enabled and realized in $ value w.r.t innovation?",
                  "orderId": 5,
                  "options": [
                    {
                      "orderId": 1,
                      "answer": "Please Select",
                      "value": "5_22_106_0",
                      "default": true
                    },
                    {
                      "orderId": 2,
                      "answer": "Business benefits realized will be less than $1M per year",
                      "value": "5_22_107_0",
                      "default": false
                    },
                    {
                      "orderId": 3,
                      "answer": "Business benefits realized less than $1M-$4.9M value per year",
                      "value": "5_22_108_1",
                      "default": false
                    },
                    {
                      "orderId": 4,
                      "answer": "Business benefits realized will be at least $5M-10M per year",
                      "value": "5_22_109_2",
                      "default": false
                    },
                    {
                      "orderId": 5,
                      "answer": "Business benefits realized will be at least >$10M per year",
                      "value": "5_22_110_3",
                      "default": false
                    }
                  ]
                }
              ]
            },
            {
              "id": 6,
              "innovationParam": "Client Testimonials (Audio & Video)",
              "orderId": 6,
              "questions": [
                {
                  "id": 23,
                  "question": "Do you have any co-innovation stories ?",
                  "orderId": 1,
                  "options": [
                    {
                      "orderId": 1,
                      "answer": "Please Select",
                      "value": "6_23_111_0",
                      "default": true
                    },
                    {
                      "orderId": 2,
                      "answer": "No we don?t have a program to define any co-innovation stories",
                      "value": "6_23_112_0",
                      "default": false
                    },
                    {
                      "orderId": 3,
                      "answer": "No client testimonials on innovation driven outcomes",
                      "value": "6_23_113_1",
                      "default": false
                    },
                    {
                      "orderId": 4,
                      "answer": "Yes, but they are not developed to share on the innovation platform",
                      "value": "6_23_114_2",
                      "default": false
                    },
                    {
                      "orderId": 5,
                      "answer": "Yes, we have consistent few co-innovation stories which are used as references in Accenture discussions across IGs on innovation",
                      "value": "6_23_115_3",
                      "default": false
                    }
                  ]
                },
                {
                  "id": 24,
                  "question": "What is the stakeholder level for client testimonial ?",
                  "orderId": 2,
                  "options": [
                    {
                      "orderId": 1,
                      "answer": "Please Select",
                      "value": "6_24_116_0",
                      "default": true
                    },
                    {
                      "orderId": 2,
                      "answer": "No client co-innovation program",
                      "value": "6_24_117_0",
                      "default": false
                    },
                    {
                      "orderId": 3,
                      "answer": "No involvement with client stakeholders yet",
                      "value": "6_24_118_1",
                      "default": false
                    },
                    {
                      "orderId": 4,
                      "answer": "Mid level Management",
                      "value": "6_24_119_2",
                      "default": false
                    },
                    {
                      "orderId": 5,
                      "answer": "LOB leads and CXO endorsements",
                      "value": "6_24_120_3",
                      "default": false
                    }
                  ]
                },
                {
                  "id": 25,
                  "question": "Do you have any video and/or audio testimonials?",
                  "orderId": 3,
                  "options": [
                    {
                      "orderId": 1,
                      "answer": "Please Select",
                      "value": "6_25_121_0",
                      "default": true
                    },
                    {
                      "orderId": 2,
                      "answer": "No client co-innovation program",
                      "value": "6_25_122_0",
                      "default": false
                    },
                    {
                      "orderId": 3,
                      "answer": "No client testimonials on innovation driven outcomes",
                      "value": "6_25_123_1",
                      "default": false
                    },
                    {
                      "orderId": 4,
                      "answer": "Yes, mid level management endorsements and testimonials",
                      "value": "6_25_124_2",
                      "default": false
                    },
                    {
                      "orderId": 5,
                      "answer": "Yes, CXO level management endorsements and testimonials",
                      "value": "6_25_125_3",
                      "default": false
                    }
                  ]
                },
                {
                  "id": 26,
                  "question": "Can we reference your client for innovation?",
                  "orderId": 4,
                  "options": [
                    {
                      "orderId": 1,
                      "answer": "Please Select",
                      "value": "6_26_126_0",
                      "default": true
                    },
                    {
                      "orderId": 2,
                      "answer": "No client co-innovation program",
                      "value": "6_26_127_0",
                      "default": false
                    },
                    {
                      "orderId": 3,
                      "answer": "No, we cant use any client reference",
                      "value": "6_26_128_1",
                      "default": false
                    },
                    {
                      "orderId": 4,
                      "answer": "Yes, but need client approvals",
                      "value": "6_26_129_2",
                      "default": false
                    },
                    {
                      "orderId": 5,
                      "answer": "Yes, client want to share success stories across platforms / Media savvy clients",
                      "value": "6_26_130_3",
                      "default": false
                    }
                  ]
                }
              ]
            },
            {
              "id": 7,
              "innovationParam": "Leverage Accenture Innovation Architecture",
              "orderId": 7,
              "questions": [
                {
                  "id": 27,
                  "question": "Do you involve Accenture Studio / Accenture Labs / Ecosystem partners to solve client problems?",
                  "orderId": 1,
                  "options": [
                    {
                      "orderId": 1,
                      "answer": "Please Select",
                      "value": "7_27_131_0",
                      "default": true
                    },
                    {
                      "orderId": 2,
                      "answer": "No, we don?t involve Accenture Innovation ecosystem yet",
                      "value": "7_27_132_0",
                      "default": false
                    },
                    {
                      "orderId": 3,
                      "answer": "Yes, Some form of collaboration exists with Accenture Labs/Studio, mostly for reference purposes, for developing rudimentary innovation tools.",
                      "value": "7_27_133_1",
                      "default": false
                    },
                    {
                      "orderId": 4,
                      "answer": "Yes, Enhanced level of involvement exists with Accenture Studio/Lab. However, there have been few Innovation outcomes driven collaboratively between Accenture Labs/Studios and projects .",
                      "value": "7_27_134_2",
                      "default": false
                    },
                    {
                      "orderId": 5,
                      "answer": "Yes, A very high level of involvement with Accenture Studio /Labs. There exists an extensive use of innovation tool, that has resulted in a strategic partnership with Accenture Labs/Studio. Delivery and innovation outcomes are jointly funded by client",
                      "value": "7_27_135_3",
                      "default": false
                    }
                  ]
                },
                {
                  "id": 28,
                  "question": "How do you demonstrate leveraging industry assets?",
                  "orderId": 2,
                  "options": [
                    {
                      "orderId": 1,
                      "answer": "Please Select",
                      "value": "7_28_136_0",
                      "default": true
                    },
                    {
                      "orderId": 2,
                      "answer": "We don?t have opportunities to leverage industry assets yet",
                      "value": "7_28_137_0",
                      "default": false
                    },
                    {
                      "orderId": 3,
                      "answer": "Accenture Studio and Accenture Labs solutions have not been used to suggest possible solutions to the client problem statements.",
                      "value": "7_28_138_1",
                      "default": false
                    },
                    {
                      "orderId": 4,
                      "answer": "Accenture Studio and Accenture Labs solutions have been used to suggest possible solutions to the client problem statements, However, these suggestions include the use of rudimentary innovation tools only.",
                      "value": "7_28_139_2",
                      "default": false
                    },
                    {
                      "orderId": 5,
                      "answer": "Accenture Studio and Accenture Labs solutions have been used to suggest possible solutions to the client problem statements, There is an extensive use of innovation tools, provided by Accenture Studio/Labs, to suggest solutions to client problems.",
                      "value": "7_28_140_3",
                      "default": false
                    }
                  ]
                },
                {
                  "id": 29,
                  "question": "Do you plan for Innovation Hub visits during client visits?",
                  "orderId": 3,
                  "options": [
                    {
                      "orderId": 1,
                      "answer": "Please Select",
                      "value": "7_29_141_0",
                      "default": true
                    },
                    {
                      "orderId": 2,
                      "answer": "No, its not in agenda at all",
                      "value": "7_29_142_0",
                      "default": false
                    },
                    {
                      "orderId": 3,
                      "answer": "Yes, Innovation Hub visits are in agenda but not mandatory",
                      "value": "7_29_143_1",
                      "default": false
                    },
                    {
                      "orderId": 4,
                      "answer": "Yes, Innovation Hub / Studio visits are planned occasionally for client visits. However, not for all client visits.",
                      "value": "7_29_144_2",
                      "default": false
                    },
                    {
                      "orderId": 5,
                      "answer": "Yes, All client visits include a session at the Innovation Hub.",
                      "value": "7_29_145_3",
                      "default": false
                    }
                  ]
                },
                {
                  "id": 30,
                  "question": "Do you remote showcase Accenture Studio / Lab assets to your clients?",
                  "orderId": 4,
                  "options": [
                    {
                      "orderId": 1,
                      "answer": "Please Select",
                      "value": "7_30_146_0",
                      "default": true
                    },
                    {
                      "orderId": 2,
                      "answer": "No, we don?t discuss any such assets with client",
                      "value": "7_30_147_0",
                      "default": false
                    },
                    {
                      "orderId": 3,
                      "answer": "No, Accenture Studio / Lab assets are mentioned but not mandatory to showcase any such assets",
                      "value": "7_30_148_1",
                      "default": false
                    },
                    {
                      "orderId": 4,
                      "answer": "Yes, Accenture Studio / Lab assets are showcased to clients. However, not extensively ",
                      "value": "7_30_149_2",
                      "default": false
                    },
                    {
                      "orderId": 5,
                      "answer": "Yes, Accenture Studio / Lab assets are extensively showcased to clients.",
                      "value": "7_30_150_3",
                      "default": false
                    }
                  ]
                }
              ]
            },
            {
              "id": 8,
              "innovationParam": "Contribution to Accenture Innovation Architecture",
              "orderId": 8,
              "questions": [
                {
                  "id": 31,
                  "question": "Do you plan account showcases at Accenture Innovation Hub?",
                  "orderId": 1,
                  "options": [
                    {
                      "orderId": 1,
                      "answer": "Please Select",
                      "value": "8_31_151_0",
                      "default": true
                    },
                    {
                      "orderId": 2,
                      "answer": "No, we don?t have that in agenda",
                      "value": "8_31_152_0",
                      "default": false
                    },
                    {
                      "orderId": 3,
                      "answer": "No, we have a plan to showcase but not working towards and don?t have a timeline",
                      "value": "8_31_153_1",
                      "default": false
                    },
                    {
                      "orderId": 4,
                      "answer": "Yes, Few stories, using basic level of Automation, planned in the near future and is in roadmap for this year",
                      "value": "8_31_154_2",
                      "default": false
                    },
                    {
                      "orderId": 5,
                      "answer": "Yes, High Impact Story boards have been showcased at the Accenture Innovation Hub. These stories have a high degree of re-usability across industries and have resulted in co-partnerships with client to increase sales and business development.",
                      "value": "8_31_155_3",
                      "default": false
                    }
                  ]
                },
                {
                  "id": 32,
                  "question": "Do you collaborate with Accenture Innovation Hub / Accenture Studio for client innovation framework / architecture?",
                  "orderId": 2,
                  "options": [
                    {
                      "orderId": 1,
                      "answer": "Please Select",
                      "value": "8_32_156_0",
                      "default": true
                    },
                    {
                      "orderId": 2,
                      "answer": "No, we don?t have that in agenda",
                      "value": "8_32_157_0",
                      "default": false
                    },
                    {
                      "orderId": 3,
                      "answer": "Yes, Few stories have been created in collaboration with Accenture Innovation Hub/Accenture Studio using basic levels of Automation for client business benefit.",
                      "value": "8_32_158_1",
                      "default": false
                    },
                    {
                      "orderId": 4,
                      "answer": "Yes, High Impact Story board have been created with Accenture Innovation hub/Accenture Studio,  to realize business benefits ($5M-10M per year);",
                      "value": "8_32_159_2",
                      "default": false
                    },
                    {
                      "orderId": 5,
                      "answer": "Yes, Very High Impact Story board have been created with Accenture Innovation hub/Accenture Studio, to realize business benefits (>$10M per year);Re-usability across various industry sectors - Very High.Co-partnerships created with client for future sales and business development",
                      "value": "8_32_160_3",
                      "default": false
                    }
                  ]
                },
                {
                  "id": 33,
                  "question": "Do you showcase client assets to Accenture Innovation Hub/ Accenture Studio?",
                  "orderId": 3,
                  "options": [
                    {
                      "orderId": 1,
                      "answer": "Please Select",
                      "value": "8_33_161_0",
                      "default": true
                    },
                    {
                      "orderId": 2,
                      "answer": "No, we don?t have that in agenda",
                      "value": "8_33_162_0",
                      "default": false
                    },
                    {
                      "orderId": 3,
                      "answer": "No, Client Assets have not been showcased to the Accenture Innovation Hub/ Accenture Studio yet",
                      "value": "8_33_163_1",
                      "default": false
                    },
                    {
                      "orderId": 4,
                      "answer": "Yes, Few client assets have been showcased (or planned to showcase in the near future) to the Accenture Innovation Hub / Accenture Studio. These assets do not have cross industry re-usability, however can be re-used in the same industry.",
                      "value": "8_33_164_2",
                      "default": false
                    },
                    {
                      "orderId": 5,
                      "answer": "Yes, Very High Impact client assets have been showcased to the Accenture Innovation Hub/ Accenture Studio. These assets have cross industry re-usability.",
                      "value": "8_33_165_3",
                      "default": false
                    }
                  ]
                }
              ]
            }
          ]
        }
      }



}*/