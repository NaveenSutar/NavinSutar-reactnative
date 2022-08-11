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

    danger: "#d81159",
    warning: "#ffbc42",
    safe: "#5BB318",
    info: "#006ba6",

    // Font
    blackDarkest: "#403D39",
    blackDarker: "#403D3990",
    blackDark: "#403D3970",
    blackLight: "#403D3950",
    blackLighter: "#403D3930",
    blackLightest: "#403D3910",

    black: "#000000",
    white: '#ffffff'
}

const API = {
    products:"https://upayments-studycase-api.herokuapp.com/api/products/",
    categories:"https://upayments-studycase-api.herokuapp.com/api/categories/",

    token:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5hdmVlbi5zdXRhckBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vTmF2ZWVuU3V0YXIiLCJpYXQiOjE2NjAxNTIzNzQsImV4cCI6MTY2MDU4NDM3NH0.hy9nopHOFwy9vdJJtwM5mUtZ_4Exp9-jskQVOBrdHWU'
}

export { MTDK_Colours, MTDK_Dimensions, API };