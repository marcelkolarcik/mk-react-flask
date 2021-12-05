import {createContext, useState} from 'react';

const BookingContext = createContext(
    {
        bookings: [],
        totalBookings: 0,
        addBooking: (booking) => {
        },
        country: '',
        setCountry: (country) => {
        },
        totalCost: '',
        setTotalCost: (pricePerNight) => {
        },
        startDate: '',
        setStartDate: (startDate) => {
        },
        endDate: '',
        setEndDate: (endDate) => {
        },
        numOfNights: 0,
        setNumOfNights: (startDate, endDate) => {
        },
        guests: 0,
        setGuests: (guest, maxGuests = null) => {
        },
        roomName: '',
        setRoomName: (roomName) => {
        },
        roomImage: '',
        setRoomImage: (URL) => {
        },
        clearCurrentBooking: () => {
        }
    }
)

export function BookingContextProvider(props) {

    const [bookings, setBookings] = useState([]);

    const [country, setCountry] = useState('');
    const [roomName, setRoomName] = useState('');
    const [roomImage, setRoomImage] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [numOfNights, setNumOfNights] = useState(0);
    const [totalCost, setTotalCost] = useState(0);
    const [guests, setGuests] = useState(0);

    function addBookingHandler(booking) {
        setBookings((prevBookings) => {
            return prevBookings.concat(booking)
        })
    }

    function setCountryHandler(country) {
        setCountry(country)
    }

    function setStartDateHandler(date) {
        setStartDate(date)
    }

    function setEndDateHandler(date) {
        setEndDate(date)
    }

    function setRoomImageHandler(URL) {
        setRoomImage(URL)
    }

    function setNumOfNightsHandler(startDate, endDate) {
        setNumOfNights(Math.round((endDate - startDate) / (1000 * 60 * 60 * 24)))
    }

    function setTotalCostHandler(pricePerNight) {
        setTotalCost(pricePerNight * numOfNights)
    }

    function setGuestsHandler(number, maxGuests = null) {

        if (maxGuests) {
            setGuests((prevNumber) => {
                if (prevNumber + number >= 0 && prevNumber + number <= maxGuests) return prevNumber + number
                else if (prevNumber + number > maxGuests) return maxGuests
                else return 0

            })
        } else {
            setGuests((prevNumber) => {
                return prevNumber + number >= 0 ? prevNumber + number : 0
            })
        }

    }

    function setRoomNameHandler(roomName) {
        setRoomName(roomName)
    }

    function clearCurrentBookingHandler() {
        setRoomName('');
        setTotalCost(0);
        setGuests(0);
        setCountry('');
        setRoomImage('');
        setNumOfNights(0);
        setStartDate('');
        setEndDate('');

    }

    const context = {
        bookings: bookings,
        totalBookings: bookings.length,
        addBooking: addBookingHandler,
        country: country,
        setCountry: setCountryHandler,
        startDate: startDate,
        setStartDate: setStartDateHandler,
        endDate: endDate,
        setEndDate: setEndDateHandler,
        numOfNights: numOfNights,
        setNumOfNights: setNumOfNightsHandler,
        guests: guests,
        setGuests: setGuestsHandler,
        totalCost: totalCost,
        setTotalCost: setTotalCostHandler,
        roomName: roomName,
        setRoomName: setRoomNameHandler,
        roomImage: roomImage,
        setRoomImage: setRoomImageHandler,
        clearCurrentBooking: clearCurrentBookingHandler


    }

    return <BookingContext.Provider value={context}>
        {props.children}
    </BookingContext.Provider>

}

export default BookingContext;