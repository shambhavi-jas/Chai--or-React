import  conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client=new Client();
    account;

    constructor(){
        this.client
           .setEndpoint(conf.appwriteUrl)
           .setProject(conf.appwriteProjectId);
        this.account=new Account(this.client);
    }
    async createAccount({email,password,name}){
        try{
          const userAccount=await this.account.create(ID.unique(),email,password,name) ;
          if(userAccount){
            //call another menthod if create then direct login
             return this.login({email,password});
          }else{
            return userAccount;
          }
        }catch(error){
           throw error;
        }
    }

    async login({email,password}){
        try{
          return await this.account.createEmailPasswordSession(email, password);
        }catch(error){
          throw error;
        }
    }

    async getCurrentUser(){
        try{
          return await this.account.get();
        }catch(error){
          console.log("Appwrite service ::getCurrentUser::error",error);
        }
        //if dint get account
        return null;
    }
    async logout(){
        try{
            await this.account.deleteSessions();//logout from everybrowser from where user has login
        }catch(error){
            console.log("Appwrite service ::logout ::error",error);
        }
    }
}

const authservice=new AuthService();

export default authservice;