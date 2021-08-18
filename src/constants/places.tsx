import {ReactComponent as Gym} from '../assets/icons/gym.svg';
import {ReactComponent as Pool} from '../assets/icons/pool.svg';
import {ReactComponent as Camp} from '../assets/icons/camp.svg';
import {ReactComponent as Court} from '../assets/icons/court.svg';
import {ReactComponent as Games} from '../assets/icons/games.svg';
import {ReactComponent as Toy} from '../assets/icons/toy.svg';
import {ReactComponent as Deck} from '../assets/icons/deck.svg';
import {ReactComponent as Salon} from '../assets/icons/salon-party.svg';

export const rules = [ {
    idLocal: 1,
    nameLocal: "Academia",
    iconLocal: <Gym />,
    inicialHour: 5,
    finalHour: 23,
    reservesLimit: 2,
    allDay: false
}, {
    idLocal: 2,
    nameLocal: "Piscina",
    iconLocal: <Pool />,
    inicialHour: 6,
    finalHour: 22, 
    reservesLimit: 3,
    allDay: false
}, {
    idLocal: 4,
    nameLocal: "Campo",
    iconLocal: <Camp />,
    inicialHour: 7,
    finalHour: 22,
    reservesLimit: 1,
    allDay: false
}, {
    idLocal: 5,
    nameLocal: "Quadra",
    iconLocal: <Court />,
    inicialHour: 7,
    finalHour: 22,
    reservesLimit: 1,
    allDay: false
}, {
    idLocal: 6,
    nameLocal: "Salão de Jogos",
    iconLocal: <Games />,
    inicialHour: 6,
    finalHour: 23,
    reservesLimit: 1,
    allDay: false
}, {
    idLocal: 3,
    nameLocal: "Brinquedoteca",
    iconLocal: <Toy />,
    inicialHour: 7,
    finalHour: 22,
    reservesLimit: 1,
    allDay: false,
}, {
    idLocal: 7,
    nameLocal: "Deck",
    iconLocal: <Deck />,
    inicialHour: 8,
    finalHour: 22,
    reservesLimit: 1,
    allDay: true
}, {
    idLocal: 8,
    nameLocal: "Salões de festas A",
    iconLocal: <Salon />,
    inicialHour: 8,
    finalHour: 23,
    reservesLimit: 1,
    allDay: true
}, {
    idLocal: 9,
    nameLocal: "Salões de festas B",
    iconLocal: <Salon />,
    inicialHour: 8,
    finalHour: 23,
    reservesLimit: 1,
    allDay: true
}, {
    idLocal: 10,
    nameLocal: "Salões de festas C",
    iconLocal: <Salon />,
    inicialHour: 8,
    finalHour: 23,
    reservesLimit: 1,
    allDay: true
} ]