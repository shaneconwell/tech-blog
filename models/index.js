const User = require('./User');
const Comment = require('./Comment');
const BlogPost = require('./BlogPost');

// Gallery.hasMany(Painting, {
//   foreignKey: 'gallery_id',
// });

// Painting.belongsTo(Gallery, {
//   foreignKey: 'gallery_id',
// });

// User hasMany BlogPost
// BlogPost hasMany Comment
// Comment hasOne User
// Comment belongsTo BlogPost
// BlogPost belongsTo User



module.exports = { User, Comment, BlogPost };
