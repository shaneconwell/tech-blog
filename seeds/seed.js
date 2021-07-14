const sequelize = require('../config/connection');
const { User, BlogPost , Comment} = require('../models');

const userData = require('./userData.json');
const blogPostData = require('./blogPostData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const blogPost of blogPostData) {
    const newBlog = await BlogPost.create({
      ...blogPost,
    
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  // for (const comment of commentData) {
  //   const newComment = await Comment.create({
  //     ...comment,
    
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //     blogPost_id: blogPost
  //   });
  // }

  process.exit(0);
};

seedDatabase();
