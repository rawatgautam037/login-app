import { extendObservable } from 'mobx';

/**
 * * UserStore
 */

 class UserStore {
     constructor() {
         extendObservable(this, {

            loading: true,
            isLoggedIn: false,
            username: '',
            system_ip: '',
            port: '',
            time_zone: '',
            sync_duration: '',
            isFormSubmit: false,
         })
     }
 }


 export default new UserStore();