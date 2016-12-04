import DashView from './components/Dash.vue'
import LoginView from './components/Login.vue'
import NotFoundView from './components/404.vue'

// Import Views - Dash
import DashboardView from './components/dash/Dashboard.vue'
import TablesView from './components/dash/Tables.vue'
import TasksView from './components/dash/Tasks.vue'
import SettingView from './components/dash/Setting.vue'
import AccessView from './components/dash/Access.vue'
import ServerView from './components/dash/Server.vue'
import ReposView from './components/dash/Repos.vue'
import TemperatureView from './components/dash/Temperature.vue'
import CameraView from './components/dash/Camera.vue'
import LightView from './components/dash/Light.vue'

// Routes
const routes = [
  {
    path: '/login',
    component: LoginView
  }, {
    path: '/',
    component: DashView,
    auth: true,
    children: [
      {
        path: '',
        component: DashboardView,
        name: 'Dashboard',
        description: 'Overview of environment'
      }, {
        path: '/tables',
        component: TablesView,
        name: 'Tables',
        description: 'Simple and advance table in AutoHome'
      }, {
        path: '/tasks',
        component: TasksView,
        name: 'Tasks',
        description: 'Tasks page in the form of a timeline'
      }, {
        path: '/setting',
        component: SettingView,
        name: 'Settings',
        description: 'User settings page'
      }, {
        path: '/access',
        component: AccessView,
        name: 'Access',
        description: 'Example of using maps'
      }, {
        path: '/server',
        component: ServerView,
        name: 'Servers',
        description: 'List of our servers'
      }, {
        path: '/repos',
        component: ReposView,
        name: 'Repository',
        description: 'List of popular javascript repos'
      }, {
        path: '/temperature',
        component: TemperatureView,
        name: 'Temperature',
        description: 'View temperature & humidity of our home'
      }, {
        path: '/camera',
        component: CameraView,
        name: 'Camera',
        description: 'View Cameras of our home'
      }, {
        path: '/light',
        component: LightView,
        name: 'Light',
        description: 'View Lights of our home'
      }
    ]
  }, {
    // not found handler
    path: '*',
    component: NotFoundView
  }
]

export default routes
