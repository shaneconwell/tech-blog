const User = require('../models/User');

module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
      new Date(date).getFullYear()
    }`;
  },
//   render_username: (user_id) => {
// console.log(user_id);
// console.log(User);

//   }
};
