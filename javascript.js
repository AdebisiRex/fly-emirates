const flights = [
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Ngurah Rai International",
    "timezone": "Asia/Makassar",
    "iata": "DPS",
    "icao": "WADD",
    "terminal": "D",
    "gate": null,
    "delay": null,
    "scheduled": "2022-05-29T14:20:00+00:00",
    "estimated": "2022-05-29T14:20:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Soekarno-Hatta International",
    "timezone": "Asia/Jakarta",
    "iata": "CGK",
    "icao": "WIII",
    "terminal": "3",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T15:15:00+00:00",
    "estimated": "2022-05-29T15:15:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "KLM",
    "iata": "KL",
    "icao": "KLM"
    },
    "flight": {
    "number": "4039",
    "iata": "KL4039",
    "icao": "KLM4039",
    "codeshared": {
    "airline_name": "garuda indonesia",
    "airline_iata": "ga",
    "airline_icao": "gia",
    "flight_number": "409",
    "flight_iata": "ga409",
    "flight_icao": "gia409"
    }
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "active",
    "departure": {
    "airport": "Charles De Gaulle",
    "timezone": "Europe/Paris",
    "iata": "CDG",
    "icao": "LFPG",
    "terminal": "2G",
    "gate": "G22",
    "delay": null,
    "scheduled": "2022-05-29T07:35:00+00:00",
    "estimated": "2022-05-29T07:35:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Frankfurt International Airport",
    "timezone": "Europe/Berlin",
    "iata": "FRA",
    "icao": "EDDF",
    "terminal": "2",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T09:00:00+00:00",
    "estimated": "2022-05-29T09:00:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Air Mauritius",
    "iata": "MK",
    "icao": "MAU"
    },
    "flight": {
    "number": "9388",
    "iata": "MK9388",
    "icao": "MAU9388",
    "codeshared": {
    "airline_name": "air france",
    "airline_iata": "af",
    "airline_icao": "afr",
    "flight_number": "1518",
    "flight_iata": "af1518",
    "flight_icao": "afr1518"
    }
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "active",
    "departure": {
    "airport": "Guilin",
    "timezone": "Asia/Shanghai",
    "iata": "KWL",
    "icao": "ZGKL",
    "terminal": null,
    "gate": null,
    "delay": null,
    "scheduled": "2022-05-29T13:10:00+00:00",
    "estimated": "2022-05-29T13:10:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Hangzhou",
    "timezone": "Asia/Shanghai",
    "iata": "HGH",
    "icao": "ZSHC",
    "terminal": null,
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T15:15:00+00:00",
    "estimated": "2022-05-29T15:15:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "China Express Air",
    "iata": "G5",
    "icao": "HXA"
    },
    "flight": {
    "number": "8322",
    "iata": "G58322",
    "icao": "HXA8322",
    "codeshared": {
    "airline_name": "shandong airlines",
    "airline_iata": "sc",
    "airline_icao": "cdg",
    "flight_number": "4646",
    "flight_iata": "sc4646",
    "flight_icao": "cdg4646"
    }
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "active",
    "departure": {
    "airport": "John C. Munroe",
    "timezone": "America/Toronto",
    "iata": "YHM",
    "icao": "CYHM",
    "terminal": null,
    "gate": null,
    "delay": null,
    "scheduled": "2022-05-29T01:10:00+00:00",
    "estimated": "2022-05-29T01:10:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Heathrow",
    "timezone": "Europe/London",
    "iata": "LHR",
    "icao": "EGLL",
    "terminal": null,
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T13:30:00+00:00",
    "estimated": "2022-05-29T13:30:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Cargojet",
    "iata": "W8",
    "icao": "CJT"
    },
    "flight": {
    "number": "985",
    "iata": "W8985",
    "icao": "CJT985",
    "codeshared": null
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "active",
    "departure": {
    "airport": "Ronchi Dei Legionari",
    "timezone": "Europe/Rome",
    "iata": "TRS",
    "icao": "LIPQ",
    "terminal": "1",
    "gate": "9",
    "delay": null,
    "scheduled": "2022-05-29T07:00:00+00:00",
    "estimated": "2022-05-29T07:00:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Leonardo Da Vinci (Fiumicino)",
    "timezone": "Europe/Rome",
    "iata": "FCO",
    "icao": "LIRF",
    "terminal": "1",
    "gate": null,
    "baggage": "26",
    "delay": null,
    "scheduled": "2022-05-29T08:05:00+00:00",
    "estimated": "2022-05-29T08:05:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Etihad Airways",
    "iata": "EY",
    "icao": "ETD"
    },
    "flight": {
    "number": "2900",
    "iata": "EY2900",
    "icao": "ETD2900",
    "codeshared": {
    "airline_name": "italia trasporto aereo",
    "airline_iata": "az",
    "airline_icao": "ity",
    "flight_number": "1356",
    "flight_iata": "az1356",
    "flight_icao": "ity1356"
    }
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "active",
    "departure": {
    "airport": "Singapore Changi",
    "timezone": "Asia/Singapore",
    "iata": "SIN",
    "icao": "WSSS",
    "terminal": "1",
    "gate": "D36",
    "delay": 19,
    "scheduled": "2022-05-29T12:00:00+00:00",
    "estimated": "2022-05-29T12:00:00+00:00",
    "actual": "2022-05-29T12:19:00+00:00",
    "estimated_runway": "2022-05-29T12:19:00+00:00",
    "actual_runway": "2022-05-29T12:19:00+00:00"
    },
    "arrival": {
    "airport": "Perth International",
    "timezone": "Australia/Perth",
    "iata": "PER",
    "icao": "YPPH",
    "terminal": "1",
    "gate": "53",
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T17:00:00+00:00",
    "estimated": "2022-05-29T17:00:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Singapore Airlines",
    "iata": "SQ",
    "icao": "SIA"
    },
    "flight": {
    "number": "8492",
    "iata": "SQ8492",
    "icao": "SIA8492",
    "codeshared": {
    "airline_name": "scoot",
    "airline_iata": "tr",
    "airline_icao": "tgw",
    "flight_number": "8",
    "flight_iata": "tr8",
    "flight_icao": "tgw8"
    }
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Dresden Airport",
    "timezone": "Europe/Berlin",
    "iata": "DRS",
    "icao": "EDDC",
    "terminal": null,
    "gate": "005",
    "delay": null,
    "scheduled": "2022-05-29T13:00:00+00:00",
    "estimated": "2022-05-29T13:00:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Franz Josef Strauss",
    "timezone": "Europe/Berlin",
    "iata": "MUC",
    "icao": "EDDM",
    "terminal": "2",
    "gate": "G81",
    "baggage": "B05",
    "delay": null,
    "scheduled": "2022-05-29T13:55:00+00:00",
    "estimated": "2022-05-29T13:55:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Lufthansa",
    "iata": "LH",
    "icao": "DLH"
    },
    "flight": {
    "number": "2125",
    "iata": "LH2125",
    "icao": "DLH2125",
    "codeshared": null
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Dresden Airport",
    "timezone": "Europe/Berlin",
    "iata": "DRS",
    "icao": "EDDC",
    "terminal": null,
    "gate": "005",
    "delay": null,
    "scheduled": "2022-05-29T13:00:00+00:00",
    "estimated": "2022-05-29T13:00:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Franz Josef Strauss",
    "timezone": "Europe/Berlin",
    "iata": "MUC",
    "icao": "EDDM",
    "terminal": "2",
    "gate": "G81",
    "baggage": "B05",
    "delay": null,
    "scheduled": "2022-05-29T13:55:00+00:00",
    "estimated": "2022-05-29T13:55:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "United Airlines",
    "iata": "UA",
    "icao": "UAL"
    },
    "flight": {
    "number": "8817",
    "iata": "UA8817",
    "icao": "UAL8817",
    "codeshared": {
    "airline_name": "lufthansa",
    "airline_iata": "lh",
    "airline_icao": "dlh",
    "flight_number": "2125",
    "flight_iata": "lh2125",
    "flight_icao": "dlh2125"
    }
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "active",
    "departure": {
    "airport": "Canberra",
    "timezone": "Australia/Sydney",
    "iata": "CBR",
    "icao": "YSCB",
    "terminal": null,
    "gate": null,
    "delay": 12,
    "scheduled": "2022-05-29T14:05:00+00:00",
    "estimated": "2022-05-29T14:05:00+00:00",
    "actual": "2022-05-29T14:16:00+00:00",
    "estimated_runway": "2022-05-29T14:16:00+00:00",
    "actual_runway": "2022-05-29T14:16:00+00:00"
    },
    "arrival": {
    "airport": "Adelaide International Airport",
    "timezone": "Australia/Adelaide",
    "iata": "ADL",
    "icao": "YPAD",
    "terminal": "1",
    "gate": "23",
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T15:25:00+00:00",
    "estimated": "2022-05-29T15:25:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Alliance Airlines",
    "iata": "QQ",
    "icao": "UTY"
    },
    "flight": {
    "number": "1977",
    "iata": "QQ1977",
    "icao": "UTY1977",
    "codeshared": null
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "landed",
    "departure": {
    "airport": "Canberra",
    "timezone": "Australia/Sydney",
    "iata": "CBR",
    "icao": "YSCB",
    "terminal": null,
    "gate": null,
    "delay": 4,
    "scheduled": "2022-05-29T13:35:00+00:00",
    "estimated": "2022-05-29T13:35:00+00:00",
    "actual": "2022-05-29T13:38:00+00:00",
    "estimated_runway": "2022-05-29T13:38:00+00:00",
    "actual_runway": "2022-05-29T13:38:00+00:00"
    },
    "arrival": {
    "airport": "Brisbane International",
    "timezone": "Australia/Brisbane",
    "iata": "BNE",
    "icao": "YBBN",
    "terminal": "D",
    "gate": "16",
    "baggage": "D01",
    "delay": null,
    "scheduled": "2022-05-29T15:15:00+00:00",
    "estimated": "2022-05-29T15:15:00+00:00",
    "actual": "2022-05-29T15:00:00+00:00",
    "estimated_runway": "2022-05-29T15:00:00+00:00",
    "actual_runway": "2022-05-29T15:00:00+00:00"
    },
    "airline": {
    "name": "Alliance Airlines",
    "iata": "QQ",
    "icao": "UTY"
    },
    "flight": {
    "number": "1908",
    "iata": "QQ1908",
    "icao": "UTY1908",
    "codeshared": null
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Aminu Kano International Airport",
    "timezone": "Africa/Lagos",
    "iata": "KAN",
    "icao": "DNKN",
    "terminal": null,
    "gate": null,
    "delay": null,
    "scheduled": "2022-05-29T09:40:00+00:00",
    "estimated": "2022-05-29T09:40:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Niamey",
    "timezone": "Africa/Niamey",
    "iata": "NIM",
    "icao": "DRRN",
    "terminal": "2E",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T11:10:00+00:00",
    "estimated": "2022-05-29T11:10:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Air Peace",
    "iata": "P4",
    "icao": "APK"
    },
    "flight": {
    "number": "7534",
    "iata": "P47534",
    "icao": "APK7534",
    "codeshared": null
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "General A. L. Rodriguez International",
    "timezone": "America/Tijuana",
    "iata": "TIJ",
    "icao": "MMTJ",
    "terminal": null,
    "gate": null,
    "delay": 10,
    "scheduled": "2022-05-29T00:10:00+00:00",
    "estimated": "2022-05-29T00:10:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Francisco J. Múgica Internacional",
    "timezone": "America/Mexico_City",
    "iata": "MLM",
    "icao": "MMMM",
    "terminal": null,
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T05:20:00+00:00",
    "estimated": "2022-05-29T05:20:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "VivaAerobus",
    "iata": "VB",
    "icao": "VIV"
    },
    "flight": {
    "number": "5018",
    "iata": "VB5018",
    "icao": "VIV5018",
    "codeshared": null
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Schiphol",
    "timezone": "Europe/Amsterdam",
    "iata": "AMS",
    "icao": "EHAM",
    "terminal": "2",
    "gate": "D22",
    "delay": null,
    "scheduled": "2022-05-29T07:55:00+00:00",
    "estimated": "2022-05-29T07:55:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Manchester Airport",
    "timezone": "Europe/London",
    "iata": "MAN",
    "icao": "EGCC",
    "terminal": "2",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T08:15:00+00:00",
    "estimated": "2022-05-29T08:15:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "China Southern Airlines",
    "iata": "CZ",
    "icao": "CSN"
    },
    "flight": {
    "number": "1376",
    "iata": "CZ1376",
    "icao": "CSN1376",
    "codeshared": {
    "airline_name": "klm",
    "airline_iata": "kl",
    "airline_icao": "klm",
    "flight_number": "1071",
    "flight_iata": "kl1071",
    "flight_icao": "klm1071"
    }
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Galileo Galilei",
    "timezone": "Europe/Rome",
    "iata": "PSA",
    "icao": "LIRP",
    "terminal": null,
    "gate": "9",
    "delay": null,
    "scheduled": "2022-05-29T11:00:00+00:00",
    "estimated": "2022-05-29T11:00:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Landvetter",
    "timezone": "Europe/Stockholm",
    "iata": "GOT",
    "icao": "ESGG",
    "terminal": "T1",
    "gate": null,
    "baggage": "1",
    "delay": null,
    "scheduled": "2022-05-29T13:30:00+00:00",
    "estimated": "2022-05-29T13:30:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Ryanair",
    "iata": "FR",
    "icao": "RYR"
    },
    "flight": {
    "number": "9487",
    "iata": "FR9487",
    "icao": "RYR9487",
    "codeshared": null
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Gold Coast (coolangatta)",
    "timezone": "Australia/Brisbane",
    "iata": "OOL",
    "icao": "YBCG",
    "terminal": "1",
    "gate": "8",
    "delay": null,
    "scheduled": "2022-05-29T16:00:00+00:00",
    "estimated": "2022-05-29T16:00:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Hobart",
    "timezone": "Australia/Hobart",
    "iata": "HBA",
    "icao": "YMHB",
    "terminal": "D",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T18:40:00+00:00",
    "estimated": "2022-05-29T18:40:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Jetstar",
    "iata": "JQ",
    "icao": "JST"
    },
    "flight": {
    "number": "696",
    "iata": "JQ696",
    "icao": "JST696",
    "codeshared": null
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Franz Josef Strauss",
    "timezone": "Europe/Berlin",
    "iata": "MUC",
    "icao": "EDDM",
    "terminal": "2",
    "gate": "G15",
    "delay": null,
    "scheduled": "2022-05-29T07:30:00+00:00",
    "estimated": "2022-05-29T07:30:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Düsseldorf International Airport",
    "timezone": "Europe/Berlin",
    "iata": "DUS",
    "icao": "EDDL",
    "terminal": "5",
    "gate": "A49",
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T08:40:00+00:00",
    "estimated": "2022-05-29T08:40:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Lufthansa",
    "iata": "LH",
    "icao": "DLH"
    },
    "flight": {
    "number": "2004",
    "iata": "LH2004",
    "icao": "DLH2004",
    "codeshared": null
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Auckland International",
    "timezone": "Pacific/Auckland",
    "iata": "AKL",
    "icao": "NZAA",
    "terminal": "D",
    "gate": "30",
    "delay": 10,
    "scheduled": "2022-05-29T17:40:00+00:00",
    "estimated": "2022-05-29T17:40:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Queenstown",
    "timezone": "Pacific/Auckland",
    "iata": "ZQN",
    "icao": "NZQN",
    "terminal": null,
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T19:25:00+00:00",
    "estimated": "2022-05-29T19:25:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Air New Zealand",
    "iata": "NZ",
    "icao": "ANZ"
    },
    "flight": {
    "number": "625",
    "iata": "NZ625",
    "icao": "ANZ625",
    "codeshared": null
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Penang International",
    "timezone": "Asia/Kuala_Lumpur",
    "iata": "PEN",
    "icao": "WMKP",
    "terminal": null,
    "gate": "B4",
    "delay": null,
    "scheduled": "2022-05-29T19:10:00+00:00",
    "estimated": "2022-05-29T19:10:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Sultan Abdul Aziz Shah",
    "timezone": "Asia/Kuala_Lumpur",
    "iata": "SZB",
    "icao": "WMSA",
    "terminal": null,
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T20:10:00+00:00",
    "estimated": "2022-05-29T20:10:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Batik Air",
    "iata": "ID",
    "icao": "BTK"
    },
    "flight": {
    "number": "1113",
    "iata": "ID1113",
    "icao": "BTK1113",
    "codeshared": null
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Ulanqab Jining Airport",
    "timezone": null,
    "iata": "UCB",
    "icao": "ZBUC",
    "terminal": null,
    "gate": null,
    "delay": null,
    "scheduled": "2022-05-29T18:00:00+00:00",
    "estimated": "2022-05-29T18:00:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Zhengzhou",
    "timezone": "Asia/Shanghai",
    "iata": "CGO",
    "icao": "ZHCC",
    "terminal": "2",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T19:30:00+00:00",
    "estimated": "2022-05-29T19:30:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Xiamen Airlines",
    "iata": "MF",
    "icao": "CXA"
    },
    "flight": {
    "number": "4458",
    "iata": "MF4458",
    "icao": "CXA4458",
    "codeshared": {
    "airline_name": "china southern airlines",
    "airline_iata": "cz",
    "airline_icao": "csn",
    "flight_number": "8206",
    "flight_iata": "cz8206",
    "flight_icao": "csn8206"
    }
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Kzyl-Orda",
    "timezone": "Asia/Qyzylorda",
    "iata": "KZO",
    "icao": "UAOO",
    "terminal": null,
    "gate": null,
    "delay": null,
    "scheduled": "2022-05-29T14:55:00+00:00",
    "estimated": "2022-05-29T14:55:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Almaty",
    "timezone": "Asia/Almaty",
    "iata": "ALA",
    "icao": "UAAA",
    "terminal": null,
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T17:25:00+00:00",
    "estimated": "2022-05-29T17:25:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Air Astana",
    "iata": "KC",
    "icao": "KZR"
    },
    "flight": {
    "number": "986",
    "iata": "KC986",
    "icao": "KZR986",
    "codeshared": null
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Frankfurt International Airport",
    "timezone": "Europe/Berlin",
    "iata": "FRA",
    "icao": "EDDF",
    "terminal": "1",
    "gate": "A3",
    "delay": null,
    "scheduled": "2022-05-29T09:55:00+00:00",
    "estimated": "2022-05-29T09:55:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Findel",
    "timezone": "Europe/Luxembourg",
    "iata": "LUX",
    "icao": "ELLX",
    "terminal": "A",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T10:35:00+00:00",
    "estimated": "2022-05-29T10:35:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "ANA",
    "iata": "NH",
    "icao": "ANA"
    },
    "flight": {
    "number": "7874",
    "iata": "NH7874",
    "icao": "ANA7874",
    "codeshared": {
    "airline_name": "lufthansa",
    "airline_iata": "lh",
    "airline_icao": "dlh",
    "flight_number": "392",
    "flight_iata": "lh392",
    "flight_icao": "dlh392"
    }
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Frankfurt International Airport",
    "timezone": "Europe/Berlin",
    "iata": "FRA",
    "icao": "EDDF",
    "terminal": "1",
    "gate": "A3",
    "delay": null,
    "scheduled": "2022-05-29T09:55:00+00:00",
    "estimated": "2022-05-29T09:55:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Findel",
    "timezone": "Europe/Luxembourg",
    "iata": "LUX",
    "icao": "ELLX",
    "terminal": "A",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T10:35:00+00:00",
    "estimated": "2022-05-29T10:35:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Luxair",
    "iata": "LG",
    "icao": "LGL"
    },
    "flight": {
    "number": "1902",
    "iata": "LG1902",
    "icao": "LGL1902",
    "codeshared": {
    "airline_name": "lufthansa",
    "airline_iata": "lh",
    "airline_icao": "dlh",
    "flight_number": "392",
    "flight_iata": "lh392",
    "flight_icao": "dlh392"
    }
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Frankfurt International Airport",
    "timezone": "Europe/Berlin",
    "iata": "FRA",
    "icao": "EDDF",
    "terminal": "1",
    "gate": "A3",
    "delay": null,
    "scheduled": "2022-05-29T09:55:00+00:00",
    "estimated": "2022-05-29T09:55:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Findel",
    "timezone": "Europe/Luxembourg",
    "iata": "LUX",
    "icao": "ELLX",
    "terminal": "A",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T10:35:00+00:00",
    "estimated": "2022-05-29T10:35:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Air Canada",
    "iata": "AC",
    "icao": "ACA"
    },
    "flight": {
    "number": "9087",
    "iata": "AC9087",
    "icao": "ACA9087",
    "codeshared": {
    "airline_name": "lufthansa",
    "airline_iata": "lh",
    "airline_icao": "dlh",
    "flight_number": "392",
    "flight_iata": "lh392",
    "flight_icao": "dlh392"
    }
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Findel",
    "timezone": "Europe/Luxembourg",
    "iata": "LUX",
    "icao": "ELLX",
    "terminal": null,
    "gate": "A11",
    "delay": null,
    "scheduled": "2022-05-29T11:00:00+00:00",
    "estimated": "2022-05-29T11:00:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Charles De Gaulle",
    "timezone": "Europe/Paris",
    "iata": "CDG",
    "icao": "LFPG",
    "terminal": "2G",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T12:00:00+00:00",
    "estimated": "2022-05-29T12:00:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Luxair",
    "iata": "LG",
    "icao": "LGL"
    },
    "flight": {
    "number": "8013",
    "iata": "LG8013",
    "icao": "LGL8013",
    "codeshared": null
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Findel",
    "timezone": "Europe/Luxembourg",
    "iata": "LUX",
    "icao": "ELLX",
    "terminal": null,
    "gate": "A11",
    "delay": null,
    "scheduled": "2022-05-29T11:00:00+00:00",
    "estimated": "2022-05-29T11:00:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Charles De Gaulle",
    "timezone": "Europe/Paris",
    "iata": "CDG",
    "icao": "LFPG",
    "terminal": "2G",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T12:00:00+00:00",
    "estimated": "2022-05-29T12:00:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Air France",
    "iata": "AF",
    "icao": "AFR"
    },
    "flight": {
    "number": "4603",
    "iata": "AF4603",
    "icao": "AFR4603",
    "codeshared": {
    "airline_name": "luxair",
    "airline_iata": "lg",
    "airline_icao": "lgl",
    "flight_number": "8013",
    "flight_iata": "lg8013",
    "flight_icao": "lgl8013"
    }
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Malay",
    "timezone": "Asia/Manila",
    "iata": "MPH",
    "icao": "RPVE",
    "terminal": null,
    "gate": null,
    "delay": null,
    "scheduled": "2022-05-29T16:20:00+00:00",
    "estimated": "2022-05-29T16:20:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Ninoy Aquino International",
    "timezone": "Asia/Manila",
    "iata": "MNL",
    "icao": "RPLL",
    "terminal": "4",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T17:20:00+00:00",
    "estimated": "2022-05-29T17:20:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Philippines AirAsia",
    "iata": "Z2",
    "icao": "APG"
    },
    "flight": {
    "number": "8214",
    "iata": "Z28214",
    "icao": "APG8214",
    "codeshared": null
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "active",
    "departure": {
    "airport": "Brisbane International",
    "timezone": "Australia/Brisbane",
    "iata": "BNE",
    "icao": "YBBN",
    "terminal": "I",
    "gate": "81",
    "delay": 1,
    "scheduled": "2022-05-29T14:45:00+00:00",
    "estimated": "2022-05-29T14:45:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Singapore Changi",
    "timezone": "Asia/Singapore",
    "iata": "SIN",
    "icao": "WSSS",
    "terminal": null,
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T20:45:00+00:00",
    "estimated": "2022-05-29T20:45:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "SAS",
    "iata": "SK",
    "icao": "SAS"
    },
    "flight": {
    "number": "8008",
    "iata": "SK8008",
    "icao": "SAS8008",
    "codeshared": {
    "airline_name": "singapore airlines",
    "airline_iata": "sq",
    "airline_icao": "sia",
    "flight_number": "236",
    "flight_iata": "sq236",
    "flight_icao": "sia236"
    }
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "active",
    "departure": {
    "airport": "Brisbane International",
    "timezone": "Australia/Brisbane",
    "iata": "BNE",
    "icao": "YBBN",
    "terminal": "I",
    "gate": "81",
    "delay": 1,
    "scheduled": "2022-05-29T14:45:00+00:00",
    "estimated": "2022-05-29T14:45:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Singapore Changi",
    "timezone": "Asia/Singapore",
    "iata": "SIN",
    "icao": "WSSS",
    "terminal": null,
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T20:45:00+00:00",
    "estimated": "2022-05-29T20:45:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "SWISS",
    "iata": "LX",
    "icao": "SWR"
    },
    "flight": {
    "number": "9019",
    "iata": "LX9019",
    "icao": "SWR9019",
    "codeshared": {
    "airline_name": "singapore airlines",
    "airline_iata": "sq",
    "airline_icao": "sia",
    "flight_number": "236",
    "flight_iata": "sq236",
    "flight_icao": "sia236"
    }
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "landed",
    "departure": {
    "airport": "Kingsford Smith",
    "timezone": "Australia/Sydney",
    "iata": "SYD",
    "icao": "YSSY",
    "terminal": "2",
    "gate": "36",
    "delay": 14,
    "scheduled": "2022-05-29T11:00:00+00:00",
    "estimated": "2022-05-29T11:00:00+00:00",
    "actual": "2022-05-29T11:14:00+00:00",
    "estimated_runway": "2022-05-29T11:14:00+00:00",
    "actual_runway": "2022-05-29T11:14:00+00:00"
    },
    "arrival": {
    "airport": "Tullamarine",
    "timezone": "Australia/Melbourne",
    "iata": "MEL",
    "icao": "YMML",
    "terminal": "3",
    "gate": "4",
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T12:35:00+00:00",
    "estimated": "2022-05-29T12:35:00+00:00",
    "actual": "2022-05-29T12:19:00+00:00",
    "estimated_runway": "2022-05-29T12:19:00+00:00",
    "actual_runway": "2022-05-29T12:19:00+00:00"
    },
    "airline": {
    "name": "Air Canada",
    "iata": "AC",
    "icao": "ACA"
    },
    "flight": {
    "number": "2792",
    "iata": "AC2792",
    "icao": "ACA2792",
    "codeshared": {
    "airline_name": "virgin australia",
    "airline_iata": "va",
    "airline_icao": "voz",
    "flight_number": "834",
    "flight_iata": "va834",
    "flight_icao": "voz834"
    }
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "active",
    "departure": {
    "airport": "Kingsford Smith",
    "timezone": "Australia/Sydney",
    "iata": "SYD",
    "icao": "YSSY",
    "terminal": "1",
    "gate": "33",
    "delay": 34,
    "scheduled": "2022-05-29T11:10:00+00:00",
    "estimated": "2022-05-29T11:10:00+00:00",
    "actual": "2022-05-29T11:43:00+00:00",
    "estimated_runway": "2022-05-29T11:43:00+00:00",
    "actual_runway": "2022-05-29T11:43:00+00:00"
    },
    "arrival": {
    "airport": "Singapore Changi",
    "timezone": "Asia/Singapore",
    "iata": "SIN",
    "icao": "WSSS",
    "terminal": "1",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T17:50:00+00:00",
    "estimated": "2022-05-29T17:50:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Air France",
    "iata": "AF",
    "icao": "AFR"
    },
    "flight": {
    "number": "9670",
    "iata": "AF9670",
    "icao": "AFR9670",
    "codeshared": {
    "airline_name": "qantas",
    "airline_iata": "qf",
    "airline_icao": "qfa",
    "flight_number": "81",
    "flight_iata": "qf81",
    "flight_icao": "qfa81"
    }
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "active",
    "departure": {
    "airport": "Kingsford Smith",
    "timezone": "Australia/Sydney",
    "iata": "SYD",
    "icao": "YSSY",
    "terminal": "1",
    "gate": "33",
    "delay": 34,
    "scheduled": "2022-05-29T11:10:00+00:00",
    "estimated": "2022-05-29T11:10:00+00:00",
    "actual": "2022-05-29T11:43:00+00:00",
    "estimated_runway": "2022-05-29T11:43:00+00:00",
    "actual_runway": "2022-05-29T11:43:00+00:00"
    },
    "arrival": {
    "airport": "Singapore Changi",
    "timezone": "Asia/Singapore",
    "iata": "SIN",
    "icao": "WSSS",
    "terminal": "1",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T17:50:00+00:00",
    "estimated": "2022-05-29T17:50:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Fiji Airways",
    "iata": "FJ",
    "icao": "FJI"
    },
    "flight": {
    "number": "5322",
    "iata": "FJ5322",
    "icao": "FJI5322",
    "codeshared": {
    "airline_name": "qantas",
    "airline_iata": "qf",
    "airline_icao": "qfa",
    "flight_number": "81",
    "flight_iata": "qf81",
    "flight_icao": "qfa81"
    }
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "active",
    "departure": {
    "airport": "Kingsford Smith",
    "timezone": "Australia/Sydney",
    "iata": "SYD",
    "icao": "YSSY",
    "terminal": "1",
    "gate": "33",
    "delay": 34,
    "scheduled": "2022-05-29T11:10:00+00:00",
    "estimated": "2022-05-29T11:10:00+00:00",
    "actual": "2022-05-29T11:43:00+00:00",
    "estimated_runway": "2022-05-29T11:43:00+00:00",
    "actual_runway": "2022-05-29T11:43:00+00:00"
    },
    "arrival": {
    "airport": "Singapore Changi",
    "timezone": "Asia/Singapore",
    "iata": "SIN",
    "icao": "WSSS",
    "terminal": "1",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T17:50:00+00:00",
    "estimated": "2022-05-29T17:50:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Emirates",
    "iata": "EK",
    "icao": "UAE"
    },
    "flight": {
    "number": "5061",
    "iata": "EK5061",
    "icao": "UAE5061",
    "codeshared": {
    "airline_name": "qantas",
    "airline_iata": "qf",
    "airline_icao": "qfa",
    "flight_number": "81",
    "flight_iata": "qf81",
    "flight_icao": "qfa81"
    }
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "active",
    "departure": {
    "airport": "Kingsford Smith",
    "timezone": "Australia/Sydney",
    "iata": "SYD",
    "icao": "YSSY",
    "terminal": "1",
    "gate": "33",
    "delay": 34,
    "scheduled": "2022-05-29T11:10:00+00:00",
    "estimated": "2022-05-29T11:10:00+00:00",
    "actual": "2022-05-29T11:43:00+00:00",
    "estimated_runway": "2022-05-29T11:43:00+00:00",
    "actual_runway": "2022-05-29T11:43:00+00:00"
    },
    "arrival": {
    "airport": "Singapore Changi",
    "timezone": "Asia/Singapore",
    "iata": "SIN",
    "icao": "WSSS",
    "terminal": "1",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T17:50:00+00:00",
    "estimated": "2022-05-29T17:50:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Finnair",
    "iata": "AY",
    "icao": "FIN"
    },
    "flight": {
    "number": "5012",
    "iata": "AY5012",
    "icao": "FIN5012",
    "codeshared": {
    "airline_name": "qantas",
    "airline_iata": "qf",
    "airline_icao": "qfa",
    "flight_number": "81",
    "flight_iata": "qf81",
    "flight_icao": "qfa81"
    }
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Hong Kong International",
    "timezone": "Asia/Hong_Kong",
    "iata": "HKG",
    "icao": "VHHH",
    "terminal": "1",
    "gate": null,
    "delay": null,
    "scheduled": "2022-05-29T16:20:00+00:00",
    "estimated": "2022-05-29T16:20:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Mactan-Cebu International",
    "timezone": "Asia/Manila",
    "iata": "CEB",
    "icao": "RPVM",
    "terminal": "2",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T19:10:00+00:00",
    "estimated": "2022-05-29T19:10:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Cathay Pacific",
    "iata": "CX",
    "icao": "CPA"
    },
    "flight": {
    "number": "925",
    "iata": "CX925",
    "icao": "CPA925",
    "codeshared": null
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Hong Kong International",
    "timezone": "Asia/Hong_Kong",
    "iata": "HKG",
    "icao": "VHHH",
    "terminal": "1",
    "gate": null,
    "delay": null,
    "scheduled": "2022-05-29T16:20:00+00:00",
    "estimated": "2022-05-29T16:20:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Mactan-Cebu International",
    "timezone": "Asia/Manila",
    "iata": "CEB",
    "icao": "RPVM",
    "terminal": "2",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T19:10:00+00:00",
    "estimated": "2022-05-29T19:10:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Philippine Airlines",
    "iata": "PR",
    "icao": "PAL"
    },
    "flight": {
    "number": "925",
    "iata": "PR925",
    "icao": "PAL925",
    "codeshared": {
    "airline_name": "cathay pacific",
    "airline_iata": "cx",
    "airline_icao": "cpa",
    "flight_number": "925",
    "flight_iata": "cx925",
    "flight_icao": "cpa925"
    }
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "active",
    "departure": {
    "airport": "Kingsford Smith",
    "timezone": "Australia/Sydney",
    "iata": "SYD",
    "icao": "YSSY",
    "terminal": "1",
    "gate": "59",
    "delay": 17,
    "scheduled": "2022-05-29T11:35:00+00:00",
    "estimated": "2022-05-29T11:35:00+00:00",
    "actual": "2022-05-29T11:51:00+00:00",
    "estimated_runway": "2022-05-29T11:51:00+00:00",
    "actual_runway": "2022-05-29T11:51:00+00:00"
    },
    "arrival": {
    "airport": "Auckland International",
    "timezone": "Pacific/Auckland",
    "iata": "AKL",
    "icao": "NZAA",
    "terminal": "I",
    "gate": null,
    "baggage": "ITB4",
    "delay": null,
    "scheduled": "2022-05-29T16:40:00+00:00",
    "estimated": "2022-05-29T16:40:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Jet Linx Aviation",
    "iata": "JL",
    "icao": "JTL"
    },
    "flight": {
    "number": "5741",
    "iata": "JL5741",
    "icao": "JTL5741",
    "codeshared": {
    "airline_name": "latam airlines",
    "airline_iata": "la",
    "airline_icao": "lan",
    "flight_number": "800",
    "flight_iata": "la800",
    "flight_icao": "lan800"
    }
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "active",
    "departure": {
    "airport": "Kingsford Smith",
    "timezone": "Australia/Sydney",
    "iata": "SYD",
    "icao": "YSSY",
    "terminal": "1",
    "gate": "59",
    "delay": 17,
    "scheduled": "2022-05-29T11:35:00+00:00",
    "estimated": "2022-05-29T11:35:00+00:00",
    "actual": "2022-05-29T11:51:00+00:00",
    "estimated_runway": "2022-05-29T11:51:00+00:00",
    "actual_runway": "2022-05-29T11:51:00+00:00"
    },
    "arrival": {
    "airport": "Auckland International",
    "timezone": "Pacific/Auckland",
    "iata": "AKL",
    "icao": "NZAA",
    "terminal": "I",
    "gate": null,
    "baggage": "ITB4",
    "delay": null,
    "scheduled": "2022-05-29T16:40:00+00:00",
    "estimated": "2022-05-29T16:40:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Cathay Pacific",
    "iata": "CX",
    "icao": "CPA"
    },
    "flight": {
    "number": "7800",
    "iata": "CX7800",
    "icao": "CPA7800",
    "codeshared": {
    "airline_name": "latam airlines",
    "airline_iata": "la",
    "airline_icao": "lan",
    "flight_number": "800",
    "flight_iata": "la800",
    "flight_icao": "lan800"
    }
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "landed",
    "departure": {
    "airport": "Kingsford Smith",
    "timezone": "Australia/Sydney",
    "iata": "SYD",
    "icao": "YSSY",
    "terminal": "3",
    "gate": "6",
    "delay": 28,
    "scheduled": "2022-05-29T11:30:00+00:00",
    "estimated": "2022-05-29T11:30:00+00:00",
    "actual": "2022-05-29T11:58:00+00:00",
    "estimated_runway": "2022-05-29T11:58:00+00:00",
    "actual_runway": "2022-05-29T11:58:00+00:00"
    },
    "arrival": {
    "airport": "Tullamarine",
    "timezone": "Australia/Melbourne",
    "iata": "MEL",
    "icao": "YMML",
    "terminal": "1",
    "gate": "10",
    "baggage": null,
    "delay": 1,
    "scheduled": "2022-05-29T13:05:00+00:00",
    "estimated": "2022-05-29T13:05:00+00:00",
    "actual": "2022-05-29T13:01:00+00:00",
    "estimated_runway": "2022-05-29T13:01:00+00:00",
    "actual_runway": "2022-05-29T13:01:00+00:00"
    },
    "airline": {
    "name": "LATAM Airlines",
    "iata": "LA",
    "icao": "LAN"
    },
    "flight": {
    "number": "4855",
    "iata": "LA4855",
    "icao": "LAN4855",
    "codeshared": {
    "airline_name": "qantas",
    "airline_iata": "qf",
    "airline_icao": "qfa",
    "flight_number": "439",
    "flight_iata": "qf439",
    "flight_icao": "qfa439"
    }
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "landed",
    "departure": {
    "airport": "Kingsford Smith",
    "timezone": "Australia/Sydney",
    "iata": "SYD",
    "icao": "YSSY",
    "terminal": "3",
    "gate": "6",
    "delay": 28,
    "scheduled": "2022-05-29T11:30:00+00:00",
    "estimated": "2022-05-29T11:30:00+00:00",
    "actual": "2022-05-29T11:58:00+00:00",
    "estimated_runway": "2022-05-29T11:58:00+00:00",
    "actual_runway": "2022-05-29T11:58:00+00:00"
    },
    "arrival": {
    "airport": "Tullamarine",
    "timezone": "Australia/Melbourne",
    "iata": "MEL",
    "icao": "YMML",
    "terminal": "1",
    "gate": "10",
    "baggage": null,
    "delay": 1,
    "scheduled": "2022-05-29T13:05:00+00:00",
    "estimated": "2022-05-29T13:05:00+00:00",
    "actual": "2022-05-29T13:01:00+00:00",
    "estimated_runway": "2022-05-29T13:01:00+00:00",
    "actual_runway": "2022-05-29T13:01:00+00:00"
    },
    "airline": {
    "name": "American Airlines",
    "iata": "AA",
    "icao": "AAL"
    },
    "flight": {
    "number": "7309",
    "iata": "AA7309",
    "icao": "AAL7309",
    "codeshared": {
    "airline_name": "qantas",
    "airline_iata": "qf",
    "airline_icao": "qfa",
    "flight_number": "439",
    "flight_iata": "qf439",
    "flight_icao": "qfa439"
    }
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "landed",
    "departure": {
    "airport": "Kingsford Smith",
    "timezone": "Australia/Sydney",
    "iata": "SYD",
    "icao": "YSSY",
    "terminal": "3",
    "gate": "6",
    "delay": 28,
    "scheduled": "2022-05-29T11:30:00+00:00",
    "estimated": "2022-05-29T11:30:00+00:00",
    "actual": "2022-05-29T11:58:00+00:00",
    "estimated_runway": "2022-05-29T11:58:00+00:00",
    "actual_runway": "2022-05-29T11:58:00+00:00"
    },
    "arrival": {
    "airport": "Tullamarine",
    "timezone": "Australia/Melbourne",
    "iata": "MEL",
    "icao": "YMML",
    "terminal": "1",
    "gate": "10",
    "baggage": null,
    "delay": 1,
    "scheduled": "2022-05-29T13:05:00+00:00",
    "estimated": "2022-05-29T13:05:00+00:00",
    "actual": "2022-05-29T13:01:00+00:00",
    "estimated_runway": "2022-05-29T13:01:00+00:00",
    "actual_runway": "2022-05-29T13:01:00+00:00"
    },
    "airline": {
    "name": "Cathay Pacific",
    "iata": "CX",
    "icao": "CPA"
    },
    "flight": {
    "number": "9057",
    "iata": "CX9057",
    "icao": "CPA9057",
    "codeshared": {
    "airline_name": "qantas",
    "airline_iata": "qf",
    "airline_icao": "qfa",
    "flight_number": "439",
    "flight_iata": "qf439",
    "flight_icao": "qfa439"
    }
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "landed",
    "departure": {
    "airport": "Kingsford Smith",
    "timezone": "Australia/Sydney",
    "iata": "SYD",
    "icao": "YSSY",
    "terminal": "3",
    "gate": "6",
    "delay": 28,
    "scheduled": "2022-05-29T11:30:00+00:00",
    "estimated": "2022-05-29T11:30:00+00:00",
    "actual": "2022-05-29T11:58:00+00:00",
    "estimated_runway": "2022-05-29T11:58:00+00:00",
    "actual_runway": "2022-05-29T11:58:00+00:00"
    },
    "arrival": {
    "airport": "Tullamarine",
    "timezone": "Australia/Melbourne",
    "iata": "MEL",
    "icao": "YMML",
    "terminal": "1",
    "gate": "10",
    "baggage": null,
    "delay": 1,
    "scheduled": "2022-05-29T13:05:00+00:00",
    "estimated": "2022-05-29T13:05:00+00:00",
    "actual": "2022-05-29T13:01:00+00:00",
    "estimated_runway": "2022-05-29T13:01:00+00:00",
    "actual_runway": "2022-05-29T13:01:00+00:00"
    },
    "airline": {
    "name": "Air New Zealand",
    "iata": "NZ",
    "icao": "ANZ"
    },
    "flight": {
    "number": "1839",
    "iata": "NZ1839",
    "icao": "ANZ1839",
    "codeshared": {
    "airline_name": "qantas",
    "airline_iata": "qf",
    "airline_icao": "qfa",
    "flight_number": "439",
    "flight_iata": "qf439",
    "flight_icao": "qfa439"
    }
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "active",
    "departure": {
    "airport": "Kingsford Smith",
    "timezone": "Australia/Sydney",
    "iata": "SYD",
    "icao": "YSSY",
    "terminal": null,
    "gate": null,
    "delay": 32,
    "scheduled": "2022-05-29T11:40:00+00:00",
    "estimated": "2022-05-29T11:40:00+00:00",
    "actual": "2022-05-29T12:12:00+00:00",
    "estimated_runway": "2022-05-29T12:12:00+00:00",
    "actual_runway": "2022-05-29T12:12:00+00:00"
    },
    "arrival": {
    "airport": "Tullamarine",
    "timezone": "Australia/Melbourne",
    "iata": "MEL",
    "icao": "YMML",
    "terminal": "4",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T13:15:00+00:00",
    "estimated": "2022-05-29T13:15:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Jetstar",
    "iata": "JQ",
    "icao": "JST"
    },
    "flight": {
    "number": "8991",
    "iata": "JQ8991",
    "icao": "JST8991",
    "codeshared": null
    },
    "aircraft": {
    "registration": "VH-VKG",
    "iata": "B788",
    "icao": "B788",
    "icao24": "7C6BBE"
    },
    "live": {
    "updated": "2022-05-29T03:01:23+00:00",
    "latitude": -37.37,
    "longitude": 145.9,
    "altitude": 4693.92,
    "direction": 249,
    "speed_horizontal": 663.016,
    "speed_vertical": 0,
    "is_ground": false
    }
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "active",
    "departure": {
    "airport": "Kingsford Smith",
    "timezone": "Australia/Sydney",
    "iata": "SYD",
    "icao": "YSSY",
    "terminal": "1",
    "gate": "G",
    "delay": null,
    "scheduled": "2022-05-29T13:45:00+00:00",
    "estimated": "2022-05-29T13:45:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Hong Kong International",
    "timezone": "Asia/Hong_Kong",
    "iata": "HKG",
    "icao": "VHHH",
    "terminal": "1",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T21:00:00+00:00",
    "estimated": "2022-05-29T21:00:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Cathay Pacific",
    "iata": "CX",
    "icao": "CPA"
    },
    "flight": {
    "number": "2100",
    "iata": "CX2100",
    "icao": "CPA2100",
    "codeshared": null
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "active",
    "departure": {
    "airport": "Kingsford Smith",
    "timezone": "Australia/Sydney",
    "iata": "SYD",
    "icao": "YSSY",
    "terminal": "2",
    "gate": "36",
    "delay": 21,
    "scheduled": "2022-05-29T12:50:00+00:00",
    "estimated": "2022-05-29T12:50:00+00:00",
    "actual": "2022-05-29T13:10:00+00:00",
    "estimated_runway": "2022-05-29T13:10:00+00:00",
    "actual_runway": "2022-05-29T13:10:00+00:00"
    },
    "arrival": {
    "airport": "Darwin",
    "timezone": "Australia/Darwin",
    "iata": "DRW",
    "icao": "YPDN",
    "terminal": null,
    "gate": "7",
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T17:10:00+00:00",
    "estimated": "2022-05-29T17:10:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Virgin Australia",
    "iata": "VA",
    "icao": "VOZ"
    },
    "flight": {
    "number": "1353",
    "iata": "VA1353",
    "icao": "VOZ1353",
    "codeshared": null
    },
    "aircraft": {
    "registration": "VH-YFX",
    "iata": "B738",
    "icao": "B738",
    "icao24": "7C7A4B"
    },
    "live": {
    "updated": "2022-05-29T04:00:56+00:00",
    "latitude": -29.84,
    "longitude": 147.96,
    "altitude": 10972.8,
    "direction": 322,
    "speed_horizontal": 698.204,
    "speed_vertical": 0,
    "is_ground": false
    }
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Shuangliu",
    "timezone": "Asia/Shanghai",
    "iata": "CTU",
    "icao": "ZUUU",
    "terminal": "2",
    "gate": null,
    "delay": null,
    "scheduled": "2022-05-29T15:30:00+00:00",
    "estimated": "2022-05-29T15:30:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Changzhou",
    "timezone": "Asia/Shanghai",
    "iata": "CZX",
    "icao": "ZSCG",
    "terminal": "4",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T17:50:00+00:00",
    "estimated": "2022-05-29T17:50:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Shenzhen Airlines",
    "iata": "ZH",
    "icao": "CSZ"
    },
    "flight": {
    "number": "4227",
    "iata": "ZH4227",
    "icao": "CSZ4227",
    "codeshared": {
    "airline_name": "air china ltd",
    "airline_iata": "ca",
    "airline_icao": "cca",
    "flight_number": "4227",
    "flight_iata": "ca4227",
    "flight_icao": "cca4227"
    }
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Changzhou",
    "timezone": "Asia/Shanghai",
    "iata": "CZX",
    "icao": "ZSCG",
    "terminal": null,
    "gate": null,
    "delay": null,
    "scheduled": "2022-05-29T17:10:00+00:00",
    "estimated": "2022-05-29T17:10:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Xianyang",
    "timezone": "Asia/Shanghai",
    "iata": "XIY",
    "icao": "ZLXY",
    "terminal": "3",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T19:20:00+00:00",
    "estimated": "2022-05-29T19:20:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "China Eastern Airlines",
    "iata": "MU",
    "icao": "CES"
    },
    "flight": {
    "number": "2983",
    "iata": "MU2983",
    "icao": "CES2983",
    "codeshared": null
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Changzhou",
    "timezone": "Asia/Shanghai",
    "iata": "CZX",
    "icao": "ZSCG",
    "terminal": null,
    "gate": null,
    "delay": null,
    "scheduled": "2022-05-29T17:10:00+00:00",
    "estimated": "2022-05-29T17:10:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Xianyang",
    "timezone": "Asia/Shanghai",
    "iata": "XIY",
    "icao": "ZLXY",
    "terminal": "3",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T19:20:00+00:00",
    "estimated": "2022-05-29T19:20:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Sichuan Airlines",
    "iata": "3U",
    "icao": "CSC"
    },
    "flight": {
    "number": "5103",
    "iata": "3U5103",
    "icao": "CSC5103",
    "codeshared": {
    "airline_name": "china eastern airlines",
    "airline_iata": "mu",
    "airline_icao": "ces",
    "flight_number": "2983",
    "flight_iata": "mu2983",
    "flight_icao": "ces2983"
    }
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Charleston, AFB Municipal",
    "timezone": "America/New_York",
    "iata": "CHS",
    "icao": "KCHS",
    "terminal": null,
    "gate": null,
    "delay": 6,
    "scheduled": "2022-05-29T07:30:00+00:00",
    "estimated": "2022-05-29T07:30:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Palm Beach International Airport",
    "timezone": "America/New_York",
    "iata": "PBI",
    "icao": "KPBI",
    "terminal": null,
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T08:54:00+00:00",
    "estimated": "2022-05-29T08:54:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "NetJets Aviation",
    "iata": "1I",
    "icao": "EJA"
    },
    "flight": {
    "number": "680",
    "iata": "1I680",
    "icao": "EJA680",
    "codeshared": null
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Charleston, AFB Municipal",
    "timezone": "America/New_York",
    "iata": "CHS",
    "icao": "KCHS",
    "terminal": null,
    "gate": "B5",
    "delay": 19,
    "scheduled": "2022-05-29T07:12:00+00:00",
    "estimated": "2022-05-29T07:12:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Charlotte Douglas",
    "timezone": "America/New_York",
    "iata": "CLT",
    "icao": "KCLT",
    "terminal": null,
    "gate": "E31",
    "baggage": "E",
    "delay": null,
    "scheduled": "2022-05-29T08:19:00+00:00",
    "estimated": "2022-05-29T08:19:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "American Airlines",
    "iata": "AA",
    "icao": "AAL"
    },
    "flight": {
    "number": "5524",
    "iata": "AA5524",
    "icao": "AAL5524",
    "codeshared": null
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Sais",
    "timezone": "Africa/Casablanca",
    "iata": "FEZ",
    "icao": "GMFF",
    "terminal": null,
    "gate": null,
    "delay": null,
    "scheduled": "2022-05-29T12:30:00+00:00",
    "estimated": "2022-05-29T12:30:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Menara",
    "timezone": "Africa/Casablanca",
    "iata": "RAK",
    "icao": "GMMX",
    "terminal": "1",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T13:30:00+00:00",
    "estimated": "2022-05-29T13:30:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Air Arabia Maroc",
    "iata": "3O",
    "icao": "MAC"
    },
    "flight": {
    "number": "747",
    "iata": "3O747",
    "icao": "MAC747",
    "codeshared": null
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Sais",
    "timezone": "Africa/Casablanca",
    "iata": "FEZ",
    "icao": "GMFF",
    "terminal": null,
    "gate": null,
    "delay": null,
    "scheduled": "2022-05-29T12:15:00+00:00",
    "estimated": "2022-05-29T12:15:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Montpellier Méditerranée",
    "timezone": "Europe/Paris",
    "iata": "MPL",
    "icao": "LFMT",
    "terminal": null,
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T15:30:00+00:00",
    "estimated": "2022-05-29T15:30:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Air Arabia Maroc",
    "iata": "3O",
    "icao": "MAC"
    },
    "flight": {
    "number": "337",
    "iata": "3O337",
    "icao": "MAC337",
    "codeshared": null
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Souda",
    "timezone": "Europe/Athens",
    "iata": "CHQ",
    "icao": "LGSA",
    "terminal": "1",
    "gate": "06",
    "delay": null,
    "scheduled": "2022-05-29T15:05:00+00:00",
    "estimated": "2022-05-29T15:05:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Berlin Brandenburg Airport",
    "timezone": "+1",
    "iata": "BER",
    "icao": "EDDB",
    "terminal": "1",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T17:20:00+00:00",
    "estimated": "2022-05-29T17:20:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "easyJet",
    "iata": "U2",
    "icao": "EZY"
    },
    "flight": {
    "number": "5006",
    "iata": "U25006",
    "icao": "EZY5006",
    "codeshared": null
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Souda",
    "timezone": "Europe/Athens",
    "iata": "CHQ",
    "icao": "LGSA",
    "terminal": null,
    "gate": "08",
    "delay": null,
    "scheduled": "2022-05-29T15:00:00+00:00",
    "estimated": "2022-05-29T15:00:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Athens International Airport \"Eleftherios Venizelos\"",
    "timezone": "Europe/Athens",
    "iata": "ATH",
    "icao": "LGAV",
    "terminal": null,
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T16:00:00+00:00",
    "estimated": "2022-05-29T16:00:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Sky Express",
    "iata": "GQ",
    "icao": "SEH"
    },
    "flight": {
    "number": "253",
    "iata": "GQ253",
    "icao": "SEH253",
    "codeshared": null
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Souda",
    "timezone": "Europe/Athens",
    "iata": "CHQ",
    "icao": "LGSA",
    "terminal": null,
    "gate": "16",
    "delay": null,
    "scheduled": "2022-05-29T14:35:00+00:00",
    "estimated": "2022-05-29T14:35:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Heathrow",
    "timezone": "Europe/London",
    "iata": "LHR",
    "icao": "EGLL",
    "terminal": "5",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T16:45:00+00:00",
    "estimated": "2022-05-29T16:45:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "British Airways",
    "iata": "BA",
    "icao": "BAW"
    },
    "flight": {
    "number": "661",
    "iata": "BA661",
    "icao": "BAW661",
    "codeshared": null
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Souda",
    "timezone": "Europe/Athens",
    "iata": "CHQ",
    "icao": "LGSA",
    "terminal": null,
    "gate": "01",
    "delay": null,
    "scheduled": "2022-05-29T14:30:00+00:00",
    "estimated": "2022-05-29T14:30:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Athens International Airport \"Eleftherios Venizelos\"",
    "timezone": "Europe/Athens",
    "iata": "ATH",
    "icao": "LGAV",
    "terminal": null,
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T15:20:00+00:00",
    "estimated": "2022-05-29T15:20:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Aegean Airlines",
    "iata": "A3",
    "icao": "AEE"
    },
    "flight": {
    "number": "335",
    "iata": "A3335",
    "icao": "AEE335",
    "codeshared": null
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Souda",
    "timezone": "Europe/Athens",
    "iata": "CHQ",
    "icao": "LGSA",
    "terminal": null,
    "gate": "01",
    "delay": null,
    "scheduled": "2022-05-29T14:30:00+00:00",
    "estimated": "2022-05-29T14:30:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Athens International Airport \"Eleftherios Venizelos\"",
    "timezone": "Europe/Athens",
    "iata": "ATH",
    "icao": "LGAV",
    "terminal": null,
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T15:20:00+00:00",
    "estimated": "2022-05-29T15:20:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Olympic Air",
    "iata": "OA",
    "icao": "OAL"
    },
    "flight": {
    "number": "6335",
    "iata": "OA6335",
    "icao": "OAL6335",
    "codeshared": {
    "airline_name": "aegean airlines",
    "airline_iata": "a3",
    "airline_icao": "aee",
    "flight_number": "335",
    "flight_iata": "a3335",
    "flight_icao": "aee335"
    }
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Malindi",
    "timezone": "Africa/Nairobi",
    "iata": "MYD",
    "icao": "HKML",
    "terminal": null,
    "gate": null,
    "delay": null,
    "scheduled": "2022-05-29T14:40:00+00:00",
    "estimated": "2022-05-29T14:40:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Wilson",
    "timezone": "Africa/Nairobi",
    "iata": "WIL",
    "icao": "HKNW",
    "terminal": null,
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T15:50:00+00:00",
    "estimated": "2022-05-29T15:50:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Fly SAX",
    "iata": "B5",
    "icao": "EXZ"
    },
    "flight": {
    "number": "604",
    "iata": "B5604",
    "icao": "EXZ604",
    "codeshared": null
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Fergana",
    "timezone": "Asia/Tashkent",
    "iata": "FEG",
    "icao": "UTFF",
    "terminal": null,
    "gate": null,
    "delay": null,
    "scheduled": "2022-05-29T16:15:00+00:00",
    "estimated": "2022-05-29T16:15:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Pulkovo",
    "timezone": "Europe/Moscow",
    "iata": "LED",
    "icao": "ULLI",
    "terminal": "1",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T19:50:00+00:00",
    "estimated": "2022-05-29T19:50:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Uzbekistan Airways",
    "iata": "HY",
    "icao": "UZB"
    },
    "flight": {
    "number": "635",
    "iata": "HY635",
    "icao": "UZB635",
    "codeshared": null
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "cancelled",
    "departure": {
    "airport": "Meixian",
    "timezone": "Asia/Shanghai",
    "iata": "MXZ",
    "icao": "ZGMX",
    "terminal": null,
    "gate": null,
    "delay": null,
    "scheduled": "2022-05-29T19:55:00+00:00",
    "estimated": "2022-05-29T19:55:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Shenzhen",
    "timezone": "Asia/Shanghai",
    "iata": "SZX",
    "icao": "ZGSZ",
    "terminal": "T3",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T21:05:00+00:00",
    "estimated": "2022-05-29T21:05:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Fuzhou Airlines",
    "iata": "FU",
    "icao": "FZA"
    },
    "flight": {
    "number": "6745",
    "iata": "FU6745",
    "icao": "FZA6745",
    "codeshared": null
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "V. C. Bird International",
    "timezone": "America/Antigua",
    "iata": "ANU",
    "icao": "TAPA",
    "terminal": null,
    "gate": null,
    "delay": null,
    "scheduled": "2022-05-29T07:30:00+00:00",
    "estimated": "2022-05-29T07:30:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Princess Juliana International",
    "timezone": "America/Lower_Princes",
    "iata": "SXM",
    "icao": "TNCM",
    "terminal": null,
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T08:10:00+00:00",
    "estimated": "2022-05-29T08:10:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "LIAT",
    "iata": "LI",
    "icao": "LIA"
    },
    "flight": {
    "number": "340",
    "iata": "LI340",
    "icao": "LIA340",
    "codeshared": null
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Nanning",
    "timezone": "Asia/Shanghai",
    "iata": "NNG",
    "icao": "ZGNN",
    "terminal": "T2",
    "gate": "18",
    "delay": null,
    "scheduled": "2022-05-29T15:55:00+00:00",
    "estimated": "2022-05-29T15:55:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Xianyang",
    "timezone": "Asia/Shanghai",
    "iata": "XIY",
    "icao": "ZLXY",
    "terminal": "2",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T18:25:00+00:00",
    "estimated": "2022-05-29T18:25:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Kunming Airlines",
    "iata": "KY",
    "icao": "KNA"
    },
    "flight": {
    "number": "9278",
    "iata": "KY9278",
    "icao": "KNA9278",
    "codeshared": {
    "airline_name": "shenzhen airlines",
    "airline_iata": "zh",
    "airline_icao": "csz",
    "flight_number": "9278",
    "flight_iata": "zh9278",
    "flight_icao": "csz9278"
    }
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Nanning",
    "timezone": "Asia/Shanghai",
    "iata": "NNG",
    "icao": "ZGNN",
    "terminal": "T2",
    "gate": null,
    "delay": null,
    "scheduled": "2022-05-29T17:25:00+00:00",
    "estimated": "2022-05-29T17:25:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Jinjiang",
    "timezone": "Asia/Shanghai",
    "iata": "JJN",
    "icao": "ZSQZ",
    "terminal": null,
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T19:25:00+00:00",
    "estimated": "2022-05-29T19:25:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "China Southern Airlines",
    "iata": "CZ",
    "icao": "CSN"
    },
    "flight": {
    "number": "4286",
    "iata": "CZ4286",
    "icao": "CSN4286",
    "codeshared": {
    "airline_name": "xiamen airlines",
    "airline_iata": "mf",
    "airline_icao": "cxa",
    "flight_number": "8364",
    "flight_iata": "mf8364",
    "flight_icao": "cxa8364"
    }
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "cancelled",
    "departure": {
    "airport": "Nanning",
    "timezone": "Asia/Shanghai",
    "iata": "NNG",
    "icao": "ZGNN",
    "terminal": "T2",
    "gate": null,
    "delay": null,
    "scheduled": "2022-05-29T14:20:00+00:00",
    "estimated": "2022-05-29T14:20:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Zhengzhou",
    "timezone": "Asia/Shanghai",
    "iata": "CGO",
    "icao": "ZHCC",
    "terminal": "2",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T16:55:00+00:00",
    "estimated": "2022-05-29T16:55:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "China Southern Airlines",
    "iata": "CZ",
    "icao": "CSN"
    },
    "flight": {
    "number": "2225",
    "iata": "CZ2225",
    "icao": "CSN2225",
    "codeshared": {
    "airline_name": "chengdu airlines",
    "airline_iata": "eu",
    "airline_icao": "uea",
    "flight_number": "1843",
    "flight_iata": "eu1843",
    "flight_icao": "uea1843"
    }
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Nanning",
    "timezone": "Asia/Shanghai",
    "iata": "NNG",
    "icao": "ZGNN",
    "terminal": "T2",
    "gate": "C",
    "delay": null,
    "scheduled": "2022-05-29T19:55:00+00:00",
    "estimated": "2022-05-29T19:55:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Daguocun",
    "timezone": "Asia/Shanghai",
    "iata": "SJW",
    "icao": "ZBSJ",
    "terminal": "T2",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T21:00:00+00:00",
    "estimated": "2022-05-29T21:00:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Xiamen Airlines",
    "iata": "MF",
    "icao": "CXA"
    },
    "flight": {
    "number": "7036",
    "iata": "MF7036",
    "icao": "CXA7036",
    "codeshared": {
    "airline_name": "hebei airlines",
    "airline_iata": "ns",
    "airline_icao": "hbh",
    "flight_number": "3252",
    "flight_iata": "ns3252",
    "flight_icao": "hbh3252"
    }
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Beauvais-Tille",
    "timezone": "Europe/Paris",
    "iata": "BVA",
    "icao": "LFOB",
    "terminal": "T1",
    "gate": null,
    "delay": null,
    "scheduled": "2022-05-29T13:15:00+00:00",
    "estimated": "2022-05-29T13:15:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Liverpool John Lennon",
    "timezone": "Europe/London",
    "iata": "LPL",
    "icao": "EGGP",
    "terminal": null,
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T13:35:00+00:00",
    "estimated": "2022-05-29T13:35:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Ryanair",
    "iata": "FR",
    "icao": "RYR"
    },
    "flight": {
    "number": "6872",
    "iata": "FR6872",
    "icao": "RYR6872",
    "codeshared": null
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Xiamen",
    "timezone": "Asia/Shanghai",
    "iata": "XMN",
    "icao": "ZSAM",
    "terminal": "4",
    "gate": null,
    "delay": null,
    "scheduled": "2022-05-29T16:55:00+00:00",
    "estimated": "2022-05-29T16:55:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Xianyang",
    "timezone": "Asia/Shanghai",
    "iata": "XIY",
    "icao": "ZLXY",
    "terminal": "3",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T20:05:00+00:00",
    "estimated": "2022-05-29T20:05:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Xiamen Airlines",
    "iata": "MF",
    "icao": "CXA"
    },
    "flight": {
    "number": "3247",
    "iata": "MF3247",
    "icao": "CXA3247",
    "codeshared": {
    "airline_name": "china eastern airlines",
    "airline_iata": "mu",
    "airline_icao": "ces",
    "flight_number": "2188",
    "flight_iata": "mu2188",
    "flight_icao": "ces2188"
    }
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Hangzhou",
    "timezone": "Asia/Shanghai",
    "iata": "HGH",
    "icao": "ZSHC",
    "terminal": null,
    "gate": null,
    "delay": null,
    "scheduled": "2022-05-29T17:35:00+00:00",
    "estimated": "2022-05-29T17:35:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Xianyang",
    "timezone": "Asia/Shanghai",
    "iata": "XIY",
    "icao": "ZLXY",
    "terminal": "3",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T20:05:00+00:00",
    "estimated": "2022-05-29T20:05:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "KLM",
    "iata": "KL",
    "icao": "KLM"
    },
    "flight": {
    "number": "4946",
    "iata": "KL4946",
    "icao": "KLM4946",
    "codeshared": {
    "airline_name": "xiamen airlines",
    "airline_iata": "mf",
    "airline_icao": "cxa",
    "flight_number": "8205",
    "flight_iata": "mf8205",
    "flight_icao": "cxa8205"
    }
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Beijing Daxing International Airport",
    "timezone": "+8",
    "iata": "PKX",
    "icao": "ZBAD",
    "terminal": null,
    "gate": null,
    "delay": null,
    "scheduled": "2022-05-29T17:00:00+00:00",
    "estimated": "2022-05-29T17:00:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Xianyang",
    "timezone": "Asia/Shanghai",
    "iata": "XIY",
    "icao": "ZLXY",
    "terminal": "3",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T19:25:00+00:00",
    "estimated": "2022-05-29T19:25:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Xiamen Airlines",
    "iata": "MF",
    "icao": "CXA"
    },
    "flight": {
    "number": "3179",
    "iata": "MF3179",
    "icao": "CXA3179",
    "codeshared": {
    "airline_name": "china eastern airlines",
    "airline_iata": "mu",
    "airline_icao": "ces",
    "flight_number": "2114",
    "flight_iata": "mu2114",
    "flight_icao": "ces2114"
    }
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Tianjin Binhai International",
    "timezone": "Asia/Shanghai",
    "iata": "TSN",
    "icao": "ZBTJ",
    "terminal": "2",
    "gate": null,
    "delay": null,
    "scheduled": "2022-05-29T17:25:00+00:00",
    "estimated": "2022-05-29T17:25:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Xianyang",
    "timezone": "Asia/Shanghai",
    "iata": "XIY",
    "icao": "ZLXY",
    "terminal": "2",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T19:25:00+00:00",
    "estimated": "2022-05-29T19:25:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Shenzhen Airlines",
    "iata": "ZH",
    "icao": "CSZ"
    },
    "flight": {
    "number": "4363",
    "iata": "ZH4363",
    "icao": "CSZ4363",
    "codeshared": {
    "airline_name": "air china ltd",
    "airline_iata": "ca",
    "airline_icao": "cca",
    "flight_number": "2893",
    "flight_iata": "ca2893",
    "flight_icao": "cca2893"
    }
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Beijing Capital International",
    "timezone": "Asia/Shanghai",
    "iata": "PEK",
    "icao": "ZBAA",
    "terminal": "3",
    "gate": null,
    "delay": null,
    "scheduled": "2022-05-29T17:00:00+00:00",
    "estimated": "2022-05-29T17:00:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Xianyang",
    "timezone": "Asia/Shanghai",
    "iata": "XIY",
    "icao": "ZLXY",
    "terminal": "2",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T19:15:00+00:00",
    "estimated": "2022-05-29T19:15:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Shenzhen Airlines",
    "iata": "ZH",
    "icao": "CSZ"
    },
    "flight": {
    "number": "1235",
    "iata": "ZH1235",
    "icao": "CSZ1235",
    "codeshared": {
    "airline_name": "air china ltd",
    "airline_iata": "ca",
    "airline_icao": "cca",
    "flight_number": "1235",
    "flight_iata": "ca1235",
    "flight_icao": "cca1235"
    }
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Shanghai Pudong International",
    "timezone": "Asia/Shanghai",
    "iata": "PVG",
    "icao": "ZSPD",
    "terminal": "1",
    "gate": null,
    "delay": null,
    "scheduled": "2022-05-29T11:20:00+00:00",
    "estimated": "2022-05-29T11:20:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Xianyang",
    "timezone": "Asia/Shanghai",
    "iata": "XIY",
    "icao": "ZLXY",
    "terminal": "3",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T14:05:00+00:00",
    "estimated": "2022-05-29T14:05:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Sichuan Airlines",
    "iata": "3U",
    "icao": "CSC"
    },
    "flight": {
    "number": "5396",
    "iata": "3U5396",
    "icao": "CSC5396",
    "codeshared": {
    "airline_name": "china eastern airlines",
    "airline_iata": "mu",
    "airline_icao": "ces",
    "flight_number": "9644",
    "flight_iata": "mu9644",
    "flight_icao": "ces9644"
    }
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "cancelled",
    "departure": {
    "airport": "Jinjiang",
    "timezone": "Asia/Shanghai",
    "iata": "JJN",
    "icao": "ZSQZ",
    "terminal": null,
    "gate": null,
    "delay": null,
    "scheduled": "2022-05-29T19:40:00+00:00",
    "estimated": "2022-05-29T19:40:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Kaili Airport",
    "timezone": null,
    "iata": "KJH",
    "icao": "ZUKJ",
    "terminal": null,
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T21:55:00+00:00",
    "estimated": "2022-05-29T21:55:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Fuzhou Airlines",
    "iata": "FU",
    "icao": "FZA"
    },
    "flight": {
    "number": "6694",
    "iata": "FU6694",
    "icao": "FZA6694",
    "codeshared": null
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Jinjiang",
    "timezone": "Asia/Shanghai",
    "iata": "JJN",
    "icao": "ZSQZ",
    "terminal": null,
    "gate": null,
    "delay": null,
    "scheduled": "2022-05-29T19:30:00+00:00",
    "estimated": "2022-05-29T19:30:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Shanghai Hongqiao International",
    "timezone": "Asia/Shanghai",
    "iata": "SHA",
    "icao": "ZSSS",
    "terminal": "1",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T21:10:00+00:00",
    "estimated": "2022-05-29T21:10:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Xiamen Airlines",
    "iata": "MF",
    "icao": "CXA"
    },
    "flight": {
    "number": "8515",
    "iata": "MF8515",
    "icao": "CXA8515",
    "codeshared": null
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "cancelled",
    "departure": {
    "airport": "Jinjiang",
    "timezone": "Asia/Shanghai",
    "iata": "JJN",
    "icao": "ZSQZ",
    "terminal": null,
    "gate": null,
    "delay": null,
    "scheduled": "2022-05-29T19:20:00+00:00",
    "estimated": "2022-05-29T19:20:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Chongqing Jiangbei International",
    "timezone": "Asia/Shanghai",
    "iata": "CKG",
    "icao": "ZUCK",
    "terminal": "T3",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T21:55:00+00:00",
    "estimated": "2022-05-29T21:55:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Okay Airways",
    "iata": "BK",
    "icao": "OKA"
    },
    "flight": {
    "number": "3122",
    "iata": "BK3122",
    "icao": "OKA3122",
    "codeshared": null
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "cancelled",
    "departure": {
    "airport": "Jinjiang",
    "timezone": "Asia/Shanghai",
    "iata": "JJN",
    "icao": "ZSQZ",
    "terminal": null,
    "gate": null,
    "delay": null,
    "scheduled": "2022-05-29T19:20:00+00:00",
    "estimated": "2022-05-29T19:20:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Shanghai Hongqiao International",
    "timezone": "Asia/Shanghai",
    "iata": "SHA",
    "icao": "ZSSS",
    "terminal": "1",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T21:00:00+00:00",
    "estimated": "2022-05-29T21:00:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Spring Airlines",
    "iata": "9C",
    "icao": "CQH"
    },
    "flight": {
    "number": "8910",
    "iata": "9C8910",
    "icao": "CQH8910",
    "codeshared": null
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Jinjiang",
    "timezone": "Asia/Shanghai",
    "iata": "JJN",
    "icao": "ZSQZ",
    "terminal": null,
    "gate": null,
    "delay": null,
    "scheduled": "2022-05-29T19:15:00+00:00",
    "estimated": "2022-05-29T19:15:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Zhuhai Airport",
    "timezone": "Asia/Shanghai",
    "iata": "ZUH",
    "icao": "ZGSD",
    "terminal": null,
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T20:40:00+00:00",
    "estimated": "2022-05-29T20:40:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Xiamen Airlines",
    "iata": "MF",
    "icao": "CXA"
    },
    "flight": {
    "number": "8343",
    "iata": "MF8343",
    "icao": "CXA8343",
    "codeshared": null
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Jinjiang",
    "timezone": "Asia/Shanghai",
    "iata": "JJN",
    "icao": "ZSQZ",
    "terminal": null,
    "gate": "4",
    "delay": null,
    "scheduled": "2022-05-29T19:10:00+00:00",
    "estimated": "2022-05-29T19:10:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Changsha",
    "timezone": "Asia/Shanghai",
    "iata": "CSX",
    "icao": "ZGHA",
    "terminal": "1",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T20:45:00+00:00",
    "estimated": "2022-05-29T20:45:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Joy Air",
    "iata": "JR",
    "icao": "JOY"
    },
    "flight": {
    "number": "1540",
    "iata": "JR1540",
    "icao": "JOY1540",
    "codeshared": null
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "cancelled",
    "departure": {
    "airport": "Jinjiang",
    "timezone": "Asia/Shanghai",
    "iata": "JJN",
    "icao": "ZSQZ",
    "terminal": null,
    "gate": null,
    "delay": null,
    "scheduled": "2022-05-29T19:10:00+00:00",
    "estimated": "2022-05-29T19:10:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Guiyang",
    "timezone": "Asia/Shanghai",
    "iata": "KWE",
    "icao": "ZUGY",
    "terminal": "T2",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T21:20:00+00:00",
    "estimated": "2022-05-29T21:20:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Air Changan",
    "iata": "9H",
    "icao": "CGN"
    },
    "flight": {
    "number": "8464",
    "iata": "9H8464",
    "icao": "CGN8464",
    "codeshared": null
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "cancelled",
    "departure": {
    "airport": "Jinjiang",
    "timezone": "Asia/Shanghai",
    "iata": "JJN",
    "icao": "ZSQZ",
    "terminal": null,
    "gate": null,
    "delay": null,
    "scheduled": "2022-05-29T18:30:00+00:00",
    "estimated": "2022-05-29T18:30:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Hangzhou",
    "timezone": "Asia/Shanghai",
    "iata": "HGH",
    "icao": "ZSHC",
    "terminal": "3",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T19:55:00+00:00",
    "estimated": "2022-05-29T19:55:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Xiamen Airlines",
    "iata": "MF",
    "icao": "CXA"
    },
    "flight": {
    "number": "5895",
    "iata": "MF5895",
    "icao": "CXA5895",
    "codeshared": {
    "airline_name": "loong air",
    "airline_iata": "gj",
    "airline_icao": "cdc",
    "flight_number": "8840",
    "flight_iata": "gj8840",
    "flight_icao": "cdc8840"
    }
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "cancelled",
    "departure": {
    "airport": "Jinjiang",
    "timezone": "Asia/Shanghai",
    "iata": "JJN",
    "icao": "ZSQZ",
    "terminal": null,
    "gate": null,
    "delay": null,
    "scheduled": "2022-05-29T18:30:00+00:00",
    "estimated": "2022-05-29T18:30:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Hangzhou",
    "timezone": "Asia/Shanghai",
    "iata": "HGH",
    "icao": "ZSHC",
    "terminal": "3",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T19:55:00+00:00",
    "estimated": "2022-05-29T19:55:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Tibet Airlines",
    "iata": "TV",
    "icao": "TBA"
    },
    "flight": {
    "number": "7096",
    "iata": "TV7096",
    "icao": "TBA7096",
    "codeshared": {
    "airline_name": "loong air",
    "airline_iata": "gj",
    "airline_icao": "cdc",
    "flight_number": "8840",
    "flight_iata": "gj8840",
    "flight_icao": "cdc8840"
    }
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "cancelled",
    "departure": {
    "airport": "Jinjiang",
    "timezone": "Asia/Shanghai",
    "iata": "JJN",
    "icao": "ZSQZ",
    "terminal": null,
    "gate": null,
    "delay": null,
    "scheduled": "2022-05-29T18:30:00+00:00",
    "estimated": "2022-05-29T18:30:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Hangzhou",
    "timezone": "Asia/Shanghai",
    "iata": "HGH",
    "icao": "ZSHC",
    "terminal": "3",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T19:55:00+00:00",
    "estimated": "2022-05-29T19:55:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "China Southern Airlines",
    "iata": "CZ",
    "icao": "CSN"
    },
    "flight": {
    "number": "9873",
    "iata": "CZ9873",
    "icao": "CSN9873",
    "codeshared": {
    "airline_name": "loong air",
    "airline_iata": "gj",
    "airline_icao": "cdc",
    "flight_number": "8840",
    "flight_iata": "gj8840",
    "flight_icao": "cdc8840"
    }
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Jinjiang",
    "timezone": "Asia/Shanghai",
    "iata": "JJN",
    "icao": "ZSQZ",
    "terminal": null,
    "gate": null,
    "delay": null,
    "scheduled": "2022-05-29T18:15:00+00:00",
    "estimated": "2022-05-29T18:15:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Nanjing Lukou International Airport",
    "timezone": "Asia/Shanghai",
    "iata": "NKG",
    "icao": "ZSNJ",
    "terminal": "2",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T20:05:00+00:00",
    "estimated": "2022-05-29T20:05:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Kunming Airlines",
    "iata": "KY",
    "icao": "KNA"
    },
    "flight": {
    "number": "9315",
    "iata": "KY9315",
    "icao": "KNA9315",
    "codeshared": {
    "airline_name": "shenzhen airlines",
    "airline_iata": "zh",
    "airline_icao": "csz",
    "flight_number": "8715",
    "flight_iata": "zh8715",
    "flight_icao": "csz8715"
    }
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Jinjiang",
    "timezone": "Asia/Shanghai",
    "iata": "JJN",
    "icao": "ZSQZ",
    "terminal": null,
    "gate": null,
    "delay": null,
    "scheduled": "2022-05-29T18:15:00+00:00",
    "estimated": "2022-05-29T18:15:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Nanjing Lukou International Airport",
    "timezone": "Asia/Shanghai",
    "iata": "NKG",
    "icao": "ZSNJ",
    "terminal": "2",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T20:05:00+00:00",
    "estimated": "2022-05-29T20:05:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Juneyao Airlines",
    "iata": "HO",
    "icao": "DKH"
    },
    "flight": {
    "number": "5061",
    "iata": "HO5061",
    "icao": "DKH5061",
    "codeshared": {
    "airline_name": "shenzhen airlines",
    "airline_iata": "zh",
    "airline_icao": "csz",
    "flight_number": "8715",
    "flight_iata": "zh8715",
    "flight_icao": "csz8715"
    }
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Jinjiang",
    "timezone": "Asia/Shanghai",
    "iata": "JJN",
    "icao": "ZSQZ",
    "terminal": null,
    "gate": null,
    "delay": null,
    "scheduled": "2022-05-29T18:15:00+00:00",
    "estimated": "2022-05-29T18:15:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Nanjing Lukou International Airport",
    "timezone": "Asia/Shanghai",
    "iata": "NKG",
    "icao": "ZSNJ",
    "terminal": "2",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T20:05:00+00:00",
    "estimated": "2022-05-29T20:05:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Air China LTD",
    "iata": "CA",
    "icao": "CCA"
    },
    "flight": {
    "number": "3667",
    "iata": "CA3667",
    "icao": "CCA3667",
    "codeshared": {
    "airline_name": "shenzhen airlines",
    "airline_iata": "zh",
    "airline_icao": "csz",
    "flight_number": "8715",
    "flight_iata": "zh8715",
    "flight_icao": "csz8715"
    }
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Jinjiang",
    "timezone": "Asia/Shanghai",
    "iata": "JJN",
    "icao": "ZSQZ",
    "terminal": null,
    "gate": null,
    "delay": null,
    "scheduled": "2022-05-29T18:10:00+00:00",
    "estimated": "2022-05-29T18:10:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Beijing Capital International",
    "timezone": "Asia/Shanghai",
    "iata": "PEK",
    "icao": "ZBAA",
    "terminal": "3",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T21:00:00+00:00",
    "estimated": "2022-05-29T21:00:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Shandong Airlines",
    "iata": "SC",
    "icao": "CDG"
    },
    "flight": {
    "number": "9190",
    "iata": "SC9190",
    "icao": "CDG9190",
    "codeshared": {
    "airline_name": "shenzhen airlines",
    "airline_iata": "zh",
    "airline_icao": "csz",
    "flight_number": "9190",
    "flight_iata": "zh9190",
    "flight_icao": "csz9190"
    }
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Jinjiang",
    "timezone": "Asia/Shanghai",
    "iata": "JJN",
    "icao": "ZSQZ",
    "terminal": null,
    "gate": null,
    "delay": null,
    "scheduled": "2022-05-29T18:10:00+00:00",
    "estimated": "2022-05-29T18:10:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Beijing Capital International",
    "timezone": "Asia/Shanghai",
    "iata": "PEK",
    "icao": "ZBAA",
    "terminal": "3",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T21:00:00+00:00",
    "estimated": "2022-05-29T21:00:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Kunming Airlines",
    "iata": "KY",
    "icao": "KNA"
    },
    "flight": {
    "number": "9190",
    "iata": "KY9190",
    "icao": "KNA9190",
    "codeshared": {
    "airline_name": "shenzhen airlines",
    "airline_iata": "zh",
    "airline_icao": "csz",
    "flight_number": "9190",
    "flight_iata": "zh9190",
    "flight_icao": "csz9190"
    }
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Jinjiang",
    "timezone": "Asia/Shanghai",
    "iata": "JJN",
    "icao": "ZSQZ",
    "terminal": null,
    "gate": null,
    "delay": null,
    "scheduled": "2022-05-29T18:10:00+00:00",
    "estimated": "2022-05-29T18:10:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Beijing Capital International",
    "timezone": "Asia/Shanghai",
    "iata": "PEK",
    "icao": "ZBAA",
    "terminal": "3",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T21:00:00+00:00",
    "estimated": "2022-05-29T21:00:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Air China LTD",
    "iata": "CA",
    "icao": "CCA"
    },
    "flight": {
    "number": "3396",
    "iata": "CA3396",
    "icao": "CCA3396",
    "codeshared": {
    "airline_name": "shenzhen airlines",
    "airline_iata": "zh",
    "airline_icao": "csz",
    "flight_number": "9190",
    "flight_iata": "zh9190",
    "flight_icao": "csz9190"
    }
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Koltsovo International",
    "timezone": "Asia/Yekaterinburg",
    "iata": "SVX",
    "icao": "USSS",
    "terminal": null,
    "gate": null,
    "delay": null,
    "scheduled": "2022-05-29T17:00:00+00:00",
    "estimated": "2022-05-29T17:00:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Urgench",
    "timezone": "Asia/Samarkand",
    "iata": "UGC",
    "icao": "UTNU",
    "terminal": null,
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T20:00:00+00:00",
    "estimated": "2022-05-29T20:00:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Red Wings",
    "iata": "WZ",
    "icao": "RWZ"
    },
    "flight": {
    "number": "1137",
    "iata": "WZ1137",
    "icao": "RWZ1137",
    "codeshared": null
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Koltsovo International",
    "timezone": "Asia/Yekaterinburg",
    "iata": "SVX",
    "icao": "USSS",
    "terminal": null,
    "gate": null,
    "delay": null,
    "scheduled": "2022-05-29T16:50:00+00:00",
    "estimated": "2022-05-29T16:50:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Sheremetyevo International",
    "timezone": "Europe/Moscow",
    "iata": "SVO",
    "icao": "UUEE",
    "terminal": "B",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T17:30:00+00:00",
    "estimated": "2022-05-29T17:30:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Aeroflot",
    "iata": "SU",
    "icao": "AFL"
    },
    "flight": {
    "number": "1403",
    "iata": "SU1403",
    "icao": "AFL1403",
    "codeshared": null
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Koltsovo International",
    "timezone": "Asia/Yekaterinburg",
    "iata": "SVX",
    "icao": "USSS",
    "terminal": null,
    "gate": null,
    "delay": null,
    "scheduled": "2022-05-29T16:30:00+00:00",
    "estimated": "2022-05-29T16:30:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Antalya",
    "timezone": "Europe/Istanbul",
    "iata": "AYT",
    "icao": "LTAI",
    "terminal": "1",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T19:55:00+00:00",
    "estimated": "2022-05-29T19:55:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Corendon Air",
    "iata": "XC",
    "icao": "CAI"
    },
    "flight": {
    "number": "8194",
    "iata": "XC8194",
    "icao": "CAI8194",
    "codeshared": null
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Koltsovo International",
    "timezone": "Asia/Yekaterinburg",
    "iata": "SVX",
    "icao": "USSS",
    "terminal": null,
    "gate": null,
    "delay": null,
    "scheduled": "2022-05-29T16:30:00+00:00",
    "estimated": "2022-05-29T16:30:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Surgut",
    "timezone": "Asia/Yekaterinburg",
    "iata": "SGC",
    "icao": "USRR",
    "terminal": null,
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T19:00:00+00:00",
    "estimated": "2022-05-29T19:00:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "UTair Aviation",
    "iata": "UT",
    "icao": "UTA"
    },
    "flight": {
    "number": "1112",
    "iata": "UT1112",
    "icao": "UTA1112",
    "codeshared": null
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Koltsovo International",
    "timezone": "Asia/Yekaterinburg",
    "iata": "SVX",
    "icao": "USSS",
    "terminal": null,
    "gate": null,
    "delay": 17,
    "scheduled": "2022-05-29T16:20:00+00:00",
    "estimated": "2022-05-29T16:20:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Irkutsk",
    "timezone": "Asia/Irkutsk",
    "iata": "IKT",
    "icao": "UIII",
    "terminal": null,
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T23:15:00+00:00",
    "estimated": "2022-05-29T23:15:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "S7 Airlines",
    "iata": "S7",
    "icao": "SBI"
    },
    "flight": {
    "number": "6362",
    "iata": "S76362",
    "icao": "SBI6362",
    "codeshared": null
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Koltsovo International",
    "timezone": "Asia/Yekaterinburg",
    "iata": "SVX",
    "icao": "USSS",
    "terminal": null,
    "gate": null,
    "delay": null,
    "scheduled": "2022-05-29T16:15:00+00:00",
    "estimated": "2022-05-29T16:15:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Dubai",
    "timezone": "Asia/Dubai",
    "iata": "DXB",
    "icao": "OMDB",
    "terminal": "2",
    "gate": null,
    "baggage": "5",
    "delay": null,
    "scheduled": "2022-05-29T20:30:00+00:00",
    "estimated": "2022-05-29T20:30:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "flydubai",
    "iata": "FZ",
    "icao": "FDB"
    },
    "flight": {
    "number": "902",
    "iata": "FZ902",
    "icao": "FDB902",
    "codeshared": null
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Pablo Ruiz Picasso",
    "timezone": "Europe/Madrid",
    "iata": "AGP",
    "icao": "LEMG",
    "terminal": null,
    "gate": null,
    "delay": null,
    "scheduled": "2022-05-29T11:00:00+00:00",
    "estimated": "2022-05-29T11:00:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Cardiff",
    "timezone": "Europe/London",
    "iata": "CWL",
    "icao": "EGFF",
    "terminal": "2",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T12:35:00+00:00",
    "estimated": "2022-05-29T12:35:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "TUI Airways",
    "iata": "BY",
    "icao": "TOM"
    },
    "flight": {
    "number": "6715",
    "iata": "BY6715",
    "icao": "TOM6715",
    "codeshared": null
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Orly",
    "timezone": "Europe/Paris",
    "iata": "ORY",
    "icao": "LFPO",
    "terminal": "2",
    "gate": null,
    "delay": null,
    "scheduled": "2022-05-29T11:55:00+00:00",
    "estimated": "2022-05-29T11:55:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Cardiff",
    "timezone": "Europe/London",
    "iata": "CWL",
    "icao": "EGFF",
    "terminal": "2",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T12:15:00+00:00",
    "estimated": "2022-05-29T12:15:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Vueling",
    "iata": "VY",
    "icao": "VLG"
    },
    "flight": {
    "number": "8594",
    "iata": "VY8594",
    "icao": "VLG8594",
    "codeshared": null
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Orly",
    "timezone": "Europe/Paris",
    "iata": "ORY",
    "icao": "LFPO",
    "terminal": "2",
    "gate": null,
    "delay": null,
    "scheduled": "2022-05-29T11:55:00+00:00",
    "estimated": "2022-05-29T11:55:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Cardiff",
    "timezone": "Europe/London",
    "iata": "CWL",
    "icao": "EGFF",
    "terminal": "2",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T12:15:00+00:00",
    "estimated": "2022-05-29T12:15:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "British Airways",
    "iata": "BA",
    "icao": "BAW"
    },
    "flight": {
    "number": "8137",
    "iata": "BA8137",
    "icao": "BAW8137",
    "codeshared": {
    "airline_name": "vueling",
    "airline_iata": "vy",
    "airline_icao": "vlg",
    "flight_number": "8594",
    "flight_iata": "vy8594",
    "flight_icao": "vlg8594"
    }
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Calgary International Airport",
    "timezone": "America/Edmonton",
    "iata": "YYC",
    "icao": "CYYC",
    "terminal": null,
    "gate": "A21",
    "delay": null,
    "scheduled": "2022-05-29T06:00:00+00:00",
    "estimated": "2022-05-29T06:00:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Winnipeg",
    "timezone": "America/Winnipeg",
    "iata": "YWG",
    "icao": "CYWG",
    "terminal": "MA",
    "gate": "5",
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T08:50:00+00:00",
    "estimated": "2022-05-29T08:50:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "WestJet",
    "iata": "WS",
    "icao": "WJA"
    },
    "flight": {
    "number": "140",
    "iata": "WS140",
    "icao": "WJA140",
    "codeshared": null
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Calgary International Airport",
    "timezone": "America/Edmonton",
    "iata": "YYC",
    "icao": "CYYC",
    "terminal": null,
    "gate": "E84",
    "delay": null,
    "scheduled": "2022-05-29T06:00:00+00:00",
    "estimated": "2022-05-29T06:00:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "George Bush Intercontinental",
    "timezone": "America/Chicago",
    "iata": "IAH",
    "icao": "KIAH",
    "terminal": "C",
    "gate": "6",
    "baggage": "C2",
    "delay": null,
    "scheduled": "2022-05-29T11:11:00+00:00",
    "estimated": "2022-05-29T11:11:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "United Airlines",
    "iata": "UA",
    "icao": "UAL"
    },
    "flight": {
    "number": "1633",
    "iata": "UA1633",
    "icao": "UAL1633",
    "codeshared": null
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Calgary International Airport",
    "timezone": "America/Edmonton",
    "iata": "YYC",
    "icao": "CYYC",
    "terminal": null,
    "gate": "E84",
    "delay": null,
    "scheduled": "2022-05-29T06:00:00+00:00",
    "estimated": "2022-05-29T06:00:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "George Bush Intercontinental",
    "timezone": "America/Chicago",
    "iata": "IAH",
    "icao": "KIAH",
    "terminal": "C",
    "gate": "6",
    "baggage": "C2",
    "delay": null,
    "scheduled": "2022-05-29T11:11:00+00:00",
    "estimated": "2022-05-29T11:11:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Air New Zealand",
    "iata": "NZ",
    "icao": "ANZ"
    },
    "flight": {
    "number": "9980",
    "iata": "NZ9980",
    "icao": "ANZ9980",
    "codeshared": {
    "airline_name": "united airlines",
    "airline_iata": "ua",
    "airline_icao": "ual",
    "flight_number": "1633",
    "flight_iata": "ua1633",
    "flight_icao": "ual1633"
    }
    },
    "aircraft": null,
    "live": null
    },
    {
    "flight_date": "2022-05-29",
    "flight_status": "scheduled",
    "departure": {
    "airport": "Calgary International Airport",
    "timezone": "America/Edmonton",
    "iata": "YYC",
    "icao": "CYYC",
    "terminal": null,
    "gate": "D72",
    "delay": 20,
    "scheduled": "2022-05-29T00:05:00+00:00",
    "estimated": "2022-05-29T00:05:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "arrival": {
    "airport": "Lester B. Pearson International",
    "timezone": "America/Toronto",
    "iata": "YYZ",
    "icao": "CYYZ",
    "terminal": "3",
    "gate": null,
    "baggage": null,
    "delay": null,
    "scheduled": "2022-05-29T05:45:00+00:00",
    "estimated": "2022-05-29T05:45:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
    },
    "airline": {
    "name": "Aeromexico",
    "iata": "AM",
    "icao": "AMX"
    },
    "flight": {
    "number": "7300",
    "iata": "AM7300",
    "icao": "AMX7300",
    "codeshared": {
    "airline_name": "westjet",
    "airline_iata": "ws",
    "airline_icao": "wja",
    "flight_number": "652",
    "flight_iata": "ws652",
    "flight_icao": "wja652"
    }
    },
    "aircraft": null,
    "live": null
    }
    ]

disp = "";
function listDAirp(){
    for(i in flights){
        disp += "<option> <h5>" + flights[i].departure.airport + "</h5> <br> <p>"+ flights[i].departure.scheduled + "</p></option>"
    }
    document.getElementById('depAirpoty').innerHTML =  disp
    document.getElementById('depAirpot').innerHTML =  disp
}
// listDAirp()



function listArrivalAirp(){
    for(i in flights){
        disp += "<option> <h5>" + flights[i].arrival.airport + "</h5> <br> <p>"+ flights[i].arrival.scheduled + "</p></option>"
    }
    document.getElementById('arriveAirpoty').innerHTML =  disp
    document.getElementById('arriveAirpot').innerHTML =  disp
}
// listArrivalAirp()


function fun(){
    for(i in flights){
        disp += `<div class="border">
                <div class="row"><div class="col-9"><small class="my-1 fw-bold">${flights[i].arrival.airport}</small><br><small> ${flights[i].arrival.scheduled}</small></div><div class= "bg-info col-1"> </div><div class= " bg-danger col-2"> M</div></div></div>`
    }
    
    document.getElementById('oldSoldier').innerHTML =  disp
}
fun()

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  getLocation()
  
  async function showPosition(position) {
  
    const AIRPORTS = await fetch(`https://airlabs.co/api/v9/nearby?lat=6.4913&lng=3.3849&distance=20000&api_key=6f0d6f8f-295b-46b4-a595-6388f121a0c3`);


    // https://airlabs.co/api/v9/nearby?lat=6.4913&lng=3.3849&distance=2000&api_key=6f0d6f8f-295b-46b4-a595-6388f121a0c3

    const list = await AIRPORTS.json();


    for(i in list){
        disp += `<div class="dropdown-item border" href="#"><div class="row"><div class="col-9"><small class="my-1 fw-bold">${list.response.airports[i]}</small><br><small> Hell</small></div><div class= "bg-info col-1"> MM</div><div class= " bg-danger col-2"> M</div></div></div>`
    }
    
    document.getElementById('demo').innerHTML =  disp
  
  
      
  
    //   x.innerHTML = list.response.airports[0].name
  
  //   x.innerHTML = "Latitude: " + position.coords.latitude +
  //   "<br>Longitude: " + position.coords.longitude;
  }