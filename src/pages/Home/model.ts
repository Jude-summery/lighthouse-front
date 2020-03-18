import { Effect, Reducer, Subsription } from 'umi'

export interface HomeModelState {
  name: string
}

export interface HomeModelType {
  namespace: 'Home'
  state: HomeModelState
  effects: {
    query: Effect;
  }
}

const Home: HomeModelType = {
    namespace: 'Home',
    state: {
      name: 'home'
    },
    effects: {
      *query({ payload }, { call, put }) {
      },
    },
  }
  
export default Home
