import { useHistory } from 'react-router-dom';
import { Offcanvas, Tabs, Tab } from 'react-bootstrap';
import Calendar from 'react-calendar';

import { OffcanvasContent } from '../../../../components/Offcanvas/OffcanvasContent/OffcanvasContent';
import { ButtonSpace } from '../../../../components/ButtonSpace/ButtonSpace';

import { useMenu } from '../../../../hooks/useMenu';

import hamburguerIcon from '../../../../assets/hamburguer.svg';
import returnIcon from '../../../../assets/arrow-left.svg';
import home from '../../../../assets/home.svg';

import './styles.scss';
import './Calendar.scss';

export function Reserves() {       
    const menuContext = useMenu();
    const history = useHistory();

    return(
        <div id="container">
            <header className="header-functions">
                <div id="nav-icons">
                    <img src={returnIcon} onClick={() => history.goBack()} alt="Retornar para a página anterior" />
                    <img src={hamburguerIcon} alt="abrir menu  lateral" 
                    id="hamburguer" onClick={() => menuContext.setShow(true)}
                    />
                </div>
            </header>
 
            <Tabs defaultActiveKey="do-reserve" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="do-reserve" title="Fazer reservas">
                    <div id="tab-content">
                        <form id="reserves-form">
                            <fieldset id="select-space">
                                <div>
                                    <ButtonSpace image={home} title="Academia"/>
                                    <ButtonSpace image={home} title="Academia"/>
                                    <ButtonSpace image={home} title="Academia"/>
                                    <ButtonSpace image={home} title="Academia"/>
                                    <ButtonSpace image={home} title="Academia"/>
                                    <ButtonSpace image={home} title="Academia"/>
                                </div>
                            </fieldset>

                            <p>Antes de escolher a data da reserva, escolha o espaço desejado</p>

                            <fieldset id="select-date">
                                 <button className="date-selection-button" disabled>
                                    <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.3333 2.6H20V0H17.3333V2.6H6.66667V0H4V2.6H2.66667C1.18667 2.6 0.0133333 3.77 0.0133333 5.2L0 23.4C0 24.83 1.18667 26 2.66667 26H21.3333C22.8 26 24 24.83 24 23.4V5.2C24 3.77 22.8 2.6 21.3333 2.6ZM21.3333 23.4H2.66667V9.1H21.3333V23.4ZM5.33333 11.7H12V18.2H5.33333V11.7Z" fill="#B7B7B7"/>
                                    </svg>

                                    <p>Dias disponíveis</p>
                                 </button>

                                 <Calendar />
                            </fieldset>

                            

                            
                        </form>
                    </div>
                </Tab>

                <Tab eventKey="my-reserves" title="Minhas reservas">
                    <h1>Tchau</h1>
                </Tab>
            </Tabs>
            
 
            <Offcanvas show={menuContext.show} onHide={() => menuContext.setShow(false)} placement="end">
                <OffcanvasContent />
            </Offcanvas>

        </div>
    );
}