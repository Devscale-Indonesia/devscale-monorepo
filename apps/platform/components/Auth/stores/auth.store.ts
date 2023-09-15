import { atom } from 'jotai';

export const loginDataAtom = atom<LoginProps>({
  email: '',
  password: '',
});

export const registerDataAtom = atom<RegisterProps>({
  name: '',
  username: '',
  email: '',
  password: '',
});
