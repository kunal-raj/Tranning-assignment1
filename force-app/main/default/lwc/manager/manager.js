import { LightningElement, wire } from 'lwc';
import getContactsApex from '@salesforce/apex/mangerController.getContacts'

export default class ContactsLWC extends LightningElement {
    @wire(getContactsApex) wiredContacts; //These will be automatically available if successful
    getContactsFromSalesforce() {
        getContactsApex()
        .then(PROFILE => {
            //console.log(JSON.stringify(contacts))
            console.log('Got Contacts: ' + PROFILE.length);
        })
        .catch(error => {
            console.log(error)
        });
    }
}
