import Login from '@/pages/Login'
import User from '@/pages/User'
import Classify from '@/pages/Classify'
import Article from '@/pages/Article'
import ArticleCreate from '@/pages/ArticleCreate'
import ArticleEdit from '@/pages/ArticleEdit'

export default [
    {
        path: '/',
        redirect: { name: 'Login' }
    },
    {
        path: '/admin',
        name: 'Login',
        component: Login
    },
    {
        path: '/admin/user',
        name: 'User',
        component: User
    },
    {
        path: '/admin/classify',
        name: 'Classify',
        component: Classify
    },
    {
        path: '/admin/article',
        name: 'Article',
        component: Article
    },
    {
        path: '/admin/article/create',
        name: 'ArticleCreate',
        component: ArticleCreate
    },
    {
        path: '/admin/article/edit/:id',
        name: 'ArticleEdit',
        component: ArticleEdit
    }
]