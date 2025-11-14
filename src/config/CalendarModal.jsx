import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

function CalendarModal({
    isCalendarOpen,
    onClose,
    checkInDate,
    checkOutDate,
    onDateSelect,
    setCheckInDate,
    setCheckOutDate
}) {

    // const [dateMode, setDateMode] = useState('checkIn');
    const [tempCheckIn, setTempCheckIn] = useState(checkInDate);
    const [tempCheckOut, setTempCheckOut] = useState(checkOutDate);
    const [currentMonth, setCurrentMonth] = useState(new Date(2025, 10));
    const [hoverDate, setHoverDate] = useState(null);

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const dateNow = new Date();
    let dayNow = dateNow.getDate();

    if(!isCalendarOpen) return null;

    const getDaysInMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        const days = [];

        for(let i = 0; i < firstDay; i++){
            days.push(null);
        }

        for(let i = 1; i <= daysInMonth; i++){
            days.push(new Date(year, month, i));
        }
        return days;
    };

    const handleDateClick = (date) => {
        if(!date) return;

        if(!tempCheckIn || (tempCheckIn && tempCheckOut)){
            setTempCheckIn(date);
            setTempCheckOut(null);
        } else if(tempCheckIn && !tempCheckOut){
            if(date > tempCheckIn){
                setTempCheckOut(date);
            }else{
                setTempCheckIn(date);
                setTempCheckOut(tempCheckIn);
            }
        }
    };

    const isDateInRange = (date) => {
        if(!date || !tempCheckIn) return false;

        const compareDate = tempCheckOut || hoverDate;
        if(!compareDate) return false;

        const start = tempCheckIn < compareDate ? tempCheckIn : compareDate;
        const end = tempCheckIn < compareDate ? compareDate : tempCheckIn;

        return date >= start && date <= end;
    };

    const isDateBeforeToday = (date) => {
        if(!date) return false;

        const today = new Date();
        today.setHours(0,0,0,0);
        return date < today;
    };

    const isDateSelected = (date) => {
        if(!date) return false;
        return (tempCheckIn && date.getTime() === tempCheckIn.getTime()) ||
                (tempCheckOut && date.getTime() === tempCheckOut.getTime());
    };

    const nextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
    };

    const prevMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
    };

    const getNextMonth = () => {
        return new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1);
    };

    const handleReset = () => {
        setTempCheckIn(null);
        setTempCheckOut(null);
        setCheckInDate(null);
        setCheckOutDate(null);
        setHoverDate(null);
        setCurrentMonth(new Date());
    };

    const handleApply = () => {
        if(tempCheckIn && tempCheckOut){
            onDateSelect(tempCheckIn, tempCheckOut);
        }
        onClose();
    }

    const renderCalendar = (date) => {
        const days = getDaysInMonth(date);
    
    return (
        <div className="flex-1 px-4">
            <div className="text-center font-semibold text-black text-lg mb-4">
            {monthNames[date.getMonth()]} {date.getFullYear()}
            </div>
            
            <div className="grid grid-cols-7 gap-2 mb-2">
            {dayNames.map(day => (
                <div key={day} className="text-center text-sm text-gray-500 font-medium py-2">
                {day}
                </div>
            ))}
            </div>
            
            <div className="grid grid-cols-7 gap-2">
            {days.map((day, idx) => {
                if (!day) {
                return <div key={`empty-${idx}`} className="aspect-square" />;
                }
                
                const isSelected = isDateSelected(day);
                const inRange = isDateInRange(day);
                const isToday = day.getDate() === dayNow && day.getMonth() === 10;
                
                return (
                <button
                    key={idx}
                    onClick={() => handleDateClick(day)}
                    onMouseEnter={() => tempCheckIn && !tempCheckOut && setHoverDate(day)}
                    onMouseLeave={() => setHoverDate(null)}
                    className={`
                    aspect-square flex items-center justify-center rounded-full text-sm font-medium text-gray-800 transition-all duration-200
                    ${isSelected ? 'bg-black text-white' : ''}
                    ${inRange && !isSelected ? 'bg-gray-200' : ''}
                    ${!isSelected && !inRange ? 'hover:bg-gray-100' : ''}
                    ${isToday && !isSelected ? 'ring-2 ring-black ring-opacity-30' : ''}
                    ${isDateBeforeToday(day) ? 'text-gray-300 cursor-not-allowed hover:bg-transparent' : 'cursor-pointer'}
                    `}
                    disabled={isDateBeforeToday(day)}
                >
                    {day.getDate()}
                </button>
                );
            })}
            </div>
        </div>
        );
    };

    return(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl w-full">
                {/* Calendar Navigation */}
                <div className="flex items-center justify-between px-6 py-4">
                    <button 
                        onClick={prevMonth}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <HiChevronLeft className="w-5 h-5" />
                    </button>
                    <div className="flex-1" />
                    <button 
                        onClick={nextMonth}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <HiChevronRight className="w-5 h-5" />
                    </button>
                </div>

                {/* Double Calendar */}
                <div className="flex pb-6">
                    {renderCalendar(currentMonth)}
                    <div className="w-px bg-gray-200" />
                    {renderCalendar(getNextMonth())}
                </div>

                {/* Footer */}
                <div className="border-t px-6 py-4 flex items-center justify-between">
                    <button
                        onClick={handleReset}
                        className="text-sm font-medium underline hover:no-underline hover:text-gray-600 transition-colors"
                    >
                        Reset
                    </button>
                    <button
                        onClick={handleApply}
                        className="px-8 py-2 border border-black rounded-full font-medium text-black hover:bg-black hover:text-white transition-colors"
                    >
                        Done
                    </button>
                </div>
            </div>
        </div>
    );
}
export { CalendarModal };