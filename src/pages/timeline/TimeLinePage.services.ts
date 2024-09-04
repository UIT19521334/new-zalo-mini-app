
//To get a list of the dates for the week that includes the current date and tasks:
export function getWeekDatesWithTasks(type : null | 'getCurrentDay' = null) {
    const today = new Date();
    const dayOfWeek = (today.getDay() + 6) % 7; // Adjust so Monday is 0 and Sunday is 6
    const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const weekDates = <any>[];
    
    if (type ==='getCurrentDay') {
        const formattedDate = formatDateToDDMMYYYY(today); 
        const dayOfMonth = today.getDate(); // Get only the day of the month
        const dayName = weekDays[dayOfWeek]; // Get the day name
        const tasks = getTaskOnDay(formattedDate)
        return {
            date: formattedDate,
            day: dayName,
            dayOfMonth: dayOfMonth, // Add the day of the month without month or year
            tasks: tasks
        }
    } 

    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - dayOfWeek); // Move to the start of the week (Monday)
    
    for (let i = 0; i < 7; i++) {
        const date = new Date(startOfWeek);
        date.setDate(startOfWeek.getDate() + i); // Add days to get each day of the week
        const formattedDate = formatDateToDDMMYYYY(date); 
        const dayOfMonth = date.getDate(); // Get only the day of the month
        const dayName = weekDays[i]; // Get the day name
        const tasks = getTaskOnDay(formattedDate)
        
        weekDates.push({
            date: formattedDate,
            day: dayName,
            dayOfMonth: dayOfMonth,
            tasks: tasks
        });
    }
    
    return weekDates;
}

// i don't have api so create task random
function getTaskOnDay (day: string) {
    const tasksPerDay = Math.floor(Math.random() * 4);
    const statuses = ["waiting", "progress", "failed", "success"];
    const tasks = <any>[];
    for (let j = 0; j < tasksPerDay; j++) {
        const randomIndex = Math.floor(Math.random() * statuses.length);
        tasks.push ({
            status: statuses[randomIndex]
        })
    }
    return tasks
}

function formatDateToDDMMYYYY(date: Date) {
    const day = String(date.getDate()).padStart(2, '0'); // Get day and pad with 0 if necessary
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month (0-11) and pad with 0
    const year = date.getFullYear(); // Get full year

    return `${day}-${month}-${year}`; // Return in dd-mm-yyyy format
}

// The above code will convert "05-01-2024" to "Thursday, 05 Jan, 2024"
export function formatDate(dateString: string) {
    // Convert the string to a Date object
    const [day, month, year] = dateString.split('-');
    const date = new Date(`${year}-${month}-${day}`);

    // Format the date
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: '2-digit', month: 'short', year: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
}

