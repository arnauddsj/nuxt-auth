interface User {
  id: string
  email: string
  name: string
  company: string
  region: string
}

export const useUserStore = defineStore('user', () => {
  const userState = ref<User>({
    id: '',
    email: '',
    name: 'Test User',
    company: '',
    region: 'APAC'
  })

  const setUser = (userData: User) => {
    // TO DO : pass in user data from auth
    if (userData) {
      userState.value = { ...userData }
    }
  }

  const updateUser = (updateData: Partial<User>) => {
    // TO DO : pass in update user data
    if (updateData) {
      userState.value = { ...userState.value, ...updateData }
    }
  }

  return { userState, setUser, updateUser }
})
