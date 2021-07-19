import {  ReactNode, useEffect, useState } from 'react';

import Calendar from 'react-calendar';
import { structuringDate, structuringDateForInput } from '../../../../utils/structuringDate';

import './styles.scss';
import 'react-calendar/dist/Calendar.css';
import { rules } from '../../../../utils/reservesRules';
import { api2 } from '../../../../services/api';


type UnavailableScheduleProps = {
    date: string;
    schedule: number[];
}

type RulesProps = {
    idLocal: number,
    nameLocal: string,
    inicialHour: number,
    finalHour: number,
    reservesLimit: number,
    allDay: boolean
}

export function Reserves() {  

    const [placeTarget, setPlaceTarget] = useState<string | null>('')
    const [dateTarget, setDateTarget] = useState(new Date());
    const [disabledInput, setDisabledInput] = useState(true);
    const [calendarVisibility, setCalendarVisibility] = useState(false);
    const [listSchedule, setListSchedule] = useState<ReactNode[]>();

    const dateToday = new Date();
    
    function renderLocals() {
        let aux: ReactNode[] = [];

        for(let i = 0; i < rules.length; i++)
            aux.push(
                <input 
                    key={rules[i].idLocal.toString()} 
                    itemID={rules[i].idLocal.toString()} 
                    type="button" 
                    value={rules[i].nameLocal} 
                    onFocus={e => handleGetUnavailableSchedule(e.currentTarget.getAttribute("itemID"))}
                />
            );

        return aux;
    }
   
    useEffect(() => {
        !!placeTarget && console.log(placeTarget)
    }, [placeTarget, dateTarget])

    async function handleGetUnavailableSchedule(itemId: string | null) {
        const { data } = await api2.get(`/reservas/${itemId}`)
        const rulesPlace = rules[rules.map(e => e.idLocal.toString() === itemId).indexOf(true)];

        disabledInput && setDisabledInput(false)
        setListSchedule(renderReservesOptions(rulesPlace, data))
        setPlaceTarget(itemId);
    }    

    useEffect(() => {
        const calendar: HTMLElement | null = document.querySelector('.calendar')
        calendar !== null && (calendarVisibility ? calendar.style.display = "block" : calendar.style.display = "none");
    }, [calendarVisibility])

    function countLimitReserves(hour: number, schedule: number[], limit: number) {
        const a = schedule.filter(e => e === hour)
        return a.length === limit;
    }

    function filterUnavailableScheduleAtDay(hour: number, value: UnavailableScheduleProps[], limit: number) {
        const id = value.map(e => e.date === structuringDate(dateTarget))
        const index = id.indexOf(true)
        return index !== -1 && countLimitReserves(hour, value[index].schedule, limit)
    }

    function renderReservesOptions(rules: RulesProps, schedule: UnavailableScheduleProps[]) {
        let aux: ReactNode[] = [];

        for(let i = rules.inicialHour; i < rules.finalHour; rules.allDay ? i+=rules.finalHour : i++)
            aux.push(
                <option 
                    key={i.toString()}
                    itemID={rules.idLocal.toString()} 
                    disabled={filterUnavailableScheduleAtDay(i, schedule, rules.reservesLimit)}
                >
                    {`${i}:00 - ${rules.allDay ? rules.finalHour : i+1}:00`}
                </option>
            );

        return aux;
    }

    // function handleCreateReserve(e: FormEvent) {
    //     e.preventDefault()

    //     api2.post('/reservas', {

    //     })
    // }

    return(
        <div id="content">
            <form>
                <fieldset id="local">
                    {renderLocals()}
                </fieldset>

                <fieldset id="calendar">
                    <input 
                        type="date" 
                        disabled={disabledInput}
                        id="dateInput" 
                        onClick={() => setCalendarVisibility(!calendarVisibility && true)} 
                        value={structuringDateForInput(dateTarget)} 
                        
                    />

                    <Calendar 
                        value={dateTarget}
                        className="calendar"
                        onClickDay = {() => setCalendarVisibility(!calendarVisibility && true)}
                        onChange={(e: any) => {
                            setDateTarget(e);
                            handleGetUnavailableSchedule(placeTarget)
                        }}
                        minDate={new Date(dateToday.getUTCFullYear(), dateToday.getMonth(), dateToday.getDate())}
                    />
                </fieldset>
                
                <select disabled={disabledInput}>
                    {disabledInput ? <option>Selecione um horário</option> : listSchedule}
                </select>
            </form>
        </div>
    );
}