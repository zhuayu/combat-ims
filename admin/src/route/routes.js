import Login from '@/pages/Login'
import User from '@/pages/User'
import Classify from '@/pages/Classify'
import Article from '@/pages/Article'
import ArticleCreate from '@/pages/ArticleCreate'
import ArticleEdit from '@/pages/ArticleEdit'

export default [
    {
        path: '/',
        component: Login
    },
    {
        path: '/user',
        component: User
    },
    {
        path: '/classify',
        component: Classify
    },
    {
        path: '/article',
        component: Article
    },
    {
        path: '/article/create',
        component: ArticleCreate
    },
    {
        path: '/article/edit/:id',
        component: ArticleEdit
    }
]