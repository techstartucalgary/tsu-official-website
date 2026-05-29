import exec2023 from "../../images/previousTeam/exec_23.png";
import exec2022 from "../../images/previousTeam/exec_22.png";
import exec2021 from "../../images/previousTeam/exec_21.png";

export type PrevExecTeam = {
  year : string;
  picture: string;
  members: {name: string, role: string, linkedin_url: string}[];
};

export const prevExecTeamList : PrevExecTeam[] =[
  {
    "year": "2021-2022",
    "picture": exec2021,
    "members": [
      {
        "name": "Joel Happ",
        "role": "Co-President",
        "linkedin_url": "https://www.linkedin.com/in/joel-happ/"
      },
      {
        "name": "Naureen Othi",
        "role": "Co-President",
        "linkedin_url": "https://www.linkedin.com/mwlite/in/naureen-othi"
      },

      {
        "name": "Fedor Prokopchuk",
        "role": "VP Strategy",
        "linkedin_url": "https://www.linkedin.com/in/fedor-prokopchuk-707668a6/"
      },
      {
        "name": "Luke Hollinda",
        "role": "VP External",
        "linkedin_url": "https://www.linkedin.com/in/luke-hollinda-89270a183/?originalSubdomain=ca"
      },
      {
        "name": "Amanda Nguyen",
        "role": "VP Community",
        "linkedin_url": "https://www.linkedin.com/in/amanda-nguyen-b9146620b/"
      },
      {
        "name": "Tyler Chan",
        "role": "VP Communications",
        "linkedin_url": "https://www.linkedin.com/in/chan-tyler/"
      },
      {
        "name": "Sareen Singh",
        "role": "VP Events",
        "linkedin_url": "https://www.linkedin.com/in/sareen-singh-309b55173/?originalSubdomain=ca"
      },
      {
        "name": "Nurgul Akhshatayeva",
        "role": "VP Internal",
        "linkedin_url": "https://www.linkedin.com/in/nurgul-akhshatayeva-6821b0205/"
      },
      {
        "name": "Godwin Saure",
        "role": "VP Finance",
        "linkedin_url": "https://www.linkedin.com/in/godwin-saure/"
      },
      {
        "name": "Terry Fu",
        "role": "VP Development",
        "linkedin_url": "https://www.linkedin.com/in/terryfu33/"
      },
      {
        "name": "Vidhi Soni",
        "role": "Jr VP External",
        "linkedin_url": "https://www.linkedin.com/in/vidhi-soni-5ba193196/"
      }
    ]
  },
  {
    "year": "2022-2023",
    "picture": exec2022,
    "members": [
      {
        "name": "Niyousha Raeesinejad",
        "role": "Co-President",
        "linkedin_url": "https://www.linkedin.com/in/niyoushar/"
      },
      {
        "name": "Rajpreet Gill",
        "role": "Co-President",
        "linkedin_url": "https://www.linkedin.com/in/rajpreet-gill/"
      },

      {
        "name": "Fedor Prokopchuk",
        "role": "VP Strategy",
        "linkedin_url": "https://www.linkedin.com/in/fedor-prokopchuk-707668a6/"
      },

      {
        "name": "Noel Thomas",
        "role": "VP Events",
        "linkedin_url": "https://www.linkedin.com/in/noelfranthomas/"
      },
      {
        "name": "Ben Shi",
        "role": "Jr VP Events",
        "linkedin_url": "https://www.linkedin.com/in/ben-shi-228651189"
      },

      {
        "name": "Carol Wang",
        "role": "VP Internal",
        "linkedin_url": "https://www.linkedin.com/in/carol-wang3116/"
      },
      {
        "name": "Tyler Chan",
        "role": "VP Communications",
        "linkedin_url": "https://www.linkedin.com/in/chan-tyler/"
      },
      {
        "name": "Sahiti Akella",
        "role": "Jr VP Communications",
        "linkedin_url": "https://www.linkedin.com/in/sahiti-akella/"
      },

      {
        "name": "Estefy Caballero",
        "role": "Media Commissioner",
        "linkedin_url": "https://www.linkedin.com/in/estefy-caballero-864aab25a"
      },
      {
        "name": "Kevin Amado",
        "role": "VP Development",
        "linkedin_url": "https://www.linkedin.com/in/kamadorueda/"
      },

      {
        "name": "Rachel Renegado",
        "role": "Senior Software Advisor",
        "linkedin_url": "https://www.linkedin.com/in/rachel-renegado-544409201"
      },

      {
        "name": "Mya Gill",
        "role": "VP Community",
        "linkedin_url": "https://www.linkedin.com/in/mya-gill-71a8451b8/"
      },
      {
        "name": "Labib Afshar Ahmed",
        "role": "VP Finance",
        "linkedin_url": "https://www.linkedin.com/in/labib-afsar-ahmed/"
      },
      {
        "name": "Nathan Karbonik",
        "role": "VP External",
        "linkedin_url": "https://www.linkedin.com/in/nathan-karbonik/"
      },
      {
        "name": "Sareen Singh",
        "role": "Advisor",
        "linkedin_url": "https://www.linkedin.com/in/sareen-singh-309b55173/?originalSubdomain=ca"
      }
    ]
  },
  {
    "year": "2023-2024",
    "picture": exec2023,
    "members": [
      {
        "name": "Niyousha Raeesinejad",
        "role": "Co-President",
        "linkedin_url": "https://www.linkedin.com/in/niyoushar/"
      },
      {
        "name": "Tyler Chan",
        "role": "Co-President",
        "linkedin_url": "https://www.linkedin.com/in/chan-tyler/"
      },
      {
        "name": "Labib Afshar Ahmed",
        "role": "President Elect / VP Finance",
        "linkedin_url": "https://www.linkedin.com/in/labib-afsar-ahmed/"
      },
      {
        "name": "Nathan Karbonik",
        "role": "External Advisor",
        "linkedin_url": "https://www.linkedin.com/in/nathan-karbonik/"
      },
      {
        "name": "Ana Laura Espinosa Garza",
        "role": "VP External",
        "linkedin_url": "https://www.linkedin.com/in/ana-laura-espinosa-garza-136a281b0/"
      },
      {
        "name": "Cindy Cheng",
        "role": "Jr. VP External",
        "linkedin_url": "https://www.linkedin.com/in/cindy-cheng-66328a2b8/"
      },
      {
        "name": "Carol Wang",
        "role": "VP Community",
        "linkedin_url": "https://www.linkedin.com/in/carol-wang3116/"
      },
      {
        "name": "Estefy Caballero",
        "role": "Co-VP Communications",
        "linkedin_url": "https://www.linkedin.com/in/estefy-caballero-864aab25a"
      },
      {
        "name": "Enioluwafe Balogun",
        "role": "Co-VP Communications",
        "linkedin_url": "https://www.linkedin.com/in/enioluwafe-balogun/"
      },
      {
        "name": "Leo Wei",
        "role": "Co-VP Events",
        "linkedin_url": "https://www.linkedin.com/in/leo-wei/"
      },
      {
        "name": "Maheen Raza",
        "role": "Co-VP Events",
        "linkedin_url": "https://www.linkedin.com/in/maheen-raza-40b780229/"
      },
      {
        "name": "Azlfa Anwar",
        "role": "Jr. VP Events",
        "linkedin_url": "https://www.linkedin.com/in/azlfa-anwar-20a040218/"
      },
      {
        "name": "Janita Mahum",
        "role": "VP Design",
        "linkedin_url": "https://www.linkedin.com/in/janita-mahum-a5484a1b9/"
      },
      {
        "name": "Ben Schmidt",
        "role": "VP Development",
        "linkedin_url": "https://www.linkedin.com/in/benschmidt2343/"
      },
      {
        "name": "Abod Abbas",
        "role": "Senior Technical Advisor",
        "linkedin_url": "https://www.linkedin.com/in/abod-a-427274198/"
      },
      {
        "name": "Wai Ka Wong",
        "role": "Technical Advisor",
        "linkedin_url": "https://www.linkedin.com/in/waika-wong/"
      },

      {
        "name": "Sajwal Pageni",
        "role": "VP Strategy",
        "linkedin_url": "https://www.linkedin.com/in/sajwal/"
      },
      {
        "name": "Fedor Prokopchuk",
        "role": "Business Strategy Advisor",
        "linkedin_url": "https://www.linkedin.com/in/fedor-prokopchuk-707668a6/"
      },
      {
        "name": "Brian Nguyen",
        "role": "Senior Web Developer",
        "linkedin_url": "https://www.linkedin.com/in/nguyennbrian/"
      },
      {
        "name": "Sahiti Akella",
        "role": "Web Developer",
        "linkedin_url": "https://www.linkedin.com/in/sahiti-akella/"
      },
      {
        "name": "Isaiah Asaolu",
        "role": "Web Developer",
        "linkedin_url": "https://www.linkedin.com/in/isaiah-a-2001/"
      }
    ]
  }
]
