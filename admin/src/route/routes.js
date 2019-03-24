import Login from '@/pages/Login'
import User from '@/pages/User'
import Classify from '@/pages/Classify'
import Article from '@/pages/Article'
import ArticleCreate from '@/pages/ArticleCreate'
import ArticleEdit from '@/pages/ArticleEdit'

export default [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/user',
        name: 'User',
        component: User
    },
    {
        path: '/classify',
        name: 'Classify',
        component: Classify
    },
    {
        path: '/article',
        name: 'Article',
        component: Article
    },
    {
        path: '/article/create',
        name: 'ArticleCreate',
        component: ArticleCreate
    },
    {
        path: '/article/edit/:id',
        name: 'ArticleEdit',
        component: ArticleEdit
    }
]