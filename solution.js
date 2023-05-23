const areYouPlayingBanjo = name => {
  return name.charAt(0) == 'R' || name.charAt(0) == 'r' ? `${name} plays banjo` : `${name} does not play banjo`
}

console.log(areYouPlayingBanjo('Ray'))
console.log(areYouPlayingBanjo('Mike'))


const playingBanjo = name => {
    return name.charAt(0).toLowerCase() == 'r' ? `${name} plays banjo` : `${name} does not play banjo`
}
  
console.log(playingBanjo('Ray'))
console.log(playingBanjo('Mike'))