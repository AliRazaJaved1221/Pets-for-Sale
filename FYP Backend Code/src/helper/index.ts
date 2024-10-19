/* eslint-disable prettier/prettier */
// import * as bcrypt from 'bcrypt';
// import * as moment from 'moment';
// import * as momentTimezone from 'moment-timezone';
// export class helper {
//   /**
//    *this method encode the password using bcrypt library
//    * @param password user password provided as string
//    * @returns
//    */
//   public static async hashPassword(password: string): Promise<string> {
//     const saltOrRounds = 10;
//     const hash = await bcrypt.hash(password, saltOrRounds);
//     return hash;
//   }

//   /**
//    *this method match the password using bcrypt library
//    * @param password user password provided as string
//    * @param userPassword encrypted password stored in database
//    * @returns
//    */
//   public static async comparePassword(password: string, userPassword: string) {
//     const compare = bcrypt.compareSync(password, userPassword);
//     return compare;
//   }

//   /**
//    * this method will paginate the data
//    * @param data array of data with array indexes
//    * @param page number of page to paginate
//    * @param limit number of items to show per page
//    * @returns array of paginated data along with metadata
//    */
//   public static paginateResponse(data: any, page?: number, limit?: number) {
//     const [result, total] = data;
//     const totalPages = Math.ceil(total / limit);
//     // const lastPage = Math.ceil(total / limit);
//     const nextPage = page + 1 > totalPages ? null : page + 1;
//     const prevPage = page - 1 < 1 ? null : page - 1;
//     return {
//       data: [...result],
//       metaInfo: {
//         totalRecords: total,
//         itemsPerPage: result.length,
//         currentPage: page,
//         nextPage: nextPage,
//         prevPage: prevPage,
//         totalPages: totalPages,
//       },
//     };
//   }

//   public static convertIntoUTCTime(dataString) {
//     const timestamp = dataString * 1000; // Convert to milliseconds
//     const date = new Date(timestamp);
//     return date;
//   }

//   public static generateRandomPassword() {
//     const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
//     const numbers = '0123456789';
//     const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

//     const allChars = uppercaseChars + lowercaseChars + numbers + specialChars;

//     const passwordLength = Math.floor(Math.random() * 20) + 6; // Random length between 6 and 25

//     let password = '';

//     // Ensure at least one upper letter, one number, and one special character
//     password +=
//       uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
//     password += numbers[Math.floor(Math.random() * numbers.length)];
//     password += specialChars[Math.floor(Math.random() * specialChars.length)];

//     // Fill the rest of the password with random characters
//     for (let i = 3; i < passwordLength; i++) {
//       password += allChars[Math.floor(Math.random() * allChars.length)];
//     }

//     // Shuffle the password characters to make it more random
//     const splitedPassword = password.split('');
//     for (let i = splitedPassword.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [splitedPassword[i], splitedPassword[j]] = [
//         splitedPassword[j],
//         splitedPassword[i],
//       ];
//     }

//     return splitedPassword.join('');
//   }
//   public static convertScheduleTimeIntoUTC(time) {
//     const date = new Date('2023-11-02T' + time);
//     return date.toISOString()?.split('T')?.[1]?.split('.')?.[0];
//   }
//   public static convertUtcDateTimeIntoLocal(
//     dateTime,
//     timezone,
//     isTimeOnly = false,
//   ) {
//     // const utcDate = new Date('2023-11-03T ' + time + 'Z');
//     // const targetTimeZone = timezone;
//     // const formatter = new Intl.DateTimeFormat('en-US', {
//     //   timeZone: targetTimeZone,
//     //   hour: '2-digit',
//     //   minute: '2-digit',
//     //   second: '2-digit'
//     // });
//     // const formattedDate = formatter.format(utcDate);
//     // return formattedDate
//     const convertedTime = momentTimezone.tz(dateTime, 'UTC');
//     let format = 'YYYY-MM-DDThh:mm:ss A';
//     if (isTimeOnly) {
//       format = 'hh:mm:ss A';
//     }
//     return convertedTime.tz(timezone || 'Asia/Karachi').format(format);
//   }
//   public static getDayAgainstDate(date) {
//     const day = new Date(date).toLocaleDateString(undefined, {
//       weekday: 'long',
//     });
//     return day;
//   }
//   public static addTimeIntoUTCDateTime(dateTime, time = 15) {
//     const addTime = moment.utc(dateTime).clone().add(time, 'minutes');
//     return addTime.toISOString();
//   }
//   public static convertIntoISOString(dateTime, onlyTime = false) {
//     const ISO = dateTime.toISOString();
//     if (!onlyTime) return ISO;
//     return ISO?.split('T')[1];
//   }

//   // Helper function to generate an array of month start dates
//   public static generateMonthsArray(start: Date, end: Date) {
//     const months = [];
//     const current = start;

//     while (current <= end) {
//       months.push(new Date(current));
//       current.setMonth(current.getMonth() + 1);
//     }

//     return months;
//   }

//   // Helper function to fill in empty data for months with no data
//   public static fillEmptyMonths(
//     data: any[],
//     months: Date[],
//     isMonth: boolean,
//     isPod = true,
//   ) {
//     const result = [];
//     let monthData;
//     for (const month of months) {
//       if (!isMonth && isPod) {
//         monthData = data.find((item) => {
//           const itemDate = new Date(item.dateGroup);
//           return (
//             itemDate.getFullYear() === month.getFullYear() &&
//             itemDate.getMonth() === month.getMonth() &&
//             itemDate.getDate() === month.getDate()
//           );
//         });
//       }
//       if (!isPod && !isMonth) {
//         monthData = data.find((item) => {
//           const itemDate = new Date(item.dateGroup);
//           return (
//             itemDate.getFullYear() === month.getFullYear() &&
//             itemDate.getMonth() === month.getMonth() &&
//             itemDate.getDate() === month.getDate()
//           );
//         });
//       }
//       if (isMonth) {
//         const weekStart = new Date(month);
//         const weekEnd = new Date(month);
//         weekEnd.setDate(weekEnd.getDate() + 6); // Set to the end of the week

//         monthData = data.find((item) => {
//           const itemDate = new Date(item.dateGroup);
//           return itemDate >= weekStart && itemDate <= weekEnd;
//         });
//       }
//       if (!isPod) {
//         result.push({
//           date: new Date(monthData?.dateGroup ?? month).toLocaleString(
//             'en-US',
//             {
//               year: 'numeric',
//               month: '2-digit',
//               day: '2-digit',
//             },
//           ),
//           appointmentCount: monthData?.appointmentsCount ?? 0,
//         });
//       } else {
//         result.push({
//           pod: monthData,
//           date: new Date(monthData?.dateGroup ?? month).toLocaleString(
//             'en-US',
//             {
//               year: 'numeric',
//               month: '2-digit',
//               day: '2-digit',
//             },
//           ),
//           totalEarnings: monthData?.totalEarnings ?? 0,
//         });
//       }
//     }

//     return result;
//   }

//   public static generateWeeksArray(monthNumber: number) {
//     const currentYear = new Date().getFullYear();
//     const weeks = [];
//     const current = new Date(currentYear, monthNumber - 1, 1);
//     while (current.getMonth() === monthNumber - 1) {
//       const weekStart = new Date(current);
//       weeks.push(weekStart);
//       current.setDate(current.getDate() + 7);
//     }

//     return weeks;
//   }
//   public static generateDaysOfWeekArray(weekNumber: number) {
//     const currentDate = new Date();
//     const currentMonth = currentDate.getMonth();
//     const currentYear = currentDate.getFullYear();

//     const firstDayOfMonth = new Date(currentYear, currentMonth, 1);

//     firstDayOfMonth.setDate(
//       firstDayOfMonth.getDate() - firstDayOfMonth.getDay(),
//     );

//     const targetWeekStart = new Date(firstDayOfMonth);
//     targetWeekStart.setDate(targetWeekStart.getDate() + 7 * (weekNumber - 1));

//     const days = [];
//     for (let i = 0; i < 7; i++) {
//       const day = new Date(targetWeekStart);
//       days.push(day);
//       targetWeekStart.setDate(targetWeekStart.getDate() + 1);
//     }

//     return days;
//   }
// }
