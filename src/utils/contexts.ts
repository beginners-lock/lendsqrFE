import { createContext } from "react";
import { SignedUserType, activeModalType } from "./types";

export const ActiveModalContext = createContext<activeModalType>({ activeModal:null, updateActiveModal:()=>{} });
export const SignedUserContext = createContext<SignedUserType>({ email:null, updateEmail:()=>{} });