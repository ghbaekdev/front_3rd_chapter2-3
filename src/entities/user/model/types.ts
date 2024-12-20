export interface User {
  id: number
  username: string
  image: string
}

export interface UserDetail extends User {
  firstName?: string
  lastName?: string
  age?: number
  email?: string
  phone?: string
  address?: Address
  company?: Company
}

interface Address {
  address: string
  city: string
  state: string
}

interface Company {
  name: string
  title: string
}
