import AppFooter from "./AppFooter"
import AppHeader from "./AppHeader"

const RootLayout = ({children}) => {
  return (
    <div>
        <AppHeader />
        {children}
        <AppFooter />
    </div>
  )
}
export default RootLayout