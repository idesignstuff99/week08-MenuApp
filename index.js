class Player {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }

    describe() {
        return `S{this.name plays ${this.position}.`;
    }
}

class Team {
    constructor(name) {
        this.name = name;
        this.player = [];
    }

    addPlayer(player) {
        if (player instanceof Player) {
            this.players.push(player);
        } else {
            throw new Error(`You can only add am instance of player. Argument is not a player: &{player}`);
        }
    }

    describe() {
        return `${this.name} has ${this.player.length} players.`;
    }
}

class Menu {
    constructor() {
        this.team = [];
        this. selectedTeam = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createTeam();
                    break;
                case '2':
                    this.viewTeam();
                    break;
                    case '3':
                        this.deleteTeam();
                        break;
                        case '4':
                            this.displayTeam();
                            break;
                            default:
                                selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('Goodbye');
    }

    showMainMenuOptions() {
        return prompt(`
            0) exit
            1) create new team
            2) view team
            3) delete team
            4) display all teams
            `);
    }

    // showMainMenuOptions(teamInfo) {
    //     return prompt(`
    //         0) back
    //         1) create player
    //         3) delete player
    //         ----------------------
    //         ${teamInfo}
    //         `);
    // }

    displayTeams() {
        let teamString = '';
        for (i = 0; i < this.team.length; i++) {
            teamString += + ') ' + this.teams[i].name + '/n';
        }
        alert(teamString);
    }

    createTeam() {
        let name = prompt('Enter name for new team:');
        this.teams.push(new Team(name));
    }

    viewTeam() {
        let index = prompt('Enter the index of the team you wish to view:');
        if (index > -1 && index < this.teams.length) {
            this.selectedTeam = this.teams[index];
            let description = 'Team Name: ' + this.selectedTeam.name + '\n';

            for (let i = 0; i < this.selectedTeam.player.length; i++) {
                description += i + ')' + this.selectedTeamplayer[i].name + ' - ' + this.selectedTeam.players[i].position + '\n';
            }

            let selection = this.showMainMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createPlayer();
                    break;
                    case '2':
                        this.deleteTeam();
            }
        }
    }
}

let menu = new Menu();
menu.start();