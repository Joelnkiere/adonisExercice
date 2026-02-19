/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')
router.on('/about').render('pages/about')
router.on('/contact').render('pages/contact')
router.on('/services').render('pages/services')
router.on('/blog').render('pages/blog')
router.on('/apprenant').render('pages/apprenant')
router.on('/formateur').render('pages/formateur')

// router.get('posts/:id', ({ params }) => {
//   return `Post ID: ${params.id}`
// })
router.get('apprenant/:id?', ({ params }) => {
  return `Apprenant ID: ${params.id}`
})
router.get('apprenants', () => {
  return 'List of apprenants'
})
router.get('/posts/:id?/comments/:commentId', ({ params }) => {
  return `Post ID: ${params.id}, Comment ID: ${params.commentId}`
})
router.get('/posts/foo-bar', () => {
  return ` j\'essaie une autre root`
})
