export type DataType = {
    index: number,
    id: string,
    status: "Inactive"|"Active"|"Blacklisted"|"Pending",
    stars: 0|1|2|3,
    fullname: string,
    gender: string,
    children: "None"|"1"|"2"|"3"|"4"|"5",
    residence: "My Apartment"|"Parent's Apartment",
    maritalstatus: "Single"|"Married",
    organization: string,
    email: string,
    phone: string,
    date: string,
    bvn: number,

    bankamount: string,
    banknumber:	number,
    bankname: string,
    
    employmentstatus: "Unemployed"|"Employed",
    sector: string,
    loanrepayment: number,
    monthlyincome:number,
    duration: string,
    education: "B Sc."|"B A."|"PhD"|"M Sc."|"M A.",

    withloans: boolean,
    withsavingss: boolean,
    
    guarantor: {
      name: string,
      email: string,
      phone: string,
      relationship: "Father"|"Mother"|"Brother"|"Sister"|"Friend"
      
    }
}

export type StatusTypes = 'Inactive'|'Active'|'Pending'|'Blacklisted';

export type modalStates = 'search'|'account'|'sidebar'|null

export type activeModalType = {
	activeModal: modalStates;
	updateActiveModal: (modal: modalStates)=>void
}

export type SignedUserType = {
	email: string|null
	updateEmail: (arg: string|null)=>void
}