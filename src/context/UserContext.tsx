"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

export interface UserInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  bio: string;
  location: string;
  facebook: string;
  twitter: string;
  linkedin: string;
  instagram: string;
}

export interface UserContextType {
  userInfo: UserInfo;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
}

const defaultUserInfo: UserInfo = {
  firstName: "var",
  lastName: "dhan",
  email: "randomuser@pimjo.com",
  phone: "+09 363 398 46",
  bio: "Team Manager",
  location: "Arizona, United States",
  facebook: "https://www.facebook.com/PimjoHQ",
  twitter: "https://x.com/PimjoHQ",
  linkedin: "https://www.linkedin.com/company/pimjo",
  instagram: "https://instagram.com/PimjoHQ",
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userInfo, setUserInfo] = useState<UserInfo>(defaultUserInfo);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
