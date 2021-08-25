import {  Tabs, Tab, Accordion } from 'react-bootstrap';

import NavBar from '../../../components/navBar';
import { AdminMenu, Menu } from '../../../components/menu';

import {ReactComponent as DocumentIcon} from '../../../assets/icons/documents.svg';
import {ReactComponent as CalendarIcon} from '../../../assets/icons/calendar_2.svg';
import downloandIcon from '../../../assets/icons/downloand.svg';

import { api } from '../../../services/_api';
import classnames from 'classnames';

import './styles.scss';
import { ReactNode, useState } from 'react';
import { rules } from '../../../constants/places';
import Calendar from 'react-calendar';
import { structuringDate } from '../../../utils/date';

export function AdminReserves() { 
    const dateToday = new Date();

    const [placeTarget, setPlaceTarget] = useState(0);
    const [dateTarget, setDateTarget] = useState('');
    const [collapse, setCollapse] = useState("");

    function formatDate(date: number) {
        const dates = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
        return dates[date];
    }

    function listingPlaceButtons() {
        let aux: ReactNode[] = [];
    
        for(let i = 0; i < rules.length; i++) {
            aux.push(
                <button 
                    type="button" 
                    className={`space-button ${placeTarget === rules[i].idLocal && 'selected'}`} 
                    onClick={() => setPlaceTarget(rules[i].idLocal)}
                >
                    {rules[i].iconLocal}
                    <h3>{rules[i].nameLocal}</h3>
                </button>
            )
        }
    
        return aux;
    }
    
    return(
        <div id="container">
            <header className="header-functions">
                <NavBar />
            </header>
 
            <Tabs defaultActiveKey="list-reserves" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="list-reserves" title="Ver Reservas" className=".nav-link active">
                    <div id="tab-content">
                        <fieldset id="select-space">
                            <ul id="list-space">
                                {listingPlaceButtons()}
                            </ul>
                        </fieldset>
                        
                        <p hidden={!!placeTarget && true}>Antes de escolher a data da reserva, escolha o espaço desejado</p>

                        <Accordion activeKey={collapse}>
                            <Accordion.Item eventKey="0" bsPrefix={classnames(
                                'accordion-item',
                                {disabled: !placeTarget},
                                {selected: !!dateTarget}
                            )}>
                                <Accordion.Header onClick={() => setCollapse(!collapse ? "0" : "")}>
                                    <CalendarIcon />

                                    <p>{!dateTarget ? "Dias disponíveis" : dateTarget}</p>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Calendar 
                                        className="calendar"
                                        formatShortWeekday={(locale, date) => formatDate(date.getDay())} 
                                        onChange={(e: any) => {setDateTarget(structuringDate(e)); setCollapse("")}}
                                        minDate={new Date(dateToday.getUTCFullYear(), dateToday.getMonth(), dateToday.getDate())}
                                    />
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </Tab>
            </Tabs>
            
            <AdminMenu />
        </div>
    );
}