import {
    faSnowflake,
    faHouseDamage,
    faBoxOpen,
    faDoorClosed,
    faChair,
    faWheelchair,
    faHome,
    faPaintRoller,
    faFaucet,
    faSolarPanel,
    faBars,
    faDog,
    faUsers,
    faDungeon,
    faTrashAlt,
    faPlusCircle,
    faImage,
    faLocationArrow,
    faPhone
} from '@fortawesome/free-solid-svg-icons';


export function boldString(str, substr) {
    var strRegExp = new RegExp(substr, 'g');
    return str.replace(strRegExp, substr.bold());
}

export const icons = {
    user: "data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1NTEuMTMgNTUxLjEzIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDU1MS4xMyA1NTEuMTMiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTI3NS41NjUgMjc1LjU2NWMtNzUuOTcyIDAtMTM3Ljc4My02MS44MS0xMzcuNzgzLTEzNy43ODNzNjEuODExLTEzNy43ODIgMTM3Ljc4My0xMzcuNzgyIDEzNy43ODMgNjEuODEgMTM3Ljc4MyAxMzcuNzgzLTYxLjgxMSAxMzcuNzgyLTEzNy43ODMgMTM3Ljc4MnptMC0yNDEuMTE5Yy01Ni45ODMgMC0xMDMuMzM3IDQ2LjM1My0xMDMuMzM3IDEwMy4zMzdzNDYuMzUzIDEwMy4zMzcgMTAzLjMzNyAxMDMuMzM3IDEwMy4zMzctNDYuMzU0IDEwMy4zMzctMTAzLjMzNy00Ni4zNTQtMTAzLjMzNy0xMDMuMzM3LTEwMy4zMzd6Ii8+PHBhdGggZD0ibTQ5OS40NjEgNTUxLjEzaC00NDcuNzkzYy05LjUyIDAtMTcuMjIzLTcuNzAzLTE3LjIyMy0xNy4yMjN2LTExOC41NThjMC0xNy43OTUgOS4wOTktMzQuNTEzIDIzLjczMi00My42NjMgMTI5LjMzOS04MC42ODIgMzA1LjU1NC04MC42NjUgNDM0Ljc1OS0uMDE3IDE0LjY0OSA5LjE2NiAyMy43NDkgMjUuODg1IDIzLjc0OSA0My42Nzl2MTE4LjU1OGMwIDkuNTIxLTcuNzAzIDE3LjIyNC0xNy4yMjQgMTcuMjI0em0tNDMwLjU3LTM0LjQ0NWg0MTMuMzQ4di0xMDEuMzM2YzAtNi4wMDQtMi44OTMtMTEuNTU1LTcuNTUyLTE0LjQ2NC0xMTguMjU2LTczLjgxOS0yNzkuOTA1LTczLjg3LTM5OC4yNi4wMTctNC42NDIgMi44OTMtNy41MzUgOC40NDMtNy41MzUgMTQuNDQ4eiIvPjwvc3ZnPg==",
    oppositeArrows: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDg5LjIgNDg5LjIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4OS4yIDQ4OS4yOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTQ4MS4wNDQsMzgyLjVjMC02LjgtNS41LTEyLjMtMTIuMy0xMi4zaC00MTguN2w3My42LTczLjZjNC44LTQuOCw0LjgtMTIuNSwwLTE3LjNjLTQuOC00LjgtMTIuNS00LjgtMTcuMywwbC05NC41LDk0LjUNCgkJCWMtNC44LDQuOC00LjgsMTIuNSwwLDE3LjNsOTQuNSw5NC41YzIuNCwyLjQsNS41LDMuNiw4LjcsMy42czYuMy0xLjIsOC43LTMuNmM0LjgtNC44LDQuOC0xMi41LDAtMTcuM2wtNzMuNi03My42aDQxOC44DQoJCQlDNDc1LjU0NCwzOTQuNyw0ODEuMDQ0LDM4OS4zLDQ4MS4wNDQsMzgyLjV6Ii8+DQoJCTxwYXRoIGQ9Ik00NzcuNDQ0LDk4bC05NC41LTk0LjRjLTQuOC00LjgtMTIuNS00LjgtMTcuMywwcy00LjgsMTIuNSwwLDE3LjNsNzMuNiw3My42aC00MTguOGMtNi44LDAtMTIuMyw1LjUtMTIuMywxMi4zDQoJCQlzNS41LDEyLjMsMTIuMywxMi4zaDQxOC44bC03My42LDczLjRjLTQuOCw0LjgtNC44LDEyLjUsMCwxNy4zYzIuNCwyLjQsNS41LDMuNiw4LjcsMy42czYuMy0xLjIsOC43LTMuNmw5NC41LTk0LjUNCgkJCUM0ODIuMjQ0LDExMC42LDQ4Mi4yNDQsMTAyLjgsNDc3LjQ0NCw5OHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==",
    lastSearches: {
        back: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDQuMTQzIDQ0LjE0MyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDQuMTQzIDQ0LjE0MzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6IzFFMjAxRDsiIGQ9Ik0yLjA2NiwyNy42NjdjLTAuMTExLTAuNjE5LDAuMzAyLTEuMTksMC45MDUtMS4zMDJjMC42MDMtMC4xMTEsMS4xOSwwLjI4NiwxLjMwMiwwLjg4OQ0KCWMwLjc3OCw0LjIwNiwzLjAxNiw3Ljg4OSw2LjE5LDEwLjUyNGMzLjA5NSwyLjU3MSw3LjA5NSw0LjExMSwxMS40NDQsNC4xMTFjNC45NTIsMCw5LjQ0NC0yLDEyLjY5OC01LjI1NA0KCWMzLjIzOC0zLjIzOCw1LjI1NC03LjczLDUuMjU0LTEyLjY4MnMtMi4wMTYtOS40NDQtNS4yNTQtMTIuNjk4Yy0zLjI1NC0zLjIzOC03Ljc0Ni01LjI1NC0xMi42OTgtNS4yNTQNCgljLTEuMDMyLDAtMi4wMTYsMC4wNzktMi45ODQsMC4yNTRjLTAuNjgyLDAuMTExLTEuMzQ5LDAuMjU0LTIsMC40NDRsMi42NjcsMi4xMjdjMC40OTIsMC4zODEsMC41NzEsMS4wOTUsMC4xOSwxLjU3MQ0KCWMtMC4zODEsMC40OTItMS4wOTUsMC41NzEtMS41NzEsMC4xNzVsLTQuMzY1LTMuNDc2Yy0wLjQxMy0wLjMzMy0wLjUyNC0wLjkwNS0wLjMwMi0xLjM2NWwyLjIwNi01LjA2Mw0KCWMwLjI1NC0wLjU1NiwwLjkwNS0wLjgyNSwxLjQ3Ni0wLjU3MWMwLjU3MSwwLjIzOCwwLjgyNSwwLjkwNSwwLjU3MSwxLjQ3NmwtMS4yNywyLjkyMWMwLjY2Ny0wLjE5LDEuMzMzLTAuMzMzLDIuMDMyLTAuNDQ0DQoJYzEuMDk1LTAuMTksMi4yMjItMC4yODYsMy4zNDktMC4yODZjNS41NzEsMCwxMC42MTgsMi4yNTQsMTQuMjg1LDUuOTA1YzMuNjUxLDMuNjY3LDUuOTA0LDguNzE0LDUuOTA0LDE0LjI4NQ0KCXMtMi4yNTQsMTAuNjE5LTUuOTA0LDE0LjI2OWMtMy42NjYsMy42NTEtOC43MTQsNS45Mi0xNC4yODUsNS45MmMtNC44ODksMC05LjM4LTEuNzQ2LTEyLjg3Mi00LjY1MQ0KCUM1LjQ3OCwzNi41NCwyLjk1NCwzMi4zODEsMi4wNjYsMjcuNjY3TDIuMDY2LDI3LjY2N3oiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K",
        v: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDI2LjY2NyA0MjYuNjY3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MjYuNjY3IDQyNi42Njc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDIxLjg3Niw1Ni4zMDdjLTYuNTQ4LTYuNzgtMTcuMzUyLTYuOTY4LTI0LjEzMi0wLjQyYy0wLjE0MiwwLjEzNy0wLjI4MiwwLjI3Ny0wLjQyLDAuNDJMMTE5LjI1NywzMzQuMzc1DQoJCQlsLTkwLjMzNC05MC4zMzRjLTYuNzgtNi41NDgtMTcuNTg0LTYuMzYtMjQuMTMyLDAuNDJjLTYuMzg4LDYuNjE0LTYuMzg4LDE3LjA5OSwwLDIzLjcxM2wxMDIuNCwxMDIuNA0KCQkJYzYuNjY1LDYuNjYzLDE3LjQ2OCw2LjY2MywyNC4xMzIsMEw0MjEuNDU2LDgwLjQ0QzQyOC4yMzYsNzMuODkxLDQyOC40MjQsNjMuMDg3LDQyMS44NzYsNTYuMzA3eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"
    },
    logout: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZGF0YS1uYW1lPSJMYXllciAxIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlLz48cGF0aCBkPSJNMzU0Ljc1LDk5LjU2SDE1Ny4yNWEzLjg4LDMuODgsMCwwLDAtMy44NywzLjg4VjQwOC41NmEzLjg4LDMuODgsMCwwLDAsMy44NywzLjg4aDE5Ny41YTMuODgsMy44OCwwLDAsMCwzLjg3LTMuODhWMTAzLjQ0QTMuODgsMy44OCwwLDAsMCwzNTQuNzUsOTkuNTZaTTE3Ni42Miw0MDQuNjlWMTIyLjhIMzM1LjM4VjQwNC42OVptMTc0LjI1LDBoLTcuNzRWMTE4LjkzYTMuODcsMy44NywwLDAsMC0zLjg3LTMuODdIMTcyLjc0YTMuODcsMy44NywwLDAsMC0zLjg3LDMuODdWNDA0LjY5aC03Ljc0VjEwNy4zMUgzNTAuODdaIi8+PHBhdGggZD0iTTMxMC4xNiwyMjQuOEExMy4yMSwxMy4yMSwwLDAsMCwyOTcsMjM4djMyLjE1YTEzLjIsMTMuMiwwLDEsMCwyNi4zOSwwVjIzOEExMy4yMSwxMy4yMSwwLDAsMCwzMTAuMTYsMjI0LjhabTUuNDYsNDUuMzRhNS40NSw1LjQ1LDAsMSwxLTEwLjksMFYyMzhhNS40NSw1LjQ1LDAsMSwxLDEwLjksMFoiLz48L3N2Zz4=",
    checkMark: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAbElEQVRIie2SQQ6AIAwE5xMSfSI8Vw4+Rw9q0oBIFGo8dK7AFJYFw3iIA7ymPAIrEHrLB2A+5Aswmvzfcs/eiBKyLbGyNyNUDjbJIX/6dLP2OvOrId0/NI2iKZYS8tYqVZRDVOQnjo6xGN+zAavMMBC6bhegAAAAAElFTkSuQmCC",
    faSnowflake,
    faHouseDamage,
    faBoxOpen,
    faDoorClosed,
    faChair,
    faWheelchair,
    faDungeon,
    faHome,
    faPaintRoller,
    faFaucet,
    faSolarPanel,
    faBars,
    faDog,
    faUsers,
    faTrashAlt,
    faPlusCircle,
    faImage,
    faLocationArrow,
    faPhone
}
export const newPostInitialState = {
    address: {
        propertyType: "דירה",
        city: "",
        street: "",
        number: '',
        floorNum: '',
        floorsInBuilding: '',
    },
    propertyInfo: {
        numOfRooms: 1,
        parking: 0,
        porch: 0,
        properties: {
            "מיזוג": false, 'ממ"ד': false, "מחסן": false, "דלתות פנדור": false,
            "ריהוט": false, "גישה לנכים": false, "מעלית": false, "מזגן תדיראן": false,
            "משופצת": false, "סורגים": false, "לשותפים": false,
            "חיות מחמד": false, "מטבח כשר": false, "דוד שמש": false
        },
        freeText: ""
    },
    payments: {
        numOfPayments: 'גמיש',
        buildingFee: '',
        arnona: '',
        size: '',
        actualSize: '',
        price: '',
        entryDate: null
    },
    media: {
        video: null,
        mainImg: null,
        images: []
    },
    contact: {
        main: {
            name: "",
            number: ""
        },
        second: {
            name: "",
            number: ""
        },
        email: ""
    }
}
export const disableScroll = (modal, post) => {
    const html = document.querySelector('html')
    if (modal || post)
        // Disable scroll
        html.style.overflow = "hidden";
    else
        // Enable scroll
        html.style.overflow = "auto";
}
