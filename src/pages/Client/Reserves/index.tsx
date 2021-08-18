import { FormEvent, ReactNode, useEffect, useState } from 'react';
import { Offcanvas, Tabs, Tab, Accordion, ListGroup, Spinner } from 'react-bootstrap';
import Calendar from 'react-calendar';
import classnames from 'classnames';

import { MenuContent } from '../../../components/menu/menuContent';
import NavBar from '../../../components/navBar';
 
import { useMenu } from '../../../hooks/useMenu';
import { useAuth } from '../../../hooks/useAuth';

import {ReactComponent as CalendarIcon} from '../../../assets/icons/calendar_2.svg';
import {ReactComponent as ClockIcon} from '../../../assets/icons/clock.svg';

import { createReserve, getUserReserves } from '../../../services/reserves';

import { structuringDate } from '../../../utils/date';

import './styles.scss';
import './Calendar.scss';
import { rules } from '../../../constants/places';
import { ReserveItem } from './components/reserveItem';

export function Reserves() {  
    const menuContext = useMenu();
    const authContext = useAuth();
    const dateToday = new Date();

    const [placeTarget, setPlaceTarget] = useState(0);
    const [dateTarget, setDateTarget] = useState('');
    const [scheduleTarget, setScheduleTarget] = useState(0)
    const [scheduleList, setScheduleList] = useState<ReactNode[]>([]);
    const [reservesList, setReservesList] = useState<ReactNode[]>([])
    const [collapse, setCollapse] = useState("");
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        const value = listingUserReserves(authContext.user.id);
        setReservesList(value)
         // eslint-disable-next-line
    }, [loading])

    useEffect(() => {
        placeTarget!== 0 && setScheduleList(listingSchedule(placeTarget));
    }, [placeTarget])

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
                    className={`space-button ${placeTarget === i+1 && 'selected'}`} 
                    onClick={() => setPlaceTarget(i+1)}
                >
                    {rules[i].iconLocal}
                    <h3>{rules[i].nameLocal}</h3>
                </button>
            )
        }
    
        return aux;
    }

    function listingSchedule(placeId: number) {
        const PLACE_INDEX = placeId-1;
        let aux: ReactNode[] = [];
        
        for(let i = rules[PLACE_INDEX].inicialHour; i < rules[PLACE_INDEX].finalHour; i++) {
            aux.push(
                <ListGroup.Item action as="text" href={`${i}`} onClick={() => setScheduleTarget(i)}>
                    {i}:00 - {i}:50
                </ListGroup.Item>
            )
        }
        return aux;
    }

    function listingUserReserves(userId: number) {
        let aux: ReactNode[] = [];
    
        getUserReserves(userId)
            .then(e => {
                const RESERVES = e.data;
                
                for(let i = 0; i < RESERVES.length; i++) {
                    aux.push(
                        <ReserveItem 
                            reserveId={RESERVES[i].id} 
                            placeId={RESERVES[i].espacos_id-1} 
                            data={RESERVES[i].data} 
                            schedule={RESERVES[i].horario}
                        />
                    )
                }
            })
    
        return aux;
    }

    function handleCreateReserve(e: FormEvent) {
        e.preventDefault();

        setLoading(true);

        createReserve(dateTarget, scheduleTarget, placeTarget, authContext.user.id)
            .then(() => {
                window.alert('Reserva realizada com sucesso');
                setLoading(false);
            })
            .catch(() => {
                window.alert('Reserva não cadastrada');
                setLoading(false);
            })
    }

    return(
        <div id="container">
            <header>
                <NavBar />
            </header>
 
            <Tabs defaultActiveKey="do-reserve" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="do-reserve" title="Fazer reserva" >
                    <div id="tab-content">
                        <form id="reserves-form" onSubmit={handleCreateReserve}>
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

                                <Accordion.Item eventKey="1" bsPrefix={classnames(
                                    'accordion-item',
                                    {disabled: !dateTarget},
                                    {selected: !!scheduleTarget}
                                )}>
                                    <Accordion.Header onClick={() => setCollapse(!collapse ? "1" : "")}>
                                        <ClockIcon />

                                        <p>{!scheduleTarget ? "Horários disponíveis" : `${scheduleTarget}:00 - ${scheduleTarget}:50`}</p>
                                    </Accordion.Header>
                                    
                                    <Accordion.Body>
                                        <ListGroup activeKey={scheduleTarget} onClick={()=> {setCollapse("")}}>
                                            {scheduleList}
                                        </ListGroup>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            <p className={!placeTarget ? "hidden" : "showMessage"}>Algum aviso aleatória que possa ter nesse lugar sobre algumas regras básicas da academia, regras principais.</p>

                            <button disabled={!scheduleTarget} type="submit" id="confirm">
                                {loading ? <Spinner animation="border" variant="light" /> : "Confirmar reserva"}
                            </button>
                        </form>
                    </div>
                </Tab>

                <Tab eventKey="my-reserves" title="Minhas reservas">
                    <div id="tab-content">
                        <ul className="listing">
                            {listingUserReserves(authContext.user.id)}
                        </ul>
                    </div>
                </Tab>
            </Tabs>
            
 
            <Offcanvas show={menuContext.show} onHide={() => menuContext.setShow(false)} placement="end">
                <MenuContent />
            </Offcanvas>

        </div>
    );
}