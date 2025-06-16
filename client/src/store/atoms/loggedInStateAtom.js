import { atom } from 'recoil'

export const userLoggedIn = atom({
    key : 'userLoggedIn',
    default : false
})

export const userFirstName = atom({
    key: 'userFirstName',
    default: '',
  });