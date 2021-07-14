const router = require('express').Router();
const { BlogPost } = require('../../models');

router.get('/', (req, res) => {
    BlogPost.findAll().then((blogPostData) => {
      res.json(blogPostData);
    });
  });

router.post('/', async (req, res) => {
  try {
    const newPost = await BlogPost.create({
      ...req.body,
    //   user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.delete('/:id', async (req, res) => {
//   try {
//     const projectData = await Project.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!projectData) {
//       res.status(404).json({ message: 'No project found with this id!' });
//       return;
//     }

//     res.status(200).json(projectData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
