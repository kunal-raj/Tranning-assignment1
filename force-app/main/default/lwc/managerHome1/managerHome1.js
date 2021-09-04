import { LightningElement, wire, track, api  } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import getContactsApex from '@salesforce/apex/mangerController.getContacts'
import getemployeeApex from '@salesforce/apex/MentorController.getContacts'


export default class Project extends NavigationMixin(LightningElement) {
    @wire(getContactsApex) wiredContacts1; //These will be automatically available if successful
    getContactsFromSalesforce() {
        getContactsApex()
        .then(contacts => {
            //console.log(JSON.stringify(contacts))
            console.log('Got Contacts: ' + contacts.length);
        })
        .catch(error => {
            console.log(error)
        });
    }
    @wire(getemployeeApex) wiredContacts;
    getContactsFromSalesforce() {
        getemployeeApex()
        .then(employee => {
            //console.log(JSON.stringify(contacts))
            console.log('Got Contacts: ' + employee.length);
        })
        .catch(error => {
            console.log(error)
        });
    }
    navigateToBusiness() {
        // Navigate to the CaseComments related list page
        // for a specific Case record.
        this[NavigationMixin.Navigate]({
            type: 'custom__recordPage',
            attributes: {
                recordId: '0129D000000wWcDQAU',
                objectApiName: "User_Functional_Role__c",
                actionName: 'new'
            }
        });
    }
    @api objectApiName = "User_Functional_Role__c";
    @api objectApiStep = "Functional_Onboarding_Step__c";

    handleSuccess(){
    alert('Record Created !!');
}
}