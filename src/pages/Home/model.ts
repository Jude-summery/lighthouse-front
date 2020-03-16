import { Effect, Reducer, Subsription } from 'umi'

export interface LoginModelState {
  name: string
}

export interface LoginModelType {
  namespace: 'Home'
  state: LoginModelState
  effects: {}
}

const Home = {
    namespace: 'Home',
    state: {
      name: 'home'
    }
  }
  
export default Home
