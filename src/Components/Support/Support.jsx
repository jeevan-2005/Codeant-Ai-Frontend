import SideBar from '../SideBar'
import NotFound from '../NotFound'

const Support = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <SideBar activeInd={5} />
      <NotFound />
    </div>
  )
}

export default Support;
