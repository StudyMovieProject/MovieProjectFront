import { create } from 'zustand';

export interface Member {
  memberId: string;
  username: string;
  password: string;
  passwordConfirm: string;
  email: string;
  tel: string;
  zipcode: string;
  address: string;
  detailAddress: string;
  fullname: string;
  role: string;
  status: string;
  agreements: {
    terms: boolean;
    privacy: boolean;
    allReceive: boolean;
    email: boolean;
    sms: boolean;
    appNoti: boolean;
  };
}

interface MemberState {
  member: Member;
  setMember: (member: Member) => void;
  setAgreements: (agreements: Partial<Member['agreements']>) => void;
}

export const useMemberStore = create<MemberState>((set) => ({
  member: {
    memberId: "",
    username: "",
    password: "",
    passwordConfirm: "",
    email: "",
    tel: "",
    zipcode: "",
    address: "",
    detailAddress: "",
    fullname: "",
    role: "",
    status: "",
    agreements: {
      terms: false,
      privacy: false,
      allReceive: false,
      email: false,
      sms: false,
      appNoti: false,
    },
  },
  setMember: (member) => set((state) => ({ member: { ...state.member, ...member } })),
  setAgreements: (agreements) => set((state) => ({
    member: {
      ...state.member,
      agreements: { ...state.member.agreements, ...agreements },
    },
  })),
}));