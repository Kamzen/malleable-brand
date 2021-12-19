import { makeAutoObservable } from "mobx";
import { createContext } from "react";


class RootStore{

    isLoggedIn = false;
    notification = [];
    userInfo = [];

    

    constructor(){

        makeAutoObservable(this);

    }

    set status(status){

        this.isLoggedIn = status;

    }


}

export const RootStoreContext = createContext(new RootStore());

