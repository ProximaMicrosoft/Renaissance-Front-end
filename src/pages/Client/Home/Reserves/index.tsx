import { useHistory } from 'react-router-dom';
import { Offcanvas, Tabs, Tab, Accordion, ListGroup } from 'react-bootstrap';
import Calendar from 'react-calendar';

import { OffcanvasContent } from '../../../../components/Offcanvas/OffcanvasContent/OffcanvasContent';

import { useMenu } from '../../../../hooks/useMenu';

import hamburguerIcon from '../../../../assets/hamburguer.svg';
import returnIcon from '../../../../assets/arrow-left.svg';
import trashIcon from '../../../../assets/trash.svg';

import './styles.scss';
import './Calendar.scss';
import { useState } from 'react';
import { structuringDate } from '../../../../utils/structuringDate';
// import { api } from '../../../../services/api';

export function Reserves() {  
    const menuContext = useMenu();
    const history = useHistory();
    const dateToday = new Date();

    const [placeTarget, setPlaceTarget] = useState('');
    const [dateTarget, setDateTarget] = useState<Date>(dateToday);
    const [scheduleTarget, setScheduleTarget] = useState("")
    const [schedule, setSchedule] = useState("");
    const [collapse, setCollapse] = useState("");
    // const [loading, setLoading] = useState(false);

    // function structuringReservesData() {
    //     const date = structuringDate(dateTarget);
    //     const schedule = schedule
    // }

    // async function handleCreateReserve(e: FormEvent) {
    //     e.preventDefault();

    //     setLoading(true);

    //     try{
    //         await api.post('/reservas', {

    //         })
    //     } catch {
    //         window.alert('Não foi possível fazer a reserva.');

    //         setLoading(false);
    //     }
    // }

    return(
        <div id="container">
            <header className="header-functions">
                <div id="nav-icons">
                    <img src={returnIcon} onClick={() => history.goBack()} alt="Retornar para a página anterior" />
                    <img src={hamburguerIcon} alt="abrir menu  lateral" 
                    id="hamburguer" className="hamburguer" onClick={() => menuContext.setShow(true)}
                    />
                </div>
            </header>
 
            <Tabs defaultActiveKey="do-reserve" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="do-reserve" title="Fazer reservas">
                    <div id="tab-content">
                        <form id="reserves-form">
                            <fieldset id="select-space">
                                <ul id="list-space">
                                    <li 
                                        className={`space-button ${placeTarget === '1' ? 'selected' : ''}`} 
                                        onClick={() => setPlaceTarget('1')}
                                    >
                                        <svg width="52" height="45" viewBox="0 0 52 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M33.5833 8.78049C35.9667 8.78049 37.9167 6.80488 37.9167 4.39024C37.9167 1.97561 35.9667 0 33.5833 0C31.2 0 29.25 1.97561 29.25 4.39024C29.25 6.80488 31.2 8.78049 33.5833 8.78049ZM10.8333 23.0488C4.76667 23.0488 0 27.878 0 34.0244C0 40.1707 4.76667 45 10.8333 45C16.9 45 21.6667 40.1707 21.6667 34.0244C21.6667 27.878 16.9 23.0488 10.8333 23.0488ZM10.8333 41.7073C6.71667 41.7073 3.25 38.1951 3.25 34.0244C3.25 29.8537 6.71667 26.3415 10.8333 26.3415C14.95 26.3415 18.4167 29.8537 18.4167 34.0244C18.4167 38.1951 14.95 41.7073 10.8333 41.7073ZM23.4 19.7561L28.6 14.4878L30.3333 16.2439C33.15 19.0976 36.8333 20.8537 41.3833 20.8537V16.4634C38.1333 16.4634 35.5333 15.1463 33.5833 13.1707L29.4667 9C28.3833 8.12195 27.3 7.68293 26 7.68293C24.7 7.68293 23.6167 8.12195 22.9667 9L16.9 15.1463C16.0333 16.0244 15.6 17.122 15.6 18.2195C15.6 19.5366 16.0333 20.6341 16.9 21.2927L23.8333 27.439V38.4146H28.1667V24.8049L23.4 19.7561ZM41.1667 23.0488C35.1 23.0488 30.3333 27.878 30.3333 34.0244C30.3333 40.1707 35.1 45 41.1667 45C47.2333 45 52 40.1707 52 34.0244C52 27.878 47.2333 23.0488 41.1667 23.0488ZM41.1667 41.7073C37.05 41.7073 33.5833 38.1951 33.5833 34.0244C33.5833 29.8537 37.05 26.3415 41.1667 26.3415C45.2833 26.3415 48.75 29.8537 48.75 34.0244C48.75 38.1951 45.2833 41.7073 41.1667 41.7073Z" fill={placeTarget === '1' ? 'white' : '#418C41'}/>
                                        </svg>
                                        <h3>Academia</h3>
                                    </li>

                                    <li 
                                        className={`space-button ${placeTarget === '2' ? 'selected' : ''}`} 
                                        onClick={() => setPlaceTarget('2')}
                                    >
                                        <svg width="52" height="45" viewBox="0 0 52 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M33.5833 8.78049C35.9667 8.78049 37.9167 6.80488 37.9167 4.39024C37.9167 1.97561 35.9667 0 33.5833 0C31.2 0 29.25 1.97561 29.25 4.39024C29.25 6.80488 31.2 8.78049 33.5833 8.78049ZM10.8333 23.0488C4.76667 23.0488 0 27.878 0 34.0244C0 40.1707 4.76667 45 10.8333 45C16.9 45 21.6667 40.1707 21.6667 34.0244C21.6667 27.878 16.9 23.0488 10.8333 23.0488ZM10.8333 41.7073C6.71667 41.7073 3.25 38.1951 3.25 34.0244C3.25 29.8537 6.71667 26.3415 10.8333 26.3415C14.95 26.3415 18.4167 29.8537 18.4167 34.0244C18.4167 38.1951 14.95 41.7073 10.8333 41.7073ZM23.4 19.7561L28.6 14.4878L30.3333 16.2439C33.15 19.0976 36.8333 20.8537 41.3833 20.8537V16.4634C38.1333 16.4634 35.5333 15.1463 33.5833 13.1707L29.4667 9C28.3833 8.12195 27.3 7.68293 26 7.68293C24.7 7.68293 23.6167 8.12195 22.9667 9L16.9 15.1463C16.0333 16.0244 15.6 17.122 15.6 18.2195C15.6 19.5366 16.0333 20.6341 16.9 21.2927L23.8333 27.439V38.4146H28.1667V24.8049L23.4 19.7561ZM41.1667 23.0488C35.1 23.0488 30.3333 27.878 30.3333 34.0244C30.3333 40.1707 35.1 45 41.1667 45C47.2333 45 52 40.1707 52 34.0244C52 27.878 47.2333 23.0488 41.1667 23.0488ZM41.1667 41.7073C37.05 41.7073 33.5833 38.1951 33.5833 34.0244C33.5833 29.8537 37.05 26.3415 41.1667 26.3415C45.2833 26.3415 48.75 29.8537 48.75 34.0244C48.75 38.1951 45.2833 41.7073 41.1667 41.7073Z" fill={placeTarget === '2' ? 'white' : '#418C41'}/>
                                        </svg>
                                        <h3>Piscina</h3>
                                    </li>

                                    <li 
                                        className={`space-button ${placeTarget === '3' ? 'selected' : ''}`} 
                                        onClick={() => setPlaceTarget('3')}
                                    >
                                        <svg width="52" height="45" viewBox="0 0 52 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M33.5833 8.78049C35.9667 8.78049 37.9167 6.80488 37.9167 4.39024C37.9167 1.97561 35.9667 0 33.5833 0C31.2 0 29.25 1.97561 29.25 4.39024C29.25 6.80488 31.2 8.78049 33.5833 8.78049ZM10.8333 23.0488C4.76667 23.0488 0 27.878 0 34.0244C0 40.1707 4.76667 45 10.8333 45C16.9 45 21.6667 40.1707 21.6667 34.0244C21.6667 27.878 16.9 23.0488 10.8333 23.0488ZM10.8333 41.7073C6.71667 41.7073 3.25 38.1951 3.25 34.0244C3.25 29.8537 6.71667 26.3415 10.8333 26.3415C14.95 26.3415 18.4167 29.8537 18.4167 34.0244C18.4167 38.1951 14.95 41.7073 10.8333 41.7073ZM23.4 19.7561L28.6 14.4878L30.3333 16.2439C33.15 19.0976 36.8333 20.8537 41.3833 20.8537V16.4634C38.1333 16.4634 35.5333 15.1463 33.5833 13.1707L29.4667 9C28.3833 8.12195 27.3 7.68293 26 7.68293C24.7 7.68293 23.6167 8.12195 22.9667 9L16.9 15.1463C16.0333 16.0244 15.6 17.122 15.6 18.2195C15.6 19.5366 16.0333 20.6341 16.9 21.2927L23.8333 27.439V38.4146H28.1667V24.8049L23.4 19.7561ZM41.1667 23.0488C35.1 23.0488 30.3333 27.878 30.3333 34.0244C30.3333 40.1707 35.1 45 41.1667 45C47.2333 45 52 40.1707 52 34.0244C52 27.878 47.2333 23.0488 41.1667 23.0488ZM41.1667 41.7073C37.05 41.7073 33.5833 38.1951 33.5833 34.0244C33.5833 29.8537 37.05 26.3415 41.1667 26.3415C45.2833 26.3415 48.75 29.8537 48.75 34.0244C48.75 38.1951 45.2833 41.7073 41.1667 41.7073Z" fill={placeTarget === '3' ? 'white' : '#418C41'}/>
                                        </svg>
                                        <h3>Brinquedoteca</h3>
                                    </li>

                                    <li 
                                        className={`space-button ${placeTarget === '4' ? 'selected' : ''}`} 
                                        onClick={() => setPlaceTarget('4')}
                                    >
                                        <svg width="52" height="45" viewBox="0 0 52 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M33.5833 8.78049C35.9667 8.78049 37.9167 6.80488 37.9167 4.39024C37.9167 1.97561 35.9667 0 33.5833 0C31.2 0 29.25 1.97561 29.25 4.39024C29.25 6.80488 31.2 8.78049 33.5833 8.78049ZM10.8333 23.0488C4.76667 23.0488 0 27.878 0 34.0244C0 40.1707 4.76667 45 10.8333 45C16.9 45 21.6667 40.1707 21.6667 34.0244C21.6667 27.878 16.9 23.0488 10.8333 23.0488ZM10.8333 41.7073C6.71667 41.7073 3.25 38.1951 3.25 34.0244C3.25 29.8537 6.71667 26.3415 10.8333 26.3415C14.95 26.3415 18.4167 29.8537 18.4167 34.0244C18.4167 38.1951 14.95 41.7073 10.8333 41.7073ZM23.4 19.7561L28.6 14.4878L30.3333 16.2439C33.15 19.0976 36.8333 20.8537 41.3833 20.8537V16.4634C38.1333 16.4634 35.5333 15.1463 33.5833 13.1707L29.4667 9C28.3833 8.12195 27.3 7.68293 26 7.68293C24.7 7.68293 23.6167 8.12195 22.9667 9L16.9 15.1463C16.0333 16.0244 15.6 17.122 15.6 18.2195C15.6 19.5366 16.0333 20.6341 16.9 21.2927L23.8333 27.439V38.4146H28.1667V24.8049L23.4 19.7561ZM41.1667 23.0488C35.1 23.0488 30.3333 27.878 30.3333 34.0244C30.3333 40.1707 35.1 45 41.1667 45C47.2333 45 52 40.1707 52 34.0244C52 27.878 47.2333 23.0488 41.1667 23.0488ZM41.1667 41.7073C37.05 41.7073 33.5833 38.1951 33.5833 34.0244C33.5833 29.8537 37.05 26.3415 41.1667 26.3415C45.2833 26.3415 48.75 29.8537 48.75 34.0244C48.75 38.1951 45.2833 41.7073 41.1667 41.7073Z" fill={placeTarget === '4' ? 'white' : '#418C41'}/>
                                        </svg>
                                        <h3>Campinho</h3>
                                    </li>
                                </ul>
                            </fieldset>
                            
                            <p className={!!placeTarget ? "hidden" : "showMessage"}>Antes de escolher a data da reserva, escolha o espaço desejado</p>

                            <Accordion bsPrefix={!placeTarget ? 'accordion disabled' : 'accordion'} activeKey={collapse}>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header onClick={() => setCollapse(!collapse ? "0" : "")}>
                                        <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.3333 2.6H20V0H17.3333V2.6H6.66667V0H4V2.6H2.66667C1.18667 2.6 0.0133333 3.77 0.0133333 5.2L0 23.4C0 24.83 1.18667 26 2.66667 26H21.3333C22.8 26 24 24.83 24 23.4V5.2C24 3.77 22.8 2.6 21.3333 2.6ZM21.3333 23.4H2.66667V9.1H21.3333V23.4ZM5.33333 11.7H12V18.2H5.33333V11.7Z" fill="#D4D4D4"/>
                                        </svg>

                                        <p>{!dateTarget ? "Dias disponíveis" : structuringDate(dateTarget)}</p>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <Calendar 
                                            className="calendar"
                                            onChange={(e: any) => {setDateTarget(e); setCollapse("")}}
                                            minDate={new Date(dateToday.getUTCFullYear(), dateToday.getMonth(), dateToday.getDate())}
                                        />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header onClick={() => setCollapse(!collapse ? "1" : "")}>
                                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 3.86L15.4 0L14.11 1.53L18.71 5.39L20 3.86ZM5.88 1.53L4.6 0L0 3.85L1.29 5.38L5.88 1.53ZM10.5 6.14H9V12.14L13.75 14.99L14.5 13.76L10.5 11.39V6.14ZM10 2.14C5.03 2.14 1 6.17 1 11.14C1 16.11 5.02 20.14 10 20.14C14.97 20.14 19 16.11 19 11.14C19 6.17 14.97 2.14 10 2.14ZM10 18.14C6.13 18.14 3 15.01 3 11.14C3 7.27 6.13 4.14 10 4.14C13.87 4.14 17 7.27 17 11.14C17 15.01 13.87 18.14 10 18.14Z" fill="#D4D4D4"/>
                                        </svg>

                                        <p>{!scheduleTarget ? "Horários disponíveis" : schedule}</p>
                                    </Accordion.Header>
                                    
                                    <Accordion.Body>
                                        <ListGroup activeKey={scheduleTarget} onClick={()=> {setCollapse("")}}>
                                            <ListGroup.Item action as="text" href="1" onClick={(e) => {
                                                setScheduleTarget("1");
                                                setSchedule(e.currentTarget.innerHTML)
                                                }}>
                                                8:00 - 9:00
                                            </ListGroup.Item>

                                            <ListGroup.Item action as="text" href="2" onClick={(e) => {
                                                setScheduleTarget("2");
                                                setSchedule(e.currentTarget.innerHTML)
                                                }}>
                                                9:00 - 10:00
                                            </ListGroup.Item>

                                            <ListGroup.Item action as="text" href="3" onClick={(e) => {
                                                setScheduleTarget("3");
                                                setSchedule(e.currentTarget.innerHTML)
                                                }}>
                                                10:00 - 11:00
                                            </ListGroup.Item>

                                            <ListGroup.Item action as="text" href="4" onClick={(e) => {
                                                setScheduleTarget("4");
                                                setSchedule(e.currentTarget.innerHTML)
                                                }}>
                                                11:00 - 12:00
                                            </ListGroup.Item>

                                            <ListGroup.Item action as="text" href="5" onClick={(e) => {
                                                setScheduleTarget("5");
                                                setSchedule(e.currentTarget.innerHTML)
                                                }}>
                                                12:00 - 13:00
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            <p className={!placeTarget ? "hidden" : "showMessage"}>Algum aviso aleatória que possa ter nesse lugar sobre algumas regras básicas da academia, regras principais.</p>

                            <button disabled={!scheduleTarget} type="submit" id="confirm">
                                Confirmar reserva
                            </button>
                        </form>
                    </div>
                </Tab>

                <Tab eventKey="my-reserves" title="Minhas reservas">
                    <div id="tab-content">
                        <ul className="listing">
                            <li>
                                <div id="reserves-info">
                                    <svg viewBox="0 0 52 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M33.5833 8.78049C35.9667 8.78049 37.9167 6.80488 37.9167 4.39024C37.9167 1.97561 35.9667 0 33.5833 0C31.2 0 29.25 1.97561 29.25 4.39024C29.25 6.80488 31.2 8.78049 33.5833 8.78049ZM10.8333 23.0488C4.76667 23.0488 0 27.878 0 34.0244C0 40.1707 4.76667 45 10.8333 45C16.9 45 21.6667 40.1707 21.6667 34.0244C21.6667 27.878 16.9 23.0488 10.8333 23.0488ZM10.8333 41.7073C6.71667 41.7073 3.25 38.1951 3.25 34.0244C3.25 29.8537 6.71667 26.3415 10.8333 26.3415C14.95 26.3415 18.4167 29.8537 18.4167 34.0244C18.4167 38.1951 14.95 41.7073 10.8333 41.7073ZM23.4 19.7561L28.6 14.4878L30.3333 16.2439C33.15 19.0976 36.8333 20.8537 41.3833 20.8537V16.4634C38.1333 16.4634 35.5333 15.1463 33.5833 13.1707L29.4667 9C28.3833 8.12195 27.3 7.68293 26 7.68293C24.7 7.68293 23.6167 8.12195 22.9667 9L16.9 15.1463C16.0333 16.0244 15.6 17.122 15.6 18.2195C15.6 19.5366 16.0333 20.6341 16.9 21.2927L23.8333 27.439V38.4146H28.1667V24.8049L23.4 19.7561ZM41.1667 23.0488C35.1 23.0488 30.3333 27.878 30.3333 34.0244C30.3333 40.1707 35.1 45 41.1667 45C47.2333 45 52 40.1707 52 34.0244C52 27.878 47.2333 23.0488 41.1667 23.0488ZM41.1667 41.7073C37.05 41.7073 33.5833 38.1951 33.5833 34.0244C33.5833 29.8537 37.05 26.3415 41.1667 26.3415C45.2833 26.3415 48.75 29.8537 48.75 34.0244C48.75 38.1951 45.2833 41.7073 41.1667 41.7073Z" fill="#53B253"/>
    </svg>

                                    <div id="info-text">
                                        <h3>Academia</h3>
                                        <h5>08-09h</h5>
                                    </div>
                                </div>
                                
                                <img src={trashIcon} alt="Excluir reserva" />
                            </li>
                        </ul>
                    </div>
                </Tab>
            </Tabs>
            
 
            <Offcanvas show={menuContext.show} onHide={() => menuContext.setShow(false)} placement="end">
                <OffcanvasContent />
            </Offcanvas>

        </div>
    );
}