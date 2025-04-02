<template>
  <div class="music-calendar">
    <h2>Calendrier des Cours</h2>
    <div class="calendar-container">
      <div class="calendar-header">
        <button @click="prevMonth" :disabled="isPrevDisabled">&lt;</button>
        <h3>{{ currentMonthName }} {{ currentYear }}</h3>
        <button @click="nextMonth" :disabled="isNextDisabled">&gt;</button>
      </div>
      <div class="calendar-grid">
        <div class="day-header" v-for="day in days" :key="day">{{ day }}</div>
        <div v-for="day in calendarDays" :key="day.date" class="calendar-day" :class="{
          'current-month': day.isCurrentMonth,
          'today': day.isToday,
          'has-course': day.hasCourse,
          'no-course-period': day.isNoCoursePeriod,
          'lundi': day.dayOfWeek === 1,
          'mardi': day.dayOfWeek === 2,
          'mercredi': day.dayOfWeek === 3,
          'jeudi': day.dayOfWeek === 4,
          'vendredi': day.dayOfWeek === 5,
          'samedi': day.dayOfWeek === 6,
          'dimanche': day.dayOfWeek === 0
        }" @click="openDayDetails(day)">
          <span class="day-number">{{ day.dayNumber }}</span>
          <span v-if="day.isNoCoursePeriod" class="no-course-label">Pas de cours</span>
        </div>
      </div>
    </div>

    <div v-if="selectedDay" class="day-details">
      <h3>Détails pour le {{ selectedDay.dayNumber }} {{ currentMonthName }} {{ currentYear }}</h3>
      <div v-if="selectedDay.hasCourse">
        <p>Cours prévus ce jour</p>
      </div>
      <p v-else-if="selectedDay.isNoCoursePeriod">Période sans cours</p>
      <p v-else>Aucun cours prévu ce jour</p>
      <button @click="selectedDay = null" class="close-btn">Fermer</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MusicCalendar',
  data() {
    return {
      currentDate: new Date(),
      days: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
      selectedDay: null,
      courseDays: {
        1: true,
        2: true,
        3: true,
        4: true,
        5: true,
        6: true,
        0: false
      },
      closedDays: [
        '2025-04-22'
      ],
      noCourseStart: new Date(2025, 3, 21),
      noCourseEnd: new Date(2025, 4, 4) 
    }
  },
  computed: {
    currentMonth() {
      return this.currentDate.getMonth();
    },
    currentYear() {
      return this.currentDate.getFullYear();
    },
    currentMonthName() {
      const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
        'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
      return months[this.currentMonth];
    },
    calendarDays() {
      const year = this.currentYear;
      const month = this.currentMonth;

      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);

      let firstDayOfWeek = firstDay.getDay() - 1;
      if (firstDayOfWeek < 0) firstDayOfWeek = 6; 

      const days = [];

      const prevMonthLastDay = new Date(year, month, 0).getDate();
      for (let i = firstDayOfWeek; i > 0; i--) {
        const day = prevMonthLastDay - i + 1;
        days.push(this.createDayObject(year, month - 1, day, false));
      }

      for (let i = 1; i <= lastDay.getDate(); i++) {
        days.push(this.createDayObject(year, month, i, true));
      }

      const totalCells = Math.ceil((days.length) / 7) * 7;
      const remainingDays = totalCells - days.length;
      
      for (let i = 1; i <= remainingDays; i++) {
        days.push(this.createDayObject(year, month + 1, i, false));
      }

      return days;
    },
    isPrevDisabled() {
      const minDate = new Date(new Date().getFullYear(), 0, 1);
      return this.currentDate <= minDate;
    },
    isNextDisabled() {
      const maxDate = new Date(new Date().getFullYear(), 11, 31);
      return this.currentDate >= maxDate;
    }
  },
  methods: {
    createDayObject(year, month, day, isCurrentMonth) {
      const date = new Date(year, month, day);
      const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      
      const isNoCoursePeriod = date >= this.noCourseStart && date <= this.noCourseEnd;
      
      const today = new Date();
      const isToday = date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear();

      const dayOfWeek = date.getDay();

      const isClosedDay = this.closedDays.includes(dateString);

      const hasCourse = isCurrentMonth &&
        !isNoCoursePeriod &&
        !isClosedDay &&
        this.courseDays[dayOfWeek];

      return {
        date: dateString,
        dayNumber: day,
        isCurrentMonth,
        isToday,
        hasCourse,
        dayOfWeek,
        isNoCoursePeriod
      };
    },
    prevMonth() {
      this.currentDate = new Date(this.currentYear, this.currentMonth - 1, 1);
    },
    nextMonth() {
      this.currentDate = new Date(this.currentYear, this.currentMonth + 1, 1);
    },
    openDayDetails(day) {
      this.selectedDay = day;
    }
  }
}
</script>

<style scoped>
.music-calendar {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h2 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 1.5rem;
}

.calendar-container {
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.calendar-header button {
  background: #3498db;
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
}

.calendar-header button:hover:not(:disabled) {
  background: #2980b9;
}

.calendar-header button:disabled {
  background: #bdc3c7;
  cursor: not-allowed;
}

.calendar-header h3 {
  margin: 0;
  color: #2c3e50;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
}

.day-header {
  text-align: center;
  font-weight: bold;
  color: #3498db;
  padding: 0.5rem 0;
}

.calendar-day {
  height: 80px;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 4px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
}

.calendar-day:hover {
  transform: scale(1.02);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.calendar-day.current-month {
  background-color: white;
}

.calendar-day:not(.current-month) {
  background-color: #f9f9f9;
  color: #aaa;
}

.calendar-day.today {
  border: 2px solid #3498db;
}

.day-number {
  font-size: 0.9rem;
  font-weight: bold;
}

.calendar-day.no-course-period {
  background-color: #f5f5f5;
  color: #999;
  position: relative;
}

.calendar-day.no-course-period .day-number {
  opacity: 0.5;
}

.no-course-label {
  font-size: 0.7rem;
  color: #e74c3c;
  display: block;
  margin-top: 5px;
  font-weight: bold;
}

/* Couleurs par jour */
.calendar-day.lundi.has-course {
  background-color: #ffebee;
  border-left: 4px solid #f44336;
}

.calendar-day.mardi.has-course {
  background-color: #e8f5e9;
  border-left: 4px solid #4caf50;
}

.calendar-day.mercredi.has-course {
  background-color: #e3f2fd;
  border-left: 4px solid #2196f3;
}

.calendar-day.jeudi.has-course {
  background-color: #fff3e0;
  border-left: 4px solid #ff9800;
}

.calendar-day.vendredi.has-course {
  background-color: #f3e5f5;
  border-left: 4px solid #9c27b0;
}

.calendar-day.samedi.has-course {
  background-color: #e0f7fa;
  border-left: 4px solid #00bcd4;
}

.calendar-day.dimanche.has-course {
  background-color: #fffde7;
  border-left: 4px solid #ffeb3b;
}

.day-details {
  margin-top: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
}

.close-btn {
  display: block;
  margin: 1rem auto 0;
  padding: 0.5rem 1rem;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.close-btn:hover {
  background: #2980b9;
}

@media (max-width: 600px) {
  .calendar-day {
    height: 60px;
  }

  .day-number {
    font-size: 0.8rem;
  }
  
  .no-course-label {
    font-size: 0.6rem;
  }
}
</style>