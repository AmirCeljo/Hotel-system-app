import {createRouter, createWebHistory} from 'vue-router'
import Profile from '../components/profiles/Profile'

import DodajSektor from '../pages/sef/addsector'
import SviSektori from '../pages/sef/svisektori'
import Form from '../components/DashboardForm'
import Adduser from '../pages/admin/adduser'
import Allusers from '../pages/admin/allusers'
import SektorSadrzaj from '../pages/sef/sektorsadrzaj'
import RezervisiSobu from '../pages/uposlenik/rezervisisobu'
import StatusSoba from '../pages/uposlenik/statussoba'
const routes = [
    {
        path:'/',
        name: 'DashboardForm',
        component : Form
    },
    {
        path: '/admin',
        name : 'Admin',
        component : Profile
    },
    {
        path: '/uposlenik',
        name : 'Uposlenik',
        component :Profile
    },
    {
        path: '/uposlenik/rezervisisobu',
        name : 'RezervisiSobu',
        component : RezervisiSobu
    },
    {
        path: '/uposlenik/statussoba',
        name : 'StatusSoba',
        component : StatusSoba
    },
    {
        path: '/sef',
        name : 'Sef',
        component : Profile
    },
    {
        path: '/sef/dodajsektor',
        name : 'Sektor',
        component : DodajSektor
    },
    {
        path: '/sef/svisektori',
        name : 'Sektori',
        component : SviSektori
    },
    {
        path:'/sektor/:id?',
        name:'SektorId',
        component: SektorSadrzaj
    },
    {
        path: '/admin/adduser',
        name : 'Adduser',
        component : Adduser
    },
    {
        path: '/admin/svikorisnici',
        name : 'Allusers',
        component : Allusers
    }
]

const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})

export default router