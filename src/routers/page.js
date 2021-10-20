import Loadable from 'react-loadable'
import loading from '../components/loading'
const Lesson = [
    {
        path: "/page",
        exact: true,
        check_login: true,
        component: Loadable({
            loader: () =>
                import('@pages/page/index'),
            loading,
        })
    },
]
export default Lesson
