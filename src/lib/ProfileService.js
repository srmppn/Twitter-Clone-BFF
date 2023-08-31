
const profiles = {
    '4059d44a-38d8-11ee-be56-0242ac120002': {
        name: 'มนุษย์เงินเดือน',
        picture: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Joe_Biden_presidential_portrait.jpg'
    }
}

function getProfile(userId) {
    return profiles[userId]
}

export default getProfile;