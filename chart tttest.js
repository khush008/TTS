$(function () {

    // Create the chart
    $('#container').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'TTs Rise Report'
        },
        xAxis: {
            type: 'category'
        },

        legend: {
            enabled: false
        },

        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                }
            }
        },
series: 
  [ {
    name: "MAIN TTS",
    colorByPoint: true,
    data: 
    [ 
{
     name: "VISHAL",
     y: 3149,
     drilldown: "IDbrd1"
     },
{
     name: "SUNIL",
     y: 2913,
     drilldown: "IDbrd2"
     },
{
     name: "SANJAY",
     y: 3247,
     drilldown: "IDbrd3"
     },
{
     name: "MOSIN",
     y: 2011,
     drilldown: "IDbrd4"
     },
{
     name: "VIRAL",
     y: 1725,
     drilldown: "IDbrd5"
     },

    ]
   }
  ],

        drilldown:
  {
            series: 
   [     
{
     id: "IDbrd1",
     name: "Vishal ZONE TTs",
     data: 
     [
{
       name: "YESVARDHAN-VADCARD07",
       y: 219,
       drilldown: "ID_YESVARDHAN-VADCARD07"
       },
{
       name: "VRAJWADI-VADCARD15",
       y: 80,
       drilldown: "ID_VRAJWADI-VADCARD15"
       },
{
       name: "VRAJDEEP-VADCARD17",
       y: 118,
       drilldown: "ID_VRAJDEEP-VADCARD17"
       },
{
       name: "VISHRANTI-VADCARD18",
       y: 120,
       drilldown: "ID_VISHRANTI-VADCARD18"
       },
{
       name: "URMI-VADCARD17",
       y: 135,
       drilldown: "ID_URMI-VADCARD17"
       },
{
       name: "SURYAKIRAN-VADCARD20",
       y: 125,
       drilldown: "ID_SURYAKIRAN-VADCARD20"
       },
{
       name: "ST KABIR-VADCARD05",
       y: 212,
       drilldown: "ID_ST KABIR-VADCARD05"
       },
{
       name: "SHREEPUSTI-VADCARD17",
       y: 62,
       drilldown: "ID_SHREEPUSTI-VADCARD17"
       },
{
       name: "SAPPHIRE-VADCARD07",
       y: 185,
       drilldown: "ID_SAPPHIRE-VADCARD07"
       },
{
       name: "SANTKRUPA-VADCARD07",
       y: 143,
       drilldown: "ID_SANTKRUPA-VADCARD07"
       },
{
       name: "SAINATH-VADCARD15",
       y: 223,
       drilldown: "ID_SAINATH-VADCARD15"
       },
{
       name: "PSHABHAIPRK-VADCARD17",
       y: 0,
       drilldown: "ID_PSHABHAIPRK-VADCARD17"
       },
{
       name: "PADMAVATI-VADCARD17",
       y: 256,
       drilldown: "ID_PADMAVATI-VADCARD17"
       },
{
       name: "MATHURANGR-VADCARD07",
       y: 137,
       drilldown: "ID_MATHURANGR-VADCARD07"
       },
{
       name: "MAHEFUJ-VADCARD07",
       y: 126,
       drilldown: "ID_MAHEFUJ-VADCARD07"
       },
{
       name: "HELLY-VADCARD15",
       y: 27,
       drilldown: "ID_HELLY-VADCARD15"
       },
{
       name: "GREEN HOUSE-VADCARD20",
       y: 44,
       drilldown: "ID_GREEN HOUSE-VADCARD20"
       },
{
       name: "FAZILA-VADCARD05",
       y: 173,
       drilldown: "ID_FAZILA-VADCARD05"
       },
{
       name: "DISHANT-VADCARD07",
       y: 55,
       drilldown: "ID_DISHANT-VADCARD07"
       },
{
       name: "BHAGYODAYA-VADCARD17",
       y: 100,
       drilldown: "ID_BHAGYODAYA-VADCARD17"
       },
{
       name: "BALAJI-VADCARD07",
       y: 179,
       drilldown: "ID_BALAJI-VADCARD07"
       },
{
       name: "BALAJI-GOLD-VADCARD18",
       y: 71,
       drilldown: "ID_BALAJI-GOLD-VADCARD18"
       },
{
       name: "AVISHKAR-VADCARD20",
       y: 86,
       drilldown: "ID_AVISHKAR-VADCARD20"
       },
{
       name: "ARYANIDAM-VADCARD15",
       y: 60,
       drilldown: "ID_ARYANIDAM-VADCARD15"
       },
{
       name: "ARTI PLAZA-VADCARD18",
       y: 65,
       drilldown: "ID_ARTI PLAZA-VADCARD18"
       },
{
       name: "ANANYA-VADCARD07",
       y: 76,
       drilldown: "ID_ANANYA-VADCARD07"
       },
{
       name: "ABHISHEK-VADCARD15",
       y: 72,
       drilldown: "ID_ABHISHEK-VADCARD15"
       },
]
},
{
     id: "IDbrd2",
     name: "Sunil ZONE TTs",
     data: 
     [
{
       name: "VRAJVENU-VADCARD11",
       y: 60,
       drilldown: "ID_VRAJVENU-VADCARD11"
       },
{
       name: "VISHNUKUNJ-VADCARD15",
       y: 112,
       drilldown: "ID_VISHNUKUNJ-VADCARD15"
       },
{
       name: "VARDHMAN-VADCARD14",
       y: 0,
       drilldown: "ID_VARDHMAN-VADCARD14"
       },
{
       name: "VARDHAMAN-VADCARD03",
       y: 0,
       drilldown: "ID_VARDHAMAN-VADCARD03"
       },
{
       name: "URVISHIAPPT-VADCARD11",
       y: 28,
       drilldown: "ID_URVISHIAPPT-VADCARD11"
       },
{
       name: "UMATIRTH-VADCARD14",
       y: 22,
       drilldown: "ID_UMATIRTH-VADCARD14"
       },
{
       name: "SURAJ AVN-VADCARD13",
       y: 46,
       drilldown: "ID_SURAJ AVN-VADCARD13"
       },
{
       name: "SUKUN-VADCARD14",
       y: 94,
       drilldown: "ID_SUKUN-VADCARD14"
       },
{
       name: "SHIVALIK-VADCARD14",
       y: 154,
       drilldown: "ID_SHIVALIK-VADCARD14"
       },
{
       name: "SHAKTIPARK-VADCARD20",
       y: 84,
       drilldown: "ID_SHAKTIPARK-VADCARD20"
       },
{
       name: "SHAILY-VADCARD15",
       y: 34,
       drilldown: "ID_SHAILY-VADCARD15"
       },
{
       name: "SAURABHPARK-VADCARD11",
       y: 82,
       drilldown: "ID_SAURABHPARK-VADCARD11"
       },
{
       name: "RENAISSANCE-VADCARD07",
       y: 155,
       drilldown: "ID_RENAISSANCE-VADCARD07"
       },
{
       name: "RED-APPLE-VADCARD13",
       y: 29,
       drilldown: "ID_RED-APPLE-VADCARD13"
       },
{
       name: "RADHEYRESI-VADCARD14",
       y: 0,
       drilldown: "ID_RADHEYRESI-VADCARD14"
       },
{
       name: "RACHNA-VADCARD15",
       y: 42,
       drilldown: "ID_RACHNA-VADCARD15"
       },
{
       name: "PUJER-VADCARD14",
       y: 95,
       drilldown: "ID_PUJER-VADCARD14"
       },
{
       name: "PREMSAGAR-VADCARD12",
       y: 0,
       drilldown: "ID_PREMSAGAR-VADCARD12"
       },
{
       name: "PRAKRUTIEMP-VADCARD14",
       y: 11,
       drilldown: "ID_PRAKRUTIEMP-VADCARD14"
       },
{
       name: "PAVANDHAM-VADCARD14",
       y: 51,
       drilldown: "ID_PAVANDHAM-VADCARD14"
       },
{
       name: "MAGALDEEP-VADCARD15",
       y: 20,
       drilldown: "ID_MAGALDEEP-VADCARD15"
       },
{
       name: "LAXMIPURA-VADCARD14",
       y: 52,
       drilldown: "ID_LAXMIPURA-VADCARD14"
       },
{
       name: "INDRAPRASTH-VADCARD17",
       y: 197,
       drilldown: "ID_INDRAPRASTH-VADCARD17"
       },
{
       name: "HEERAPANNA-VADCARD07",
       y: 75,
       drilldown: "ID_HEERAPANNA-VADCARD07"
       },
{
       name: "HARMONY-VADCARD07",
       y: 69,
       drilldown: "ID_HARMONY-VADCARD07"
       },
{
       name: "HARIOM-VADCARD15",
       y: 70,
       drilldown: "ID_HARIOM-VADCARD15"
       },
{
       name: "HARINAGAR-VADCARD15",
       y: 60,
       drilldown: "ID_HARINAGAR-VADCARD15"
       },
{
       name: "GLECERCMPLX-VADCARD20",
       y: 214,
       drilldown: "ID_GLECERCMPLX-VADCARD20"
       },
{
       name: "DINKY-VADCARD15",
       y: 27,
       drilldown: "ID_DINKY-VADCARD15"
       },
{
       name: "DEVCOM-VADCARD17",
       y: 50,
       drilldown: "ID_DEVCOM-VADCARD17"
       },
{
       name: "DATTAR-VADCARD13",
       y: 108,
       drilldown: "ID_DATTAR-VADCARD13"
       },
{
       name: "CORNER-PT-VADCARD20",
       y: 249,
       drilldown: "ID_CORNER-PT-VADCARD20"
       },
{
       name: "CENTERPONT-VADCARD20",
       y: 107,
       drilldown: "ID_CENTERPONT-VADCARD20"
       },
{
       name: "BVM-VADCARD13",
       y: 64,
       drilldown: "ID_BVM-VADCARD13"
       },
{
       name: "BLUE-VIEW-VADCARD17",
       y: 62,
       drilldown: "ID_BLUE-VIEW-VADCARD17"
       },
{
       name: "AYUSH-VADCARD14",
       y: 12,
       drilldown: "ID_AYUSH-VADCARD14"
       },
{
       name: "ASTHASIVLIK-VADCARD14",
       y: 91,
       drilldown: "ID_ASTHASIVLIK-VADCARD14"
       },
{
       name: "ANTARIKSH-VADCARD11",
       y: 108,
       drilldown: "ID_ANTARIKSH-VADCARD11"
       },
{
       name: "AMPRAPALI-VADCARD11",
       y: 5,
       drilldown: "ID_AMPRAPALI-VADCARD11"
       },
{
       name: "ADALJA-VADCARD14",
       y: 100,
       drilldown: "ID_ADALJA-VADCARD14"
       },
{
       name: "AAKRUTI-VADCARD20",
       y: 74,
       drilldown: "ID_AAKRUTI-VADCARD20"
       },
]
},
{
     id: "IDbrd3",
     name: "Sanjay ZONE TTs",
     data: 
     [
{
       name: "VIRNAGAR-VADCARD06_12",
       y: 9,
       drilldown: "ID_VIRNAGAR-VADCARD06_12"
       },
{
       name: "VIP-VADCARD06",
       y: 0,
       drilldown: "ID_VIP-VADCARD06"
       },
{
       name: "VALMIKI-VADCARD12",
       y: 85,
       drilldown: "ID_VALMIKI-VADCARD12"
       },
{
       name: "VALMIKISOC-VADCARD12",
       y: 0,
       drilldown: "ID_VALMIKISOC-VADCARD12"
       },
{
       name: "SURYADARSAN-VADCARD06",
       y: 32,
       drilldown: "ID_SURYADARSAN-VADCARD06"
       },
{
       name: "SURAMYA-VADCARD06",
       y: 87,
       drilldown: "ID_SURAMYA-VADCARD06"
       },
{
       name: "SUKHAMRES-VADCARD06",
       y: 92,
       drilldown: "ID_SUKHAMRES-VADCARD06"
       },
{
       name: "SPRING HILL-VADCARD06",
       y: 182,
       drilldown: "ID_SPRING HILL-VADCARD06"
       },
{
       name: "SNEHAL-VADCARD07",
       y: 195,
       drilldown: "ID_SNEHAL-VADCARD07"
       },
{
       name: "SHREPADNGR-VADCARD06",
       y: 208,
       drilldown: "ID_SHREPADNGR-VADCARD06"
       },
{
       name: "SARDARNGR-VADCARD16",
       y: 58,
       drilldown: "ID_SARDARNGR-VADCARD16"
       },
{
       name: "SAANIDHYA-VADCARD12",
       y: 234,
       drilldown: "ID_SAANIDHYA-VADCARD12"
       },
{
       name: "RADHANGR-VADCARD12",
       y: 52,
       drilldown: "ID_RADHANGR-VADCARD12"
       },
{
       name: "NILKANTHV-VADCARD12",
       y: 71,
       drilldown: "ID_NILKANTHV-VADCARD12"
       },
{
       name: "NILKANTHVERNI-VADCARD12",
       y: 0,
       drilldown: "ID_NILKANTHVERNI-VADCARD12"
       },
{
       name: "NILKANTH-VADCARD02",
       y: 0,
       drilldown: "ID_NILKANTH-VADCARD02"
       },
{
       name: "NARAYAN-VADCARD06",
       y: 51,
       drilldown: "ID_NARAYAN-VADCARD06"
       },
{
       name: "NANDANVAN-VADCARD12",
       y: 0,
       drilldown: "ID_NANDANVAN-VADCARD12"
       },
{
       name: "MUDJINAGAR-VADCARD16",
       y: 41,
       drilldown: "ID_MUDJINAGAR-VADCARD16"
       },
{
       name: "MTI-VADCARD16",
       y: 56,
       drilldown: "ID_MTI-VADCARD16"
       },
{
       name: "MATRU ASISH-VADCARD07",
       y: 108,
       drilldown: "ID_MATRU ASISH-VADCARD07"
       },
{
       name: "MARUTI-VADCARD09",
       y: 220,
       drilldown: "ID_MARUTI-VADCARD09"
       },
{
       name: "MARUTI-K-VADCARD06",
       y: 0,
       drilldown: "ID_MARUTI-K-VADCARD06"
       },
{
       name: "MANEK-VADCARD06",
       y: 5,
       drilldown: "ID_MANEK-VADCARD06"
       },
{
       name: "KRUTI-VADCARD07",
       y: 105,
       drilldown: "ID_KRUTI-VADCARD07"
       },
{
       name: "KALAKUNJ-VADCARD06",
       y: 127,
       drilldown: "ID_KALAKUNJ-VADCARD06"
       },
{
       name: "INDSTRLSOC-VADCARD12",
       y: 92,
       drilldown: "ID_INDSTRLSOC-VADCARD12"
       },
{
       name: "HERITAGE-VADCARD09",
       y: 61,
       drilldown: "ID_HERITAGE-VADCARD09"
       },
{
       name: "HARKASHI-VADCARD06",
       y: 34,
       drilldown: "ID_HARKASHI-VADCARD06"
       },
{
       name: "GOKULESH-VADCARD16",
       y: 41,
       drilldown: "ID_GOKULESH-VADCARD16"
       },
{
       name: "GIRDHRKRUPA-VADCARD12",
       y: 139,
       drilldown: "ID_GIRDHRKRUPA-VADCARD12"
       },
{
       name: "EME-VADCARD16",
       y: 21,
       drilldown: "ID_EME-VADCARD16"
       },
{
       name: "DWARKESH-VADCARD06",
       y: 72,
       drilldown: "ID_DWARKESH-VADCARD06"
       },
{
       name: "DHANLAXMI-VADCARD06",
       y: 141,
       drilldown: "ID_DHANLAXMI-VADCARD06"
       },
{
       name: "DEEPIKA-VADCARD06",
       y: 77,
       drilldown: "ID_DEEPIKA-VADCARD06"
       },
{
       name: "CHRISTAN-VADCARD16",
       y: 0,
       drilldown: "ID_CHRISTAN-VADCARD16"
       },
{
       name: "BHAVIN-VADCARD12",
       y: 0,
       drilldown: "ID_BHAVIN-VADCARD12"
       },
{
       name: "BHAVINTENA-VADCARD12",
       y: 0,
       drilldown: "ID_BHAVINTENA-VADCARD12"
       },
{
       name: "ARPAN-VADCARD16",
       y: 248,
       drilldown: "ID_ARPAN-VADCARD16"
       },
{
       name: "ANANDSOC-VADCARD12",
       y: 121,
       drilldown: "ID_ANANDSOC-VADCARD12"
       },
{
       name: "AMIZARA-VADCARD06",
       y: 71,
       drilldown: "ID_AMIZARA-VADCARD06"
       },
{
       name: "AMITNAGAR-VADCARD06",
       y: 6,
       drilldown: "ID_AMITNAGAR-VADCARD06"
       },
{
       name: "ABHILASHA-VADCARD12",
       y: 105,
       drilldown: "ID_ABHILASHA-VADCARD12"
       },
]
},
{
     id: "IDbrd4",
     name: "Mosin ZONE TTs",
     data: 
     [
{
       name: "WORLD TRADE VAD-VADCARD17",
       y: 91,
       drilldown: "ID_WORLD TRADE VAD-VADCARD17"
       },
{
       name: "VRUND-VADCARD19",
       y: 84,
       drilldown: "ID_VRUND-VADCARD19"
       },
{
       name: "VIJAY NAGAR-VADCARD06",
       y: 120,
       drilldown: "ID_VIJAY NAGAR-VADCARD06"
       },
{
       name: "VIHAL COMP-VADCARD19",
       y: 114,
       drilldown: "ID_VIHAL COMP-VADCARD19"
       },
{
       name: "VAIKUNTH-VADCARD10",
       y: 93,
       drilldown: "ID_VAIKUNTH-VADCARD10"
       },
{
       name: "SHANTIFLAT-VADCARD19",
       y: 44,
       drilldown: "ID_SHANTIFLAT-VADCARD19"
       },
{
       name: "RUPAAPPT-VADCARD08",
       y: 38,
       drilldown: "ID_RUPAAPPT-VADCARD08"
       },
{
       name: "RUPAAPPT3-VADCARD08",
       y: 141,
       drilldown: "ID_RUPAAPPT3-VADCARD08"
       },
{
       name: "RUPAAPPT2-VADCARD08",
       y: 84,
       drilldown: "ID_RUPAAPPT2-VADCARD08"
       },
{
       name: "PUSPAM-VADCARD06",
       y: 33,
       drilldown: "ID_PUSPAM-VADCARD06"
       },
{
       name: "POONAM COMP-VADCARD19",
       y: 70,
       drilldown: "ID_POONAM COMP-VADCARD19"
       },
{
       name: "PARADISE-VADCARD17",
       y: 88,
       drilldown: "ID_PARADISE-VADCARD17"
       },
{
       name: "NILAX-VADCARD06",
       y: 41,
       drilldown: "ID_NILAX-VADCARD06"
       },
{
       name: "NAVRANG COM-VADCARD08",
       y: 48,
       drilldown: "ID_NAVRANG COM-VADCARD08"
       },
{
       name: "NATIBANAGAR-VADCARD10",
       y: 29,
       drilldown: "ID_NATIBANAGAR-VADCARD10"
       },
{
       name: "KRISHNALILA-VADCARD06",
       y: 68,
       drilldown: "ID_KRISHNALILA-VADCARD06"
       },
{
       name: "KALPATRU-VADCARD08",
       y: 129,
       drilldown: "ID_KALPATRU-VADCARD08"
       },
{
       name: "KALADARSHAN-VADCARD19",
       y: 51,
       drilldown: "ID_KALADARSHAN-VADCARD19"
       },
{
       name: "INDRAPURI-VADCARD06",
       y: 47,
       drilldown: "ID_INDRAPURI-VADCARD06"
       },
{
       name: "HIRAVANTI-VADCARD10",
       y: 54,
       drilldown: "ID_HIRAVANTI-VADCARD10"
       },
{
       name: "GOKHLEAPPT-VADCARD08",
       y: 93,
       drilldown: "ID_GOKHLEAPPT-VADCARD08"
       },
{
       name: "GAURINANDAN-VADCARD19",
       y: 153,
       drilldown: "ID_GAURINANDAN-VADCARD19"
       },
{
       name: "CHANDRANGR-VADCARD19",
       y: 175,
       drilldown: "ID_CHANDRANGR-VADCARD19"
       },
{
       name: "AMIDARSHAN-VADCARD19",
       y: 52,
       drilldown: "ID_AMIDARSHAN-VADCARD19"
       },
{
       name: "AMBIKA-VADCARD10",
       y: 71,
       drilldown: "ID_AMBIKA-VADCARD10"
       },
]
},
{
     id: "IDbrd5",
     name: "Viral ZONE TTs",
     data: 
     [
{
       name: "TULSIAPPT-VADCARD02",
       y: 72,
       drilldown: "ID_TULSIAPPT-VADCARD02"
       },
{
       name: "TRIVENI-VADCARD02",
       y: 108,
       drilldown: "ID_TRIVENI-VADCARD02"
       },
{
       name: "SUNCITY-VADCARD20",
       y: 19,
       drilldown: "ID_SUNCITY-VADCARD20"
       },
{
       name: "SILVER ROCK-VADCARD02",
       y: 172,
       drilldown: "ID_SILVER ROCK-VADCARD02"
       },
{
       name: "SHREEJI-VADCARD02",
       y: 118,
       drilldown: "ID_SHREEJI-VADCARD02"
       },
{
       name: "SHIVSUNDAR-VADCARD02",
       y: 116,
       drilldown: "ID_SHIVSUNDAR-VADCARD02"
       },
{
       name: "SHAMRUDHI-VADCARD02",
       y: 56,
       drilldown: "ID_SHAMRUDHI-VADCARD02"
       },
{
       name: "SAIDARSHAN-VADCARD02",
       y: 50,
       drilldown: "ID_SAIDARSHAN-VADCARD02"
       },
{
       name: "PARTHAVNEW-VADCARD02",
       y: 80,
       drilldown: "ID_PARTHAVNEW-VADCARD02"
       },
{
       name: "NITYANAND-VADCARD02",
       y: 77,
       drilldown: "ID_NITYANAND-VADCARD02"
       },
{
       name: "MANJALPUR-VADCARD02",
       y: 39,
       drilldown: "ID_MANJALPUR-VADCARD02"
       },
{
       name: "MANIVILLA-VADCARD02",
       y: 100,
       drilldown: "ID_MANIVILLA-VADCARD02"
       },
{
       name: "LXMINARYN-VADCARD02",
       y: 104,
       drilldown: "ID_LXMINARYN-VADCARD02"
       },
{
       name: "KRISHNA-VADCARD02",
       y: 129,
       drilldown: "ID_KRISHNA-VADCARD02"
       },
{
       name: "KEDARDHAM-VADCARD02",
       y: 51,
       drilldown: "ID_KEDARDHAM-VADCARD02"
       },
{
       name: "JGDAMBA-VADCARD02",
       y: 45,
       drilldown: "ID_JGDAMBA-VADCARD02"
       },
{
       name: "GANESHCMPLX-VADCARD02",
       y: 67,
       drilldown: "ID_GANESHCMPLX-VADCARD02"
       },
{
       name: "DEVKINANDAN-VADCARD02",
       y: 131,
       drilldown: "ID_DEVKINANDAN-VADCARD02"
       },
{
       name: "BARODA HGT-VADCARD02",
       y: 10,
       drilldown: "ID_BARODA HGT-VADCARD02"
       },
{
       name: "BALGOPAL-VADCARD02",
       y: 181,
       drilldown: "ID_BALGOPAL-VADCARD02"
       },
]
},
{
    id: "ID_YESVARDHAN-VADCARD07",
    data: 
    [
{
     name: "DAY 1",
     y: 3,
     },
{
     name: "DAY 2",
     y: 14,
     },
{
     name: "DAY 3",
     y: 4,
     },
{
     name: "DAY 4",
     y: 13,
     },
{
     name: "DAY 5",
     y: 14,
     },
{
     name: "DAY 6",
     y: 15,
     },
{
     name: "DAY 7",
     y: 13,
     },
{
     name: "DAY 8",
     y: 7,
     },
{
     name: "DAY 9",
     y: 4,
     },
{
     name: "DAY 10",
     y: 5,
     },
{
     name: "DAY 11",
     y: 7,
     },
{
     name: "DAY 12",
     y: 6,
     },
{
     name: "DAY 13",
     y: 8,
     },
{
     name: "DAY 14",
     y: 7,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 9,
     },
{
     name: "DAY 17",
     y: 7,
     },
{
     name: "DAY 18",
     y: 5,
     },
{
     name: "DAY 19",
     y: 6,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 1,
     },
{
     name: "DAY 22",
     y: 3,
     },
{
     name: "DAY 23",
     y: 5,
     },
{
     name: "DAY 24",
     y: 7,
     },
{
     name: "DAY 25",
     y: 9,
     },
{
     name: "DAY 26",
     y: 6,
     },
{
     name: "DAY 27",
     y: 5,
     },
{
     name: "DAY 28",
     y: 9,
     },
{
     name: "DAY 29",
     y: 3,
     },
{
     name: "DAY 30",
     y: 5,
     },
{
     name: "DAY 31",
     y: 16,
     },
]
},
{
    id: "ID_ANANYA-VADCARD07",
    data: 
    [
{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 1,
     },
{
     name: "DAY 5",
     y: 3,
     },
{
     name: "DAY 6",
     y: 3,
     },
{
     name: "DAY 7",
     y: 4,
     },
{
     name: "DAY 8",
     y: 0,
     },
{
     name: "DAY 9",
     y: 1,
     },
{
     name: "DAY 10",
     y: 1,
     },
{
     name: "DAY 11",
     y: 2,
     },
{
     name: "DAY 12",
     y: 5,
     },
{
     name: "DAY 13",
     y: 4,
     },
{
     name: "DAY 14",
     y: 5,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 4,
     },
{
     name: "DAY 17",
     y: 1,
     },
{
     name: "DAY 18",
     y: 4,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 1,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 3,
     },
{
     name: "DAY 24",
     y: 4,
     },
{
     name: "DAY 25",
     y: 5,
     },
{
     name: "DAY 26",
     y: 6,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 2,
     },
{
     name: "DAY 29",
     y: 2,
     },
{
     name: "DAY 30",
     y: 0,
     },
{
     name: "DAY 31",
     y: 3,
     },
]
},
{
    id: "ID_ARTI PLAZA-VADCARD18",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 3",
     y: 0,
     },
{
     name: "DAY 4",
     y: 2,
     },
{
     name: "DAY 5",
     y: 1,
     },
{
     name: "DAY 6",
     y: 4,
     },
{
     name: "DAY 7",
     y: 0,
     },
{
     name: "DAY 8",
     y: 2,
     },
{
     name: "DAY 9",
     y: 5,
     },
{
     name: "DAY 10",
     y: 3,
     },
{
     name: "DAY 11",
     y: 2,
     },
{
     name: "DAY 12",
     y: 5,
     },
{
     name: "DAY 13",
     y: 1,
     },
{
     name: "DAY 14",
     y: 1,
     },
{
     name: "DAY 15",
     y: 0,
     },
{
     name: "DAY 16",
     y: 0,
     },
{
     name: "DAY 17",
     y: 3,
     },
{
     name: "DAY 18",
     y: 1,
     },
{
     name: "DAY 19",
     y: 3,
     },
{
     name: "DAY 20",
     y: 2,
     },
{
     name: "DAY 21",
     y: 2,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 24",
     y: 1,
     },
{
     name: "DAY 25",
     y: 5,
     },
{
     name: "DAY 26",
     y: 4,
     },
{
     name: "DAY 27",
     y: 8,
     },
{
     name: "DAY 28",
     y: 3,
     },
{
     name: "DAY 29",
     y: 1,
     },
{
     name: "DAY 30",
     y: 2,
     },
{
     name: "DAY 31",
     y: 2,
     },
]
},
{
    id: "ID_ARYANIDAM-VADCARD15",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 3",
     y: 0,
     },
{
     name: "DAY 4",
     y: 1,
     },
{
     name: "DAY 5",
     y: 1,
     },
{
     name: "DAY 6",
     y: 2,
     },
{
     name: "DAY 7",
     y: 2,
     },
{
     name: "DAY 8",
     y: 3,
     },
{
     name: "DAY 9",
     y: 3,
     },
{
     name: "DAY 10",
     y: 0,
     },
{
     name: "DAY 11",
     y: 0,
     },
{
     name: "DAY 12",
     y: 1,
     },
{
     name: "DAY 13",
     y: 0,
     },
{
     name: "DAY 14",
     y: 1,
     },
{
     name: "DAY 15",
     y: 1,
     },
{
     name: "DAY 16",
     y: 1,
     },
{
     name: "DAY 17",
     y: 2,
     },
{
     name: "DAY 18",
     y: 1,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 3,
     },
{
     name: "DAY 21",
     y: 1,
     },
{
     name: "DAY 22",
     y: 2,
     },
{
     name: "DAY 23",
     y: 2,
     },
{
     name: "DAY 24",
     y: 2,
     },
{
     name: "DAY 25",
     y: 2,
     },
{
     name: "DAY 26",
     y: 3,
     },
{
     name: "DAY 27",
     y: 3,
     },
{
     name: "DAY 28",
     y: 5,
     },
{
     name: "DAY 29",
     y: 2,
     },
{
     name: "DAY 30",
     y: 4,
     },
{
     name: "DAY 31",
     y: 11,
     },
]
},
{
    id: "ID_AVISHKAR-VADCARD20",
    data: 
    [
{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 4,
     },
{
     name: "DAY 5",
     y: 7,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 7",
     y: 4,
     },
{
     name: "DAY 8",
     y: 8,
     },
{
     name: "DAY 9",
     y: 8,
     },
{
     name: "DAY 10",
     y: 4,
     },
{
     name: "DAY 11",
     y: 6,
     },
{
     name: "DAY 12",
     y: 4,
     },
{
     name: "DAY 13",
     y: 2,
     },
{
     name: "DAY 14",
     y: 1,
     },
{
     name: "DAY 15",
     y: 3,
     },
{
     name: "DAY 16",
     y: 2,
     },
{
     name: "DAY 17",
     y: 2,
     },
{
     name: "DAY 18",
     y: 0,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 3,
     },
{
     name: "DAY 23",
     y: 5,
     },
{
     name: "DAY 24",
     y: 4,
     },
{
     name: "DAY 25",
     y: 3,
     },
{
     name: "DAY 26",
     y: 3,
     },
{
     name: "DAY 27",
     y: 3,
     },
{
     name: "DAY 28",
     y: 1,
     },
{
     name: "DAY 29",
     y: 1,
     },
{
     name: "DAY 30",
     y: 1,
     },
{
     name: "DAY 31",
     y: 1,
     },
]
},
{
    id: "ID_BALAJI-GOLD-VADCARD18",
    data: 
    [
{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 3,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 6,
     },
{
     name: "DAY 5",
     y: 0,
     },
{
     name: "DAY 6",
     y: 0,
     },
{
     name: "DAY 7",
     y: 2,
     },
{
     name: "DAY 8",
     y: 2,
     },
{
     name: "DAY 9",
     y: 2,
     },
{
     name: "DAY 10",
     y: 3,
     },
{
     name: "DAY 11",
     y: 1,
     },
{
     name: "DAY 12",
     y: 1,
     },
{
     name: "DAY 13",
     y: 4,
     },
{
     name: "DAY 14",
     y: 3,
     },
{
     name: "DAY 15",
     y: 1,
     },
{
     name: "DAY 16",
     y: 1,
     },
{
     name: "DAY 17",
     y: 4,
     },
{
     name: "DAY 18",
     y: 3,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 9,
     },
{
     name: "DAY 24",
     y: 6,
     },
{
     name: "DAY 25",
     y: 4,
     },
{
     name: "DAY 26",
     y: 2,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 6,
     },
{
     name: "DAY 29",
     y: 0,
     },
{
     name: "DAY 30",
     y: 1,
     },
{
     name: "DAY 31",
     y: 2,
     },
]
},
{
    id: "ID_BALAJI-VADCARD07",
    data: 
    [
{
     name: "DAY 1",
     y: 3,
     },
{
     name: "DAY 2",
     y: 10,
     },
{
     name: "DAY 3",
     y: 7,
     },
{
     name: "DAY 4",
     y: 6,
     },
{
     name: "DAY 5",
     y: 12,
     },
{
     name: "DAY 6",
     y: 11,
     },
{
     name: "DAY 7",
     y: 2,
     },
{
     name: "DAY 8",
     y: 3,
     },
{
     name: "DAY 9",
     y: 12,
     },
{
     name: "DAY 10",
     y: 5,
     },
{
     name: "DAY 11",
     y: 9,
     },
{
     name: "DAY 12",
     y: 7,
     },
{
     name: "DAY 13",
     y: 2,
     },
{
     name: "DAY 14",
     y: 3,
     },
{
     name: "DAY 15",
     y: 5,
     },
{
     name: "DAY 16",
     y: 6,
     },
{
     name: "DAY 17",
     y: 8,
     },
{
     name: "DAY 18",
     y: 1,
     },
{
     name: "DAY 19",
     y: 4,
     },
{
     name: "DAY 20",
     y: 3,
     },
{
     name: "DAY 21",
     y: 2,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 4,
     },
{
     name: "DAY 24",
     y: 6,
     },
{
     name: "DAY 25",
     y: 6,
     },
{
     name: "DAY 26",
     y: 5,
     },
{
     name: "DAY 27",
     y: 7,
     },
{
     name: "DAY 28",
     y: 7,
     },
{
     name: "DAY 29",
     y: 2,
     },
{
     name: "DAY 30",
     y: 8,
     },
{
     name: "DAY 31",
     y: 12,
     },
]
},
{
    id: "ID_BHAGYODAYA-VADCARD17",
    data: 
    [
{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 2,
     },
{
     name: "DAY 5",
     y: 4,
     },
{
     name: "DAY 6",
     y: 4,
     },
{
     name: "DAY 7",
     y: 6,
     },
{
     name: "DAY 8",
     y: 3,
     },
{
     name: "DAY 9",
     y: 4,
     },
{
     name: "DAY 10",
     y: 6,
     },
{
     name: "DAY 11",
     y: 4,
     },
{
     name: "DAY 12",
     y: 3,
     },
{
     name: "DAY 13",
     y: 2,
     },
{
     name: "DAY 14",
     y: 2,
     },
{
     name: "DAY 15",
     y: 1,
     },
{
     name: "DAY 16",
     y: 1,
     },
{
     name: "DAY 17",
     y: 4,
     },
{
     name: "DAY 18",
     y: 3,
     },
{
     name: "DAY 19",
     y: 2,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 1,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 24",
     y: 6,
     },
{
     name: "DAY 25",
     y: 5,
     },
{
     name: "DAY 26",
     y: 5,
     },
{
     name: "DAY 27",
     y: 6,
     },
{
     name: "DAY 28",
     y: 3,
     },
{
     name: "DAY 29",
     y: 0,
     },
{
     name: "DAY 30",
     y: 5,
     },
{
     name: "DAY 31",
     y: 10,
     },
]
},
{
    id: "ID_DISHANT-VADCARD07",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 3",
     y: 1,
     },
{
     name: "DAY 4",
     y: 0,
     },
{
     name: "DAY 5",
     y: 3,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 7",
     y: 5,
     },
{
     name: "DAY 8",
     y: 1,
     },
{
     name: "DAY 9",
     y: 7,
     },
{
     name: "DAY 10",
     y: 0,
     },
{
     name: "DAY 11",
     y: 1,
     },
{
     name: "DAY 12",
     y: 7,
     },
{
     name: "DAY 13",
     y: 3,
     },
{
     name: "DAY 14",
     y: 3,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 1,
     },
{
     name: "DAY 17",
     y: 3,
     },
{
     name: "DAY 18",
     y: 2,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 3,
     },
{
     name: "DAY 24",
     y: 1,
     },
{
     name: "DAY 25",
     y: 3,
     },
{
     name: "DAY 26",
     y: 1,
     },
{
     name: "DAY 27",
     y: 0,
     },
{
     name: "DAY 28",
     y: 1,
     },
{
     name: "DAY 29",
     y: 3,
     },
{
     name: "DAY 30",
     y: 1,
     },
{
     name: "DAY 31",
     y: 1,
     },
]
},
{
    id: "ID_FAZILA-VADCARD05",
    data: 
    [
{
     name: "DAY 1",
     y: 3,
     },
{
     name: "DAY 2",
     y: 10,
     },
{
     name: "DAY 3",
     y: 4,
     },
{
     name: "DAY 4",
     y: 9,
     },
{
     name: "DAY 5",
     y: 11,
     },
{
     name: "DAY 6",
     y: 4,
     },
{
     name: "DAY 7",
     y: 5,
     },
{
     name: "DAY 8",
     y: 3,
     },
{
     name: "DAY 9",
     y: 3,
     },
{
     name: "DAY 10",
     y: 8,
     },
{
     name: "DAY 11",
     y: 6,
     },
{
     name: "DAY 12",
     y: 4,
     },
{
     name: "DAY 13",
     y: 3,
     },
{
     name: "DAY 14",
     y: 3,
     },
{
     name: "DAY 15",
     y: 6,
     },
{
     name: "DAY 16",
     y: 4,
     },
{
     name: "DAY 17",
     y: 10,
     },
{
     name: "DAY 18",
     y: 15,
     },
{
     name: "DAY 19",
     y: 5,
     },
{
     name: "DAY 20",
     y: 7,
     },
{
     name: "DAY 21",
     y: 7,
     },
{
     name: "DAY 22",
     y: 12,
     },
{
     name: "DAY 23",
     y: 7,
     },
{
     name: "DAY 24",
     y: 2,
     },
{
     name: "DAY 25",
     y: 3,
     },
{
     name: "DAY 26",
     y: 2,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 4,
     },
{
     name: "DAY 29",
     y: 5,
     },
{
     name: "DAY 30",
     y: 2,
     },
{
     name: "DAY 31",
     y: 4,
     },
]
},
{
    id: "ID_GREEN HOUSE-VADCARD20",
    data: 
    [
{
     name: "DAY01",
     y: 1,
     },
{
     name: "DAY02",
     y: 0,
     },
{
     name: "DAY03",
     y: 1,
     },
{
     name: "DAY04",
     y: 0,
     },
{
     name: "DAY05",
     y: 2,
     },
{
     name: "DAY06",
     y: 1,
     },
{
     name: "DAY07",
     y: 0,
     },
{
     name: "DAY08",
     y: 1,
     },
{
     name: "DAY09",
     y: 1,
     },
{
     name: "DAY10",
     y: 2,
     },
{
     name: "DAY11",
     y: 1,
     },
{
     name: "DAY12",
     y: 4,
     },
{
     name: "DAY13",
     y: 2,
     },
{
     name: "DAY14",
     y: 3,
     },
{
     name: "DAY15",
     y: 2,
     },
{
     name: "DAY16",
     y: 2,
     },
{
     name: "DAY17",
     y: 1,
     },
{
     name: "DAY18",
     y: 1,
     },
{
     name: "DAY19",
     y: 2,
     },
{
     name: "DAY20",
     y: 0,
     },
{
     name: "DAY21",
     y: 3,
     },
{
     name: "DAY22",
     y: 1,
     },
{
     name: "DAY23",
     y: 1,
     },
{
     name: "DAY24",
     y: 3,
     },
{
     name: "DAY25",
     y: 3,
     },
{
     name: "DAY26",
     y: 0,
     },
{
     name: "DAY27",
     y: 0,
     },
{
     name: "DAY28",
     y: 1,
     },
{
     name: "DAY29",
     y: 1,
     },
{
     name: "DAY30",
     y: 4,
     },
{
     name: "DAY31",
     y: 0,
     },
]
},
{
    id: "ID_HELLY-VADCARD15",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 3",
     y: 0,
     },
{
     name: "DAY 4",
     y: 0,
     },
{
     name: "DAY 5",
     y: 0,
     },
{
     name: "DAY 6",
     y: 2,
     },
{
     name: "DAY 7",
     y: 0,
     },
{
     name: "DAY 8",
     y: 1,
     },
{
     name: "DAY 9",
     y: 1,
     },
{
     name: "DAY 10",
     y: 1,
     },
{
     name: "DAY 11",
     y: 1,
     },
{
     name: "DAY 12",
     y: 0,
     },
{
     name: "DAY 13",
     y: 1,
     },
{
     name: "DAY 14",
     y: 3,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 0,
     },
{
     name: "DAY 17",
     y: 0,
     },
{
     name: "DAY 18",
     y: 1,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 2,
     },
{
     name: "DAY 24",
     y: 3,
     },
{
     name: "DAY 25",
     y: 1,
     },
{
     name: "DAY 26",
     y: 0,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 3,
     },
{
     name: "DAY 29",
     y: 0,
     },
{
     name: "DAY 30",
     y: 1,
     },
{
     name: "DAY 31",
     y: 0,
     },
]
},
{
    id: "ID_MAHEFUJ-VADCARD07",
    data: 
    [
{
     name: "DAY 1",
     y: 7,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 2,
     },
{
     name: "DAY 5",
     y: 7,
     },
{
     name: "DAY 6",
     y: 3,
     },
{
     name: "DAY 7",
     y: 2,
     },
{
     name: "DAY 8",
     y: 10,
     },
{
     name: "DAY 9",
     y: 7,
     },
{
     name: "DAY 10",
     y: 7,
     },
{
     name: "DAY 11",
     y: 3,
     },
{
     name: "DAY 12",
     y: 9,
     },
{
     name: "DAY 13",
     y: 3,
     },
{
     name: "DAY 14",
     y: 3,
     },
{
     name: "DAY 15",
     y: 5,
     },
{
     name: "DAY 16",
     y: 6,
     },
{
     name: "DAY 17",
     y: 9,
     },
{
     name: "DAY 18",
     y: 2,
     },
{
     name: "DAY 19",
     y: 3,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 2,
     },
{
     name: "DAY 24",
     y: 3,
     },
{
     name: "DAY 25",
     y: 1,
     },
{
     name: "DAY 26",
     y: 5,
     },
{
     name: "DAY 27",
     y: 4,
     },
{
     name: "DAY 28",
     y: 0,
     },
{
     name: "DAY 29",
     y: 5,
     },
{
     name: "DAY 30",
     y: 8,
     },
{
     name: "DAY 31",
     y: 7,
     },
]
},
{
    id: "ID_MATHURANGR-VADCARD07",
    data: 
    [
{
     name: "DAY 1",
     y: 5,
     },
{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 3",
     y: 1,
     },
{
     name: "DAY 4",
     y: 8,
     },
{
     name: "DAY 5",
     y: 2,
     },
{
     name: "DAY 6",
     y: 6,
     },
{
     name: "DAY 7",
     y: 5,
     },
{
     name: "DAY 8",
     y: 5,
     },
{
     name: "DAY 9",
     y: 6,
     },
{
     name: "DAY 10",
     y: 4,
     },
{
     name: "DAY 11",
     y: 10,
     },
{
     name: "DAY 12",
     y: 4,
     },
{
     name: "DAY 13",
     y: 3,
     },
{
     name: "DAY 14",
     y: 3,
     },
{
     name: "DAY 15",
     y: 12,
     },
{
     name: "DAY 16",
     y: 7,
     },
{
     name: "DAY 17",
     y: 5,
     },
{
     name: "DAY 18",
     y: 9,
     },
{
     name: "DAY 19",
     y: 5,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 3,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 6,
     },
{
     name: "DAY 24",
     y: 5,
     },
{
     name: "DAY 25",
     y: 2,
     },
{
     name: "DAY 26",
     y: 5,
     },
{
     name: "DAY 27",
     y: 4,
     },
{
     name: "DAY 28",
     y: 3,
     },
{
     name: "DAY 29",
     y: 0,
     },
{
     name: "DAY 30",
     y: 2,
     },
{
     name: "DAY 31",
     y: 3,
     },
]
},
{
    id: "ID_PADMAVATI-VADCARD17",
    data: 
    [
{
     name: "DAY 1",
     y: 7,
     },
{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 3",
     y: 13,
     },
{
     name: "DAY 4",
     y: 8,
     },
{
     name: "DAY 5",
     y: 8,
     },
{
     name: "DAY 6",
     y: 12,
     },
{
     name: "DAY 7",
     y: 5,
     },
{
     name: "DAY 8",
     y: 8,
     },
{
     name: "DAY 9",
     y: 5,
     },
{
     name: "DAY 10",
     y: 8,
     },
{
     name: "DAY 11",
     y: 10,
     },
{
     name: "DAY 12",
     y: 10,
     },
{
     name: "DAY 13",
     y: 8,
     },
{
     name: "DAY 14",
     y: 10,
     },
{
     name: "DAY 15",
     y: 9,
     },
{
     name: "DAY 16",
     y: 12,
     },
{
     name: "DAY 17",
     y: 5,
     },
{
     name: "DAY 18",
     y: 9,
     },
{
     name: "DAY 19",
     y: 3,
     },
{
     name: "DAY 20",
     y: 2,
     },
{
     name: "DAY 21",
     y: 1,
     },
{
     name: "DAY 22",
     y: 3,
     },
{
     name: "DAY 23",
     y: 4,
     },
{
     name: "DAY 24",
     y: 8,
     },
{
     name: "DAY 25",
     y: 10,
     },
{
     name: "DAY 26",
     y: 10,
     },
{
     name: "DAY 27",
     y: 18,
     },
{
     name: "DAY 28",
     y: 11,
     },
{
     name: "DAY 29",
     y: 8,
     },
{
     name: "DAY 30",
     y: 17,
     },
{
     name: "DAY 31",
     y: 12,
     },
]
},
{
    id: "ID_PSHABHAIPRK-VADCARD17",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 0,
     },
{
     name: "DAY 3",
     y: 0,
     },
{
     name: "DAY 4",
     y: 0,
     },
{
     name: "DAY 5",
     y: 0,
     },
{
     name: "DAY 6",
     y: 0,
     },
{
     name: "DAY 7",
     y: 0,
     },
{
     name: "DAY 8",
     y: 0,
     },
{
     name: "DAY 9",
     y: 0,
     },
{
     name: "DAY 10",
     y: 0,
     },
{
     name: "DAY 11",
     y: 0,
     },
{
     name: "DAY 12",
     y: 0,
     },
{
     name: "DAY 13",
     y: 0,
     },
{
     name: "DAY 14",
     y: 0,
     },
{
     name: "DAY 15",
     y: 0,
     },
{
     name: "DAY 16",
     y: 0,
     },
{
     name: "DAY 17",
     y: 0,
     },
{
     name: "DAY 18",
     y: 0,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 0,
     },
{
     name: "DAY 24",
     y: 0,
     },
{
     name: "DAY 25",
     y: 0,
     },
{
     name: "DAY 26",
     y: 0,
     },
{
     name: "DAY 27",
     y: 0,
     },
{
     name: "DAY 28",
     y: 0,
     },
{
     name: "DAY 29",
     y: 0,
     },
{
     name: "DAY 30",
     y: 0,
     },
{
     name: "DAY 31",
     y: 0,
     },
]
},
{
    id: "ID_SAINATH-VADCARD15",
    data: 
    [
{
     name: "DAY 1",
     y: 6,
     },
{
     name: "DAY 2",
     y: 6,
     },
{
     name: "DAY 3",
     y: 8,
     },
{
     name: "DAY 4",
     y: 6,
     },
{
     name: "DAY 5",
     y: 9,
     },
{
     name: "DAY 6",
     y: 19,
     },
{
     name: "DAY 7",
     y: 14,
     },
{
     name: "DAY 8",
     y: 6,
     },
{
     name: "DAY 9",
     y: 17,
     },
{
     name: "DAY 10",
     y: 9,
     },
{
     name: "DAY 11",
     y: 9,
     },
{
     name: "DAY 12",
     y: 15,
     },
{
     name: "DAY 13",
     y: 14,
     },
{
     name: "DAY 14",
     y: 6,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 5,
     },
{
     name: "DAY 17",
     y: 9,
     },
{
     name: "DAY 18",
     y: 8,
     },
{
     name: "DAY 19",
     y: 3,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 3,
     },
{
     name: "DAY 22",
     y: 3,
     },
{
     name: "DAY 23",
     y: 4,
     },
{
     name: "DAY 24",
     y: 3,
     },
{
     name: "DAY 25",
     y: 1,
     },
{
     name: "DAY 26",
     y: 6,
     },
{
     name: "DAY 27",
     y: 3,
     },
{
     name: "DAY 28",
     y: 6,
     },
{
     name: "DAY 29",
     y: 2,
     },
{
     name: "DAY 30",
     y: 7,
     },
{
     name: "DAY 31",
     y: 14,
     },
]
},
{
    id: "ID_SANTKRUPA-VADCARD07",
    data: 
    [
{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 3",
     y: 13,
     },
{
     name: "DAY 4",
     y: 6,
     },
{
     name: "DAY 5",
     y: 8,
     },
{
     name: "DAY 6",
     y: 3,
     },
{
     name: "DAY 7",
     y: 7,
     },
{
     name: "DAY 8",
     y: 3,
     },
{
     name: "DAY 9",
     y: 8,
     },
{
     name: "DAY 10",
     y: 6,
     },
{
     name: "DAY 11",
     y: 13,
     },
{
     name: "DAY 12",
     y: 5,
     },
{
     name: "DAY 13",
     y: 3,
     },
{
     name: "DAY 14",
     y: 5,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 0,
     },
{
     name: "DAY 17",
     y: 2,
     },
{
     name: "DAY 18",
     y: 4,
     },
{
     name: "DAY 19",
     y: 2,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 2,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 24",
     y: 2,
     },
{
     name: "DAY 25",
     y: 7,
     },
{
     name: "DAY 26",
     y: 10,
     },
{
     name: "DAY 27",
     y: 6,
     },
{
     name: "DAY 28",
     y: 6,
     },
{
     name: "DAY 29",
     y: 4,
     },
{
     name: "DAY 30",
     y: 7,
     },
{
     name: "DAY 31",
     y: 5,
     },
]
},
{
    id: "ID_SAPPHIRE-VADCARD07",
    data: 
    [
{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 3",
     y: 3,
     },
{
     name: "DAY 4",
     y: 5,
     },
{
     name: "DAY 5",
     y: 3,
     },
{
     name: "DAY 6",
     y: 4,
     },
{
     name: "DAY 7",
     y: 5,
     },
{
     name: "DAY 8",
     y: 5,
     },
{
     name: "DAY 9",
     y: 9,
     },
{
     name: "DAY 10",
     y: 7,
     },
{
     name: "DAY 11",
     y: 11,
     },
{
     name: "DAY 12",
     y: 17,
     },
{
     name: "DAY 13",
     y: 4,
     },
{
     name: "DAY 14",
     y: 3,
     },
{
     name: "DAY 15",
     y: 4,
     },
{
     name: "DAY 16",
     y: 11,
     },
{
     name: "DAY 17",
     y: 2,
     },
{
     name: "DAY 18",
     y: 7,
     },
{
     name: "DAY 19",
     y: 2,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 3,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 6,
     },
{
     name: "DAY 24",
     y: 6,
     },
{
     name: "DAY 25",
     y: 4,
     },
{
     name: "DAY 26",
     y: 5,
     },
{
     name: "DAY 27",
     y: 8,
     },
{
     name: "DAY 28",
     y: 12,
     },
{
     name: "DAY 29",
     y: 3,
     },
{
     name: "DAY 30",
     y: 11,
     },
{
     name: "DAY 31",
     y: 20,
     },
]
},
{
    id: "ID_SHREEPUSTI-VADCARD17",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 0,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 3,
     },
{
     name: "DAY 5",
     y: 3,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 7",
     y: 0,
     },
{
     name: "DAY 8",
     y: 0,
     },
{
     name: "DAY 9",
     y: 3,
     },
{
     name: "DAY 10",
     y: 3,
     },
{
     name: "DAY 11",
     y: 2,
     },
{
     name: "DAY 12",
     y: 2,
     },
{
     name: "DAY 13",
     y: 1,
     },
{
     name: "DAY 14",
     y: 2,
     },
{
     name: "DAY 15",
     y: 0,
     },
{
     name: "DAY 16",
     y: 9,
     },
{
     name: "DAY 17",
     y: 5,
     },
{
     name: "DAY 18",
     y: 4,
     },
{
     name: "DAY 19",
     y: 3,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 2,
     },
{
     name: "DAY 24",
     y: 0,
     },
{
     name: "DAY 25",
     y: 2,
     },
{
     name: "DAY 26",
     y: 3,
     },
{
     name: "DAY 27",
     y: 5,
     },
{
     name: "DAY 28",
     y: 3,
     },
{
     name: "DAY 29",
     y: 0,
     },
{
     name: "DAY 30",
     y: 2,
     },
{
     name: "DAY 31",
     y: 1,
     },
]
},
{
    id: "ID_ST KABIR-VADCARD05",
    data: 
    [
{
     name: "DAY 1",
     y: 4,
     },
{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 3",
     y: 4,
     },
{
     name: "DAY 4",
     y: 5,
     },
{
     name: "DAY 5",
     y: 5,
     },
{
     name: "DAY 6",
     y: 7,
     },
{
     name: "DAY 7",
     y: 3,
     },
{
     name: "DAY 8",
     y: 2,
     },
{
     name: "DAY 9",
     y: 8,
     },
{
     name: "DAY 10",
     y: 2,
     },
{
     name: "DAY 11",
     y: 4,
     },
{
     name: "DAY 12",
     y: 1,
     },
{
     name: "DAY 13",
     y: 3,
     },
{
     name: "DAY 14",
     y: 5,
     },
{
     name: "DAY 15",
     y: 11,
     },
{
     name: "DAY 16",
     y: 3,
     },
{
     name: "DAY 17",
     y: 8,
     },
{
     name: "DAY 18",
     y: 5,
     },
{
     name: "DAY 19",
     y: 2,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 2,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 3,
     },
{
     name: "DAY 24",
     y: 12,
     },
{
     name: "DAY 25",
     y: 7,
     },
{
     name: "DAY 26",
     y: 29,
     },
{
     name: "DAY 27",
     y: 34,
     },
{
     name: "DAY 28",
     y: 5,
     },
{
     name: "DAY 29",
     y: 7,
     },
{
     name: "DAY 30",
     y: 7,
     },
{
     name: "DAY 31",
     y: 20,
     },
]
},
{
    id: "ID_SURYAKIRAN-VADCARD20",
    data: 
    [
{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 4,
     },
{
     name: "DAY 3",
     y: 5,
     },
{
     name: "DAY 4",
     y: 6,
     },
{
     name: "DAY 5",
     y: 6,
     },
{
     name: "DAY 6",
     y: 4,
     },
{
     name: "DAY 7",
     y: 5,
     },
{
     name: "DAY 8",
     y: 2,
     },
{
     name: "DAY 9",
     y: 3,
     },
{
     name: "DAY 10",
     y: 5,
     },
{
     name: "DAY 11",
     y: 4,
     },
{
     name: "DAY 12",
     y: 7,
     },
{
     name: "DAY 13",
     y: 7,
     },
{
     name: "DAY 14",
     y: 3,
     },
{
     name: "DAY 15",
     y: 0,
     },
{
     name: "DAY 16",
     y: 6,
     },
{
     name: "DAY 17",
     y: 6,
     },
{
     name: "DAY 18",
     y: 8,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 5,
     },
{
     name: "DAY 21",
     y: 3,
     },
{
     name: "DAY 22",
     y: 3,
     },
{
     name: "DAY 23",
     y: 5,
     },
{
     name: "DAY 24",
     y: 7,
     },
{
     name: "DAY 25",
     y: 2,
     },
{
     name: "DAY 26",
     y: 1,
     },
{
     name: "DAY 27",
     y: 5,
     },
{
     name: "DAY 28",
     y: 4,
     },
{
     name: "DAY 29",
     y: 0,
     },
{
     name: "DAY 30",
     y: 2,
     },
{
     name: "DAY 31",
     y: 5,
     },
]
},
{
    id: "ID_URMI-VADCARD17",
    data: 
    [
{
     name: "DAY 1",
     y: 6,
     },
{
     name: "DAY 2",
     y: 4,
     },
{
     name: "DAY 3",
     y: 3,
     },
{
     name: "DAY 4",
     y: 5,
     },
{
     name: "DAY 5",
     y: 7,
     },
{
     name: "DAY 6",
     y: 3,
     },
{
     name: "DAY 7",
     y: 4,
     },
{
     name: "DAY 8",
     y: 5,
     },
{
     name: "DAY 9",
     y: 10,
     },
{
     name: "DAY 10",
     y: 2,
     },
{
     name: "DAY 11",
     y: 3,
     },
{
     name: "DAY 12",
     y: 3,
     },
{
     name: "DAY 13",
     y: 3,
     },
{
     name: "DAY 14",
     y: 3,
     },
{
     name: "DAY 15",
     y: 3,
     },
{
     name: "DAY 16",
     y: 11,
     },
{
     name: "DAY 17",
     y: 11,
     },
{
     name: "DAY 18",
     y: 5,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 3,
     },
{
     name: "DAY 21",
     y: 2,
     },
{
     name: "DAY 22",
     y: 2,
     },
{
     name: "DAY 23",
     y: 3,
     },
{
     name: "DAY 24",
     y: 4,
     },
{
     name: "DAY 25",
     y: 0,
     },
{
     name: "DAY 26",
     y: 3,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 5,
     },
{
     name: "DAY 29",
     y: 5,
     },
{
     name: "DAY 30",
     y: 6,
     },
{
     name: "DAY 31",
     y: 10,
     },
]
},
{
    id: "ID_VISHRANTI-VADCARD18",
    data: 
    [
{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 4,
     },
{
     name: "DAY 3",
     y: 4,
     },
{
     name: "DAY 4",
     y: 3,
     },
{
     name: "DAY 5",
     y: 8,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 7",
     y: 2,
     },
{
     name: "DAY 8",
     y: 3,
     },
{
     name: "DAY 9",
     y: 3,
     },
{
     name: "DAY 10",
     y: 1,
     },
{
     name: "DAY 11",
     y: 5,
     },
{
     name: "DAY 12",
     y: 4,
     },
{
     name: "DAY 13",
     y: 2,
     },
{
     name: "DAY 14",
     y: 9,
     },
{
     name: "DAY 15",
     y: 13,
     },
{
     name: "DAY 16",
     y: 8,
     },
{
     name: "DAY 17",
     y: 6,
     },
{
     name: "DAY 18",
     y: 6,
     },
{
     name: "DAY 19",
     y: 3,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 2,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 8,
     },
{
     name: "DAY 24",
     y: 2,
     },
{
     name: "DAY 25",
     y: 4,
     },
{
     name: "DAY 26",
     y: 5,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 5,
     },
{
     name: "DAY 29",
     y: 1,
     },
{
     name: "DAY 30",
     y: 3,
     },
{
     name: "DAY 31",
     y: 2,
     },
]
},
{
    id: "ID_VRAJDEEP-VADCARD17",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 3,
     },
{
     name: "DAY 3",
     y: 4,
     },
{
     name: "DAY 4",
     y: 3,
     },
{
     name: "DAY 5",
     y: 3,
     },
{
     name: "DAY 6",
     y: 5,
     },
{
     name: "DAY 7",
     y: 5,
     },
{
     name: "DAY 8",
     y: 2,
     },
{
     name: "DAY 9",
     y: 9,
     },
{
     name: "DAY 10",
     y: 1,
     },
{
     name: "DAY 11",
     y: 5,
     },
{
     name: "DAY 12",
     y: 3,
     },
{
     name: "DAY 13",
     y: 1,
     },
{
     name: "DAY 14",
     y: 2,
     },
{
     name: "DAY 15",
     y: 4,
     },
{
     name: "DAY 16",
     y: 14,
     },
{
     name: "DAY 17",
     y: 12,
     },
{
     name: "DAY 18",
     y: 2,
     },
{
     name: "DAY 19",
     y: 2,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 2,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 2,
     },
{
     name: "DAY 24",
     y: 1,
     },
{
     name: "DAY 25",
     y: 3,
     },
{
     name: "DAY 26",
     y: 7,
     },
{
     name: "DAY 27",
     y: 5,
     },
{
     name: "DAY 28",
     y: 3,
     },
{
     name: "DAY 29",
     y: 4,
     },
{
     name: "DAY 30",
     y: 3,
     },
{
     name: "DAY 31",
     y: 7,
     },
]
},
{
    id: "ID_VRAJWADI-VADCARD15",
    data: 
    [
{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 3",
     y: 1,
     },
{
     name: "DAY 4",
     y: 4,
     },
{
     name: "DAY 5",
     y: 4,
     },
{
     name: "DAY 6",
     y: 7,
     },
{
     name: "DAY 7",
     y: 1,
     },
{
     name: "DAY 8",
     y: 2,
     },
{
     name: "DAY 9",
     y: 2,
     },
{
     name: "DAY 10",
     y: 0,
     },
{
     name: "DAY 11",
     y: 1,
     },
{
     name: "DAY 12",
     y: 3,
     },
{
     name: "DAY 13",
     y: 3,
     },
{
     name: "DAY 14",
     y: 4,
     },
{
     name: "DAY 15",
     y: 3,
     },
{
     name: "DAY 16",
     y: 3,
     },
{
     name: "DAY 17",
     y: 2,
     },
{
     name: "DAY 18",
     y: 3,
     },
{
     name: "DAY 19",
     y: 3,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 3,
     },
{
     name: "DAY 22",
     y: 2,
     },
{
     name: "DAY 23",
     y: 2,
     },
{
     name: "DAY 24",
     y: 3,
     },
{
     name: "DAY 25",
     y: 2,
     },
{
     name: "DAY 26",
     y: 3,
     },
{
     name: "DAY 27",
     y: 3,
     },
{
     name: "DAY 28",
     y: 7,
     },
{
     name: "DAY 29",
     y: 0,
     },
{
     name: "DAY 30",
     y: 5,
     },
{
     name: "DAY 31",
     y: 1,
     },
]
},
{
    id: "ID_YESVARDHAN-VADCARD07",
    data: 
    [
{
     name: "DAY 1",
     y: 3,
     },
{
     name: "DAY 2",
     y: 14,
     },
{
     name: "DAY 3",
     y: 4,
     },
{
     name: "DAY 4",
     y: 13,
     },
{
     name: "DAY 5",
     y: 14,
     },
{
     name: "DAY 6",
     y: 15,
     },
{
     name: "DAY 7",
     y: 13,
     },
{
     name: "DAY 8",
     y: 7,
     },
{
     name: "DAY 9",
     y: 4,
     },
{
     name: "DAY 10",
     y: 5,
     },
{
     name: "DAY 11",
     y: 7,
     },
{
     name: "DAY 12",
     y: 6,
     },
{
     name: "DAY 13",
     y: 8,
     },
{
     name: "DAY 14",
     y: 7,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 9,
     },
{
     name: "DAY 17",
     y: 7,
     },
{
     name: "DAY 18",
     y: 5,
     },
{
     name: "DAY 19",
     y: 6,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 1,
     },
{
     name: "DAY 22",
     y: 3,
     },
{
     name: "DAY 23",
     y: 5,
     },
{
     name: "DAY 24",
     y: 7,
     },
{
     name: "DAY 25",
     y: 9,
     },
{
     name: "DAY 26",
     y: 6,
     },
{
     name: "DAY 27",
     y: 5,
     },
{
     name: "DAY 28",
     y: 9,
     },
{
     name: "DAY 29",
     y: 3,
     },
{
     name: "DAY 30",
     y: 5,
     },
{
     name: "DAY 31",
     y: 16,
     },
]
},
{
    id: "ID_AAKRUTI-VADCARD20",
    data: 
    [
{
     name: "DAY 1",
     y: 3,
     },
{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 0,
     },
{
     name: "DAY 5",
     y: 2,
     },
{
     name: "DAY 6",
     y: 2,
     },
{
     name: "DAY 7",
     y: 1,
     },
{
     name: "DAY 8",
     y: 0,
     },
{
     name: "DAY 9",
     y: 5,
     },
{
     name: "DAY 10",
     y: 4,
     },
{
     name: "DAY 11",
     y: 1,
     },
{
     name: "DAY 12",
     y: 2,
     },
{
     name: "DAY 13",
     y: 1,
     },
{
     name: "DAY 14",
     y: 3,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 2,
     },
{
     name: "DAY 17",
     y: 3,
     },
{
     name: "DAY 18",
     y: 2,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 3,
     },
{
     name: "DAY 21",
     y: 2,
     },
{
     name: "DAY 22",
     y: 4,
     },
{
     name: "DAY 23",
     y: 2,
     },
{
     name: "DAY 24",
     y: 4,
     },
{
     name: "DAY 25",
     y: 2,
     },
{
     name: "DAY 26",
     y: 2,
     },
{
     name: "DAY 27",
     y: 3,
     },
{
     name: "DAY 28",
     y: 3,
     },
{
     name: "DAY 29",
     y: 1,
     },
{
     name: "DAY 30",
     y: 7,
     },
{
     name: "DAY 31",
     y: 3,
     },
]
},
{
    id: "ID_ADALJA-VADCARD14",
    data: 
    [
{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 3",
     y: 3,
     },
{
     name: "DAY 4",
     y: 4,
     },
{
     name: "DAY 5",
     y: 4,
     },
{
     name: "DAY 6",
     y: 3,
     },
{
     name: "DAY 7",
     y: 5,
     },
{
     name: "DAY 8",
     y: 3,
     },
{
     name: "DAY 9",
     y: 2,
     },
{
     name: "DAY 10",
     y: 2,
     },
{
     name: "DAY 11",
     y: 1,
     },
{
     name: "DAY 12",
     y: 4,
     },
{
     name: "DAY 13",
     y: 4,
     },
{
     name: "DAY 14",
     y: 4,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 1,
     },
{
     name: "DAY 17",
     y: 3,
     },
{
     name: "DAY 18",
     y: 4,
     },
{
     name: "DAY 19",
     y: 3,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 3,
     },
{
     name: "DAY 24",
     y: 4,
     },
{
     name: "DAY 25",
     y: 4,
     },
{
     name: "DAY 26",
     y: 2,
     },
{
     name: "DAY 27",
     y: 4,
     },
{
     name: "DAY 28",
     y: 3,
     },
{
     name: "DAY 29",
     y: 2,
     },
{
     name: "DAY 30",
     y: 4,
     },
{
     name: "DAY 31",
     y: 18,
     },
]
},
{
    id: "ID_AMPRAPALI-VADCARD11",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 0,
     },
{
     name: "DAY 3",
     y: 0,
     },
{
     name: "DAY 4",
     y: 0,
     },
{
     name: "DAY 5",
     y: 0,
     },
{
     name: "DAY 6",
     y: 0,
     },
{
     name: "DAY 7",
     y: 1,
     },
{
     name: "DAY 8",
     y: 0,
     },
{
     name: "DAY 9",
     y: 0,
     },
{
     name: "DAY 10",
     y: 1,
     },
{
     name: "DAY 11",
     y: 1,
     },
{
     name: "DAY 12",
     y: 0,
     },
{
     name: "DAY 13",
     y: 0,
     },
{
     name: "DAY 14",
     y: 0,
     },
{
     name: "DAY 15",
     y: 0,
     },
{
     name: "DAY 16",
     y: 0,
     },
{
     name: "DAY 17",
     y: 0,
     },
{
     name: "DAY 18",
     y: 0,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 0,
     },
{
     name: "DAY 24",
     y: 0,
     },
{
     name: "DAY 25",
     y: 0,
     },
{
     name: "DAY 26",
     y: 0,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 0,
     },
{
     name: "DAY 29",
     y: 0,
     },
{
     name: "DAY 30",
     y: 0,
     },
{
     name: "DAY 31",
     y: 0,
     },
]
},
{
    id: "ID_ANTARIKSH-VADCARD11",
    data: 
    [
{
     name: "DAY 1",
     y: 4,
     },
{
     name: "DAY 2",
     y: 3,
     },
{
     name: "DAY 3",
     y: 7,
     },
{
     name: "DAY 4",
     y: 4,
     },
{
     name: "DAY 5",
     y: 5,
     },
{
     name: "DAY 6",
     y: 0,
     },
{
     name: "DAY 7",
     y: 3,
     },
{
     name: "DAY 8",
     y: 3,
     },
{
     name: "DAY 9",
     y: 7,
     },
{
     name: "DAY 10",
     y: 3,
     },
{
     name: "DAY 11",
     y: 2,
     },
{
     name: "DAY 12",
     y: 5,
     },
{
     name: "DAY 13",
     y: 5,
     },
{
     name: "DAY 14",
     y: 7,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 7,
     },
{
     name: "DAY 17",
     y: 3,
     },
{
     name: "DAY 18",
     y: 2,
     },
{
     name: "DAY 19",
     y: 5,
     },
{
     name: "DAY 20",
     y: 2,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 2,
     },
{
     name: "DAY 24",
     y: 3,
     },
{
     name: "DAY 25",
     y: 3,
     },
{
     name: "DAY 26",
     y: 4,
     },
{
     name: "DAY 27",
     y: 3,
     },
{
     name: "DAY 28",
     y: 1,
     },
{
     name: "DAY 29",
     y: 5,
     },
{
     name: "DAY 30",
     y: 0,
     },
{
     name: "DAY 31",
     y: 7,
     },
]
},
{
    id: "ID_ASTHASIVLIK-VADCARD14",
    data: 
    [
{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 2,
     },
{
     name: "DAY 5",
     y: 2,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 7",
     y: 1,
     },
{
     name: "DAY 8",
     y: 1,
     },
{
     name: "DAY 9",
     y: 2,
     },
{
     name: "DAY 10",
     y: 9,
     },
{
     name: "DAY 11",
     y: 9,
     },
{
     name: "DAY 12",
     y: 2,
     },
{
     name: "DAY 13",
     y: 4,
     },
{
     name: "DAY 14",
     y: 4,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 5,
     },
{
     name: "DAY 17",
     y: 4,
     },
{
     name: "DAY 18",
     y: 6,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 0,
     },
{
     name: "DAY 24",
     y: 3,
     },
{
     name: "DAY 25",
     y: 0,
     },
{
     name: "DAY 26",
     y: 3,
     },
{
     name: "DAY 27",
     y: 6,
     },
{
     name: "DAY 28",
     y: 7,
     },
{
     name: "DAY 29",
     y: 3,
     },
{
     name: "DAY 30",
     y: 1,
     },
{
     name: "DAY 31",
     y: 8,
     },
]
},
{
    id: "ID_AYUSH-VADCARD14",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 0,
     },
{
     name: "DAY 3",
     y: 1,
     },
{
     name: "DAY 4",
     y: 0,
     },
{
     name: "DAY 5",
     y: 0,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 7",
     y: 1,
     },
{
     name: "DAY 8",
     y: 0,
     },
{
     name: "DAY 9",
     y: 0,
     },
{
     name: "DAY 10",
     y: 1,
     },
{
     name: "DAY 11",
     y: 1,
     },
{
     name: "DAY 12",
     y: 0,
     },
{
     name: "DAY 13",
     y: 0,
     },
{
     name: "DAY 14",
     y: 0,
     },
{
     name: "DAY 15",
     y: 0,
     },
{
     name: "DAY 16",
     y: 1,
     },
{
     name: "DAY 17",
     y: 1,
     },
{
     name: "DAY 18",
     y: 0,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 0,
     },
{
     name: "DAY 24",
     y: 1,
     },
{
     name: "DAY 25",
     y: 0,
     },
{
     name: "DAY 26",
     y: 0,
     },
{
     name: "DAY 27",
     y: 0,
     },
{
     name: "DAY 28",
     y: 0,
     },
{
     name: "DAY 29",
     y: 0,
     },
{
     name: "DAY 30",
     y: 3,
     },
{
     name: "DAY 31",
     y: 0,
     },
]
},
{
    id: "ID_BLUE-VIEW-VADCARD17",
    data: 
    [
{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 0,
     },
{
     name: "DAY 3",
     y: 5,
     },
{
     name: "DAY 4",
     y: 6,
     },
{
     name: "DAY 5",
     y: 4,
     },
{
     name: "DAY 6",
     y: 2,
     },
{
     name: "DAY 7",
     y: 1,
     },
{
     name: "DAY 8",
     y: 3,
     },
{
     name: "DAY 9",
     y: 2,
     },
{
     name: "DAY 10",
     y: 0,
     },
{
     name: "DAY 11",
     y: 0,
     },
{
     name: "DAY 12",
     y: 3,
     },
{
     name: "DAY 13",
     y: 0,
     },
{
     name: "DAY 14",
     y: 1,
     },
{
     name: "DAY 15",
     y: 1,
     },
{
     name: "DAY 16",
     y: 0,
     },
{
     name: "DAY 17",
     y: 0,
     },
{
     name: "DAY 18",
     y: 0,
     },
{
     name: "DAY 19",
     y: 2,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 1,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 24",
     y: 2,
     },
{
     name: "DAY 25",
     y: 2,
     },
{
     name: "DAY 26",
     y: 2,
     },
{
     name: "DAY 27",
     y: 7,
     },
{
     name: "DAY 28",
     y: 8,
     },
{
     name: "DAY 29",
     y: 2,
     },
{
     name: "DAY 30",
     y: 1,
     },
{
     name: "DAY 31",
     y: 5,
     },
]
},
{
    id: "ID_BVM-VADCARD13",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 3",
     y: 1,
     },
{
     name: "DAY 4",
     y: 4,
     },
{
     name: "DAY 5",
     y: 1,
     },
{
     name: "DAY 6",
     y: 3,
     },
{
     name: "DAY 7",
     y: 0,
     },
{
     name: "DAY 8",
     y: 1,
     },
{
     name: "DAY 9",
     y: 4,
     },
{
     name: "DAY 10",
     y: 1,
     },
{
     name: "DAY 11",
     y: 1,
     },
{
     name: "DAY 12",
     y: 1,
     },
{
     name: "DAY 13",
     y: 4,
     },
{
     name: "DAY 14",
     y: 3,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 1,
     },
{
     name: "DAY 17",
     y: 0,
     },
{
     name: "DAY 18",
     y: 0,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 4,
     },
{
     name: "DAY 24",
     y: 3,
     },
{
     name: "DAY 25",
     y: 6,
     },
{
     name: "DAY 26",
     y: 2,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 2,
     },
{
     name: "DAY 29",
     y: 0,
     },
{
     name: "DAY 30",
     y: 11,
     },
{
     name: "DAY 31",
     y: 6,
     },
]
},
{
    id: "ID_CENTERPONT-VADCARD20",
    data: 
    [
{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 3,
     },
{
     name: "DAY 3",
     y: 4,
     },
{
     name: "DAY 4",
     y: 3,
     },
{
     name: "DAY 5",
     y: 1,
     },
{
     name: "DAY 6",
     y: 2,
     },
{
     name: "DAY 7",
     y: 4,
     },
{
     name: "DAY 8",
     y: 1,
     },
{
     name: "DAY 9",
     y: 3,
     },
{
     name: "DAY 10",
     y: 3,
     },
{
     name: "DAY 11",
     y: 5,
     },
{
     name: "DAY 12",
     y: 19,
     },
{
     name: "DAY 13",
     y: 10,
     },
{
     name: "DAY 14",
     y: 9,
     },
{
     name: "DAY 15",
     y: 4,
     },
{
     name: "DAY 16",
     y: 4,
     },
{
     name: "DAY 17",
     y: 5,
     },
{
     name: "DAY 18",
     y: 2,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 4,
     },
{
     name: "DAY 24",
     y: 0,
     },
{
     name: "DAY 25",
     y: 1,
     },
{
     name: "DAY 26",
     y: 6,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 2,
     },
{
     name: "DAY 29",
     y: 1,
     },
{
     name: "DAY 30",
     y: 4,
     },
{
     name: "DAY 31",
     y: 3,
     },
]
},
{
    id: "ID_CORNER-PT-VADCARD20",
    data: 
    [
{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 3",
     y: 3,
     },
{
     name: "DAY 4",
     y: 9,
     },
{
     name: "DAY 5",
     y: 7,
     },
{
     name: "DAY 6",
     y: 2,
     },
{
     name: "DAY 7",
     y: 2,
     },
{
     name: "DAY 8",
     y: 7,
     },
{
     name: "DAY 9",
     y: 5,
     },
{
     name: "DAY 10",
     y: 2,
     },
{
     name: "DAY 11",
     y: 4,
     },
{
     name: "DAY 12",
     y: 26,
     },
{
     name: "DAY 13",
     y: 79,
     },
{
     name: "DAY 14",
     y: 9,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 8,
     },
{
     name: "DAY 17",
     y: 5,
     },
{
     name: "DAY 18",
     y: 9,
     },
{
     name: "DAY 19",
     y: 6,
     },
{
     name: "DAY 20",
     y: 2,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 2,
     },
{
     name: "DAY 24",
     y: 6,
     },
{
     name: "DAY 25",
     y: 5,
     },
{
     name: "DAY 26",
     y: 7,
     },
{
     name: "DAY 27",
     y: 8,
     },
{
     name: "DAY 28",
     y: 10,
     },
{
     name: "DAY 29",
     y: 4,
     },
{
     name: "DAY 30",
     y: 11,
     },
{
     name: "DAY 31",
     y: 6,
     },
]
},
{
    id: "ID_DATTAR-VADCARD13",
    data: 
    [
{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 6,
     },
{
     name: "DAY 3",
     y: 1,
     },
{
     name: "DAY 4",
     y: 4,
     },
{
     name: "DAY 5",
     y: 5,
     },
{
     name: "DAY 6",
     y: 4,
     },
{
     name: "DAY 7",
     y: 3,
     },
{
     name: "DAY 8",
     y: 4,
     },
{
     name: "DAY 9",
     y: 3,
     },
{
     name: "DAY 10",
     y: 4,
     },
{
     name: "DAY 11",
     y: 1,
     },
{
     name: "DAY 12",
     y: 7,
     },
{
     name: "DAY 13",
     y: 3,
     },
{
     name: "DAY 14",
     y: 3,
     },
{
     name: "DAY 15",
     y: 8,
     },
{
     name: "DAY 16",
     y: 4,
     },
{
     name: "DAY 17",
     y: 4,
     },
{
     name: "DAY 18",
     y: 5,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 3,
     },
{
     name: "DAY 21",
     y: 1,
     },
{
     name: "DAY 22",
     y: 2,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 24",
     y: 5,
     },
{
     name: "DAY 25",
     y: 1,
     },
{
     name: "DAY 26",
     y: 2,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 2,
     },
{
     name: "DAY 29",
     y: 4,
     },
{
     name: "DAY 30",
     y: 11,
     },
{
     name: "DAY 31",
     y: 5,
     },
]
},
{
    id: "ID_DEVCOM-VADCARD17",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 0,
     },
{
     name: "DAY 3",
     y: 1,
     },
{
     name: "DAY 4",
     y: 1,
     },
{
     name: "DAY 5",
     y: 1,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 7",
     y: 2,
     },
{
     name: "DAY 8",
     y: 0,
     },
{
     name: "DAY 9",
     y: 1,
     },
{
     name: "DAY 10",
     y: 1,
     },
{
     name: "DAY 11",
     y: 1,
     },
{
     name: "DAY 12",
     y: 2,
     },
{
     name: "DAY 13",
     y: 0,
     },
{
     name: "DAY 14",
     y: 4,
     },
{
     name: "DAY 15",
     y: 1,
     },
{
     name: "DAY 16",
     y: 2,
     },
{
     name: "DAY 17",
     y: 3,
     },
{
     name: "DAY 18",
     y: 0,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 1,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 2,
     },
{
     name: "DAY 24",
     y: 0,
     },
{
     name: "DAY 25",
     y: 0,
     },
{
     name: "DAY 26",
     y: 6,
     },
{
     name: "DAY 27",
     y: 10,
     },
{
     name: "DAY 28",
     y: 1,
     },
{
     name: "DAY 29",
     y: 3,
     },
{
     name: "DAY 30",
     y: 3,
     },
{
     name: "DAY 31",
     y: 2,
     },
]
},
{
    id: "ID_DINKY-VADCARD15",
    data: 
    [
{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 0,
     },
{
     name: "DAY 3",
     y: 3,
     },
{
     name: "DAY 4",
     y: 0,
     },
{
     name: "DAY 5",
     y: 1,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 7",
     y: 2,
     },
{
     name: "DAY 8",
     y: 0,
     },
{
     name: "DAY 9",
     y: 0,
     },
{
     name: "DAY 10",
     y: 2,
     },
{
     name: "DAY 11",
     y: 1,
     },
{
     name: "DAY 12",
     y: 1,
     },
{
     name: "DAY 13",
     y: 0,
     },
{
     name: "DAY 14",
     y: 0,
     },
{
     name: "DAY 15",
     y: 0,
     },
{
     name: "DAY 16",
     y: 1,
     },
{
     name: "DAY 17",
     y: 0,
     },
{
     name: "DAY 18",
     y: 1,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 0,
     },
{
     name: "DAY 24",
     y: 2,
     },
{
     name: "DAY 25",
     y: 3,
     },
{
     name: "DAY 26",
     y: 2,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 1,
     },
{
     name: "DAY 29",
     y: 0,
     },
{
     name: "DAY 30",
     y: 1,
     },
{
     name: "DAY 31",
     y: 1,
     },
]
},
{
    id: "ID_GLECERCMPLX-VADCARD20",
    data: 
    [
{
     name: "DAY 1",
     y: 3,
     },
{
     name: "DAY 2",
     y: 3,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 6,
     },
{
     name: "DAY 5",
     y: 7,
     },
{
     name: "DAY 6",
     y: 15,
     },
{
     name: "DAY 7",
     y: 3,
     },
{
     name: "DAY 8",
     y: 3,
     },
{
     name: "DAY 9",
     y: 9,
     },
{
     name: "DAY 10",
     y: 4,
     },
{
     name: "DAY 11",
     y: 3,
     },
{
     name: "DAY 12",
     y: 12,
     },
{
     name: "DAY 13",
     y: 6,
     },
{
     name: "DAY 14",
     y: 6,
     },
{
     name: "DAY 15",
     y: 4,
     },
{
     name: "DAY 16",
     y: 7,
     },
{
     name: "DAY 17",
     y: 4,
     },
{
     name: "DAY 18",
     y: 9,
     },
{
     name: "DAY 19",
     y: 2,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 5,
     },
{
     name: "DAY 24",
     y: 6,
     },
{
     name: "DAY 25",
     y: 7,
     },
{
     name: "DAY 26",
     y: 10,
     },
{
     name: "DAY 27",
     y: 27,
     },
{
     name: "DAY 28",
     y: 18,
     },
{
     name: "DAY 29",
     y: 10,
     },
{
     name: "DAY 30",
     y: 8,
     },
{
     name: "DAY 31",
     y: 13,
     },
]
},
{
    id: "ID_HARINAGAR-VADCARD15",
    data: 
    [
{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 2",
     y: 0,
     },
{
     name: "DAY 3",
     y: 1,
     },
{
     name: "DAY 4",
     y: 1,
     },
{
     name: "DAY 5",
     y: 3,
     },
{
     name: "DAY 6",
     y: 6,
     },
{
     name: "DAY 7",
     y: 3,
     },
{
     name: "DAY 8",
     y: 1,
     },
{
     name: "DAY 9",
     y: 1,
     },
{
     name: "DAY 10",
     y: 1,
     },
{
     name: "DAY 11",
     y: 2,
     },
{
     name: "DAY 12",
     y: 0,
     },
{
     name: "DAY 13",
     y: 4,
     },
{
     name: "DAY 14",
     y: 3,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 1,
     },
{
     name: "DAY 17",
     y: 1,
     },
{
     name: "DAY 18",
     y: 4,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 1,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 2,
     },
{
     name: "DAY 24",
     y: 2,
     },
{
     name: "DAY 25",
     y: 2,
     },
{
     name: "DAY 26",
     y: 3,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 4,
     },
{
     name: "DAY 29",
     y: 3,
     },
{
     name: "DAY 30",
     y: 2,
     },
{
     name: "DAY 31",
     y: 3,
     },
]
},
{
    id: "ID_HARIOM-VADCARD15",
    data: 
    [
{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 5,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 6,
     },
{
     name: "DAY 5",
     y: 2,
     },
{
     name: "DAY 6",
     y: 2,
     },
{
     name: "DAY 7",
     y: 5,
     },
{
     name: "DAY 8",
     y: 4,
     },
{
     name: "DAY 9",
     y: 4,
     },
{
     name: "DAY 10",
     y: 2,
     },
{
     name: "DAY 11",
     y: 5,
     },
{
     name: "DAY 12",
     y: 0,
     },
{
     name: "DAY 13",
     y: 1,
     },
{
     name: "DAY 14",
     y: 2,
     },
{
     name: "DAY 15",
     y: 1,
     },
{
     name: "DAY 16",
     y: 1,
     },
{
     name: "DAY 17",
     y: 1,
     },
{
     name: "DAY 18",
     y: 1,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 1,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 24",
     y: 2,
     },
{
     name: "DAY 25",
     y: 2,
     },
{
     name: "DAY 26",
     y: 3,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 3,
     },
{
     name: "DAY 29",
     y: 1,
     },
{
     name: "DAY 30",
     y: 1,
     },
{
     name: "DAY 31",
     y: 7,
     },
]
},
{
    id: "ID_HARMONY-VADCARD07",
    data: 
    [
{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 2",
     y: 0,
     },
{
     name: "DAY 3",
     y: 4,
     },
{
     name: "DAY 4",
     y: 0,
     },
{
     name: "DAY 5",
     y: 2,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 7",
     y: 5,
     },
{
     name: "DAY 8",
     y: 1,
     },
{
     name: "DAY 9",
     y: 9,
     },
{
     name: "DAY 10",
     y: 5,
     },
{
     name: "DAY 11",
     y: 4,
     },
{
     name: "DAY 12",
     y: 2,
     },
{
     name: "DAY 13",
     y: 2,
     },
{
     name: "DAY 14",
     y: 1,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 1,
     },
{
     name: "DAY 17",
     y: 1,
     },
{
     name: "DAY 18",
     y: 0,
     },
{
     name: "DAY 19",
     y: 2,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 1,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 2,
     },
{
     name: "DAY 24",
     y: 2,
     },
{
     name: "DAY 25",
     y: 6,
     },
{
     name: "DAY 26",
     y: 2,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 0,
     },
{
     name: "DAY 29",
     y: 2,
     },
{
     name: "DAY 30",
     y: 3,
     },
{
     name: "DAY 31",
     y: 5,
     },
]
},
{
    id: "ID_HEERAPANNA-VADCARD07",
    data: 
    [
{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 3",
     y: 3,
     },
{
     name: "DAY 4",
     y: 1,
     },
{
     name: "DAY 5",
     y: 2,
     },
{
     name: "DAY 6",
     y: 5,
     },
{
     name: "DAY 7",
     y: 2,
     },
{
     name: "DAY 8",
     y: 1,
     },
{
     name: "DAY 9",
     y: 3,
     },
{
     name: "DAY 10",
     y: 4,
     },
{
     name: "DAY 11",
     y: 5,
     },
{
     name: "DAY 12",
     y: 1,
     },
{
     name: "DAY 13",
     y: 1,
     },
{
     name: "DAY 14",
     y: 2,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 4,
     },
{
     name: "DAY 17",
     y: 4,
     },
{
     name: "DAY 18",
     y: 5,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 2,
     },
{
     name: "DAY 21",
     y: 1,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 2,
     },
{
     name: "DAY 24",
     y: 2,
     },
{
     name: "DAY 25",
     y: 4,
     },
{
     name: "DAY 26",
     y: 1,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 1,
     },
{
     name: "DAY 29",
     y: 0,
     },
{
     name: "DAY 30",
     y: 5,
     },
{
     name: "DAY 31",
     y: 7,
     },
]
},
{
    id: "ID_INDRAPRASTH-VADCARD17",
    data: 
    [
{
     name: "DAY 1",
     y: 5,
     },
{
     name: "DAY 2",
     y: 6,
     },
{
     name: "DAY 3",
     y: 1,
     },
{
     name: "DAY 4",
     y: 8,
     },
{
     name: "DAY 5",
     y: 9,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 7",
     y: 6,
     },
{
     name: "DAY 8",
     y: 1,
     },
{
     name: "DAY 9",
     y: 3,
     },
{
     name: "DAY 10",
     y: 6,
     },
{
     name: "DAY 11",
     y: 4,
     },
{
     name: "DAY 12",
     y: 10,
     },
{
     name: "DAY 13",
     y: 11,
     },
{
     name: "DAY 14",
     y: 21,
     },
{
     name: "DAY 15",
     y: 8,
     },
{
     name: "DAY 16",
     y: 11,
     },
{
     name: "DAY 17",
     y: 18,
     },
{
     name: "DAY 18",
     y: 5,
     },
{
     name: "DAY 19",
     y: 3,
     },
{
     name: "DAY 20",
     y: 4,
     },
{
     name: "DAY 21",
     y: 4,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 4,
     },
{
     name: "DAY 24",
     y: 6,
     },
{
     name: "DAY 25",
     y: 6,
     },
{
     name: "DAY 26",
     y: 4,
     },
{
     name: "DAY 27",
     y: 8,
     },
{
     name: "DAY 28",
     y: 9,
     },
{
     name: "DAY 29",
     y: 1,
     },
{
     name: "DAY 30",
     y: 3,
     },
{
     name: "DAY 31",
     y: 10,
     },
]
},
{
    id: "ID_LAXMIPURA-VADCARD14",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 3",
     y: 3,
     },
{
     name: "DAY 4",
     y: 1,
     },
{
     name: "DAY 5",
     y: 2,
     },
{
     name: "DAY 6",
     y: 2,
     },
{
     name: "DAY 7",
     y: 3,
     },
{
     name: "DAY 8",
     y: 1,
     },
{
     name: "DAY 9",
     y: 0,
     },
{
     name: "DAY 10",
     y: 3,
     },
{
     name: "DAY 11",
     y: 2,
     },
{
     name: "DAY 12",
     y: 4,
     },
{
     name: "DAY 13",
     y: 1,
     },
{
     name: "DAY 14",
     y: 1,
     },
{
     name: "DAY 15",
     y: 4,
     },
{
     name: "DAY 16",
     y: 0,
     },
{
     name: "DAY 17",
     y: 0,
     },
{
     name: "DAY 18",
     y: 1,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 1,
     },
{
     name: "DAY 22",
     y: 2,
     },
{
     name: "DAY 23",
     y: 5,
     },
{
     name: "DAY 24",
     y: 3,
     },
{
     name: "DAY 25",
     y: 1,
     },
{
     name: "DAY 26",
     y: 3,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 3,
     },
{
     name: "DAY 29",
     y: 1,
     },
{
     name: "DAY 30",
     y: 2,
     },
{
     name: "DAY 31",
     y: 0,
     },
]
},
{
    id: "ID_MAGALDEEP-VADCARD15",
    data: 
    [
{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 0,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 1,
     },
{
     name: "DAY 5",
     y: 2,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 7",
     y: 0,
     },
{
     name: "DAY 8",
     y: 1,
     },
{
     name: "DAY 9",
     y: 3,
     },
{
     name: "DAY 10",
     y: 1,
     },
{
     name: "DAY 11",
     y: 1,
     },
{
     name: "DAY 12",
     y: 0,
     },
{
     name: "DAY 13",
     y: 0,
     },
{
     name: "DAY 14",
     y: 1,
     },
{
     name: "DAY 15",
     y: 0,
     },
{
     name: "DAY 16",
     y: 1,
     },
{
     name: "DAY 17",
     y: 0,
     },
{
     name: "DAY 18",
     y: 0,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 2,
     },
{
     name: "DAY 23",
     y: 0,
     },
{
     name: "DAY 24",
     y: 0,
     },
{
     name: "DAY 25",
     y: 0,
     },
{
     name: "DAY 26",
     y: 1,
     },
{
     name: "DAY 27",
     y: 0,
     },
{
     name: "DAY 28",
     y: 1,
     },
{
     name: "DAY 29",
     y: 0,
     },
{
     name: "DAY 30",
     y: 0,
     },
{
     name: "DAY 31",
     y: 1,
     },
]
},
{
    id: "ID_PAVANDHAM-VADCARD14",
    data: 
    [
{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 3",
     y: 1,
     },
{
     name: "DAY 4",
     y: 2,
     },
{
     name: "DAY 5",
     y: 1,
     },
{
     name: "DAY 6",
     y: 2,
     },
{
     name: "DAY 7",
     y: 2,
     },
{
     name: "DAY 8",
     y: 0,
     },
{
     name: "DAY 9",
     y: 0,
     },
{
     name: "DAY 10",
     y: 1,
     },
{
     name: "DAY 11",
     y: 0,
     },
{
     name: "DAY 12",
     y: 3,
     },
{
     name: "DAY 13",
     y: 2,
     },
{
     name: "DAY 14",
     y: 1,
     },
{
     name: "DAY 15",
     y: 0,
     },
{
     name: "DAY 16",
     y: 1,
     },
{
     name: "DAY 17",
     y: 4,
     },
{
     name: "DAY 18",
     y: 4,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 2,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 3,
     },
{
     name: "DAY 24",
     y: 4,
     },
{
     name: "DAY 25",
     y: 2,
     },
{
     name: "DAY 26",
     y: 0,
     },
{
     name: "DAY 27",
     y: 4,
     },
{
     name: "DAY 28",
     y: 3,
     },
{
     name: "DAY 29",
     y: 1,
     },
{
     name: "DAY 30",
     y: 2,
     },
{
     name: "DAY 31",
     y: 3,
     },
]
},
{
    id: "ID_PRAKRUTIEMP-VADCARD14",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 0,
     },
{
     name: "DAY 3",
     y: 3,
     },
{
     name: "DAY 4",
     y: 2,
     },
{
     name: "DAY 5",
     y: 0,
     },
{
     name: "DAY 6",
     y: 0,
     },
{
     name: "DAY 7",
     y: 0,
     },
{
     name: "DAY 8",
     y: 0,
     },
{
     name: "DAY 9",
     y: 0,
     },
{
     name: "DAY 10",
     y: 1,
     },
{
     name: "DAY 11",
     y: 0,
     },
{
     name: "DAY 12",
     y: 1,
     },
{
     name: "DAY 13",
     y: 0,
     },
{
     name: "DAY 14",
     y: 0,
     },
{
     name: "DAY 15",
     y: 0,
     },
{
     name: "DAY 16",
     y: 0,
     },
{
     name: "DAY 17",
     y: 0,
     },
{
     name: "DAY 18",
     y: 0,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 0,
     },
{
     name: "DAY 24",
     y: 1,
     },
{
     name: "DAY 25",
     y: 0,
     },
{
     name: "DAY 26",
     y: 0,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 1,
     },
{
     name: "DAY 29",
     y: 0,
     },
{
     name: "DAY 30",
     y: 0,
     },
{
     name: "DAY 31",
     y: 1,
     },
]
},
{
    id: "ID_PREMSAGAR-VADCARD12",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 0,
     },
{
     name: "DAY 3",
     y: 0,
     },
{
     name: "DAY 4",
     y: 0,
     },
{
     name: "DAY 5",
     y: 0,
     },
{
     name: "DAY 6",
     y: 0,
     },
{
     name: "DAY 7",
     y: 0,
     },
{
     name: "DAY 8",
     y: 0,
     },
{
     name: "DAY 9",
     y: 0,
     },
{
     name: "DAY 10",
     y: 0,
     },
{
     name: "DAY 11",
     y: 0,
     },
{
     name: "DAY 12",
     y: 0,
     },
{
     name: "DAY 13",
     y: 0,
     },
{
     name: "DAY 14",
     y: 0,
     },
{
     name: "DAY 15",
     y: 0,
     },
{
     name: "DAY 16",
     y: 0,
     },
{
     name: "DAY 17",
     y: 0,
     },
{
     name: "DAY 18",
     y: 0,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 0,
     },
{
     name: "DAY 24",
     y: 0,
     },
{
     name: "DAY 25",
     y: 0,
     },
{
     name: "DAY 26",
     y: 0,
     },
{
     name: "DAY 27",
     y: 0,
     },
{
     name: "DAY 28",
     y: 0,
     },
{
     name: "DAY 29",
     y: 0,
     },
{
     name: "DAY 30",
     y: 0,
     },
{
     name: "DAY 31",
     y: 0,
     },
]
},
{
    id: "ID_PUJER-VADCARD14",
    data: 
    [
{
     name: "DAY 1",
     y: 3,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 3",
     y: 3,
     },
{
     name: "DAY 4",
     y: 3,
     },
{
     name: "DAY 5",
     y: 5,
     },
{
     name: "DAY 6",
     y: 0,
     },
{
     name: "DAY 7",
     y: 1,
     },
{
     name: "DAY 8",
     y: 2,
     },
{
     name: "DAY 9",
     y: 3,
     },
{
     name: "DAY 10",
     y: 4,
     },
{
     name: "DAY 11",
     y: 3,
     },
{
     name: "DAY 12",
     y: 7,
     },
{
     name: "DAY 13",
     y: 6,
     },
{
     name: "DAY 14",
     y: 5,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 8,
     },
{
     name: "DAY 17",
     y: 2,
     },
{
     name: "DAY 18",
     y: 3,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 2,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 3,
     },
{
     name: "DAY 24",
     y: 3,
     },
{
     name: "DAY 25",
     y: 4,
     },
{
     name: "DAY 26",
     y: 7,
     },
{
     name: "DAY 27",
     y: 4,
     },
{
     name: "DAY 28",
     y: 2,
     },
{
     name: "DAY 29",
     y: 3,
     },
{
     name: "DAY 30",
     y: 2,
     },
{
     name: "DAY 31",
     y: 3,
     },
]
},
{
    id: "ID_RACHNA-VADCARD15",
    data: 
    [
{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 0,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 2,
     },
{
     name: "DAY 5",
     y: 3,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 7",
     y: 4,
     },
{
     name: "DAY 8",
     y: 1,
     },
{
     name: "DAY 9",
     y: 2,
     },
{
     name: "DAY 10",
     y: 1,
     },
{
     name: "DAY 11",
     y: 0,
     },
{
     name: "DAY 12",
     y: 1,
     },
{
     name: "DAY 13",
     y: 4,
     },
{
     name: "DAY 14",
     y: 3,
     },
{
     name: "DAY 15",
     y: 1,
     },
{
     name: "DAY 16",
     y: 1,
     },
{
     name: "DAY 17",
     y: 2,
     },
{
     name: "DAY 18",
     y: 1,
     },
{
     name: "DAY 19",
     y: 3,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 24",
     y: 0,
     },
{
     name: "DAY 25",
     y: 2,
     },
{
     name: "DAY 26",
     y: 2,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 0,
     },
{
     name: "DAY 29",
     y: 0,
     },
{
     name: "DAY 30",
     y: 0,
     },
{
     name: "DAY 31",
     y: 1,
     },
]
},
{
    id: "ID_RADHEYRESI-VADCARD14",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 0,
     },
{
     name: "DAY 3",
     y: 0,
     },
{
     name: "DAY 4",
     y: 0,
     },
{
     name: "DAY 5",
     y: 0,
     },
{
     name: "DAY 6",
     y: 0,
     },
{
     name: "DAY 7",
     y: 0,
     },
{
     name: "DAY 8",
     y: 0,
     },
{
     name: "DAY 9",
     y: 0,
     },
{
     name: "DAY 10",
     y: 0,
     },
{
     name: "DAY 11",
     y: 0,
     },
{
     name: "DAY 12",
     y: 0,
     },
{
     name: "DAY 13",
     y: 0,
     },
{
     name: "DAY 14",
     y: 0,
     },
{
     name: "DAY 15",
     y: 0,
     },
{
     name: "DAY 16",
     y: 0,
     },
{
     name: "DAY 17",
     y: 0,
     },
{
     name: "DAY 18",
     y: 0,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 0,
     },
{
     name: "DAY 24",
     y: 0,
     },
{
     name: "DAY 25",
     y: 0,
     },
{
     name: "DAY 26",
     y: 0,
     },
{
     name: "DAY 27",
     y: 0,
     },
{
     name: "DAY 28",
     y: 0,
     },
{
     name: "DAY 29",
     y: 0,
     },
{
     name: "DAY 30",
     y: 0,
     },
{
     name: "DAY 31",
     y: 0,
     },
]
},
{
    id: "ID_RED-APPLE-VADCARD13",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 3",
     y: 4,
     },
{
     name: "DAY 4",
     y: 1,
     },
{
     name: "DAY 5",
     y: 1,
     },
{
     name: "DAY 6",
     y: 4,
     },
{
     name: "DAY 7",
     y: 0,
     },
{
     name: "DAY 8",
     y: 0,
     },
{
     name: "DAY 9",
     y: 0,
     },
{
     name: "DAY 10",
     y: 0,
     },
{
     name: "DAY 11",
     y: 3,
     },
{
     name: "DAY 12",
     y: 0,
     },
{
     name: "DAY 13",
     y: 0,
     },
{
     name: "DAY 14",
     y: 3,
     },
{
     name: "DAY 15",
     y: 0,
     },
{
     name: "DAY 16",
     y: 3,
     },
{
     name: "DAY 17",
     y: 0,
     },
{
     name: "DAY 18",
     y: 2,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 0,
     },
{
     name: "DAY 24",
     y: 1,
     },
{
     name: "DAY 25",
     y: 0,
     },
{
     name: "DAY 26",
     y: 1,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 0,
     },
{
     name: "DAY 29",
     y: 1,
     },
{
     name: "DAY 30",
     y: 2,
     },
{
     name: "DAY 31",
     y: 0,
     },
]
},
{
    id: "ID_RENAISSANCE-VADCARD07",
    data: 
    [
{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 3,
     },
{
     name: "DAY 5",
     y: 5,
     },
{
     name: "DAY 6",
     y: 9,
     },
{
     name: "DAY 7",
     y: 7,
     },
{
     name: "DAY 8",
     y: 0,
     },
{
     name: "DAY 9",
     y: 11,
     },
{
     name: "DAY 10",
     y: 4,
     },
{
     name: "DAY 11",
     y: 0,
     },
{
     name: "DAY 12",
     y: 2,
     },
{
     name: "DAY 13",
     y: 2,
     },
{
     name: "DAY 14",
     y: 5,
     },
{
     name: "DAY 15",
     y: 7,
     },
{
     name: "DAY 16",
     y: 4,
     },
{
     name: "DAY 17",
     y: 2,
     },
{
     name: "DAY 18",
     y: 0,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 3,
     },
{
     name: "DAY 21",
     y: 2,
     },
{
     name: "DAY 22",
     y: 4,
     },
{
     name: "DAY 23",
     y: 5,
     },
{
     name: "DAY 24",
     y: 6,
     },
{
     name: "DAY 25",
     y: 14,
     },
{
     name: "DAY 26",
     y: 23,
     },
{
     name: "DAY 27",
     y: 6,
     },
{
     name: "DAY 28",
     y: 1,
     },
{
     name: "DAY 29",
     y: 3,
     },
{
     name: "DAY 30",
     y: 8,
     },
{
     name: "DAY 31",
     y: 14,
     },
]
},
{
    id: "ID_SAURABHPARK-VADCARD11",
    data: 
    [
{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 3",
     y: 4,
     },
{
     name: "DAY 4",
     y: 4,
     },
{
     name: "DAY 5",
     y: 3,
     },
{
     name: "DAY 6",
     y: 3,
     },
{
     name: "DAY 7",
     y: 6,
     },
{
     name: "DAY 8",
     y: 1,
     },
{
     name: "DAY 9",
     y: 3,
     },
{
     name: "DAY 10",
     y: 3,
     },
{
     name: "DAY 11",
     y: 3,
     },
{
     name: "DAY 12",
     y: 3,
     },
{
     name: "DAY 13",
     y: 2,
     },
{
     name: "DAY 14",
     y: 1,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 3,
     },
{
     name: "DAY 17",
     y: 3,
     },
{
     name: "DAY 18",
     y: 4,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 24",
     y: 1,
     },
{
     name: "DAY 25",
     y: 3,
     },
{
     name: "DAY 26",
     y: 4,
     },
{
     name: "DAY 27",
     y: 3,
     },
{
     name: "DAY 28",
     y: 5,
     },
{
     name: "DAY 29",
     y: 2,
     },
{
     name: "DAY 30",
     y: 5,
     },
{
     name: "DAY 31",
     y: 5,
     },
]
},
{
    id: "ID_SHAILY-VADCARD15",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 3",
     y: 1,
     },
{
     name: "DAY 4",
     y: 2,
     },
{
     name: "DAY 5",
     y: 0,
     },
{
     name: "DAY 6",
     y: 0,
     },
{
     name: "DAY 7",
     y: 4,
     },
{
     name: "DAY 8",
     y: 0,
     },
{
     name: "DAY 9",
     y: 2,
     },
{
     name: "DAY 10",
     y: 2,
     },
{
     name: "DAY 11",
     y: 1,
     },
{
     name: "DAY 12",
     y: 2,
     },
{
     name: "DAY 13",
     y: 1,
     },
{
     name: "DAY 14",
     y: 1,
     },
{
     name: "DAY 15",
     y: 1,
     },
{
     name: "DAY 16",
     y: 0,
     },
{
     name: "DAY 17",
     y: 2,
     },
{
     name: "DAY 18",
     y: 1,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 0,
     },
{
     name: "DAY 24",
     y: 1,
     },
{
     name: "DAY 25",
     y: 2,
     },
{
     name: "DAY 26",
     y: 1,
     },
{
     name: "DAY 27",
     y: 3,
     },
{
     name: "DAY 28",
     y: 0,
     },
{
     name: "DAY 29",
     y: 1,
     },
{
     name: "DAY 30",
     y: 1,
     },
{
     name: "DAY 31",
     y: 2,
     },
]
},
{
    id: "ID_SHAKTIPARK-VADCARD20",
    data: 
    [
{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 2",
     y: 3,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 3,
     },
{
     name: "DAY 5",
     y: 3,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 7",
     y: 3,
     },
{
     name: "DAY 8",
     y: 1,
     },
{
     name: "DAY 9",
     y: 0,
     },
{
     name: "DAY 10",
     y: 0,
     },
{
     name: "DAY 11",
     y: 6,
     },
{
     name: "DAY 12",
     y: 7,
     },
{
     name: "DAY 13",
     y: 8,
     },
{
     name: "DAY 14",
     y: 6,
     },
{
     name: "DAY 15",
     y: 8,
     },
{
     name: "DAY 16",
     y: 0,
     },
{
     name: "DAY 17",
     y: 2,
     },
{
     name: "DAY 18",
     y: 5,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 24",
     y: 4,
     },
{
     name: "DAY 25",
     y: 3,
     },
{
     name: "DAY 26",
     y: 1,
     },
{
     name: "DAY 27",
     y: 3,
     },
{
     name: "DAY 28",
     y: 3,
     },
{
     name: "DAY 29",
     y: 3,
     },
{
     name: "DAY 30",
     y: 3,
     },
{
     name: "DAY 31",
     y: 1,
     },
]
},
{
    id: "ID_SHIVALIK-VADCARD14",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 2,
     },
{
     name: "DAY 5",
     y: 4,
     },
{
     name: "DAY 6",
     y: 4,
     },
{
     name: "DAY 7",
     y: 7,
     },
{
     name: "DAY 8",
     y: 19,
     },
{
     name: "DAY 9",
     y: 23,
     },
{
     name: "DAY 10",
     y: 7,
     },
{
     name: "DAY 11",
     y: 4,
     },
{
     name: "DAY 12",
     y: 3,
     },
{
     name: "DAY 13",
     y: 3,
     },
{
     name: "DAY 14",
     y: 8,
     },
{
     name: "DAY 15",
     y: 4,
     },
{
     name: "DAY 16",
     y: 4,
     },
{
     name: "DAY 17",
     y: 3,
     },
{
     name: "DAY 18",
     y: 5,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 2,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 2,
     },
{
     name: "DAY 24",
     y: 4,
     },
{
     name: "DAY 25",
     y: 4,
     },
{
     name: "DAY 26",
     y: 5,
     },
{
     name: "DAY 27",
     y: 7,
     },
{
     name: "DAY 28",
     y: 9,
     },
{
     name: "DAY 29",
     y: 10,
     },
{
     name: "DAY 30",
     y: 3,
     },
{
     name: "DAY 31",
     y: 3,
     },
]
},
{
    id: "ID_SUKUN-VADCARD14",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 0,
     },
{
     name: "DAY 3",
     y: 0,
     },
{
     name: "DAY 4",
     y: 2,
     },
{
     name: "DAY 5",
     y: 4,
     },
{
     name: "DAY 6",
     y: 2,
     },
{
     name: "DAY 7",
     y: 2,
     },
{
     name: "DAY 8",
     y: 11,
     },
{
     name: "DAY 9",
     y: 17,
     },
{
     name: "DAY 10",
     y: 2,
     },
{
     name: "DAY 11",
     y: 4,
     },
{
     name: "DAY 12",
     y: 6,
     },
{
     name: "DAY 13",
     y: 2,
     },
{
     name: "DAY 14",
     y: 5,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 2,
     },
{
     name: "DAY 17",
     y: 3,
     },
{
     name: "DAY 18",
     y: 9,
     },
{
     name: "DAY 19",
     y: 4,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 24",
     y: 3,
     },
{
     name: "DAY 25",
     y: 1,
     },
{
     name: "DAY 26",
     y: 3,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 2,
     },
{
     name: "DAY 29",
     y: 0,
     },
{
     name: "DAY 30",
     y: 2,
     },
{
     name: "DAY 31",
     y: 2,
     },
]
},
{
    id: "ID_SURAJ AVN-VADCARD13",
    data: 
    [
{
     name: "DAY 1",
     y: 3,
     },
{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 0,
     },
{
     name: "DAY 5",
     y: 2,
     },
{
     name: "DAY 6",
     y: 2,
     },
{
     name: "DAY 7",
     y: 4,
     },
{
     name: "DAY 8",
     y: 1,
     },
{
     name: "DAY 9",
     y: 2,
     },
{
     name: "DAY 10",
     y: 0,
     },
{
     name: "DAY 11",
     y: 2,
     },
{
     name: "DAY 12",
     y: 1,
     },
{
     name: "DAY 13",
     y: 1,
     },
{
     name: "DAY 14",
     y: 1,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 0,
     },
{
     name: "DAY 17",
     y: 0,
     },
{
     name: "DAY 18",
     y: 2,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 1,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 2,
     },
{
     name: "DAY 24",
     y: 2,
     },
{
     name: "DAY 25",
     y: 2,
     },
{
     name: "DAY 26",
     y: 1,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 2,
     },
{
     name: "DAY 29",
     y: 1,
     },
{
     name: "DAY 30",
     y: 2,
     },
{
     name: "DAY 31",
     y: 2,
     },
]
},
{
    id: "ID_UMATIRTH-VADCARD14",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 0,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 0,
     },
{
     name: "DAY 5",
     y: 0,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 7",
     y: 1,
     },
{
     name: "DAY 8",
     y: 0,
     },
{
     name: "DAY 9",
     y: 0,
     },
{
     name: "DAY 10",
     y: 2,
     },
{
     name: "DAY 11",
     y: 0,
     },
{
     name: "DAY 12",
     y: 2,
     },
{
     name: "DAY 13",
     y: 0,
     },
{
     name: "DAY 14",
     y: 2,
     },
{
     name: "DAY 15",
     y: 0,
     },
{
     name: "DAY 16",
     y: 0,
     },
{
     name: "DAY 17",
     y: 2,
     },
{
     name: "DAY 18",
     y: 1,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 2,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 0,
     },
{
     name: "DAY 24",
     y: 0,
     },
{
     name: "DAY 25",
     y: 2,
     },
{
     name: "DAY 26",
     y: 0,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 2,
     },
{
     name: "DAY 29",
     y: 0,
     },
{
     name: "DAY 30",
     y: 0,
     },
{
     name: "DAY 31",
     y: 0,
     },
]
},
{
    id: "ID_URVISHIAPPT-VADCARD11",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 0,
     },
{
     name: "DAY 3",
     y: 0,
     },
{
     name: "DAY 4",
     y: 2,
     },
{
     name: "DAY 5",
     y: 2,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 7",
     y: 3,
     },
{
     name: "DAY 8",
     y: 1,
     },
{
     name: "DAY 9",
     y: 2,
     },
{
     name: "DAY 10",
     y: 0,
     },
{
     name: "DAY 11",
     y: 0,
     },
{
     name: "DAY 12",
     y: 0,
     },
{
     name: "DAY 13",
     y: 1,
     },
{
     name: "DAY 14",
     y: 1,
     },
{
     name: "DAY 15",
     y: 0,
     },
{
     name: "DAY 16",
     y: 0,
     },
{
     name: "DAY 17",
     y: 0,
     },
{
     name: "DAY 18",
     y: 3,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 3,
     },
{
     name: "DAY 24",
     y: 0,
     },
{
     name: "DAY 25",
     y: 1,
     },
{
     name: "DAY 26",
     y: 0,
     },
{
     name: "DAY 27",
     y: 0,
     },
{
     name: "DAY 28",
     y: 2,
     },
{
     name: "DAY 29",
     y: 3,
     },
{
     name: "DAY 30",
     y: 0,
     },
{
     name: "DAY 31",
     y: 1,
     },
]
},
{
    id: "ID_VARDHAMAN-VADCARD03",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 0,
     },
{
     name: "DAY 3",
     y: 0,
     },
{
     name: "DAY 4",
     y: 0,
     },
{
     name: "DAY 5",
     y: 0,
     },
{
     name: "DAY 6",
     y: 0,
     },
{
     name: "DAY 7",
     y: 0,
     },
{
     name: "DAY 8",
     y: 0,
     },
{
     name: "DAY 9",
     y: 0,
     },
{
     name: "DAY 10",
     y: 0,
     },
{
     name: "DAY 11",
     y: 0,
     },
{
     name: "DAY 12",
     y: 0,
     },
{
     name: "DAY 13",
     y: 0,
     },
{
     name: "DAY 14",
     y: 0,
     },
{
     name: "DAY 15",
     y: 0,
     },
{
     name: "DAY 16",
     y: 0,
     },
{
     name: "DAY 17",
     y: 0,
     },
{
     name: "DAY 18",
     y: 0,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 0,
     },
{
     name: "DAY 24",
     y: 0,
     },
{
     name: "DAY 25",
     y: 0,
     },
{
     name: "DAY 26",
     y: 0,
     },
{
     name: "DAY 27",
     y: 0,
     },
{
     name: "DAY 28",
     y: 0,
     },
{
     name: "DAY 29",
     y: 0,
     },
{
     name: "DAY 30",
     y: 0,
     },
{
     name: "DAY 31",
     y: 0,
     },
]
},
{
    id: "ID_VARDHMAN-VADCARD14",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 0,
     },
{
     name: "DAY 3",
     y: 0,
     },
{
     name: "DAY 4",
     y: 0,
     },
{
     name: "DAY 5",
     y: 0,
     },
{
     name: "DAY 6",
     y: 0,
     },
{
     name: "DAY 7",
     y: 0,
     },
{
     name: "DAY 8",
     y: 0,
     },
{
     name: "DAY 9",
     y: 0,
     },
{
     name: "DAY 10",
     y: 0,
     },
{
     name: "DAY 11",
     y: 0,
     },
{
     name: "DAY 12",
     y: 0,
     },
{
     name: "DAY 13",
     y: 0,
     },
{
     name: "DAY 14",
     y: 0,
     },
{
     name: "DAY 15",
     y: 0,
     },
{
     name: "DAY 16",
     y: 0,
     },
{
     name: "DAY 17",
     y: 0,
     },
{
     name: "DAY 18",
     y: 0,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 0,
     },
{
     name: "DAY 24",
     y: 0,
     },
{
     name: "DAY 25",
     y: 0,
     },
{
     name: "DAY 26",
     y: 0,
     },
{
     name: "DAY 27",
     y: 0,
     },
{
     name: "DAY 28",
     y: 0,
     },
{
     name: "DAY 29",
     y: 0,
     },
{
     name: "DAY 30",
     y: 0,
     },
{
     name: "DAY 31",
     y: 0,
     },
]
},
{
    id: "ID_VISHNUKUNJ-VADCARD15",
    data: 
    [
{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 3",
     y: 11,
     },
{
     name: "DAY 4",
     y: 3,
     },
{
     name: "DAY 5",
     y: 2,
     },
{
     name: "DAY 6",
     y: 5,
     },
{
     name: "DAY 7",
     y: 4,
     },
{
     name: "DAY 8",
     y: 6,
     },
{
     name: "DAY 9",
     y: 13,
     },
{
     name: "DAY 10",
     y: 13,
     },
{
     name: "DAY 11",
     y: 2,
     },
{
     name: "DAY 12",
     y: 6,
     },
{
     name: "DAY 13",
     y: 1,
     },
{
     name: "DAY 14",
     y: 1,
     },
{
     name: "DAY 15",
     y: 4,
     },
{
     name: "DAY 16",
     y: 1,
     },
{
     name: "DAY 17",
     y: 3,
     },
{
     name: "DAY 18",
     y: 2,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 2,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 2,
     },
{
     name: "DAY 24",
     y: 0,
     },
{
     name: "DAY 25",
     y: 2,
     },
{
     name: "DAY 26",
     y: 4,
     },
{
     name: "DAY 27",
     y: 4,
     },
{
     name: "DAY 28",
     y: 7,
     },
{
     name: "DAY 29",
     y: 4,
     },
{
     name: "DAY 30",
     y: 3,
     },
{
     name: "DAY 31",
     y: 1,
     },
]
},
{
    id: "ID_VRAJVENU-VADCARD11",
    data: 
    [
{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 3,
     },
{
     name: "DAY 5",
     y: 2,
     },
{
     name: "DAY 6",
     y: 4,
     },
{
     name: "DAY 7",
     y: 0,
     },
{
     name: "DAY 8",
     y: 1,
     },
{
     name: "DAY 9",
     y: 3,
     },
{
     name: "DAY 10",
     y: 3,
     },
{
     name: "DAY 11",
     y: 5,
     },
{
     name: "DAY 12",
     y: 2,
     },
{
     name: "DAY 13",
     y: 0,
     },
{
     name: "DAY 14",
     y: 1,
     },
{
     name: "DAY 15",
     y: 3,
     },
{
     name: "DAY 16",
     y: 2,
     },
{
     name: "DAY 17",
     y: 1,
     },
{
     name: "DAY 18",
     y: 3,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 2,
     },
{
     name: "DAY 24",
     y: 9,
     },
{
     name: "DAY 25",
     y: 1,
     },
{
     name: "DAY 26",
     y: 2,
     },
{
     name: "DAY 27",
     y: 0,
     },
{
     name: "DAY 28",
     y: 3,
     },
{
     name: "DAY 29",
     y: 1,
     },
{
     name: "DAY 30",
     y: 3,
     },
{
     name: "DAY 31",
     y: 0,
     },
]
},
{
    id: "ID_VIRNAGAR-VADCARD06_12",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 0,
     },
{
     name: "DAY 3",
     y: 0,
     },
{
     name: "DAY 4",
     y: 0,
     },
{
     name: "DAY 5",
     y: 0,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 7",
     y: 0,
     },
{
     name: "DAY 8",
     y: 1,
     },
{
     name: "DAY 9",
     y: 0,
     },
{
     name: "DAY 10",
     y: 0,
     },
{
     name: "DAY 11",
     y: 0,
     },
{
     name: "DAY 12",
     y: 1,
     },
{
     name: "DAY 13",
     y: 1,
     },
{
     name: "DAY 14",
     y: 0,
     },
{
     name: "DAY 15",
     y: 0,
     },
{
     name: "DAY 16",
     y: 0,
     },
{
     name: "DAY 17",
     y: 0,
     },
{
     name: "DAY 18",
     y: 0,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 0,
     },
{
     name: "DAY 24",
     y: 0,
     },
{
     name: "DAY 25",
     y: 0,
     },
{
     name: "DAY 26",
     y: 1,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 0,
     },
{
     name: "DAY 29",
     y: 0,
     },
{
     name: "DAY 30",
     y: 1,
     },
{
     name: "DAY 31",
     y: 0,
     },
]
},
{
    id: "ID_VIP-VADCARD06",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 0,
     },
{
     name: "DAY 3",
     y: 0,
     },
{
     name: "DAY 4",
     y: 0,
     },
{
     name: "DAY 5",
     y: 0,
     },
{
     name: "DAY 6",
     y: 0,
     },
{
     name: "DAY 7",
     y: 0,
     },
{
     name: "DAY 8",
     y: 0,
     },
{
     name: "DAY 9",
     y: 0,
     },
{
     name: "DAY 10",
     y: 0,
     },
{
     name: "DAY 11",
     y: 0,
     },
{
     name: "DAY 12",
     y: 0,
     },
{
     name: "DAY 13",
     y: 0,
     },
{
     name: "DAY 14",
     y: 0,
     },
{
     name: "DAY 15",
     y: 0,
     },
{
     name: "DAY 16",
     y: 0,
     },
{
     name: "DAY 17",
     y: 0,
     },
{
     name: "DAY 18",
     y: 0,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 0,
     },
{
     name: "DAY 24",
     y: 0,
     },
{
     name: "DAY 25",
     y: 0,
     },
{
     name: "DAY 26",
     y: 0,
     },
{
     name: "DAY 27",
     y: 0,
     },
{
     name: "DAY 28",
     y: 0,
     },
{
     name: "DAY 29",
     y: 0,
     },
{
     name: "DAY 30",
     y: 0,
     },
{
     name: "DAY 31",
     y: 0,
     },
]
},
{
    id: "ID_VALMIKI-VADCARD12",
    data: 
    [
{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 2",
     y: 10,
     },
{
     name: "DAY 3",
     y: 5,
     },
{
     name: "DAY 4",
     y: 1,
     },
{
     name: "DAY 5",
     y: 6,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 7",
     y: 1,
     },
{
     name: "DAY 8",
     y: 1,
     },
{
     name: "DAY 9",
     y: 3,
     },
{
     name: "DAY 10",
     y: 0,
     },
{
     name: "DAY 11",
     y: 4,
     },
{
     name: "DAY 12",
     y: 1,
     },
{
     name: "DAY 13",
     y: 3,
     },
{
     name: "DAY 14",
     y: 4,
     },
{
     name: "DAY 15",
     y: 4,
     },
{
     name: "DAY 16",
     y: 4,
     },
{
     name: "DAY 17",
     y: 0,
     },
{
     name: "DAY 18",
     y: 3,
     },
{
     name: "DAY 19",
     y: 2,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 1,
     },
{
     name: "DAY 22",
     y: 2,
     },
{
     name: "DAY 23",
     y: 3,
     },
{
     name: "DAY 24",
     y: 3,
     },
{
     name: "DAY 25",
     y: 1,
     },
{
     name: "DAY 26",
     y: 3,
     },
{
     name: "DAY 27",
     y: 0,
     },
{
     name: "DAY 28",
     y: 2,
     },
{
     name: "DAY 29",
     y: 4,
     },
{
     name: "DAY 30",
     y: 2,
     },
{
     name: "DAY 31",
     y: 8,
     },
]
},
{
    id: "ID_VALMIKISOC-VADCARD12",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 0,
     },
{
     name: "DAY 3",
     y: 0,
     },
{
     name: "DAY 4",
     y: 0,
     },
{
     name: "DAY 5",
     y: 0,
     },
{
     name: "DAY 6",
     y: 0,
     },
{
     name: "DAY 7",
     y: 0,
     },
{
     name: "DAY 8",
     y: 0,
     },
{
     name: "DAY 9",
     y: 0,
     },
{
     name: "DAY 10",
     y: 0,
     },
{
     name: "DAY 11",
     y: 0,
     },
{
     name: "DAY 12",
     y: 0,
     },
{
     name: "DAY 13",
     y: 0,
     },
{
     name: "DAY 14",
     y: 0,
     },
{
     name: "DAY 15",
     y: 0,
     },
{
     name: "DAY 16",
     y: 0,
     },
{
     name: "DAY 17",
     y: 0,
     },
{
     name: "DAY 18",
     y: 0,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 0,
     },
{
     name: "DAY 24",
     y: 0,
     },
{
     name: "DAY 25",
     y: 0,
     },
{
     name: "DAY 26",
     y: 0,
     },
{
     name: "DAY 27",
     y: 0,
     },
{
     name: "DAY 28",
     y: 0,
     },
{
     name: "DAY 29",
     y: 0,
     },
{
     name: "DAY 30",
     y: 0,
     },
{
     name: "DAY 31",
     y: 0,
     },
]
},
{
    id: "ID_SURYADARSAN-VADCARD06",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 0,
     },
{
     name: "DAY 3",
     y: 0,
     },
{
     name: "DAY 4",
     y: 0,
     },
{
     name: "DAY 5",
     y: 0,
     },
{
     name: "DAY 6",
     y: 2,
     },
{
     name: "DAY 7",
     y: 0,
     },
{
     name: "DAY 8",
     y: 2,
     },
{
     name: "DAY 9",
     y: 0,
     },
{
     name: "DAY 10",
     y: 0,
     },
{
     name: "DAY 11",
     y: 3,
     },
{
     name: "DAY 12",
     y: 1,
     },
{
     name: "DAY 13",
     y: 1,
     },
{
     name: "DAY 14",
     y: 1,
     },
{
     name: "DAY 15",
     y: 0,
     },
{
     name: "DAY 16",
     y: 1,
     },
{
     name: "DAY 17",
     y: 1,
     },
{
     name: "DAY 18",
     y: 1,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 1,
     },
{
     name: "DAY 22",
     y: 3,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 24",
     y: 0,
     },
{
     name: "DAY 25",
     y: 2,
     },
{
     name: "DAY 26",
     y: 2,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 3,
     },
{
     name: "DAY 29",
     y: 1,
     },
{
     name: "DAY 30",
     y: 1,
     },
{
     name: "DAY 31",
     y: 3,
     },
]
},
{
    id: "ID_SURAMYA-VADCARD06",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 2,
     },
{
     name: "DAY 5",
     y: 2,
     },
{
     name: "DAY 6",
     y: 4,
     },
{
     name: "DAY 7",
     y: 5,
     },
{
     name: "DAY 8",
     y: 2,
     },
{
     name: "DAY 9",
     y: 6,
     },
{
     name: "DAY 10",
     y: 2,
     },
{
     name: "DAY 11",
     y: 3,
     },
{
     name: "DAY 12",
     y: 2,
     },
{
     name: "DAY 13",
     y: 6,
     },
{
     name: "DAY 14",
     y: 4,
     },
{
     name: "DAY 15",
     y: 4,
     },
{
     name: "DAY 16",
     y: 3,
     },
{
     name: "DAY 17",
     y: 8,
     },
{
     name: "DAY 18",
     y: 2,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 2,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 2,
     },
{
     name: "DAY 23",
     y: 0,
     },
{
     name: "DAY 24",
     y: 3,
     },
{
     name: "DAY 25",
     y: 0,
     },
{
     name: "DAY 26",
     y: 2,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 4,
     },
{
     name: "DAY 29",
     y: 2,
     },
{
     name: "DAY 30",
     y: 7,
     },
{
     name: "DAY 31",
     y: 4,
     },
]
},
{
    id: "ID_SUKHAMRES-VADCARD06",
    data: 
    [
{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 3",
     y: 6,
     },
{
     name: "DAY 4",
     y: 2,
     },
{
     name: "DAY 5",
     y: 5,
     },
{
     name: "DAY 6",
     y: 3,
     },
{
     name: "DAY 7",
     y: 2,
     },
{
     name: "DAY 8",
     y: 2,
     },
{
     name: "DAY 9",
     y: 0,
     },
{
     name: "DAY 10",
     y: 1,
     },
{
     name: "DAY 11",
     y: 3,
     },
{
     name: "DAY 12",
     y: 3,
     },
{
     name: "DAY 13",
     y: 1,
     },
{
     name: "DAY 14",
     y: 2,
     },
{
     name: "DAY 15",
     y: 7,
     },
{
     name: "DAY 16",
     y: 5,
     },
{
     name: "DAY 17",
     y: 5,
     },
{
     name: "DAY 18",
     y: 4,
     },
{
     name: "DAY 19",
     y: 5,
     },
{
     name: "DAY 20",
     y: 2,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 0,
     },
{
     name: "DAY 24",
     y: 0,
     },
{
     name: "DAY 25",
     y: 6,
     },
{
     name: "DAY 26",
     y: 4,
     },
{
     name: "DAY 27",
     y: 3,
     },
{
     name: "DAY 28",
     y: 6,
     },
{
     name: "DAY 29",
     y: 3,
     },
{
     name: "DAY 30",
     y: 3,
     },
{
     name: "DAY 31",
     y: 4,
     },
]
},
{
    id: "ID_SPRING HILL-VADCARD06",
    data: 
    [
{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 5,
     },
{
     name: "DAY 5",
     y: 4,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 7",
     y: 2,
     },
{
     name: "DAY 8",
     y: 4,
     },
{
     name: "DAY 9",
     y: 16,
     },
{
     name: "DAY 10",
     y: 11,
     },
{
     name: "DAY 11",
     y: 6,
     },
{
     name: "DAY 12",
     y: 15,
     },
{
     name: "DAY 13",
     y: 8,
     },
{
     name: "DAY 14",
     y: 13,
     },
{
     name: "DAY 15",
     y: 7,
     },
{
     name: "DAY 16",
     y: 6,
     },
{
     name: "DAY 17",
     y: 9,
     },
{
     name: "DAY 18",
     y: 3,
     },
{
     name: "DAY 19",
     y: 3,
     },
{
     name: "DAY 20",
     y: 2,
     },
{
     name: "DAY 21",
     y: 2,
     },
{
     name: "DAY 22",
     y: 3,
     },
{
     name: "DAY 23",
     y: 4,
     },
{
     name: "DAY 24",
     y: 8,
     },
{
     name: "DAY 25",
     y: 10,
     },
{
     name: "DAY 26",
     y: 8,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 6,
     },
{
     name: "DAY 29",
     y: 4,
     },
{
     name: "DAY 30",
     y: 5,
     },
{
     name: "DAY 31",
     y: 11,
     },
]
},
{
    id: "ID_SNEHAL-VADCARD07",
    data: 
    [
{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 2",
     y: 3,
     },
{
     name: "DAY 3",
     y: 6,
     },
{
     name: "DAY 4",
     y: 4,
     },
{
     name: "DAY 5",
     y: 6,
     },
{
     name: "DAY 6",
     y: 8,
     },
{
     name: "DAY 7",
     y: 1,
     },
{
     name: "DAY 8",
     y: 3,
     },
{
     name: "DAY 9",
     y: 12,
     },
{
     name: "DAY 10",
     y: 11,
     },
{
     name: "DAY 11",
     y: 7,
     },
{
     name: "DAY 12",
     y: 6,
     },
{
     name: "DAY 13",
     y: 10,
     },
{
     name: "DAY 14",
     y: 5,
     },
{
     name: "DAY 15",
     y: 5,
     },
{
     name: "DAY 16",
     y: 5,
     },
{
     name: "DAY 17",
     y: 3,
     },
{
     name: "DAY 18",
     y: 6,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 4,
     },
{
     name: "DAY 22",
     y: 6,
     },
{
     name: "DAY 23",
     y: 6,
     },
{
     name: "DAY 24",
     y: 20,
     },
{
     name: "DAY 25",
     y: 9,
     },
{
     name: "DAY 26",
     y: 8,
     },
{
     name: "DAY 27",
     y: 7,
     },
{
     name: "DAY 28",
     y: 9,
     },
{
     name: "DAY 29",
     y: 5,
     },
{
     name: "DAY 30",
     y: 3,
     },
{
     name: "DAY 31",
     y: 13,
     },
]
},
{
    id: "ID_SHREPADNGR-VADCARD06",
    data: 
    [
{
     name: "DAY 1",
     y: 6,
     },
{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 3",
     y: 8,
     },
{
     name: "DAY 4",
     y: 5,
     },
{
     name: "DAY 5",
     y: 13,
     },
{
     name: "DAY 6",
     y: 10,
     },
{
     name: "DAY 7",
     y: 12,
     },
{
     name: "DAY 8",
     y: 8,
     },
{
     name: "DAY 9",
     y: 8,
     },
{
     name: "DAY 10",
     y: 5,
     },
{
     name: "DAY 11",
     y: 6,
     },
{
     name: "DAY 12",
     y: 2,
     },
{
     name: "DAY 13",
     y: 14,
     },
{
     name: "DAY 14",
     y: 15,
     },
{
     name: "DAY 15",
     y: 6,
     },
{
     name: "DAY 16",
     y: 8,
     },
{
     name: "DAY 17",
     y: 6,
     },
{
     name: "DAY 18",
     y: 3,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 2,
     },
{
     name: "DAY 21",
     y: 3,
     },
{
     name: "DAY 22",
     y: 2,
     },
{
     name: "DAY 23",
     y: 4,
     },
{
     name: "DAY 24",
     y: 5,
     },
{
     name: "DAY 25",
     y: 6,
     },
{
     name: "DAY 26",
     y: 3,
     },
{
     name: "DAY 27",
     y: 7,
     },
{
     name: "DAY 28",
     y: 12,
     },
{
     name: "DAY 29",
     y: 8,
     },
{
     name: "DAY 30",
     y: 8,
     },
{
     name: "DAY 31",
     y: 10,
     },
]
},
{
    id: "ID_SARDARNGR-VADCARD16",
    data: 
    [
{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 3",
     y: 1,
     },
{
     name: "DAY 4",
     y: 3,
     },
{
     name: "DAY 5",
     y: 2,
     },
{
     name: "DAY 6",
     y: 3,
     },
{
     name: "DAY 7",
     y: 2,
     },
{
     name: "DAY 8",
     y: 1,
     },
{
     name: "DAY 9",
     y: 2,
     },
{
     name: "DAY 10",
     y: 4,
     },
{
     name: "DAY 11",
     y: 3,
     },
{
     name: "DAY 12",
     y: 2,
     },
{
     name: "DAY 13",
     y: 3,
     },
{
     name: "DAY 14",
     y: 1,
     },
{
     name: "DAY 15",
     y: 1,
     },
{
     name: "DAY 16",
     y: 0,
     },
{
     name: "DAY 17",
     y: 0,
     },
{
     name: "DAY 18",
     y: 1,
     },
{
     name: "DAY 19",
     y: 5,
     },
{
     name: "DAY 20",
     y: 5,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 2,
     },
{
     name: "DAY 24",
     y: 1,
     },
{
     name: "DAY 25",
     y: 2,
     },
{
     name: "DAY 26",
     y: 3,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 2,
     },
{
     name: "DAY 29",
     y: 0,
     },
{
     name: "DAY 30",
     y: 2,
     },
{
     name: "DAY 31",
     y: 3,
     },
]
},
{
    id: "ID_SAANIDHYA-VADCARD12",
    data: 
    [
{
     name: "DAY 1",
     y: 4,
     },
{
     name: "DAY 2",
     y: 7,
     },
{
     name: "DAY 3",
     y: 3,
     },
{
     name: "DAY 4",
     y: 8,
     },
{
     name: "DAY 5",
     y: 8,
     },
{
     name: "DAY 6",
     y: 12,
     },
{
     name: "DAY 7",
     y: 6,
     },
{
     name: "DAY 8",
     y: 5,
     },
{
     name: "DAY 9",
     y: 10,
     },
{
     name: "DAY 10",
     y: 3,
     },
{
     name: "DAY 11",
     y: 11,
     },
{
     name: "DAY 12",
     y: 13,
     },
{
     name: "DAY 13",
     y: 8,
     },
{
     name: "DAY 14",
     y: 10,
     },
{
     name: "DAY 15",
     y: 10,
     },
{
     name: "DAY 16",
     y: 11,
     },
{
     name: "DAY 17",
     y: 13,
     },
{
     name: "DAY 18",
     y: 14,
     },
{
     name: "DAY 19",
     y: 4,
     },
{
     name: "DAY 20",
     y: 2,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 2,
     },
{
     name: "DAY 23",
     y: 6,
     },
{
     name: "DAY 24",
     y: 6,
     },
{
     name: "DAY 25",
     y: 8,
     },
{
     name: "DAY 26",
     y: 5,
     },
{
     name: "DAY 27",
     y: 11,
     },
{
     name: "DAY 28",
     y: 4,
     },
{
     name: "DAY 29",
     y: 5,
     },
{
     name: "DAY 30",
     y: 10,
     },
{
     name: "DAY 31",
     y: 15,
     },
]
},
{
    id: "ID_RADHANGR-VADCARD12",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 0,
     },
{
     name: "DAY 3",
     y: 1,
     },
{
     name: "DAY 4",
     y: 3,
     },
{
     name: "DAY 5",
     y: 1,
     },
{
     name: "DAY 6",
     y: 2,
     },
{
     name: "DAY 7",
     y: 2,
     },
{
     name: "DAY 8",
     y: 0,
     },
{
     name: "DAY 9",
     y: 1,
     },
{
     name: "DAY 10",
     y: 4,
     },
{
     name: "DAY 11",
     y: 1,
     },
{
     name: "DAY 12",
     y: 3,
     },
{
     name: "DAY 13",
     y: 3,
     },
{
     name: "DAY 14",
     y: 2,
     },
{
     name: "DAY 15",
     y: 3,
     },
{
     name: "DAY 16",
     y: 3,
     },
{
     name: "DAY 17",
     y: 0,
     },
{
     name: "DAY 18",
     y: 5,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 1,
     },
{
     name: "DAY 22",
     y: 3,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 24",
     y: 2,
     },
{
     name: "DAY 25",
     y: 2,
     },
{
     name: "DAY 26",
     y: 1,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 0,
     },
{
     name: "DAY 29",
     y: 1,
     },
{
     name: "DAY 30",
     y: 1,
     },
{
     name: "DAY 31",
     y: 4,
     },
]
},
{
    id: "ID_NILKANTHV-VADCARD12",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 3,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 3,
     },
{
     name: "DAY 5",
     y: 3,
     },
{
     name: "DAY 6",
     y: 2,
     },
{
     name: "DAY 7",
     y: 8,
     },
{
     name: "DAY 8",
     y: 2,
     },
{
     name: "DAY 9",
     y: 1,
     },
{
     name: "DAY 10",
     y: 1,
     },
{
     name: "DAY 11",
     y: 2,
     },
{
     name: "DAY 12",
     y: 5,
     },
{
     name: "DAY 13",
     y: 6,
     },
{
     name: "DAY 14",
     y: 0,
     },
{
     name: "DAY 15",
     y: 1,
     },
{
     name: "DAY 16",
     y: 2,
     },
{
     name: "DAY 17",
     y: 3,
     },
{
     name: "DAY 18",
     y: 3,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 1,
     },
{
     name: "DAY 22",
     y: 2,
     },
{
     name: "DAY 23",
     y: 2,
     },
{
     name: "DAY 24",
     y: 2,
     },
{
     name: "DAY 25",
     y: 0,
     },
{
     name: "DAY 26",
     y: 2,
     },
{
     name: "DAY 27",
     y: 0,
     },
{
     name: "DAY 28",
     y: 0,
     },
{
     name: "DAY 29",
     y: 9,
     },
{
     name: "DAY 30",
     y: 2,
     },
{
     name: "DAY 31",
     y: 4,
     },
]
},
{
    id: "ID_NILKANTHVERNI-VADCARD12",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 0,
     },
{
     name: "DAY 3",
     y: 0,
     },
{
     name: "DAY 4",
     y: 0,
     },
{
     name: "DAY 5",
     y: 0,
     },
{
     name: "DAY 6",
     y: 0,
     },
{
     name: "DAY 7",
     y: 0,
     },
{
     name: "DAY 8",
     y: 0,
     },
{
     name: "DAY 9",
     y: 0,
     },
{
     name: "DAY 10",
     y: 0,
     },
{
     name: "DAY 11",
     y: 0,
     },
{
     name: "DAY 12",
     y: 0,
     },
{
     name: "DAY 13",
     y: 0,
     },
{
     name: "DAY 14",
     y: 0,
     },
{
     name: "DAY 15",
     y: 0,
     },
{
     name: "DAY 16",
     y: 0,
     },
{
     name: "DAY 17",
     y: 0,
     },
{
     name: "DAY 18",
     y: 0,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 0,
     },
{
     name: "DAY 24",
     y: 0,
     },
{
     name: "DAY 25",
     y: 0,
     },
{
     name: "DAY 26",
     y: 0,
     },
{
     name: "DAY 27",
     y: 0,
     },
{
     name: "DAY 28",
     y: 0,
     },
{
     name: "DAY 29",
     y: 0,
     },
{
     name: "DAY 30",
     y: 0,
     },
{
     name: "DAY 31",
     y: 0,
     },
]
},
{
    id: "ID_NILKANTH-VADCARD02",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 0,
     },
{
     name: "DAY 3",
     y: 0,
     },
{
     name: "DAY 4",
     y: 0,
     },
{
     name: "DAY 5",
     y: 0,
     },
{
     name: "DAY 6",
     y: 0,
     },
{
     name: "DAY 7",
     y: 0,
     },
{
     name: "DAY 8",
     y: 0,
     },
{
     name: "DAY 9",
     y: 0,
     },
{
     name: "DAY 10",
     y: 0,
     },
{
     name: "DAY 11",
     y: 0,
     },
{
     name: "DAY 12",
     y: 0,
     },
{
     name: "DAY 13",
     y: 0,
     },
{
     name: "DAY 14",
     y: 0,
     },
{
     name: "DAY 15",
     y: 0,
     },
{
     name: "DAY 16",
     y: 0,
     },
{
     name: "DAY 17",
     y: 0,
     },
{
     name: "DAY 18",
     y: 0,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 0,
     },
{
     name: "DAY 24",
     y: 0,
     },
{
     name: "DAY 25",
     y: 0,
     },
{
     name: "DAY 26",
     y: 0,
     },
{
     name: "DAY 27",
     y: 0,
     },
{
     name: "DAY 28",
     y: 0,
     },
{
     name: "DAY 29",
     y: 0,
     },
{
     name: "DAY 30",
     y: 0,
     },
{
     name: "DAY 31",
     y: 0,
     },
]
},
{
    id: "ID_NARAYAN-VADCARD06",
    data: 
    [
{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 2",
     y: 0,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 1,
     },
{
     name: "DAY 5",
     y: 2,
     },
{
     name: "DAY 6",
     y: 2,
     },
{
     name: "DAY 7",
     y: 2,
     },
{
     name: "DAY 8",
     y: 0,
     },
{
     name: "DAY 9",
     y: 1,
     },
{
     name: "DAY 10",
     y: 1,
     },
{
     name: "DAY 11",
     y: 6,
     },
{
     name: "DAY 12",
     y: 3,
     },
{
     name: "DAY 13",
     y: 3,
     },
{
     name: "DAY 14",
     y: 7,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 4,
     },
{
     name: "DAY 17",
     y: 1,
     },
{
     name: "DAY 18",
     y: 1,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 24",
     y: 1,
     },
{
     name: "DAY 25",
     y: 0,
     },
{
     name: "DAY 26",
     y: 0,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 2,
     },
{
     name: "DAY 29",
     y: 0,
     },
{
     name: "DAY 30",
     y: 2,
     },
{
     name: "DAY 31",
     y: 3,
     },
]
},
{
    id: "ID_NANDANVAN-VADCARD12",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 0,
     },
{
     name: "DAY 3",
     y: 0,
     },
{
     name: "DAY 4",
     y: 0,
     },
{
     name: "DAY 5",
     y: 0,
     },
{
     name: "DAY 6",
     y: 0,
     },
{
     name: "DAY 7",
     y: 0,
     },
{
     name: "DAY 8",
     y: 0,
     },
{
     name: "DAY 9",
     y: 0,
     },
{
     name: "DAY 10",
     y: 0,
     },
{
     name: "DAY 11",
     y: 0,
     },
{
     name: "DAY 12",
     y: 0,
     },
{
     name: "DAY 13",
     y: 0,
     },
{
     name: "DAY 14",
     y: 0,
     },
{
     name: "DAY 15",
     y: 0,
     },
{
     name: "DAY 16",
     y: 0,
     },
{
     name: "DAY 17",
     y: 0,
     },
{
     name: "DAY 18",
     y: 0,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 0,
     },
{
     name: "DAY 24",
     y: 0,
     },
{
     name: "DAY 25",
     y: 0,
     },
{
     name: "DAY 26",
     y: 0,
     },
{
     name: "DAY 27",
     y: 0,
     },
{
     name: "DAY 28",
     y: 0,
     },
{
     name: "DAY 29",
     y: 0,
     },
{
     name: "DAY 30",
     y: 0,
     },
{
     name: "DAY 31",
     y: 0,
     },
]
},
{
    id: "ID_MUDJINAGAR-VADCARD16",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 3",
     y: 0,
     },
{
     name: "DAY 4",
     y: 0,
     },
{
     name: "DAY 5",
     y: 0,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 7",
     y: 3,
     },
{
     name: "DAY 8",
     y: 0,
     },
{
     name: "DAY 9",
     y: 2,
     },
{
     name: "DAY 10",
     y: 1,
     },
{
     name: "DAY 11",
     y: 3,
     },
{
     name: "DAY 12",
     y: 3,
     },
{
     name: "DAY 13",
     y: 4,
     },
{
     name: "DAY 14",
     y: 0,
     },
{
     name: "DAY 15",
     y: 0,
     },
{
     name: "DAY 16",
     y: 2,
     },
{
     name: "DAY 17",
     y: 3,
     },
{
     name: "DAY 18",
     y: 3,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 2,
     },
{
     name: "DAY 23",
     y: 0,
     },
{
     name: "DAY 24",
     y: 0,
     },
{
     name: "DAY 25",
     y: 1,
     },
{
     name: "DAY 26",
     y: 0,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 1,
     },
{
     name: "DAY 29",
     y: 1,
     },
{
     name: "DAY 30",
     y: 2,
     },
{
     name: "DAY 31",
     y: 5,
     },
]
},
{
    id: "ID_MTI-VADCARD16",
    data: 
    [
{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 1,
     },
{
     name: "DAY 5",
     y: 1,
     },
{
     name: "DAY 6",
     y: 2,
     },
{
     name: "DAY 7",
     y: 2,
     },
{
     name: "DAY 8",
     y: 2,
     },
{
     name: "DAY 9",
     y: 4,
     },
{
     name: "DAY 10",
     y: 3,
     },
{
     name: "DAY 11",
     y: 0,
     },
{
     name: "DAY 12",
     y: 5,
     },
{
     name: "DAY 13",
     y: 0,
     },
{
     name: "DAY 14",
     y: 4,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 1,
     },
{
     name: "DAY 17",
     y: 3,
     },
{
     name: "DAY 18",
     y: 1,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 2,
     },
{
     name: "DAY 23",
     y: 6,
     },
{
     name: "DAY 24",
     y: 3,
     },
{
     name: "DAY 25",
     y: 0,
     },
{
     name: "DAY 26",
     y: 3,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 0,
     },
{
     name: "DAY 29",
     y: 1,
     },
{
     name: "DAY 30",
     y: 0,
     },
{
     name: "DAY 31",
     y: 3,
     },
]
},
{
    id: "ID_MATRU ASISH-VADCARD07",
    data: 
    [
{
     name: "DAY 1",
     y: 3,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 3",
     y: 4,
     },
{
     name: "DAY 4",
     y: 5,
     },
{
     name: "DAY 5",
     y: 5,
     },
{
     name: "DAY 6",
     y: 5,
     },
{
     name: "DAY 7",
     y: 2,
     },
{
     name: "DAY 8",
     y: 6,
     },
{
     name: "DAY 9",
     y: 8,
     },
{
     name: "DAY 10",
     y: 8,
     },
{
     name: "DAY 11",
     y: 5,
     },
{
     name: "DAY 12",
     y: 2,
     },
{
     name: "DAY 13",
     y: 3,
     },
{
     name: "DAY 14",
     y: 1,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 3,
     },
{
     name: "DAY 17",
     y: 3,
     },
{
     name: "DAY 18",
     y: 2,
     },
{
     name: "DAY 19",
     y: 4,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 3,
     },
{
     name: "DAY 23",
     y: 4,
     },
{
     name: "DAY 24",
     y: 4,
     },
{
     name: "DAY 25",
     y: 5,
     },
{
     name: "DAY 26",
     y: 2,
     },
{
     name: "DAY 27",
     y: 5,
     },
{
     name: "DAY 28",
     y: 3,
     },
{
     name: "DAY 29",
     y: 0,
     },
{
     name: "DAY 30",
     y: 5,
     },
{
     name: "DAY 31",
     y: 4,
     },
]
},
{
    id: "ID_MARUTI-VADCARD09",
    data: 
    [
{
     name: "DAY 1",
     y: 5,
     },
{
     name: "DAY 2",
     y: 7,
     },
{
     name: "DAY 3",
     y: 9,
     },
{
     name: "DAY 4",
     y: 12,
     },
{
     name: "DAY 5",
     y: 10,
     },
{
     name: "DAY 6",
     y: 11,
     },
{
     name: "DAY 7",
     y: 21,
     },
{
     name: "DAY 8",
     y: 7,
     },
{
     name: "DAY 9",
     y: 13,
     },
{
     name: "DAY 10",
     y: 13,
     },
{
     name: "DAY 11",
     y: 5,
     },
{
     name: "DAY 12",
     y: 8,
     },
{
     name: "DAY 13",
     y: 4,
     },
{
     name: "DAY 14",
     y: 6,
     },
{
     name: "DAY 15",
     y: 7,
     },
{
     name: "DAY 16",
     y: 3,
     },
{
     name: "DAY 17",
     y: 8,
     },
{
     name: "DAY 18",
     y: 7,
     },
{
     name: "DAY 19",
     y: 7,
     },
{
     name: "DAY 20",
     y: 2,
     },
{
     name: "DAY 21",
     y: 1,
     },
{
     name: "DAY 22",
     y: 2,
     },
{
     name: "DAY 23",
     y: 6,
     },
{
     name: "DAY 24",
     y: 5,
     },
{
     name: "DAY 25",
     y: 8,
     },
{
     name: "DAY 26",
     y: 8,
     },
{
     name: "DAY 27",
     y: 6,
     },
{
     name: "DAY 28",
     y: 3,
     },
{
     name: "DAY 29",
     y: 5,
     },
{
     name: "DAY 30",
     y: 1,
     },
{
     name: "DAY 31",
     y: 10,
     },
]
},
{
    id: "ID_MARUTI-K-VADCARD06",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 0,
     },
{
     name: "DAY 3",
     y: 0,
     },
{
     name: "DAY 4",
     y: 0,
     },
{
     name: "DAY 5",
     y: 0,
     },
{
     name: "DAY 6",
     y: 0,
     },
{
     name: "DAY 7",
     y: 0,
     },
{
     name: "DAY 8",
     y: 0,
     },
{
     name: "DAY 9",
     y: 0,
     },
{
     name: "DAY 10",
     y: 0,
     },
{
     name: "DAY 11",
     y: 0,
     },
{
     name: "DAY 12",
     y: 0,
     },
{
     name: "DAY 13",
     y: 0,
     },
{
     name: "DAY 14",
     y: 0,
     },
{
     name: "DAY 15",
     y: 0,
     },
{
     name: "DAY 16",
     y: 0,
     },
{
     name: "DAY 17",
     y: 0,
     },
{
     name: "DAY 18",
     y: 0,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 0,
     },
{
     name: "DAY 24",
     y: 0,
     },
{
     name: "DAY 25",
     y: 0,
     },
{
     name: "DAY 26",
     y: 0,
     },
{
     name: "DAY 27",
     y: 0,
     },
{
     name: "DAY 28",
     y: 0,
     },
{
     name: "DAY 29",
     y: 0,
     },
{
     name: "DAY 30",
     y: 0,
     },
{
     name: "DAY 31",
     y: 0,
     },
]
},
{
    id: "ID_MANEK-VADCARD06",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 0,
     },
{
     name: "DAY 3",
     y: 0,
     },
{
     name: "DAY 4",
     y: 0,
     },
{
     name: "DAY 5",
     y: 0,
     },
{
     name: "DAY 6",
     y: 0,
     },
{
     name: "DAY 7",
     y: 0,
     },
{
     name: "DAY 8",
     y: 0,
     },
{
     name: "DAY 9",
     y: 0,
     },
{
     name: "DAY 10",
     y: 0,
     },
{
     name: "DAY 11",
     y: 0,
     },
{
     name: "DAY 12",
     y: 0,
     },
{
     name: "DAY 13",
     y: 0,
     },
{
     name: "DAY 14",
     y: 3,
     },
{
     name: "DAY 15",
     y: 0,
     },
{
     name: "DAY 16",
     y: 0,
     },
{
     name: "DAY 17",
     y: 0,
     },
{
     name: "DAY 18",
     y: 0,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 24",
     y: 0,
     },
{
     name: "DAY 25",
     y: 0,
     },
{
     name: "DAY 26",
     y: 0,
     },
{
     name: "DAY 27",
     y: 0,
     },
{
     name: "DAY 28",
     y: 0,
     },
{
     name: "DAY 29",
     y: 0,
     },
{
     name: "DAY 30",
     y: 0,
     },
{
     name: "DAY 31",
     y: 0,
     },
]
},
{
    id: "ID_KRUTI-VADCARD07",
    data: 
    [
{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 3",
     y: 1,
     },
{
     name: "DAY 4",
     y: 9,
     },
{
     name: "DAY 5",
     y: 5,
     },
{
     name: "DAY 6",
     y: 6,
     },
{
     name: "DAY 7",
     y: 2,
     },
{
     name: "DAY 8",
     y: 3,
     },
{
     name: "DAY 9",
     y: 2,
     },
{
     name: "DAY 10",
     y: 4,
     },
{
     name: "DAY 11",
     y: 4,
     },
{
     name: "DAY 12",
     y: 1,
     },
{
     name: "DAY 13",
     y: 7,
     },
{
     name: "DAY 14",
     y: 2,
     },
{
     name: "DAY 15",
     y: 0,
     },
{
     name: "DAY 16",
     y: 5,
     },
{
     name: "DAY 17",
     y: 1,
     },
{
     name: "DAY 18",
     y: 3,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 1,
     },
{
     name: "DAY 22",
     y: 5,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 24",
     y: 6,
     },
{
     name: "DAY 25",
     y: 5,
     },
{
     name: "DAY 26",
     y: 9,
     },
{
     name: "DAY 27",
     y: 8,
     },
{
     name: "DAY 28",
     y: 1,
     },
{
     name: "DAY 29",
     y: 0,
     },
{
     name: "DAY 30",
     y: 4,
     },
{
     name: "DAY 31",
     y: 4,
     },
]
},
{
    id: "ID_KALAKUNJ-VADCARD06",
    data: 
    [
{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 2",
     y: 4,
     },
{
     name: "DAY 3",
     y: 8,
     },
{
     name: "DAY 4",
     y: 3,
     },
{
     name: "DAY 5",
     y: 6,
     },
{
     name: "DAY 6",
     y: 4,
     },
{
     name: "DAY 7",
     y: 8,
     },
{
     name: "DAY 8",
     y: 4,
     },
{
     name: "DAY 9",
     y: 5,
     },
{
     name: "DAY 10",
     y: 2,
     },
{
     name: "DAY 11",
     y: 7,
     },
{
     name: "DAY 12",
     y: 9,
     },
{
     name: "DAY 13",
     y: 7,
     },
{
     name: "DAY 14",
     y: 4,
     },
{
     name: "DAY 15",
     y: 5,
     },
{
     name: "DAY 16",
     y: 4,
     },
{
     name: "DAY 17",
     y: 4,
     },
{
     name: "DAY 18",
     y: 6,
     },
{
     name: "DAY 19",
     y: 3,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 5,
     },
{
     name: "DAY 24",
     y: 7,
     },
{
     name: "DAY 25",
     y: 5,
     },
{
     name: "DAY 26",
     y: 2,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 4,
     },
{
     name: "DAY 29",
     y: 1,
     },
{
     name: "DAY 30",
     y: 3,
     },
{
     name: "DAY 31",
     y: 2,
     },
]
},
{
    id: "ID_INDSTRLSOC-VADCARD12",
    data: 
    [
{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 3,
     },
{
     name: "DAY 5",
     y: 2,
     },
{
     name: "DAY 6",
     y: 3,
     },
{
     name: "DAY 7",
     y: 6,
     },
{
     name: "DAY 8",
     y: 2,
     },
{
     name: "DAY 9",
     y: 3,
     },
{
     name: "DAY 10",
     y: 4,
     },
{
     name: "DAY 11",
     y: 3,
     },
{
     name: "DAY 12",
     y: 1,
     },
{
     name: "DAY 13",
     y: 5,
     },
{
     name: "DAY 14",
     y: 14,
     },
{
     name: "DAY 15",
     y: 7,
     },
{
     name: "DAY 16",
     y: 6,
     },
{
     name: "DAY 17",
     y: 7,
     },
{
     name: "DAY 18",
     y: 3,
     },
{
     name: "DAY 19",
     y: 2,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 2,
     },
{
     name: "DAY 24",
     y: 1,
     },
{
     name: "DAY 25",
     y: 1,
     },
{
     name: "DAY 26",
     y: 0,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 2,
     },
{
     name: "DAY 29",
     y: 4,
     },
{
     name: "DAY 30",
     y: 1,
     },
{
     name: "DAY 31",
     y: 3,
     },
]
},
{
    id: "ID_HERITAGE-VADCARD09",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 1,
     },
{
     name: "DAY 5",
     y: 4,
     },
{
     name: "DAY 6",
     y: 2,
     },
{
     name: "DAY 7",
     y: 3,
     },
{
     name: "DAY 8",
     y: 2,
     },
{
     name: "DAY 9",
     y: 3,
     },
{
     name: "DAY 10",
     y: 1,
     },
{
     name: "DAY 11",
     y: 3,
     },
{
     name: "DAY 12",
     y: 0,
     },
{
     name: "DAY 13",
     y: 1,
     },
{
     name: "DAY 14",
     y: 4,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 2,
     },
{
     name: "DAY 17",
     y: 2,
     },
{
     name: "DAY 18",
     y: 6,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 2,
     },
{
     name: "DAY 21",
     y: 2,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 24",
     y: 1,
     },
{
     name: "DAY 25",
     y: 1,
     },
{
     name: "DAY 26",
     y: 3,
     },
{
     name: "DAY 27",
     y: 0,
     },
{
     name: "DAY 28",
     y: 3,
     },
{
     name: "DAY 29",
     y: 2,
     },
{
     name: "DAY 30",
     y: 3,
     },
{
     name: "DAY 31",
     y: 1,
     },
]
},
{
    id: "ID_HARKASHI-VADCARD06",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 0,
     },
{
     name: "DAY 3",
     y: 0,
     },
{
     name: "DAY 4",
     y: 0,
     },
{
     name: "DAY 5",
     y: 2,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 7",
     y: 0,
     },
{
     name: "DAY 8",
     y: 0,
     },
{
     name: "DAY 9",
     y: 2,
     },
{
     name: "DAY 10",
     y: 6,
     },
{
     name: "DAY 11",
     y: 4,
     },
{
     name: "DAY 12",
     y: 2,
     },
{
     name: "DAY 13",
     y: 0,
     },
{
     name: "DAY 14",
     y: 1,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 0,
     },
{
     name: "DAY 17",
     y: 0,
     },
{
     name: "DAY 18",
     y: 1,
     },
{
     name: "DAY 19",
     y: 2,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 1,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 3,
     },
{
     name: "DAY 24",
     y: 0,
     },
{
     name: "DAY 25",
     y: 0,
     },
{
     name: "DAY 26",
     y: 1,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 2,
     },
{
     name: "DAY 29",
     y: 1,
     },
{
     name: "DAY 30",
     y: 0,
     },
{
     name: "DAY 31",
     y: 0,
     },
]
},
{
    id: "ID_GOKULESH-VADCARD16",
    data: 
    [
{
     name: "DAY 1",
     y: 3,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 3",
     y: 3,
     },
{
     name: "DAY 4",
     y: 2,
     },
{
     name: "DAY 5",
     y: 2,
     },
{
     name: "DAY 6",
     y: 0,
     },
{
     name: "DAY 7",
     y: 2,
     },
{
     name: "DAY 8",
     y: 0,
     },
{
     name: "DAY 9",
     y: 7,
     },
{
     name: "DAY 10",
     y: 1,
     },
{
     name: "DAY 11",
     y: 1,
     },
{
     name: "DAY 12",
     y: 0,
     },
{
     name: "DAY 13",
     y: 3,
     },
{
     name: "DAY 14",
     y: 2,
     },
{
     name: "DAY 15",
     y: 0,
     },
{
     name: "DAY 16",
     y: 0,
     },
{
     name: "DAY 17",
     y: 1,
     },
{
     name: "DAY 18",
     y: 1,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 1,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 24",
     y: 0,
     },
{
     name: "DAY 25",
     y: 0,
     },
{
     name: "DAY 26",
     y: 1,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 2,
     },
{
     name: "DAY 29",
     y: 1,
     },
{
     name: "DAY 30",
     y: 1,
     },
{
     name: "DAY 31",
     y: 2,
     },
]
},
{
    id: "ID_GIRDHRKRUPA-VADCARD12",
    data: 
    [
{
     name: "DAY 1",
     y: 4,
     },
{
     name: "DAY 2",
     y: 7,
     },
{
     name: "DAY 3",
     y: 3,
     },
{
     name: "DAY 4",
     y: 1,
     },
{
     name: "DAY 5",
     y: 4,
     },
{
     name: "DAY 6",
     y: 6,
     },
{
     name: "DAY 7",
     y: 7,
     },
{
     name: "DAY 8",
     y: 7,
     },
{
     name: "DAY 9",
     y: 2,
     },
{
     name: "DAY 10",
     y: 11,
     },
{
     name: "DAY 11",
     y: 2,
     },
{
     name: "DAY 12",
     y: 5,
     },
{
     name: "DAY 13",
     y: 1,
     },
{
     name: "DAY 14",
     y: 6,
     },
{
     name: "DAY 15",
     y: 4,
     },
{
     name: "DAY 16",
     y: 8,
     },
{
     name: "DAY 17",
     y: 6,
     },
{
     name: "DAY 18",
     y: 3,
     },
{
     name: "DAY 19",
     y: 6,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 2,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 24",
     y: 1,
     },
{
     name: "DAY 25",
     y: 6,
     },
{
     name: "DAY 26",
     y: 5,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 5,
     },
{
     name: "DAY 29",
     y: 3,
     },
{
     name: "DAY 30",
     y: 9,
     },
{
     name: "DAY 31",
     y: 12,
     },
]
},
{
    id: "ID_EME-VADCARD16",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 0,
     },
{
     name: "DAY 3",
     y: 1,
     },
{
     name: "DAY 4",
     y: 0,
     },
{
     name: "DAY 5",
     y: 0,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 7",
     y: 0,
     },
{
     name: "DAY 8",
     y: 0,
     },
{
     name: "DAY 9",
     y: 1,
     },
{
     name: "DAY 10",
     y: 0,
     },
{
     name: "DAY 11",
     y: 0,
     },
{
     name: "DAY 12",
     y: 2,
     },
{
     name: "DAY 13",
     y: 0,
     },
{
     name: "DAY 14",
     y: 4,
     },
{
     name: "DAY 15",
     y: 1,
     },
{
     name: "DAY 16",
     y: 0,
     },
{
     name: "DAY 17",
     y: 0,
     },
{
     name: "DAY 18",
     y: 0,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 1,
     },
{
     name: "DAY 22",
     y: 2,
     },
{
     name: "DAY 23",
     y: 0,
     },
{
     name: "DAY 24",
     y: 1,
     },
{
     name: "DAY 25",
     y: 1,
     },
{
     name: "DAY 26",
     y: 0,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 0,
     },
{
     name: "DAY 29",
     y: 1,
     },
{
     name: "DAY 30",
     y: 0,
     },
{
     name: "DAY 31",
     y: 3,
     },
]
},
{
    id: "ID_DWARKESH-VADCARD06",
    data: 
    [
{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 2",
     y: 3,
     },
{
     name: "DAY 3",
     y: 3,
     },
{
     name: "DAY 4",
     y: 0,
     },
{
     name: "DAY 5",
     y: 0,
     },
{
     name: "DAY 6",
     y: 4,
     },
{
     name: "DAY 7",
     y: 3,
     },
{
     name: "DAY 8",
     y: 3,
     },
{
     name: "DAY 9",
     y: 3,
     },
{
     name: "DAY 10",
     y: 3,
     },
{
     name: "DAY 11",
     y: 1,
     },
{
     name: "DAY 12",
     y: 4,
     },
{
     name: "DAY 13",
     y: 3,
     },
{
     name: "DAY 14",
     y: 2,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 3,
     },
{
     name: "DAY 17",
     y: 2,
     },
{
     name: "DAY 18",
     y: 3,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 2,
     },
{
     name: "DAY 21",
     y: 1,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 24",
     y: 4,
     },
{
     name: "DAY 25",
     y: 2,
     },
{
     name: "DAY 26",
     y: 1,
     },
{
     name: "DAY 27",
     y: 7,
     },
{
     name: "DAY 28",
     y: 3,
     },
{
     name: "DAY 29",
     y: 3,
     },
{
     name: "DAY 30",
     y: 4,
     },
{
     name: "DAY 31",
     y: 0,
     },
]
},
{
    id: "ID_DHANLAXMI-VADCARD06",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 4,
     },
{
     name: "DAY 3",
     y: 3,
     },
{
     name: "DAY 4",
     y: 2,
     },
{
     name: "DAY 5",
     y: 3,
     },
{
     name: "DAY 6",
     y: 3,
     },
{
     name: "DAY 7",
     y: 2,
     },
{
     name: "DAY 8",
     y: 3,
     },
{
     name: "DAY 9",
     y: 3,
     },
{
     name: "DAY 10",
     y: 4,
     },
{
     name: "DAY 11",
     y: 12,
     },
{
     name: "DAY 12",
     y: 14,
     },
{
     name: "DAY 13",
     y: 15,
     },
{
     name: "DAY 14",
     y: 9,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 3,
     },
{
     name: "DAY 17",
     y: 7,
     },
{
     name: "DAY 18",
     y: 14,
     },
{
     name: "DAY 19",
     y: 5,
     },
{
     name: "DAY 20",
     y: 2,
     },
{
     name: "DAY 21",
     y: 2,
     },
{
     name: "DAY 22",
     y: 2,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 24",
     y: 2,
     },
{
     name: "DAY 25",
     y: 3,
     },
{
     name: "DAY 26",
     y: 4,
     },
{
     name: "DAY 27",
     y: 3,
     },
{
     name: "DAY 28",
     y: 3,
     },
{
     name: "DAY 29",
     y: 4,
     },
{
     name: "DAY 30",
     y: 2,
     },
{
     name: "DAY 31",
     y: 5,
     },
]
},
{
    id: "ID_DEEPIKA-VADCARD06",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 3",
     y: 6,
     },
{
     name: "DAY 4",
     y: 4,
     },
{
     name: "DAY 5",
     y: 3,
     },
{
     name: "DAY 6",
     y: 2,
     },
{
     name: "DAY 7",
     y: 6,
     },
{
     name: "DAY 8",
     y: 4,
     },
{
     name: "DAY 9",
     y: 11,
     },
{
     name: "DAY 10",
     y: 3,
     },
{
     name: "DAY 11",
     y: 2,
     },
{
     name: "DAY 12",
     y: 4,
     },
{
     name: "DAY 13",
     y: 3,
     },
{
     name: "DAY 14",
     y: 4,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 3,
     },
{
     name: "DAY 17",
     y: 2,
     },
{
     name: "DAY 18",
     y: 1,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 2,
     },
{
     name: "DAY 22",
     y: 3,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 24",
     y: 1,
     },
{
     name: "DAY 25",
     y: 0,
     },
{
     name: "DAY 26",
     y: 0,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 1,
     },
{
     name: "DAY 29",
     y: 2,
     },
{
     name: "DAY 30",
     y: 1,
     },
{
     name: "DAY 31",
     y: 3,
     },
]
},
{
    id: "ID_CHRISTAN-VADCARD16",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 0,
     },
{
     name: "DAY 3",
     y: 0,
     },
{
     name: "DAY 4",
     y: 0,
     },
{
     name: "DAY 5",
     y: 0,
     },
{
     name: "DAY 6",
     y: 0,
     },
{
     name: "DAY 7",
     y: 0,
     },
{
     name: "DAY 8",
     y: 0,
     },
{
     name: "DAY 9",
     y: 0,
     },
{
     name: "DAY 10",
     y: 0,
     },
{
     name: "DAY 11",
     y: 0,
     },
{
     name: "DAY 12",
     y: 0,
     },
{
     name: "DAY 13",
     y: 0,
     },
{
     name: "DAY 14",
     y: 0,
     },
{
     name: "DAY 15",
     y: 0,
     },
{
     name: "DAY 16",
     y: 0,
     },
{
     name: "DAY 17",
     y: 0,
     },
{
     name: "DAY 18",
     y: 0,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 0,
     },
{
     name: "DAY 24",
     y: 0,
     },
{
     name: "DAY 25",
     y: 0,
     },
{
     name: "DAY 26",
     y: 0,
     },
{
     name: "DAY 27",
     y: 0,
     },
{
     name: "DAY 28",
     y: 0,
     },
{
     name: "DAY 29",
     y: 0,
     },
{
     name: "DAY 30",
     y: 0,
     },
{
     name: "DAY 31",
     y: 0,
     },
]
},
{
    id: "ID_BHAVIN-VADCARD12",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 0,
     },
{
     name: "DAY 3",
     y: 0,
     },
{
     name: "DAY 4",
     y: 0,
     },
{
     name: "DAY 5",
     y: 0,
     },
{
     name: "DAY 6",
     y: 0,
     },
{
     name: "DAY 7",
     y: 0,
     },
{
     name: "DAY 8",
     y: 0,
     },
{
     name: "DAY 9",
     y: 0,
     },
{
     name: "DAY 10",
     y: 0,
     },
{
     name: "DAY 11",
     y: 0,
     },
{
     name: "DAY 12",
     y: 0,
     },
{
     name: "DAY 13",
     y: 0,
     },
{
     name: "DAY 14",
     y: 0,
     },
{
     name: "DAY 15",
     y: 0,
     },
{
     name: "DAY 16",
     y: 0,
     },
{
     name: "DAY 17",
     y: 0,
     },
{
     name: "DAY 18",
     y: 0,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 0,
     },
{
     name: "DAY 24",
     y: 0,
     },
{
     name: "DAY 25",
     y: 0,
     },
{
     name: "DAY 26",
     y: 0,
     },
{
     name: "DAY 27",
     y: 0,
     },
{
     name: "DAY 28",
     y: 0,
     },
{
     name: "DAY 29",
     y: 0,
     },
{
     name: "DAY 30",
     y: 0,
     },
{
     name: "DAY 31",
     y: 0,
     },
]
},
{
    id: "ID_BHAVINTENA-VADCARD12",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 0,
     },
{
     name: "DAY 3",
     y: 0,
     },
{
     name: "DAY 4",
     y: 0,
     },
{
     name: "DAY 5",
     y: 0,
     },
{
     name: "DAY 6",
     y: 0,
     },
{
     name: "DAY 7",
     y: 0,
     },
{
     name: "DAY 8",
     y: 0,
     },
{
     name: "DAY 9",
     y: 0,
     },
{
     name: "DAY 10",
     y: 0,
     },
{
     name: "DAY 11",
     y: 0,
     },
{
     name: "DAY 12",
     y: 0,
     },
{
     name: "DAY 13",
     y: 0,
     },
{
     name: "DAY 14",
     y: 0,
     },
{
     name: "DAY 15",
     y: 0,
     },
{
     name: "DAY 16",
     y: 0,
     },
{
     name: "DAY 17",
     y: 0,
     },
{
     name: "DAY 18",
     y: 0,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 0,
     },
{
     name: "DAY 24",
     y: 0,
     },
{
     name: "DAY 25",
     y: 0,
     },
{
     name: "DAY 26",
     y: 0,
     },
{
     name: "DAY 27",
     y: 0,
     },
{
     name: "DAY 28",
     y: 0,
     },
{
     name: "DAY 29",
     y: 0,
     },
{
     name: "DAY 30",
     y: 0,
     },
{
     name: "DAY 31",
     y: 0,
     },
]
},
{
    id: "ID_ARPAN-VADCARD16",
    data: 
    [
{
     name: "DAY 1",
     y: 6,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 3",
     y: 7,
     },
{
     name: "DAY 4",
     y: 5,
     },
{
     name: "DAY 5",
     y: 5,
     },
{
     name: "DAY 6",
     y: 14,
     },
{
     name: "DAY 7",
     y: 16,
     },
{
     name: "DAY 8",
     y: 14,
     },
{
     name: "DAY 9",
     y: 12,
     },
{
     name: "DAY 10",
     y: 9,
     },
{
     name: "DAY 11",
     y: 14,
     },
{
     name: "DAY 12",
     y: 6,
     },
{
     name: "DAY 13",
     y: 11,
     },
{
     name: "DAY 14",
     y: 17,
     },
{
     name: "DAY 15",
     y: 19,
     },
{
     name: "DAY 16",
     y: 11,
     },
{
     name: "DAY 17",
     y: 8,
     },
{
     name: "DAY 18",
     y: 7,
     },
{
     name: "DAY 19",
     y: 6,
     },
{
     name: "DAY 20",
     y: 3,
     },
{
     name: "DAY 21",
     y: 4,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 3,
     },
{
     name: "DAY 24",
     y: 5,
     },
{
     name: "DAY 25",
     y: 6,
     },
{
     name: "DAY 26",
     y: 9,
     },
{
     name: "DAY 27",
     y: 9,
     },
{
     name: "DAY 28",
     y: 5,
     },
{
     name: "DAY 29",
     y: 4,
     },
{
     name: "DAY 30",
     y: 5,
     },
{
     name: "DAY 31",
     y: 7,
     },
]
},
{
    id: "ID_ANANDSOC-VADCARD12",
    data: 
    [
{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 4,
     },
{
     name: "DAY 3",
     y: 4,
     },
{
     name: "DAY 4",
     y: 4,
     },
{
     name: "DAY 5",
     y: 6,
     },
{
     name: "DAY 6",
     y: 8,
     },
{
     name: "DAY 7",
     y: 4,
     },
{
     name: "DAY 8",
     y: 4,
     },
{
     name: "DAY 9",
     y: 4,
     },
{
     name: "DAY 10",
     y: 8,
     },
{
     name: "DAY 11",
     y: 5,
     },
{
     name: "DAY 12",
     y: 4,
     },
{
     name: "DAY 13",
     y: 5,
     },
{
     name: "DAY 14",
     y: 6,
     },
{
     name: "DAY 15",
     y: 5,
     },
{
     name: "DAY 16",
     y: 4,
     },
{
     name: "DAY 17",
     y: 5,
     },
{
     name: "DAY 18",
     y: 8,
     },
{
     name: "DAY 19",
     y: 4,
     },
{
     name: "DAY 20",
     y: 2,
     },
{
     name: "DAY 21",
     y: 2,
     },
{
     name: "DAY 22",
     y: 3,
     },
{
     name: "DAY 23",
     y: 2,
     },
{
     name: "DAY 24",
     y: 0,
     },
{
     name: "DAY 25",
     y: 3,
     },
{
     name: "DAY 26",
     y: 4,
     },
{
     name: "DAY 27",
     y: 0,
     },
{
     name: "DAY 28",
     y: 3,
     },
{
     name: "DAY 29",
     y: 6,
     },
{
     name: "DAY 30",
     y: 2,
     },
{
     name: "DAY 31",
     y: 1,
     },
]
},
{
    id: "ID_AMIZARA-VADCARD06",
    data: 
    [
{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 3",
     y: 1,
     },
{
     name: "DAY 4",
     y: 3,
     },
{
     name: "DAY 5",
     y: 1,
     },
{
     name: "DAY 6",
     y: 0,
     },
{
     name: "DAY 7",
     y: 0,
     },
{
     name: "DAY 8",
     y: 3,
     },
{
     name: "DAY 9",
     y: 2,
     },
{
     name: "DAY 10",
     y: 2,
     },
{
     name: "DAY 11",
     y: 0,
     },
{
     name: "DAY 12",
     y: 0,
     },
{
     name: "DAY 13",
     y: 2,
     },
{
     name: "DAY 14",
     y: 0,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 5,
     },
{
     name: "DAY 17",
     y: 1,
     },
{
     name: "DAY 18",
     y: 6,
     },
{
     name: "DAY 19",
     y: 2,
     },
{
     name: "DAY 20",
     y: 2,
     },
{
     name: "DAY 21",
     y: 2,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 2,
     },
{
     name: "DAY 24",
     y: 2,
     },
{
     name: "DAY 25",
     y: 6,
     },
{
     name: "DAY 26",
     y: 4,
     },
{
     name: "DAY 27",
     y: 6,
     },
{
     name: "DAY 28",
     y: 7,
     },
{
     name: "DAY 29",
     y: 3,
     },
{
     name: "DAY 30",
     y: 2,
     },
{
     name: "DAY 31",
     y: 2,
     },
]
},
{
    id: "ID_AMITNAGAR-VADCARD06",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 0,
     },
{
     name: "DAY 3",
     y: 0,
     },
{
     name: "DAY 4",
     y: 0,
     },
{
     name: "DAY 5",
     y: 0,
     },
{
     name: "DAY 6",
     y: 0,
     },
{
     name: "DAY 7",
     y: 1,
     },
{
     name: "DAY 8",
     y: 0,
     },
{
     name: "DAY 9",
     y: 0,
     },
{
     name: "DAY 10",
     y: 0,
     },
{
     name: "DAY 11",
     y: 0,
     },
{
     name: "DAY 12",
     y: 0,
     },
{
     name: "DAY 13",
     y: 0,
     },
{
     name: "DAY 14",
     y: 1,
     },
{
     name: "DAY 15",
     y: 0,
     },
{
     name: "DAY 16",
     y: 0,
     },
{
     name: "DAY 17",
     y: 0,
     },
{
     name: "DAY 18",
     y: 0,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 0,
     },
{
     name: "DAY 24",
     y: 0,
     },
{
     name: "DAY 25",
     y: 0,
     },
{
     name: "DAY 26",
     y: 0,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 1,
     },
{
     name: "DAY 29",
     y: 0,
     },
{
     name: "DAY 30",
     y: 1,
     },
{
     name: "DAY 31",
     y: 1,
     },
]
},
{
    id: "ID_ABHILASHA-VADCARD12",
    data: 
    [
{
     name: "DAY 1",
     y: 4,
     },
{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 3",
     y: 3,
     },
{
     name: "DAY 4",
     y: 3,
     },
{
     name: "DAY 5",
     y: 2,
     },
{
     name: "DAY 6",
     y: 2,
     },
{
     name: "DAY 7",
     y: 4,
     },
{
     name: "DAY 8",
     y: 3,
     },
{
     name: "DAY 9",
     y: 5,
     },
{
     name: "DAY 10",
     y: 5,
     },
{
     name: "DAY 11",
     y: 8,
     },
{
     name: "DAY 12",
     y: 2,
     },
{
     name: "DAY 13",
     y: 2,
     },
{
     name: "DAY 14",
     y: 5,
     },
{
     name: "DAY 15",
     y: 3,
     },
{
     name: "DAY 16",
     y: 3,
     },
{
     name: "DAY 17",
     y: 2,
     },
{
     name: "DAY 18",
     y: 5,
     },
{
     name: "DAY 19",
     y: 3,
     },
{
     name: "DAY 20",
     y: 2,
     },
{
     name: "DAY 21",
     y: 1,
     },
{
     name: "DAY 22",
     y: 4,
     },
{
     name: "DAY 23",
     y: 3,
     },
{
     name: "DAY 24",
     y: 3,
     },
{
     name: "DAY 25",
     y: 4,
     },
{
     name: "DAY 26",
     y: 4,
     },
{
     name: "DAY 27",
     y: 3,
     },
{
     name: "DAY 28",
     y: 5,
     },
{
     name: "DAY 29",
     y: 2,
     },
{
     name: "DAY 30",
     y: 3,
     },
{
     name: "DAY 31",
     y: 5,
     },
]
},
{
    id: "ID_WORLD TRADE VAD-VADCARD17",
    data: 
    [
{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 0,
     },
{
     name: "DAY 3",
     y: 3,
     },
{
     name: "DAY 4",
     y: 2,
     },
{
     name: "DAY 5",
     y: 2,
     },
{
     name: "DAY 6",
     y: 4,
     },
{
     name: "DAY 7",
     y: 1,
     },
{
     name: "DAY 8",
     y: 1,
     },
{
     name: "DAY 9",
     y: 1,
     },
{
     name: "DAY 10",
     y: 5,
     },
{
     name: "DAY 11",
     y: 5,
     },
{
     name: "DAY 12",
     y: 5,
     },
{
     name: "DAY 13",
     y: 5,
     },
{
     name: "DAY 14",
     y: 4,
     },
{
     name: "DAY 15",
     y: 4,
     },
{
     name: "DAY 16",
     y: 3,
     },
{
     name: "DAY 17",
     y: 7,
     },
{
     name: "DAY 18",
     y: 6,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 1,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 0,
     },
{
     name: "DAY 24",
     y: 3,
     },
{
     name: "DAY 25",
     y: 4,
     },
{
     name: "DAY 26",
     y: 7,
     },
{
     name: "DAY 27",
     y: 5,
     },
{
     name: "DAY 28",
     y: 2,
     },
{
     name: "DAY 29",
     y: 0,
     },
{
     name: "DAY 30",
     y: 3,
     },
{
     name: "DAY 31",
     y: 6,
     },
]
},
{
    id: "ID_VRUND-VADCARD19",
    data: 
    [
{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 0,
     },
{
     name: "DAY 3",
     y: 0,
     },
{
     name: "DAY 4",
     y: 4,
     },
{
     name: "DAY 5",
     y: 2,
     },
{
     name: "DAY 6",
     y: 4,
     },
{
     name: "DAY 7",
     y: 0,
     },
{
     name: "DAY 8",
     y: 3,
     },
{
     name: "DAY 9",
     y: 6,
     },
{
     name: "DAY 10",
     y: 3,
     },
{
     name: "DAY 11",
     y: 3,
     },
{
     name: "DAY 12",
     y: 6,
     },
{
     name: "DAY 13",
     y: 2,
     },
{
     name: "DAY 14",
     y: 6,
     },
{
     name: "DAY 15",
     y: 3,
     },
{
     name: "DAY 16",
     y: 4,
     },
{
     name: "DAY 17",
     y: 2,
     },
{
     name: "DAY 18",
     y: 2,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 4,
     },
{
     name: "DAY 21",
     y: 3,
     },
{
     name: "DAY 22",
     y: 3,
     },
{
     name: "DAY 23",
     y: 0,
     },
{
     name: "DAY 24",
     y: 2,
     },
{
     name: "DAY 25",
     y: 2,
     },
{
     name: "DAY 26",
     y: 6,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 3,
     },
{
     name: "DAY 29",
     y: 2,
     },
{
     name: "DAY 30",
     y: 1,
     },
{
     name: "DAY 31",
     y: 5,
     },
]
},
{
    id: "ID_VIJAY NAGAR-VADCARD06",
    data: 
    [
{
     name: "DAY 1",
     y: 3,
     },
{
     name: "DAY 2",
     y: 3,
     },
{
     name: "DAY 3",
     y: 3,
     },
{
     name: "DAY 4",
     y: 1,
     },
{
     name: "DAY 5",
     y: 3,
     },
{
     name: "DAY 6",
     y: 3,
     },
{
     name: "DAY 7",
     y: 3,
     },
{
     name: "DAY 8",
     y: 5,
     },
{
     name: "DAY 9",
     y: 6,
     },
{
     name: "DAY 10",
     y: 1,
     },
{
     name: "DAY 11",
     y: 13,
     },
{
     name: "DAY 12",
     y: 9,
     },
{
     name: "DAY 13",
     y: 3,
     },
{
     name: "DAY 14",
     y: 2,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 5,
     },
{
     name: "DAY 17",
     y: 1,
     },
{
     name: "DAY 18",
     y: 7,
     },
{
     name: "DAY 19",
     y: 2,
     },
{
     name: "DAY 20",
     y: 2,
     },
{
     name: "DAY 21",
     y: 2,
     },
{
     name: "DAY 22",
     y: 2,
     },
{
     name: "DAY 23",
     y: 4,
     },
{
     name: "DAY 24",
     y: 2,
     },
{
     name: "DAY 25",
     y: 0,
     },
{
     name: "DAY 26",
     y: 3,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 6,
     },
{
     name: "DAY 29",
     y: 2,
     },
{
     name: "DAY 30",
     y: 3,
     },
{
     name: "DAY 31",
     y: 17,
     },
]
},
{
    id: "ID_VIHAL COMP-VADCARD19",
    data: 
    [
{
     name: "DAY 1",
     y: 4,
     },
{
     name: "DAY 2",
     y: 3,
     },
{
     name: "DAY 3",
     y: 7,
     },
{
     name: "DAY 4",
     y: 10,
     },
{
     name: "DAY 5",
     y: 3,
     },
{
     name: "DAY 6",
     y: 4,
     },
{
     name: "DAY 7",
     y: 2,
     },
{
     name: "DAY 8",
     y: 4,
     },
{
     name: "DAY 9",
     y: 5,
     },
{
     name: "DAY 10",
     y: 3,
     },
{
     name: "DAY 11",
     y: 2,
     },
{
     name: "DAY 12",
     y: 2,
     },
{
     name: "DAY 13",
     y: 3,
     },
{
     name: "DAY 14",
     y: 1,
     },
{
     name: "DAY 15",
     y: 3,
     },
{
     name: "DAY 16",
     y: 5,
     },
{
     name: "DAY 17",
     y: 5,
     },
{
     name: "DAY 18",
     y: 0,
     },
{
     name: "DAY 19",
     y: 2,
     },
{
     name: "DAY 20",
     y: 2,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 2,
     },
{
     name: "DAY 24",
     y: 5,
     },
{
     name: "DAY 25",
     y: 4,
     },
{
     name: "DAY 26",
     y: 16,
     },
{
     name: "DAY 27",
     y: 6,
     },
{
     name: "DAY 28",
     y: 5,
     },
{
     name: "DAY 29",
     y: 2,
     },
{
     name: "DAY 30",
     y: 2,
     },
{
     name: "DAY 31",
     y: 2,
     },
]
},
{
    id: "ID_VAIKUNTH-VADCARD10",
    data: 
    [
{
     name: "DAY 1",
     y: 5,
     },
{
     name: "DAY 2",
     y: 0,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 0,
     },
{
     name: "DAY 5",
     y: 1,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 7",
     y: 3,
     },
{
     name: "DAY 8",
     y: 1,
     },
{
     name: "DAY 9",
     y: 4,
     },
{
     name: "DAY 10",
     y: 1,
     },
{
     name: "DAY 11",
     y: 4,
     },
{
     name: "DAY 12",
     y: 3,
     },
{
     name: "DAY 13",
     y: 1,
     },
{
     name: "DAY 14",
     y: 0,
     },
{
     name: "DAY 15",
     y: 1,
     },
{
     name: "DAY 16",
     y: 3,
     },
{
     name: "DAY 17",
     y: 5,
     },
{
     name: "DAY 18",
     y: 4,
     },
{
     name: "DAY 19",
     y: 10,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 3,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 2,
     },
{
     name: "DAY 24",
     y: 4,
     },
{
     name: "DAY 25",
     y: 1,
     },
{
     name: "DAY 26",
     y: 1,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 5,
     },
{
     name: "DAY 29",
     y: 5,
     },
{
     name: "DAY 30",
     y: 16,
     },
{
     name: "DAY 31",
     y: 4,
     },
]
},
{
    id: "ID_SHANTIFLAT-VADCARD19",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 0,
     },
{
     name: "DAY 3",
     y: 3,
     },
{
     name: "DAY 4",
     y: 1,
     },
{
     name: "DAY 5",
     y: 1,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 7",
     y: 1,
     },
{
     name: "DAY 8",
     y: 2,
     },
{
     name: "DAY 9",
     y: 1,
     },
{
     name: "DAY 10",
     y: 3,
     },
{
     name: "DAY 11",
     y: 2,
     },
{
     name: "DAY 12",
     y: 1,
     },
{
     name: "DAY 13",
     y: 2,
     },
{
     name: "DAY 14",
     y: 1,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 1,
     },
{
     name: "DAY 17",
     y: 1,
     },
{
     name: "DAY 18",
     y: 1,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 2,
     },
{
     name: "DAY 23",
     y: 2,
     },
{
     name: "DAY 24",
     y: 0,
     },
{
     name: "DAY 25",
     y: 1,
     },
{
     name: "DAY 26",
     y: 3,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 3,
     },
{
     name: "DAY 29",
     y: 4,
     },
{
     name: "DAY 30",
     y: 0,
     },
{
     name: "DAY 31",
     y: 1,
     },
]
},
{
    id: "ID_RUPAAPPT-VADCARD08",
    data: 
    [
{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 3",
     y: 0,
     },
{
     name: "DAY 4",
     y: 4,
     },
{
     name: "DAY 5",
     y: 1,
     },
{
     name: "DAY 6",
     y: 0,
     },
{
     name: "DAY 7",
     y: 3,
     },
{
     name: "DAY 8",
     y: 1,
     },
{
     name: "DAY 9",
     y: 2,
     },
{
     name: "DAY 10",
     y: 2,
     },
{
     name: "DAY 11",
     y: 3,
     },
{
     name: "DAY 12",
     y: 2,
     },
{
     name: "DAY 13",
     y: 3,
     },
{
     name: "DAY 14",
     y: 1,
     },
{
     name: "DAY 15",
     y: 0,
     },
{
     name: "DAY 16",
     y: 1,
     },
{
     name: "DAY 17",
     y: 1,
     },
{
     name: "DAY 18",
     y: 0,
     },
{
     name: "DAY 19",
     y: 2,
     },
{
     name: "DAY 20",
     y: 2,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 24",
     y: 0,
     },
{
     name: "DAY 25",
     y: 0,
     },
{
     name: "DAY 26",
     y: 1,
     },
{
     name: "DAY 27",
     y: 0,
     },
{
     name: "DAY 28",
     y: 0,
     },
{
     name: "DAY 29",
     y: 1,
     },
{
     name: "DAY 30",
     y: 2,
     },
{
     name: "DAY 31",
     y: 3,
     },
]
},
{
    id: "ID_RUPAAPPT3-VADCARD08",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 3,
     },
{
     name: "DAY 3",
     y: 1,
     },
{
     name: "DAY 4",
     y: 1,
     },
{
     name: "DAY 5",
     y: 7,
     },
{
     name: "DAY 6",
     y: 10,
     },
{
     name: "DAY 7",
     y: 9,
     },
{
     name: "DAY 8",
     y: 1,
     },
{
     name: "DAY 9",
     y: 2,
     },
{
     name: "DAY 10",
     y: 5,
     },
{
     name: "DAY 11",
     y: 2,
     },
{
     name: "DAY 12",
     y: 6,
     },
{
     name: "DAY 13",
     y: 9,
     },
{
     name: "DAY 14",
     y: 6,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 3,
     },
{
     name: "DAY 17",
     y: 6,
     },
{
     name: "DAY 18",
     y: 6,
     },
{
     name: "DAY 19",
     y: 3,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 3,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 24",
     y: 4,
     },
{
     name: "DAY 25",
     y: 6,
     },
{
     name: "DAY 26",
     y: 1,
     },
{
     name: "DAY 27",
     y: 8,
     },
{
     name: "DAY 28",
     y: 11,
     },
{
     name: "DAY 29",
     y: 3,
     },
{
     name: "DAY 30",
     y: 5,
     },
{
     name: "DAY 31",
     y: 17,
     },
]
},
{
    id: "ID_RUPAAPPT2-VADCARD08",
    data: 
    [
{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 2,
     },
{
     name: "DAY 5",
     y: 3,
     },
{
     name: "DAY 6",
     y: 2,
     },
{
     name: "DAY 7",
     y: 6,
     },
{
     name: "DAY 8",
     y: 0,
     },
{
     name: "DAY 9",
     y: 5,
     },
{
     name: "DAY 10",
     y: 4,
     },
{
     name: "DAY 11",
     y: 2,
     },
{
     name: "DAY 12",
     y: 4,
     },
{
     name: "DAY 13",
     y: 2,
     },
{
     name: "DAY 14",
     y: 6,
     },
{
     name: "DAY 15",
     y: 3,
     },
{
     name: "DAY 16",
     y: 4,
     },
{
     name: "DAY 17",
     y: 3,
     },
{
     name: "DAY 18",
     y: 2,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 2,
     },
{
     name: "DAY 24",
     y: 3,
     },
{
     name: "DAY 25",
     y: 4,
     },
{
     name: "DAY 26",
     y: 2,
     },
{
     name: "DAY 27",
     y: 5,
     },
{
     name: "DAY 28",
     y: 1,
     },
{
     name: "DAY 29",
     y: 0,
     },
{
     name: "DAY 30",
     y: 1,
     },
{
     name: "DAY 31",
     y: 13,
     },
]
},
{
    id: "ID_PUSPAM-VADCARD06",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 0,
     },
{
     name: "DAY 3",
     y: 0,
     },
{
     name: "DAY 4",
     y: 0,
     },
{
     name: "DAY 5",
     y: 0,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 7",
     y: 1,
     },
{
     name: "DAY 8",
     y: 0,
     },
{
     name: "DAY 9",
     y: 1,
     },
{
     name: "DAY 10",
     y: 0,
     },
{
     name: "DAY 11",
     y: 0,
     },
{
     name: "DAY 12",
     y: 0,
     },
{
     name: "DAY 13",
     y: 2,
     },
{
     name: "DAY 14",
     y: 2,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 0,
     },
{
     name: "DAY 17",
     y: 2,
     },
{
     name: "DAY 18",
     y: 2,
     },
{
     name: "DAY 19",
     y: 2,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 2,
     },
{
     name: "DAY 24",
     y: 0,
     },
{
     name: "DAY 25",
     y: 1,
     },
{
     name: "DAY 26",
     y: 2,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 1,
     },
{
     name: "DAY 29",
     y: 2,
     },
{
     name: "DAY 30",
     y: 5,
     },
{
     name: "DAY 31",
     y: 2,
     },
]
},
{
    id: "ID_POONAM COMP-VADCARD19",
    data: 
    [
{
     name: "DAY 1",
     y: 4,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 3",
     y: 0,
     },
{
     name: "DAY 4",
     y: 3,
     },
{
     name: "DAY 5",
     y: 3,
     },
{
     name: "DAY 6",
     y: 0,
     },
{
     name: "DAY 7",
     y: 4,
     },
{
     name: "DAY 8",
     y: 1,
     },
{
     name: "DAY 9",
     y: 4,
     },
{
     name: "DAY 10",
     y: 3,
     },
{
     name: "DAY 11",
     y: 3,
     },
{
     name: "DAY 12",
     y: 3,
     },
{
     name: "DAY 13",
     y: 6,
     },
{
     name: "DAY 14",
     y: 6,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 0,
     },
{
     name: "DAY 17",
     y: 2,
     },
{
     name: "DAY 18",
     y: 0,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 2,
     },
{
     name: "DAY 21",
     y: 2,
     },
{
     name: "DAY 22",
     y: 3,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 24",
     y: 0,
     },
{
     name: "DAY 25",
     y: 2,
     },
{
     name: "DAY 26",
     y: 0,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 2,
     },
{
     name: "DAY 29",
     y: 2,
     },
{
     name: "DAY 30",
     y: 4,
     },
{
     name: "DAY 31",
     y: 4,
     },
]
},
{
    id: "ID_PARADISE-VADCARD17",
    data: 
    [
{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 0,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 0,
     },
{
     name: "DAY 5",
     y: 1,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 7",
     y: 4,
     },
{
     name: "DAY 8",
     y: 2,
     },
{
     name: "DAY 9",
     y: 6,
     },
{
     name: "DAY 10",
     y: 1,
     },
{
     name: "DAY 11",
     y: 2,
     },
{
     name: "DAY 12",
     y: 5,
     },
{
     name: "DAY 13",
     y: 4,
     },
{
     name: "DAY 14",
     y: 6,
     },
{
     name: "DAY 15",
     y: 1,
     },
{
     name: "DAY 16",
     y: 3,
     },
{
     name: "DAY 17",
     y: 6,
     },
{
     name: "DAY 18",
     y: 3,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 24",
     y: 3,
     },
{
     name: "DAY 25",
     y: 7,
     },
{
     name: "DAY 26",
     y: 6,
     },
{
     name: "DAY 27",
     y: 5,
     },
{
     name: "DAY 28",
     y: 3,
     },
{
     name: "DAY 29",
     y: 2,
     },
{
     name: "DAY 30",
     y: 7,
     },
{
     name: "DAY 31",
     y: 4,
     },
]
},
{
    id: "ID_NILAX-VADCARD06",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 3",
     y: 1,
     },
{
     name: "DAY 4",
     y: 1,
     },
{
     name: "DAY 5",
     y: 0,
     },
{
     name: "DAY 6",
     y: 3,
     },
{
     name: "DAY 7",
     y: 0,
     },
{
     name: "DAY 8",
     y: 1,
     },
{
     name: "DAY 9",
     y: 1,
     },
{
     name: "DAY 10",
     y: 4,
     },
{
     name: "DAY 11",
     y: 2,
     },
{
     name: "DAY 12",
     y: 0,
     },
{
     name: "DAY 13",
     y: 4,
     },
{
     name: "DAY 14",
     y: 2,
     },
{
     name: "DAY 15",
     y: 1,
     },
{
     name: "DAY 16",
     y: 2,
     },
{
     name: "DAY 17",
     y: 3,
     },
{
     name: "DAY 18",
     y: 1,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 1,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 2,
     },
{
     name: "DAY 24",
     y: 1,
     },
{
     name: "DAY 25",
     y: 0,
     },
{
     name: "DAY 26",
     y: 1,
     },
{
     name: "DAY 27",
     y: 0,
     },
{
     name: "DAY 28",
     y: 2,
     },
{
     name: "DAY 29",
     y: 0,
     },
{
     name: "DAY 30",
     y: 1,
     },
{
     name: "DAY 31",
     y: 3,
     },
]
},
{
    id: "ID_NAVRANG COM-VADCARD08",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 1,
     },
{
     name: "DAY 5",
     y: 2,
     },
{
     name: "DAY 6",
     y: 7,
     },
{
     name: "DAY 7",
     y: 1,
     },
{
     name: "DAY 8",
     y: 0,
     },
{
     name: "DAY 9",
     y: 0,
     },
{
     name: "DAY 10",
     y: 5,
     },
{
     name: "DAY 11",
     y: 1,
     },
{
     name: "DAY 12",
     y: 0,
     },
{
     name: "DAY 13",
     y: 3,
     },
{
     name: "DAY 14",
     y: 4,
     },
{
     name: "DAY 15",
     y: 0,
     },
{
     name: "DAY 16",
     y: 0,
     },
{
     name: "DAY 17",
     y: 0,
     },
{
     name: "DAY 18",
     y: 3,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 2,
     },
{
     name: "DAY 21",
     y: 1,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 0,
     },
{
     name: "DAY 24",
     y: 1,
     },
{
     name: "DAY 25",
     y: 2,
     },
{
     name: "DAY 26",
     y: 2,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 4,
     },
{
     name: "DAY 29",
     y: 0,
     },
{
     name: "DAY 30",
     y: 0,
     },
{
     name: "DAY 31",
     y: 2,
     },
]
},
{
    id: "ID_NATIBANAGAR-VADCARD10",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 0,
     },
{
     name: "DAY 3",
     y: 0,
     },
{
     name: "DAY 4",
     y: 2,
     },
{
     name: "DAY 5",
     y: 0,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 7",
     y: 0,
     },
{
     name: "DAY 8",
     y: 0,
     },
{
     name: "DAY 9",
     y: 2,
     },
{
     name: "DAY 10",
     y: 1,
     },
{
     name: "DAY 11",
     y: 1,
     },
{
     name: "DAY 12",
     y: 1,
     },
{
     name: "DAY 13",
     y: 1,
     },
{
     name: "DAY 14",
     y: 1,
     },
{
     name: "DAY 15",
     y: 0,
     },
{
     name: "DAY 16",
     y: 2,
     },
{
     name: "DAY 17",
     y: 1,
     },
{
     name: "DAY 18",
     y: 2,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 24",
     y: 4,
     },
{
     name: "DAY 25",
     y: 0,
     },
{
     name: "DAY 26",
     y: 2,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 1,
     },
{
     name: "DAY 29",
     y: 1,
     },
{
     name: "DAY 30",
     y: 0,
     },
{
     name: "DAY 31",
     y: 3,
     },
]
},
{
    id: "ID_KRISHNALILA-VADCARD06",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 2,
     },
{
     name: "DAY 5",
     y: 3,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 7",
     y: 3,
     },
{
     name: "DAY 8",
     y: 0,
     },
{
     name: "DAY 9",
     y: 1,
     },
{
     name: "DAY 10",
     y: 0,
     },
{
     name: "DAY 11",
     y: 4,
     },
{
     name: "DAY 12",
     y: 5,
     },
{
     name: "DAY 13",
     y: 8,
     },
{
     name: "DAY 14",
     y: 10,
     },
{
     name: "DAY 15",
     y: 6,
     },
{
     name: "DAY 16",
     y: 4,
     },
{
     name: "DAY 17",
     y: 1,
     },
{
     name: "DAY 18",
     y: 6,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 24",
     y: 1,
     },
{
     name: "DAY 25",
     y: 0,
     },
{
     name: "DAY 26",
     y: 1,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 3,
     },
{
     name: "DAY 29",
     y: 0,
     },
{
     name: "DAY 30",
     y: 0,
     },
{
     name: "DAY 31",
     y: 3,
     },
]
},
{
    id: "ID_KALPATRU-VADCARD08",
    data: 
    [
{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 2",
     y: 0,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 5,
     },
{
     name: "DAY 5",
     y: 3,
     },
{
     name: "DAY 6",
     y: 8,
     },
{
     name: "DAY 7",
     y: 2,
     },
{
     name: "DAY 8",
     y: 3,
     },
{
     name: "DAY 9",
     y: 4,
     },
{
     name: "DAY 10",
     y: 4,
     },
{
     name: "DAY 11",
     y: 2,
     },
{
     name: "DAY 12",
     y: 5,
     },
{
     name: "DAY 13",
     y: 3,
     },
{
     name: "DAY 14",
     y: 4,
     },
{
     name: "DAY 15",
     y: 1,
     },
{
     name: "DAY 16",
     y: 4,
     },
{
     name: "DAY 17",
     y: 5,
     },
{
     name: "DAY 18",
     y: 13,
     },
{
     name: "DAY 19",
     y: 6,
     },
{
     name: "DAY 20",
     y: 2,
     },
{
     name: "DAY 21",
     y: 1,
     },
{
     name: "DAY 22",
     y: 2,
     },
{
     name: "DAY 23",
     y: 0,
     },
{
     name: "DAY 24",
     y: 5,
     },
{
     name: "DAY 25",
     y: 10,
     },
{
     name: "DAY 26",
     y: 4,
     },
{
     name: "DAY 27",
     y: 4,
     },
{
     name: "DAY 28",
     y: 3,
     },
{
     name: "DAY 29",
     y: 3,
     },
{
     name: "DAY 30",
     y: 8,
     },
{
     name: "DAY 31",
     y: 11,
     },
]
},
{
    id: "ID_KALADARSHAN-VADCARD19",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 3",
     y: 1,
     },
{
     name: "DAY 4",
     y: 1,
     },
{
     name: "DAY 5",
     y: 2,
     },
{
     name: "DAY 6",
     y: 2,
     },
{
     name: "DAY 7",
     y: 2,
     },
{
     name: "DAY 8",
     y: 2,
     },
{
     name: "DAY 9",
     y: 2,
     },
{
     name: "DAY 10",
     y: 2,
     },
{
     name: "DAY 11",
     y: 3,
     },
{
     name: "DAY 12",
     y: 5,
     },
{
     name: "DAY 13",
     y: 1,
     },
{
     name: "DAY 14",
     y: 2,
     },
{
     name: "DAY 15",
     y: 3,
     },
{
     name: "DAY 16",
     y: 2,
     },
{
     name: "DAY 17",
     y: 1,
     },
{
     name: "DAY 18",
     y: 1,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 3,
     },
{
     name: "DAY 24",
     y: 1,
     },
{
     name: "DAY 25",
     y: 0,
     },
{
     name: "DAY 26",
     y: 6,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 2,
     },
{
     name: "DAY 29",
     y: 0,
     },
{
     name: "DAY 30",
     y: 1,
     },
{
     name: "DAY 31",
     y: 2,
     },
]
},
{
    id: "ID_INDRAPURI-VADCARD06",
    data: 
    [
{
     name: "DAY 1",
     y: 3,
     },
{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 3",
     y: 1,
     },
{
     name: "DAY 4",
     y: 2,
     },
{
     name: "DAY 5",
     y: 2,
     },
{
     name: "DAY 6",
     y: 0,
     },
{
     name: "DAY 7",
     y: 1,
     },
{
     name: "DAY 8",
     y: 0,
     },
{
     name: "DAY 9",
     y: 1,
     },
{
     name: "DAY 10",
     y: 0,
     },
{
     name: "DAY 11",
     y: 5,
     },
{
     name: "DAY 12",
     y: 2,
     },
{
     name: "DAY 13",
     y: 1,
     },
{
     name: "DAY 14",
     y: 2,
     },
{
     name: "DAY 15",
     y: 0,
     },
{
     name: "DAY 16",
     y: 1,
     },
{
     name: "DAY 17",
     y: 2,
     },
{
     name: "DAY 18",
     y: 2,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 2,
     },
{
     name: "DAY 24",
     y: 2,
     },
{
     name: "DAY 25",
     y: 0,
     },
{
     name: "DAY 26",
     y: 3,
     },
{
     name: "DAY 27",
     y: 0,
     },
{
     name: "DAY 28",
     y: 5,
     },
{
     name: "DAY 29",
     y: 1,
     },
{
     name: "DAY 30",
     y: 2,
     },
{
     name: "DAY 31",
     y: 5,
     },
]
},
{
    id: "ID_HIRAVANTI-VADCARD10",
    data: 
    [
{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 3",
     y: 1,
     },
{
     name: "DAY 4",
     y: 7,
     },
{
     name: "DAY 5",
     y: 1,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 7",
     y: 0,
     },
{
     name: "DAY 8",
     y: 3,
     },
{
     name: "DAY 9",
     y: 1,
     },
{
     name: "DAY 10",
     y: 7,
     },
{
     name: "DAY 11",
     y: 2,
     },
{
     name: "DAY 12",
     y: 1,
     },
{
     name: "DAY 13",
     y: 3,
     },
{
     name: "DAY 14",
     y: 2,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 2,
     },
{
     name: "DAY 17",
     y: 1,
     },
{
     name: "DAY 18",
     y: 2,
     },
{
     name: "DAY 19",
     y: 2,
     },
{
     name: "DAY 20",
     y: 2,
     },
{
     name: "DAY 21",
     y: 2,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 0,
     },
{
     name: "DAY 24",
     y: 0,
     },
{
     name: "DAY 25",
     y: 1,
     },
{
     name: "DAY 26",
     y: 0,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 1,
     },
{
     name: "DAY 29",
     y: 1,
     },
{
     name: "DAY 30",
     y: 1,
     },
{
     name: "DAY 31",
     y: 2,
     },
]
},
{
    id: "ID_GOKHLEAPPT-VADCARD08",
    data: 
    [
{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 2,
     },
{
     name: "DAY 5",
     y: 7,
     },
{
     name: "DAY 6",
     y: 5,
     },
{
     name: "DAY 7",
     y: 4,
     },
{
     name: "DAY 8",
     y: 2,
     },
{
     name: "DAY 9",
     y: 2,
     },
{
     name: "DAY 10",
     y: 0,
     },
{
     name: "DAY 11",
     y: 2,
     },
{
     name: "DAY 12",
     y: 1,
     },
{
     name: "DAY 13",
     y: 1,
     },
{
     name: "DAY 14",
     y: 6,
     },
{
     name: "DAY 15",
     y: 3,
     },
{
     name: "DAY 16",
     y: 3,
     },
{
     name: "DAY 17",
     y: 5,
     },
{
     name: "DAY 18",
     y: 3,
     },
{
     name: "DAY 19",
     y: 3,
     },
{
     name: "DAY 20",
     y: 2,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 3,
     },
{
     name: "DAY 23",
     y: 0,
     },
{
     name: "DAY 24",
     y: 1,
     },
{
     name: "DAY 25",
     y: 3,
     },
{
     name: "DAY 26",
     y: 3,
     },
{
     name: "DAY 27",
     y: 9,
     },
{
     name: "DAY 28",
     y: 3,
     },
{
     name: "DAY 29",
     y: 5,
     },
{
     name: "DAY 30",
     y: 4,
     },
{
     name: "DAY 31",
     y: 6,
     },
]
},
{
    id: "ID_GAURINANDAN-VADCARD19",
    data: 
    [
{
     name: "DAY 1",
     y: 3,
     },
{
     name: "DAY 2",
     y: 4,
     },
{
     name: "DAY 3",
     y: 5,
     },
{
     name: "DAY 4",
     y: 2,
     },
{
     name: "DAY 5",
     y: 4,
     },
{
     name: "DAY 6",
     y: 4,
     },
{
     name: "DAY 7",
     y: 4,
     },
{
     name: "DAY 8",
     y: 7,
     },
{
     name: "DAY 9",
     y: 10,
     },
{
     name: "DAY 10",
     y: 7,
     },
{
     name: "DAY 11",
     y: 7,
     },
{
     name: "DAY 12",
     y: 6,
     },
{
     name: "DAY 13",
     y: 2,
     },
{
     name: "DAY 14",
     y: 2,
     },
{
     name: "DAY 15",
     y: 8,
     },
{
     name: "DAY 16",
     y: 4,
     },
{
     name: "DAY 17",
     y: 5,
     },
{
     name: "DAY 18",
     y: 4,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 5,
     },
{
     name: "DAY 21",
     y: 2,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 5,
     },
{
     name: "DAY 24",
     y: 3,
     },
{
     name: "DAY 25",
     y: 3,
     },
{
     name: "DAY 26",
     y: 8,
     },
{
     name: "DAY 27",
     y: 7,
     },
{
     name: "DAY 28",
     y: 8,
     },
{
     name: "DAY 29",
     y: 11,
     },
{
     name: "DAY 30",
     y: 3,
     },
{
     name: "DAY 31",
     y: 8,
     },
]
},
{
    id: "ID_CHANDRANGR-VADCARD19",
    data: 
    [
{
     name: "DAY 1",
     y: 5,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 3",
     y: 6,
     },
{
     name: "DAY 4",
     y: 2,
     },
{
     name: "DAY 5",
     y: 4,
     },
{
     name: "DAY 6",
     y: 5,
     },
{
     name: "DAY 7",
     y: 16,
     },
{
     name: "DAY 8",
     y: 9,
     },
{
     name: "DAY 9",
     y: 7,
     },
{
     name: "DAY 10",
     y: 6,
     },
{
     name: "DAY 11",
     y: 19,
     },
{
     name: "DAY 12",
     y: 18,
     },
{
     name: "DAY 13",
     y: 6,
     },
{
     name: "DAY 14",
     y: 9,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 2,
     },
{
     name: "DAY 17",
     y: 5,
     },
{
     name: "DAY 18",
     y: 14,
     },
{
     name: "DAY 19",
     y: 6,
     },
{
     name: "DAY 20",
     y: 2,
     },
{
     name: "DAY 21",
     y: 3,
     },
{
     name: "DAY 22",
     y: 3,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 24",
     y: 4,
     },
{
     name: "DAY 25",
     y: 3,
     },
{
     name: "DAY 26",
     y: 4,
     },
{
     name: "DAY 27",
     y: 3,
     },
{
     name: "DAY 28",
     y: 1,
     },
{
     name: "DAY 29",
     y: 1,
     },
{
     name: "DAY 30",
     y: 2,
     },
{
     name: "DAY 31",
     y: 6,
     },
]
},
{
    id: "ID_AMIDARSHAN-VADCARD19",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 0,
     },
{
     name: "DAY 3",
     y: 3,
     },
{
     name: "DAY 4",
     y: 0,
     },
{
     name: "DAY 5",
     y: 5,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 7",
     y: 0,
     },
{
     name: "DAY 8",
     y: 2,
     },
{
     name: "DAY 9",
     y: 0,
     },
{
     name: "DAY 10",
     y: 3,
     },
{
     name: "DAY 11",
     y: 1,
     },
{
     name: "DAY 12",
     y: 1,
     },
{
     name: "DAY 13",
     y: 0,
     },
{
     name: "DAY 14",
     y: 2,
     },
{
     name: "DAY 15",
     y: 1,
     },
{
     name: "DAY 16",
     y: 2,
     },
{
     name: "DAY 17",
     y: 3,
     },
{
     name: "DAY 18",
     y: 3,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 24",
     y: 3,
     },
{
     name: "DAY 25",
     y: 4,
     },
{
     name: "DAY 26",
     y: 3,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 2,
     },
{
     name: "DAY 29",
     y: 3,
     },
{
     name: "DAY 30",
     y: 3,
     },
{
     name: "DAY 31",
     y: 3,
     },
]
},
{
    id: "ID_AMBIKA-VADCARD10",
    data: 
    [
{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 3,
     },
{
     name: "DAY 3",
     y: 4,
     },
{
     name: "DAY 4",
     y: 4,
     },
{
     name: "DAY 5",
     y: 2,
     },
{
     name: "DAY 6",
     y: 0,
     },
{
     name: "DAY 7",
     y: 3,
     },
{
     name: "DAY 8",
     y: 3,
     },
{
     name: "DAY 9",
     y: 4,
     },
{
     name: "DAY 10",
     y: 1,
     },
{
     name: "DAY 11",
     y: 4,
     },
{
     name: "DAY 12",
     y: 2,
     },
{
     name: "DAY 13",
     y: 2,
     },
{
     name: "DAY 14",
     y: 3,
     },
{
     name: "DAY 15",
     y: 1,
     },
{
     name: "DAY 16",
     y: 7,
     },
{
     name: "DAY 17",
     y: 0,
     },
{
     name: "DAY 18",
     y: 4,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 24",
     y: 1,
     },
{
     name: "DAY 25",
     y: 5,
     },
{
     name: "DAY 26",
     y: 3,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 1,
     },
{
     name: "DAY 29",
     y: 3,
     },
{
     name: "DAY 30",
     y: 3,
     },
{
     name: "DAY 31",
     y: 2,
     },
]
},
{
    id: "ID_TULSIAPPT-VADCARD02",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 4,
     },
{
     name: "DAY 3",
     y: 3,
     },
{
     name: "DAY 4",
     y: 4,
     },
{
     name: "DAY 5",
     y: 5,
     },
{
     name: "DAY 6",
     y: 5,
     },
{
     name: "DAY 7",
     y: 2,
     },
{
     name: "DAY 8",
     y: 1,
     },
{
     name: "DAY 9",
     y: 3,
     },
{
     name: "DAY 10",
     y: 3,
     },
{
     name: "DAY 11",
     y: 3,
     },
{
     name: "DAY 12",
     y: 1,
     },
{
     name: "DAY 13",
     y: 5,
     },
{
     name: "DAY 14",
     y: 2,
     },
{
     name: "DAY 15",
     y: 0,
     },
{
     name: "DAY 16",
     y: 1,
     },
{
     name: "DAY 17",
     y: 1,
     },
{
     name: "DAY 18",
     y: 4,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 2,
     },
{
     name: "DAY 21",
     y: 2,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 24",
     y: 1,
     },
{
     name: "DAY 25",
     y: 1,
     },
{
     name: "DAY 26",
     y: 2,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 7,
     },
{
     name: "DAY 29",
     y: 0,
     },
{
     name: "DAY 30",
     y: 4,
     },
{
     name: "DAY 31",
     y: 3,
     },
]
},
{
    id: "ID_TRIVENI-VADCARD02",
    data: 
    [
{
     name: "DAY 1",
     y: 3,
     },
{
     name: "DAY 2",
     y: 6,
     },
{
     name: "DAY 3",
     y: 5,
     },
{
     name: "DAY 4",
     y: 4,
     },
{
     name: "DAY 5",
     y: 3,
     },
{
     name: "DAY 6",
     y: 3,
     },
{
     name: "DAY 7",
     y: 4,
     },
{
     name: "DAY 8",
     y: 2,
     },
{
     name: "DAY 9",
     y: 5,
     },
{
     name: "DAY 10",
     y: 6,
     },
{
     name: "DAY 11",
     y: 4,
     },
{
     name: "DAY 12",
     y: 3,
     },
{
     name: "DAY 13",
     y: 4,
     },
{
     name: "DAY 14",
     y: 3,
     },
{
     name: "DAY 15",
     y: 4,
     },
{
     name: "DAY 16",
     y: 5,
     },
{
     name: "DAY 17",
     y: 4,
     },
{
     name: "DAY 18",
     y: 2,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 3,
     },
{
     name: "DAY 24",
     y: 4,
     },
{
     name: "DAY 25",
     y: 5,
     },
{
     name: "DAY 26",
     y: 2,
     },
{
     name: "DAY 27",
     y: 3,
     },
{
     name: "DAY 28",
     y: 6,
     },
{
     name: "DAY 29",
     y: 1,
     },
{
     name: "DAY 30",
     y: 4,
     },
{
     name: "DAY 31",
     y: 8,
     },
]
},
{
    id: "ID_SUNCITY-VADCARD20",
    data: 
    [
{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 3",
     y: 0,
     },
{
     name: "DAY 4",
     y: 1,
     },
{
     name: "DAY 5",
     y: 0,
     },
{
     name: "DAY 6",
     y: 0,
     },
{
     name: "DAY 7",
     y: 1,
     },
{
     name: "DAY 8",
     y: 0,
     },
{
     name: "DAY 9",
     y: 1,
     },
{
     name: "DAY 10",
     y: 1,
     },
{
     name: "DAY 11",
     y: 1,
     },
{
     name: "DAY 12",
     y: 1,
     },
{
     name: "DAY 13",
     y: 0,
     },
{
     name: "DAY 14",
     y: 2,
     },
{
     name: "DAY 15",
     y: 0,
     },
{
     name: "DAY 16",
     y: 2,
     },
{
     name: "DAY 17",
     y: 0,
     },
{
     name: "DAY 18",
     y: 0,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 24",
     y: 1,
     },
{
     name: "DAY 25",
     y: 0,
     },
{
     name: "DAY 26",
     y: 1,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 1,
     },
{
     name: "DAY 29",
     y: 1,
     },
{
     name: "DAY 30",
     y: 0,
     },
{
     name: "DAY 31",
     y: 0,
     },
]
},
{
    id: "ID_SILVER ROCK-VADCARD02",
    data: 
    [
{
     name: "DAY 1",
     y: 3,
     },
{
     name: "DAY 2",
     y: 4,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 8,
     },
{
     name: "DAY 5",
     y: 8,
     },
{
     name: "DAY 6",
     y: 7,
     },
{
     name: "DAY 7",
     y: 3,
     },
{
     name: "DAY 8",
     y: 6,
     },
{
     name: "DAY 9",
     y: 7,
     },
{
     name: "DAY 10",
     y: 6,
     },
{
     name: "DAY 11",
     y: 10,
     },
{
     name: "DAY 12",
     y: 6,
     },
{
     name: "DAY 13",
     y: 10,
     },
{
     name: "DAY 14",
     y: 14,
     },
{
     name: "DAY 15",
     y: 4,
     },
{
     name: "DAY 16",
     y: 6,
     },
{
     name: "DAY 17",
     y: 4,
     },
{
     name: "DAY 18",
     y: 10,
     },
{
     name: "DAY 19",
     y: 4,
     },
{
     name: "DAY 20",
     y: 3,
     },
{
     name: "DAY 21",
     y: 1,
     },
{
     name: "DAY 22",
     y: 3,
     },
{
     name: "DAY 23",
     y: 5,
     },
{
     name: "DAY 24",
     y: 8,
     },
{
     name: "DAY 25",
     y: 4,
     },
{
     name: "DAY 26",
     y: 3,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 2,
     },
{
     name: "DAY 29",
     y: 2,
     },
{
     name: "DAY 30",
     y: 10,
     },
{
     name: "DAY 31",
     y: 7,
     },
]
},
{
    id: "ID_SHREEJI-VADCARD02",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 3",
     y: 6,
     },
{
     name: "DAY 4",
     y: 7,
     },
{
     name: "DAY 5",
     y: 3,
     },
{
     name: "DAY 6",
     y: 5,
     },
{
     name: "DAY 7",
     y: 3,
     },
{
     name: "DAY 8",
     y: 0,
     },
{
     name: "DAY 9",
     y: 6,
     },
{
     name: "DAY 10",
     y: 2,
     },
{
     name: "DAY 11",
     y: 1,
     },
{
     name: "DAY 12",
     y: 2,
     },
{
     name: "DAY 13",
     y: 6,
     },
{
     name: "DAY 14",
     y: 8,
     },
{
     name: "DAY 15",
     y: 3,
     },
{
     name: "DAY 16",
     y: 7,
     },
{
     name: "DAY 17",
     y: 1,
     },
{
     name: "DAY 18",
     y: 9,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 1,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 3,
     },
{
     name: "DAY 24",
     y: 2,
     },
{
     name: "DAY 25",
     y: 3,
     },
{
     name: "DAY 26",
     y: 2,
     },
{
     name: "DAY 27",
     y: 5,
     },
{
     name: "DAY 28",
     y: 11,
     },
{
     name: "DAY 29",
     y: 2,
     },
{
     name: "DAY 30",
     y: 5,
     },
{
     name: "DAY 31",
     y: 12,
     },
]
},
{
    id: "ID_SHIVSUNDAR-VADCARD02",
    data: 
    [
{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 2",
     y: 3,
     },
{
     name: "DAY 3",
     y: 5,
     },
{
     name: "DAY 4",
     y: 3,
     },
{
     name: "DAY 5",
     y: 3,
     },
{
     name: "DAY 6",
     y: 3,
     },
{
     name: "DAY 7",
     y: 1,
     },
{
     name: "DAY 8",
     y: 5,
     },
{
     name: "DAY 9",
     y: 5,
     },
{
     name: "DAY 10",
     y: 3,
     },
{
     name: "DAY 11",
     y: 4,
     },
{
     name: "DAY 12",
     y: 4,
     },
{
     name: "DAY 13",
     y: 8,
     },
{
     name: "DAY 14",
     y: 6,
     },
{
     name: "DAY 15",
     y: 3,
     },
{
     name: "DAY 16",
     y: 11,
     },
{
     name: "DAY 17",
     y: 5,
     },
{
     name: "DAY 18",
     y: 2,
     },
{
     name: "DAY 19",
     y: 3,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 3,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 5,
     },
{
     name: "DAY 24",
     y: 3,
     },
{
     name: "DAY 25",
     y: 2,
     },
{
     name: "DAY 26",
     y: 2,
     },
{
     name: "DAY 27",
     y: 5,
     },
{
     name: "DAY 28",
     y: 5,
     },
{
     name: "DAY 29",
     y: 2,
     },
{
     name: "DAY 30",
     y: 3,
     },
{
     name: "DAY 31",
     y: 5,
     },
]
},
{
    id: "ID_SHAMRUDHI-VADCARD02",
    data: 
    [
{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 3",
     y: 3,
     },
{
     name: "DAY 4",
     y: 2,
     },
{
     name: "DAY 5",
     y: 1,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 7",
     y: 3,
     },
{
     name: "DAY 8",
     y: 1,
     },
{
     name: "DAY 9",
     y: 3,
     },
{
     name: "DAY 10",
     y: 2,
     },
{
     name: "DAY 11",
     y: 7,
     },
{
     name: "DAY 12",
     y: 3,
     },
{
     name: "DAY 13",
     y: 3,
     },
{
     name: "DAY 14",
     y: 2,
     },
{
     name: "DAY 15",
     y: 0,
     },
{
     name: "DAY 16",
     y: 2,
     },
{
     name: "DAY 17",
     y: 0,
     },
{
     name: "DAY 18",
     y: 0,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 5,
     },
{
     name: "DAY 24",
     y: 1,
     },
{
     name: "DAY 25",
     y: 3,
     },
{
     name: "DAY 26",
     y: 2,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 1,
     },
{
     name: "DAY 29",
     y: 2,
     },
{
     name: "DAY 30",
     y: 2,
     },
{
     name: "DAY 31",
     y: 3,
     },
]
},
{
    id: "ID_SAIDARSHAN-VADCARD02",
    data: 
    [
{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 0,
     },
{
     name: "DAY 3",
     y: 0,
     },
{
     name: "DAY 4",
     y: 0,
     },
{
     name: "DAY 5",
     y: 2,
     },
{
     name: "DAY 6",
     y: 0,
     },
{
     name: "DAY 7",
     y: 1,
     },
{
     name: "DAY 8",
     y: 4,
     },
{
     name: "DAY 9",
     y: 1,
     },
{
     name: "DAY 10",
     y: 1,
     },
{
     name: "DAY 11",
     y: 1,
     },
{
     name: "DAY 12",
     y: 0,
     },
{
     name: "DAY 13",
     y: 1,
     },
{
     name: "DAY 14",
     y: 9,
     },
{
     name: "DAY 15",
     y: 1,
     },
{
     name: "DAY 16",
     y: 2,
     },
{
     name: "DAY 17",
     y: 1,
     },
{
     name: "DAY 18",
     y: 1,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 2,
     },
{
     name: "DAY 24",
     y: 5,
     },
{
     name: "DAY 25",
     y: 4,
     },
{
     name: "DAY 26",
     y: 2,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 3,
     },
{
     name: "DAY 29",
     y: 1,
     },
{
     name: "DAY 30",
     y: 3,
     },
{
     name: "DAY 31",
     y: 1,
     },
]
},
{
    id: "ID_PARTHAVNEW-VADCARD02",
    data: 
    [
{
     name: "DAY 1",
     y: 3,
     },
{
     name: "DAY 2",
     y: 0,
     },
{
     name: "DAY 3",
     y: 0,
     },
{
     name: "DAY 4",
     y: 2,
     },
{
     name: "DAY 5",
     y: 0,
     },
{
     name: "DAY 6",
     y: 2,
     },
{
     name: "DAY 7",
     y: 2,
     },
{
     name: "DAY 8",
     y: 2,
     },
{
     name: "DAY 9",
     y: 3,
     },
{
     name: "DAY 10",
     y: 5,
     },
{
     name: "DAY 11",
     y: 5,
     },
{
     name: "DAY 12",
     y: 4,
     },
{
     name: "DAY 13",
     y: 3,
     },
{
     name: "DAY 14",
     y: 5,
     },
{
     name: "DAY 15",
     y: 0,
     },
{
     name: "DAY 16",
     y: 6,
     },
{
     name: "DAY 17",
     y: 2,
     },
{
     name: "DAY 18",
     y: 8,
     },
{
     name: "DAY 19",
     y: 4,
     },
{
     name: "DAY 20",
     y: 2,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 2,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 24",
     y: 1,
     },
{
     name: "DAY 25",
     y: 4,
     },
{
     name: "DAY 26",
     y: 4,
     },
{
     name: "DAY 27",
     y: 3,
     },
{
     name: "DAY 28",
     y: 0,
     },
{
     name: "DAY 29",
     y: 2,
     },
{
     name: "DAY 30",
     y: 4,
     },
{
     name: "DAY 31",
     y: 1,
     },
]
},
{
    id: "ID_NITYANAND-VADCARD02",
    data: 
    [
{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 3",
     y: 0,
     },
{
     name: "DAY 4",
     y: 2,
     },
{
     name: "DAY 5",
     y: 1,
     },
{
     name: "DAY 6",
     y: 2,
     },
{
     name: "DAY 7",
     y: 2,
     },
{
     name: "DAY 8",
     y: 1,
     },
{
     name: "DAY 9",
     y: 1,
     },
{
     name: "DAY 10",
     y: 9,
     },
{
     name: "DAY 11",
     y: 2,
     },
{
     name: "DAY 12",
     y: 5,
     },
{
     name: "DAY 13",
     y: 4,
     },
{
     name: "DAY 14",
     y: 1,
     },
{
     name: "DAY 15",
     y: 1,
     },
{
     name: "DAY 16",
     y: 3,
     },
{
     name: "DAY 17",
     y: 2,
     },
{
     name: "DAY 18",
     y: 4,
     },
{
     name: "DAY 19",
     y: 3,
     },
{
     name: "DAY 20",
     y: 2,
     },
{
     name: "DAY 21",
     y: 2,
     },
{
     name: "DAY 22",
     y: 5,
     },
{
     name: "DAY 23",
     y: 6,
     },
{
     name: "DAY 24",
     y: 1,
     },
{
     name: "DAY 25",
     y: 3,
     },
{
     name: "DAY 26",
     y: 3,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 0,
     },
{
     name: "DAY 29",
     y: 1,
     },
{
     name: "DAY 30",
     y: 5,
     },
{
     name: "DAY 31",
     y: 1,
     },
]
},
{
    id: "ID_MANJALPUR-VADCARD02",
    data: 
    [
{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 3",
     y: 0,
     },
{
     name: "DAY 4",
     y: 0,
     },
{
     name: "DAY 5",
     y: 1,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 7",
     y: 1,
     },
{
     name: "DAY 8",
     y: 0,
     },
{
     name: "DAY 9",
     y: 4,
     },
{
     name: "DAY 10",
     y: 1,
     },
{
     name: "DAY 11",
     y: 2,
     },
{
     name: "DAY 12",
     y: 1,
     },
{
     name: "DAY 13",
     y: 2,
     },
{
     name: "DAY 14",
     y: 1,
     },
{
     name: "DAY 15",
     y: 1,
     },
{
     name: "DAY 16",
     y: 2,
     },
{
     name: "DAY 17",
     y: 1,
     },
{
     name: "DAY 18",
     y: 1,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 4,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 2,
     },
{
     name: "DAY 24",
     y: 0,
     },
{
     name: "DAY 25",
     y: 1,
     },
{
     name: "DAY 26",
     y: 2,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 1,
     },
{
     name: "DAY 29",
     y: 1,
     },
{
     name: "DAY 30",
     y: 1,
     },
{
     name: "DAY 31",
     y: 1,
     },
]
},
{
    id: "ID_MANIVILLA-VADCARD02",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 4,
     },
{
     name: "DAY 3",
     y: 5,
     },
{
     name: "DAY 4",
     y: 7,
     },
{
     name: "DAY 5",
     y: 1,
     },
{
     name: "DAY 6",
     y: 8,
     },
{
     name: "DAY 7",
     y: 10,
     },
{
     name: "DAY 8",
     y: 0,
     },
{
     name: "DAY 9",
     y: 2,
     },
{
     name: "DAY 10",
     y: 1,
     },
{
     name: "DAY 11",
     y: 0,
     },
{
     name: "DAY 12",
     y: 10,
     },
{
     name: "DAY 13",
     y: 9,
     },
{
     name: "DAY 14",
     y: 4,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 3,
     },
{
     name: "DAY 17",
     y: 4,
     },
{
     name: "DAY 18",
     y: 5,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 24",
     y: 0,
     },
{
     name: "DAY 25",
     y: 3,
     },
{
     name: "DAY 26",
     y: 3,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 4,
     },
{
     name: "DAY 29",
     y: 4,
     },
{
     name: "DAY 30",
     y: 4,
     },
{
     name: "DAY 31",
     y: 4,
     },
]
},
{
    id: "ID_LXMINARYN-VADCARD02",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 3",
     y: 3,
     },
{
     name: "DAY 4",
     y: 1,
     },
{
     name: "DAY 5",
     y: 5,
     },
{
     name: "DAY 6",
     y: 2,
     },
{
     name: "DAY 7",
     y: 6,
     },
{
     name: "DAY 8",
     y: 0,
     },
{
     name: "DAY 9",
     y: 2,
     },
{
     name: "DAY 10",
     y: 5,
     },
{
     name: "DAY 11",
     y: 5,
     },
{
     name: "DAY 12",
     y: 4,
     },
{
     name: "DAY 13",
     y: 5,
     },
{
     name: "DAY 14",
     y: 1,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 5,
     },
{
     name: "DAY 17",
     y: 2,
     },
{
     name: "DAY 18",
     y: 4,
     },
{
     name: "DAY 19",
     y: 2,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 2,
     },
{
     name: "DAY 23",
     y: 7,
     },
{
     name: "DAY 24",
     y: 3,
     },
{
     name: "DAY 25",
     y: 8,
     },
{
     name: "DAY 26",
     y: 8,
     },
{
     name: "DAY 27",
     y: 3,
     },
{
     name: "DAY 28",
     y: 5,
     },
{
     name: "DAY 29",
     y: 2,
     },
{
     name: "DAY 30",
     y: 3,
     },
{
     name: "DAY 31",
     y: 6,
     },
]
},
{
    id: "ID_KRISHNA-VADCARD02",
    data: 
    [
{
     name: "DAY 1",
     y: 1,
     },
{
     name: "DAY 2",
     y: 0,
     },
{
     name: "DAY 3",
     y: 4,
     },
{
     name: "DAY 4",
     y: 3,
     },
{
     name: "DAY 5",
     y: 4,
     },
{
     name: "DAY 6",
     y: 0,
     },
{
     name: "DAY 7",
     y: 3,
     },
{
     name: "DAY 8",
     y: 4,
     },
{
     name: "DAY 9",
     y: 5,
     },
{
     name: "DAY 10",
     y: 3,
     },
{
     name: "DAY 11",
     y: 10,
     },
{
     name: "DAY 12",
     y: 7,
     },
{
     name: "DAY 13",
     y: 10,
     },
{
     name: "DAY 14",
     y: 5,
     },
{
     name: "DAY 15",
     y: 1,
     },
{
     name: "DAY 16",
     y: 10,
     },
{
     name: "DAY 17",
     y: 5,
     },
{
     name: "DAY 18",
     y: 4,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 6,
     },
{
     name: "DAY 24",
     y: 5,
     },
{
     name: "DAY 25",
     y: 2,
     },
{
     name: "DAY 26",
     y: 4,
     },
{
     name: "DAY 27",
     y: 4,
     },
{
     name: "DAY 28",
     y: 0,
     },
{
     name: "DAY 29",
     y: 7,
     },
{
     name: "DAY 30",
     y: 4,
     },
{
     name: "DAY 31",
     y: 16,
     },
]
},
{
    id: "ID_KEDARDHAM-VADCARD02",
    data: 
    [
{
     name: "DAY 1",
     y: 3,
     },
{
     name: "DAY 2",
     y: 0,
     },
{
     name: "DAY 3",
     y: 1,
     },
{
     name: "DAY 4",
     y: 1,
     },
{
     name: "DAY 5",
     y: 6,
     },
{
     name: "DAY 6",
     y: 0,
     },
{
     name: "DAY 7",
     y: 2,
     },
{
     name: "DAY 8",
     y: 2,
     },
{
     name: "DAY 9",
     y: 1,
     },
{
     name: "DAY 10",
     y: 3,
     },
{
     name: "DAY 11",
     y: 1,
     },
{
     name: "DAY 12",
     y: 1,
     },
{
     name: "DAY 13",
     y: 2,
     },
{
     name: "DAY 14",
     y: 3,
     },
{
     name: "DAY 15",
     y: 1,
     },
{
     name: "DAY 16",
     y: 3,
     },
{
     name: "DAY 17",
     y: 0,
     },
{
     name: "DAY 18",
     y: 0,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 1,
     },
{
     name: "DAY 24",
     y: 1,
     },
{
     name: "DAY 25",
     y: 4,
     },
{
     name: "DAY 26",
     y: 1,
     },
{
     name: "DAY 27",
     y: 2,
     },
{
     name: "DAY 28",
     y: 4,
     },
{
     name: "DAY 29",
     y: 1,
     },
{
     name: "DAY 30",
     y: 3,
     },
{
     name: "DAY 31",
     y: 2,
     },
]
},
{
    id: "ID_JGDAMBA-VADCARD02",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 2,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 0,
     },
{
     name: "DAY 5",
     y: 0,
     },
{
     name: "DAY 6",
     y: 3,
     },
{
     name: "DAY 7",
     y: 0,
     },
{
     name: "DAY 8",
     y: 0,
     },
{
     name: "DAY 9",
     y: 1,
     },
{
     name: "DAY 10",
     y: 3,
     },
{
     name: "DAY 11",
     y: 1,
     },
{
     name: "DAY 12",
     y: 2,
     },
{
     name: "DAY 13",
     y: 1,
     },
{
     name: "DAY 14",
     y: 3,
     },
{
     name: "DAY 15",
     y: 2,
     },
{
     name: "DAY 16",
     y: 1,
     },
{
     name: "DAY 17",
     y: 3,
     },
{
     name: "DAY 18",
     y: 1,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 1,
     },
{
     name: "DAY 21",
     y: 2,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 5,
     },
{
     name: "DAY 24",
     y: 7,
     },
{
     name: "DAY 25",
     y: 1,
     },
{
     name: "DAY 26",
     y: 1,
     },
{
     name: "DAY 27",
     y: 0,
     },
{
     name: "DAY 28",
     y: 3,
     },
{
     name: "DAY 29",
     y: 0,
     },
{
     name: "DAY 30",
     y: 0,
     },
{
     name: "DAY 31",
     y: 0,
     },
]
},
{
    id: "ID_GANESHCMPLX-VADCARD02",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 3,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 5,
     },
{
     name: "DAY 5",
     y: 2,
     },
{
     name: "DAY 6",
     y: 5,
     },
{
     name: "DAY 7",
     y: 2,
     },
{
     name: "DAY 8",
     y: 2,
     },
{
     name: "DAY 9",
     y: 8,
     },
{
     name: "DAY 10",
     y: 2,
     },
{
     name: "DAY 11",
     y: 5,
     },
{
     name: "DAY 12",
     y: 2,
     },
{
     name: "DAY 13",
     y: 0,
     },
{
     name: "DAY 14",
     y: 1,
     },
{
     name: "DAY 15",
     y: 0,
     },
{
     name: "DAY 16",
     y: 3,
     },
{
     name: "DAY 17",
     y: 1,
     },
{
     name: "DAY 18",
     y: 0,
     },
{
     name: "DAY 19",
     y: 2,
     },
{
     name: "DAY 20",
     y: 3,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 0,
     },
{
     name: "DAY 24",
     y: 2,
     },
{
     name: "DAY 25",
     y: 2,
     },
{
     name: "DAY 26",
     y: 1,
     },
{
     name: "DAY 27",
     y: 0,
     },
{
     name: "DAY 28",
     y: 5,
     },
{
     name: "DAY 29",
     y: 0,
     },
{
     name: "DAY 30",
     y: 5,
     },
{
     name: "DAY 31",
     y: 4,
     },
]
},
{
    id: "ID_DEVKINANDAN-VADCARD02",
    data: 
    [
{
     name: "DAY 1",
     y: 2,
     },
{
     name: "DAY 2",
     y: 1,
     },
{
     name: "DAY 3",
     y: 2,
     },
{
     name: "DAY 4",
     y: 2,
     },
{
     name: "DAY 5",
     y: 0,
     },
{
     name: "DAY 6",
     y: 1,
     },
{
     name: "DAY 7",
     y: 1,
     },
{
     name: "DAY 8",
     y: 0,
     },
{
     name: "DAY 9",
     y: 3,
     },
{
     name: "DAY 10",
     y: 3,
     },
{
     name: "DAY 11",
     y: 0,
     },
{
     name: "DAY 12",
     y: 3,
     },
{
     name: "DAY 13",
     y: 2,
     },
{
     name: "DAY 14",
     y: 6,
     },
{
     name: "DAY 15",
     y: 0,
     },
{
     name: "DAY 16",
     y: 2,
     },
{
     name: "DAY 17",
     y: 2,
     },
{
     name: "DAY 18",
     y: 1,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 2,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 1,
     },
{
     name: "DAY 23",
     y: 6,
     },
{
     name: "DAY 24",
     y: 2,
     },
{
     name: "DAY 25",
     y: 3,
     },
{
     name: "DAY 26",
     y: 15,
     },
{
     name: "DAY 27",
     y: 5,
     },
{
     name: "DAY 28",
     y: 10,
     },
{
     name: "DAY 29",
     y: 8,
     },
{
     name: "DAY 30",
     y: 20,
     },
{
     name: "DAY 31",
     y: 27,
     },
]
},
{
    id: "ID_BARODA HGT-VADCARD02",
    data: 
    [
{
     name: "DAY 1",
     y: 0,
     },
{
     name: "DAY 2",
     y: 0,
     },
{
     name: "DAY 3",
     y: 0,
     },
{
     name: "DAY 4",
     y: 0,
     },
{
     name: "DAY 5",
     y: 0,
     },
{
     name: "DAY 6",
     y: 0,
     },
{
     name: "DAY 7",
     y: 2,
     },
{
     name: "DAY 8",
     y: 0,
     },
{
     name: "DAY 9",
     y: 1,
     },
{
     name: "DAY 10",
     y: 0,
     },
{
     name: "DAY 11",
     y: 0,
     },
{
     name: "DAY 12",
     y: 0,
     },
{
     name: "DAY 13",
     y: 0,
     },
{
     name: "DAY 14",
     y: 0,
     },
{
     name: "DAY 15",
     y: 0,
     },
{
     name: "DAY 16",
     y: 0,
     },
{
     name: "DAY 17",
     y: 0,
     },
{
     name: "DAY 18",
     y: 0,
     },
{
     name: "DAY 19",
     y: 0,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 0,
     },
{
     name: "DAY 23",
     y: 2,
     },
{
     name: "DAY 24",
     y: 1,
     },
{
     name: "DAY 25",
     y: 1,
     },
{
     name: "DAY 26",
     y: 2,
     },
{
     name: "DAY 27",
     y: 0,
     },
{
     name: "DAY 28",
     y: 0,
     },
{
     name: "DAY 29",
     y: 0,
     },
{
     name: "DAY 30",
     y: 0,
     },
{
     name: "DAY 31",
     y: 1,
     },
]
},
{
    id: "ID_BALGOPAL-VADCARD02",
    data: 
    [
{
     name: "DAY 1",
     y: 3,
     },
{
     name: "DAY 2",
     y: 5,
     },
{
     name: "DAY 3",
     y: 7,
     },
{
     name: "DAY 4",
     y: 7,
     },
{
     name: "DAY 5",
     y: 6,
     },
{
     name: "DAY 6",
     y: 3,
     },
{
     name: "DAY 7",
     y: 5,
     },
{
     name: "DAY 8",
     y: 3,
     },
{
     name: "DAY 9",
     y: 11,
     },
{
     name: "DAY 10",
     y: 9,
     },
{
     name: "DAY 11",
     y: 8,
     },
{
     name: "DAY 12",
     y: 12,
     },
{
     name: "DAY 13",
     y: 16,
     },
{
     name: "DAY 14",
     y: 1,
     },
{
     name: "DAY 15",
     y: 5,
     },
{
     name: "DAY 16",
     y: 8,
     },
{
     name: "DAY 17",
     y: 13,
     },
{
     name: "DAY 18",
     y: 11,
     },
{
     name: "DAY 19",
     y: 1,
     },
{
     name: "DAY 20",
     y: 0,
     },
{
     name: "DAY 21",
     y: 0,
     },
{
     name: "DAY 22",
     y: 4,
     },
{
     name: "DAY 23",
     y: 4,
     },
{
     name: "DAY 24",
     y: 7,
     },
{
     name: "DAY 25",
     y: 4,
     },
{
     name: "DAY 26",
     y: 3,
     },
{
     name: "DAY 27",
     y: 1,
     },
{
     name: "DAY 28",
     y: 7,
     },
{
     name: "DAY 29",
     y: 4,
     },
{
     name: "DAY 30",
     y: 7,
     },
{
     name: "DAY 31",
     y: 6,
     },
]
},
 
   ]
        }
    })
});
