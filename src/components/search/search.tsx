import { useSelector } from 'react-redux'
import { UserState } from '../../state/userSlice'
import { RootState } from '../../state/store'

const Search = () => {
  const userState: UserState = useSelector((state: RootState) => state.user)

  

  return <div>adwda;lkwkd;lakwd</div>
}

export default Search