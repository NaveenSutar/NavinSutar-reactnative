import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const MTDK_Dimensions = {
    height: height,
    width: width,

    margin: height / 40,
    padding: height / 40,

    halfMargin: height / 80,
    halfPadding: height / 80,

    verticalMargin: (height / 60) / 2,
    verticalPadding: (height / 60) / 2,

    radius: height / 80,
}

const MTDK_Colours = {
    primary: "#262626",

    danger:"#d81159",
    warning:"#ffbc42",
    safe:"#5BB318",
    info:"#006ba6",

    // Font
    blackDarkest:   "#403D39",
    blackDarker:    "#403D3990",
    blackDark:      "#403D3970",
    blackLight:     "#403D3950",
    blackLighter:   "#403D3930",
    blackLightest:  "#403D3910",

    black: "#000000",
    white: '#ffffff'
}

export { MTDK_Colours, MTDK_Dimensions };

// Set 1
// "#EAE509"
// "#7DCE13"
// "#5BB318"
// "#2B7A0B"

// Set 2
// "#81B214"
// "#99c24d"
// "#006d77"
// "#2f4858"

// "#d81159"