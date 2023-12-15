import { Route, Routes } from 'react-router-dom'
import PhonePage from '../pages/PhonesPage/PhonePage'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={'/'} element={<h1>hello</h1>} />
            <Route path={'/phones'} element={<PhonePage />} />

            <Route path={'*'} element={<h1>this page doesnt't exist :(</h1>} />
        </Routes>
    )
}

export default AppRoutes