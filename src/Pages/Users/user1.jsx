import { useSelector } from "react-redux"

export default function UserTest() {
    const users = useSelector(state => state.users)
    console.log(users)
  return (
    <div>
        <h1>Test</h1>
    </div>
  )
}