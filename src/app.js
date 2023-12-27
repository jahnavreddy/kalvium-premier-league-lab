// Progression 1
function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  return [{ name: managerName, age: managerAge, team: currentTeam, trophies: trophiesWon }];
}

function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  return [{ name: managerName, age: managerAge, team: currentTeam, trophies: trophiesWon }];
}

function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  return [managerName, managerAge, currentTeam, trophiesWon];
}

// Progression 2
function createFormation(formation) {
  return {
    defender: formation[0] || 0,
    midfield: formation[1] || 0,
    forward: formation[2] || 0,
  };
}

// Progression 3
function filterByDebut(year) {
  return players.filter(player => player.debut === year);
}

// Progression 4
function filterByPosition(position) {
  return players.filter(player => player.position === position);
}

// Progression 5
function filterByAward(awardName) {
  return players.filter(player => player.awards.some(award => award.name === awardName));
}

function createFormation(formation) {
  return {
    defender: formation[0],
    midfield: formation[1],
    forward: formation[2],
  };
}

// Progression 6
function filterByAwardxTimes(awardName, noOfTimes) {
  return players.filter(player => player.awards.filter(award => award.name === awardName).length === noOfTimes);
}

function createFormation(formation) {
  if (formation.length === 0) {
    return null;
  }

  return {
    defender: formation[0],
    midfield: formation[1],
    forward: formation[2],
  };
}

// Progression 7
function filterByAwardxCountry(awardName, country) {
  return filterByAward(awardName).filter(player => player.country === country);
}

// Progression 8
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  return players.filter(player => player.awards.length >= noOfAwards && player.team === team && player.age < age);
}

// Progression 9
function sortByAge() {
  return [...players].sort((a, b) => b.age - a.age);
}

// Progression 10
function FilterByTeamxSortByNoOfAwards(team) {
  const filteredPlayers = players.filter(player => player.team === team);
  return filteredPlayers.sort((a, b) => b.awards.length - a.awards.length);
}

// Challenge 1
function SortByNamexAwardxTimes(awardName, noOfTimes, country) {
  const dataOne = filterByAwardxTimes(awardName, noOfTimes);
  const dataTwo = dataOne.filter(player => player.country === country);
  return dataTwo.sort((a, b) => a.name.localeCompare(b.name));
}

// Challenge 2
function SortByNamexOlderThan(age) {
  const data = players.filter(player => player.age > age);
  return data.sort((a, b) => {
    const awardsA = a.awards.map(award => award.year).sort((x, y) => y - x);
    const awardsB = b.awards.map(award => award.year).sort((x, y) => y - x);
    return a.name.localeCompare(b.name);
  });
}
