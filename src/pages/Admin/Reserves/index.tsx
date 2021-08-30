import {  Tabs, Tab, Accordion } from 'react-bootstrap';

import NavBar from '../../../components/navBar';
import { AdminMenu } from '../../../components/menu';

import {ReactComponent as CalendarIcon} from '../../../assets/icons/calendar_2.svg';
import {ReactComponent as ClockIcon} from '../../../assets/icons/clock.svg';

import classnames from 'classnames';

import './styles.scss';
import { ReactNode, useEffect, useState } from 'react';
import { rules } from '../../../constants/places';
import Calendar from 'react-calendar';
import { structuringDate } from '../../../utils/date';
import { getGeneralReserves } from '../../../services/reserves';

export function AdminReserves() { 
    const dateToday = new Date();

    const [placeTarget, setPlaceTarget] = useState(0);
    const [dateTarget, setDateTarget] = useState('');
    const [listReserves, setListReserves] = useState<ReactNode>()
    const [collapse, setCollapse] = useState("");

    useEffect(() => {
        (placeTarget!==0 && dateTarget !== '') && listingReserves()

        // eslint-disable-next-line
    }, [placeTarget, dateTarget])

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

    function listingReserves() {
        getGeneralReserves(placeTarget, dateTarget)
            .then(response => {
                const RESERVES = response.data;
                let aux: ReactNode[] = [];

                for(let i = 0; i < RESERVES.length; i++) {
                    aux.push(
                        <div className="reserves">
                            <ClockIcon />
    
                            <div className="info-reserve">
                                <h3>{RESERVES[i][0].horario}:00 - {RESERVES[i][0].horario}:50</h3>
                                {RESERVES[i].map(userReserve => {
                                    return (
                                        <div className="info-user-reserve">
                                            <h5>Ap {userReserve.numeroapartamento}</h5>
                                            <h5>{userReserve.name}</h5>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                }
    
                setListReserves(aux);
            })
            .catch(() => alert('ocorreu um erro na requisição'))
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
                    
                        <div className="reserves-list">
                            {listReserves} 
                        </div>   
                    </div>
                </Tab>
            </Tabs>
            
            <AdminMenu />
        </div>
    );
}