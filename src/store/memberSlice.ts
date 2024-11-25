import { create } from 'zustand';

interface Member {
  memberId: string;
  username: string;
  password: string;
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
    email: boolean;
    sms: boolean;
    appNotifications: boolean;
  };
}

interface MemberState {
  member: Member | null;
  setMember: (member: Member) => void;
  setAgreements: (agreements: Partial<Member['agreements']>) => void;
}

export const useMemberStore = create<MemberState>((set) => ({
  member: {
    memberId: "",
    username: "",
    password: "",
    email: "",
    tel: "",
    zipcode: "",
    address: "",
    detailAddress: "",
    fullname: "",
    role: "CUSTOMER",
    status: "ACTIVE",
    agreements: {
      terms: false,
      privacy: false,
      email: false,
      sms: false,
      appNotifications: false,
    },
  },
  setMember: (member) => set((state) => ({ member: { ...state.member, ...member } })),
  setAgreements: (agreements) => set((state) => {
    if (state.member) {
      return {
        member: {
          ...state.member,
          agreements: { ...state.member.agreements, ...agreements },
        },
      };
    }
    return state;
  }),
}));
