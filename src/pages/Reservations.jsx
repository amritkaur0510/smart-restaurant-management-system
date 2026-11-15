import { useState } from "react";
import reservationImage from "../assets/reservation.jpeg";
import "../styles/Reservations.css";

function Reservations() {

    const initialForm = {
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "2",
        location: "Main Dining Room",
        notes: ""
    };

    const [formData, setFormData] = useState(initialForm);
    const [reservations, setReservations] = useState([]);
    const [confirmedReservation, setConfirmedReservation] = useState(null);

    // Update form values
    function handleChange(e) {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

        setConfirmedReservation(null);
    }

    // Submit reservation
    function handleSubmit(e) {
        e.preventDefault();

        const newReservation = {
            id: Date.now(),
            ...formData,
            status: "Confirmed"
        };

        setReservations([...reservations, newReservation]);
        setConfirmedReservation(newReservation);
        setFormData(initialForm);
    }

    // Cancel reservation
    function handleCancel(id) {
        setReservations(
            reservations.filter((reservation) => reservation.id !== id)
        );

        if (confirmedReservation && confirmedReservation.id === id) {
            setConfirmedReservation(null);
        }
    }

    // Format date
    function formatDate(date) {
        return new Date(date + "T00:00:00").toLocaleDateString("en-CA", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    }

    return (
        <div className="reservationPage">

            {/* Page Heading */}
            <div className="reservationHeader">
                <p className="reservationSubtitle">A TABLE JUST FOR YOU</p>
                <h1>Make a Reservation</h1>
                <p>
                    Good food deserves good company. Reserve your table
                    and let us take care of the rest.
                </p>
            </div>

            {/* Reservation Form and Image */}
            <div className="reservationLayout">

                <div className="reservationFormSection">

                    <div className="reservationSectionHeading">
                        <span>01</span>
                        <div>
                            <h2>Your Details</h2>
                            <p>Tell us a little about your visit.</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit}>

                        <div className="reservationInputGroup">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="reservationInputRow">

                            <div className="reservationInputGroup">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="your@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="reservationInputGroup">
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="Your phone number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                        </div>

                        <div className="reservationSectionHeading bookingDetailsHeading">
                            <span>02</span>
                            <div>
                                <h2>Booking Details</h2>
                                <p>Choose when and where you would like to dine.</p>
                            </div>
                        </div>

                        <div className="reservationInputRow">

                            <div className="reservationInputGroup">
                                <label htmlFor="date">Date</label>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    min={new Date().toLocaleDateString("en-CA")}
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="reservationInputGroup">
                                <label htmlFor="time">Preferred Time</label>
                                <select
                                    id="time"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select a time</option>
                                    <option value="11:00 AM">11:00 AM</option>
                                    <option value="12:00 PM">12:00 PM</option>
                                    <option value="1:00 PM">1:00 PM</option>
                                    <option value="2:00 PM">2:00 PM</option>
                                    <option value="5:00 PM">5:00 PM</option>
                                    <option value="6:00 PM">6:00 PM</option>
                                    <option value="7:00 PM">7:00 PM</option>
                                    <option value="8:00 PM">8:00 PM</option>
                                    <option value="9:00 PM">9:00 PM</option>
                                </select>
                            </div>

                        </div>

                        <div className="reservationInputRow">

                            <div className="reservationInputGroup">
                                <label htmlFor="guests">Number of Guests</label>
                                <select
                                    id="guests"
                                    name="guests"
                                    value={formData.guests}
                                    onChange={handleChange}
                                >
                                    <option value="1">1 Guest</option>
                                    <option value="2">2 Guests</option>
                                    <option value="3">3 Guests</option>
                                    <option value="4">4 Guests</option>
                                    <option value="5">5 Guests</option>
                                    <option value="6">6 Guests</option>
                                    <option value="7">7 Guests</option>
                                    <option value="8">8 Guests</option>
                                </select>
                            </div>

                            <div className="reservationInputGroup">
                                <label htmlFor="location">Seating Preference</label>
                                <select
                                    id="location"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                >
                                    <option value="Main Dining Room">Main Dining Room</option>
                                    <option value="Patio">Patio</option>
                                    <option value="Private Dining">Private Dining</option>
                                </select>
                            </div>

                        </div>

                        <div className="reservationInputGroup">
                            <label htmlFor="notes">
                                Special Requests <span>(Optional)</span>
                            </label>
                            <textarea
                                id="notes"
                                name="notes"
                                placeholder="Any special occasion or requests?"
                                value={formData.notes}
                                onChange={handleChange}
                                rows="3"
                            />
                        </div>

                        <button type="submit" className="reserveButton">
                            Reserve My Table
                            <i className="bi bi-arrow-right"></i>
                        </button>

                    </form>

                    {/* Reservation Receipt */}
                    {confirmedReservation && (
                        <div className="reservationReceipt">

                            <div className="receiptHeader">
                                <i className="bi bi-check-circle-fill"></i>
                                <h2>Reservation Confirmed!</h2>
                                <p>Your table has been successfully reserved.</p>
                            </div>

                            <div className="receiptReference">
                                <span>BOOKING REFERENCE</span>
                                <strong>RES-{confirmedReservation.id}</strong>
                            </div>

                            <div className="receiptDetails">
                                <h3>Reservation Details</h3>

                                <div className="receiptRow">
                                    <span>Customer Name</span>
                                    <strong>{confirmedReservation.name}</strong>
                                </div>

                                <div className="receiptRow">
                                    <span>Email</span>
                                    <strong>{confirmedReservation.email}</strong>
                                </div>

                                <div className="receiptRow">
                                    <span>Phone</span>
                                    <strong>{confirmedReservation.phone}</strong>
                                </div>

                                <div className="receiptRow">
                                    <span>Date</span>
                                    <strong>{formatDate(confirmedReservation.date)}</strong>
                                </div>

                                <div className="receiptRow">
                                    <span>Time</span>
                                    <strong>{confirmedReservation.time}</strong>
                                </div>

                                <div className="receiptRow">
                                    <span>Guests</span>
                                    <strong>{confirmedReservation.guests}</strong>
                                </div>

                                <div className="receiptRow">
                                    <span>Seating</span>
                                    <strong>{confirmedReservation.location}</strong>
                                </div>

                                {confirmedReservation.notes && (
                                    <div className="receiptRow">
                                        <span>Special Requests</span>
                                        <strong>{confirmedReservation.notes}</strong>
                                    </div>
                                )}
                            </div>

                            <div className="receiptFooter">
                                <i className="bi bi-info-circle"></i>
                                <span>
                                    This is your reservation confirmation.
                                    Email notifications will be sent
                                    soon.
                                </span>
                            </div>

                        </div>
                    )}

                </div>

                {/* Restaurant Image and Information */}
                <div className="reservationVisual">

                    <img
                        src={reservationImage}
                        alt="Restaurant food platter"
                    />

                    <div className="reservationVisualContent">
                        <p>AN EXPERIENCE TO REMEMBER</p>
                        <h2>Good food.<br />Great moments.</h2>
                    </div>

                    <div className="reservationContact">

                        <div>
                            <i className="bi bi-clock"></i>
                            <span>Opening Hours</span>
                            <p>Monday – Sunday</p>
                            <p>11:00 AM – 10:00 PM</p>
                        </div>

                        <div>
                            <i className="bi bi-telephone"></i>
                            <span>Have Questions?</span>
                            <p>Contact our restaurant team</p>
                        </div>

                    </div>

                </div>

            </div>

            {/* My Reservations */}
            <section className="myReservations">

                <div className="myReservationsHeading">

                    <div>
                        <p className="reservationSubtitle">YOUR BOOKINGS</p>
                        <h2>My Reservations</h2>
                        <p>View and manage your upcoming table bookings.</p>
                    </div>

                    <span className="reservationCount">
                        {reservations.length} Bookings
                    </span>

                </div>

                {reservations.length === 0 ? (

                    <div className="emptyReservations">
                        <i className="bi bi-calendar2-check"></i>
                        <h3>No reservations yet</h3>
                        <p>
                            Your bookings will appear here once you reserve a table.
                        </p>
                    </div>

                ) : (

                    <div className="reservationList">

                        {reservations.map((reservation) => (

                            <div className="reservationCard" key={reservation.id}>

                                <div className="reservationCardDate">
                                    <i className="bi bi-calendar-event"></i>
                                    <span>{formatDate(reservation.date)}</span>
                                </div>

                                <div className="reservationCardInfo">
                                    <h3>{reservation.name}</h3>

                                    <p>
                                        <i className="bi bi-clock"></i>
                                        {reservation.time}
                                    </p>

                                    <p>
                                        <i className="bi bi-people"></i>
                                        {reservation.guests} Guests
                                    </p>

                                    <p>
                                        <i className="bi bi-geo-alt"></i>
                                        {reservation.location}
                                    </p>
                                </div>

                                <div className="reservationCardActions">

                                    <span className="reservationStatus">
                                        {reservation.status}
                                    </span>

                                    <button
                                        type="button"
                                        onClick={() => handleCancel(reservation.id)}
                                        className="cancelReservationButton"
                                    >
                                        Cancel
                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </section>

        </div>
    );
}

export default Reservations;
