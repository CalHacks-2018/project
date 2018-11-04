$( function () {
    $( '#world-map-gdp' ).vectorMap( {
        map: 'world_mill',
        series: {
            regions: [ {
                values: gdpData,
                scale: [ '#C8EEFF', '#0071A4' ],
                normalizeFunction: 'polynomial'
            } ]
        },
        onRegionTipShow: function ( e, el, code ) {
            el.html( el.html() );
        }
    } );
} );

var gdpData = {
    "AF": 315,
    "AL": 60,
    "DZ": 148,
    "AO": 52,
    "AG": 3,
    "AR": 1626,
    "AM": 149,
    "AU": 1254,
    "AT": 872,
    "AZ": 77,
    "BS": 12,
    "BH": 39,
    "BD": 108,
    "BB": 12,
    "BY": 301,
    "BE": 1091,
    "BZ": 4,
    "BJ": 9,
    "BT": 8,
    "BO": 176,
    "BA": 933,
    "BW": 3,
    "BR": 2296,
    "BN": 10,
    "BG": 10,
    "BF": 10,
    "BI": 10,
    "KH": 10,
    "CM": 10,
    "CA": 10,
    "CV": 10,
    "CF": 10,
    "TD": 10,
    "CL": 10,
    "CN": 50,
    "CO": 10,
    "KM": 10,
    "CD": 10,
    "CG": 10,
    "CR": 10,
    "CI": 10,
    "HR": 10,
    "CY": 10,
    "CZ": 10,
    "DK": 10,
    "DJ": 10,
    "DM": 10,
    "DO": 10,
    "EC": 10,
    "EG": 10,
    "SV": 10,
    "GQ": 10,
    "ER": 10,
    "EE": 10,
    "ET": 10,
    "FJ": 10,
    "FI": 10,
    "FR": 10,
    "GA": 10,
    "GM": 10,
    "GE": 10,
    "DE": 10,
    "GH": 10,
    "GR": 10,
    "GD": 10,
    "GT": 10,
    "GN": 10,
    "GW": 10,
    "GY": 10,
    "HT": 10,
    "HN": 10,
    "HK": 10,
    "HU": 10,
    "IS": 10,
    "IN": 10,
    "ID": 10,
    "IR": 10,
    "IQ": 10,
    "IE": 10,
    "IL": 10,
    "IT": 10,
    "JM": 10,
    "JP": 10,
    "JO": 10,
    "KZ": 10,
    "KE": 10,
    "KI": 10,
    "KR": 10,
    "UNDEFINED": 10,
    "KW": 10,
    "KG": 10,
    "LA": 10,
    "LV": 10,
    "LB": 10,
    "LS": 10,
    "LR": 10,
    "LY": 10,
    "LT": 10,
    "LU": 10,
    "MK": 10,
    "MG": 10,
    "MW": 10,
    "MY": 10,
    "MV": 10,
    "ML": 10,
    "MT": 10,
    "MR": 10,
    "MU": 10,
    "MX": 10,
    "MD": 10,
    "MN": 10,
    "ME": 10,
    "MA": 10,
    "MZ": 10,
    "MM": 10,
    "NA": 10,
    "NP": 10,
    "NL": 10,
    "NZ": 10,
    "NI": 10,
    "NE": 10,
    "NG": 10,
    "NO": 10,
    "OM": 10,
    "PK": 10,
    "PA": 10,
    "PG": 10,
    "PY": 10,
    "PE": 10,
    "PH": 10,
    "PL": 10,
    "PT": 10,
    "QA": 10,
    "RO": 10,
    "RU": 50,
    "RW": 10,
    "WS": 10,
    "ST": 10,
    "SA": 10,
    "SN": 10,
    "RS": 10,
    "SC": 10,
    "SL": 10,
    "SG": 10,
    "SK": 10,
    "SI": 10,
    "SB": 10,
    "ZA": 10,
    "ES": 10,
    "LK": 10,
    "KN": 10,
    "LC": 10,
    "VC": 10,
    "SD": 10,
    "SR": 10,
    "SZ": 10,
    "SE": 10,
    "CH": 10,
    "SY": 10,
    "TW": 10,
    "TJ": 10,
    "TZ": 10,
    "TH": 10,
    "TL": 10,
    "TG": 10,
    "TO": 10,
    "TT": 10,
    "TN": 10,
    "TR": 10,
    "TM": 10,
    "UG": 10,
    "UA": 10,
    "AE": 10,
    "GB": 10,
    "US": 15839,
    "UY": 10,
    "UZ": 10,
    "VU": 10,
    "VE": 10,
    "VN": 10,
    "YE": 10,
    "ZM": 10,
    "ZW": 10
}