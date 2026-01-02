import React, { useState } from 'react';
import '../styles/main.css';

const AppointmentForm = () => {
  const [appointmentFormData, setAppointmentFormData] = useState({
    patientName: '',
    patientEmail: '',
    patientPhone: '',
    appointmentDate: '',
    appointmentTime: '',
    serviceType: '',
    appointmentNotes: ''
  });

  const handleAppointmentSubmit = (e) => {
    e.preventDefault();
    alert('¡Cita agendada con éxito! Recibirá una confirmación por correo electrónico.');
  };

  const handleAppointmentChange = (e) => {
    const { name, value } = e.target;
    setAppointmentFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="appointment-page">
      <div className="container">
        <div className="section-title">
          <h2>Formulario de Citas</h2>
          <p>Agende su cita médica con el Dr. Anderson Snayder</p>
        </div>

        <div className="appointment-form">
          <form id="appointmentForm" onSubmit={handleAppointmentSubmit}>
            <div className="form-group">
              <label htmlFor="patientName">Nombre del Paciente</label>
              <input
                type="text"
                id="patientName"
                name="patientName"
                value={appointmentFormData.patientName}
                onChange={handleAppointmentChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="patientEmail">Correo Electrónico</label>
              <input
                type="email"
                id="patientEmail"
                name="patientEmail"
                value={appointmentFormData.patientEmail}
                onChange={handleAppointmentChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="patientPhone">Teléfono</label>
              <input
                type="tel"
                id="patientPhone"
                name="patientPhone"
                value={appointmentFormData.patientPhone}
                onChange={handleAppointmentChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="appointmentDate">Fecha de Cita</label>
              <input
                type="date"
                id="appointmentDate"
                name="appointmentDate"
                value={appointmentFormData.appointmentDate}
                onChange={handleAppointmentChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="appointmentTime">Hora de Cita</label>
              <select
                id="appointmentTime"
                name="appointmentTime"
                value={appointmentFormData.appointmentTime}
                onChange={handleAppointmentChange}
                required
              >
                <option value="">Seleccione una hora</option>
                <option value="8:00">8:00 am</option>
                <option value="9:00">9:00 am</option>
                <option value="10:00">10:00 am</option>
                <option value="11:00">11:00 am</option>
                <option value="14:00">2:00 pm</option>
                <option value="15:00">3:00 pm</option>
                <option value="16:00">4:00 pm</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="serviceType">Tipo de Servicio</label>
              <select
                id="serviceType"
                name="serviceType"
                value={appointmentFormData.serviceType}
                onChange={handleAppointmentChange}
                required
              >
                <option value="">Seleccione un servicio</option>
                <option value="consulta">Consulta Médica</option>
                <option value="cirugia-general">Cirugía General</option>
                <option value="cirugia-laparoscopica">Cirugía Laparoscópica</option>
                <option value="segunda-opinion">Segunda Opinión</option>
                <option value="seguimiento">Seguimiento Postoperatorio</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="appointmentNotes">Notas Adicionales</label>
              <textarea
                id="appointmentNotes"
                name="appointmentNotes"
                value={appointmentFormData.appointmentNotes}
                onChange={handleAppointmentChange}
              />
            </div>
            <button type="submit" className="btn">Agendar Cita</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
