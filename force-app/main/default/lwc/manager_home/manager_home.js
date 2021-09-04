import { LightningElement, api } from 'lwc';

export default class AssignedTask extends LightningElement {
    @api objectApiName = "Assigned_Step__c";
    handleSuccess(){
        alert('Record Created !!');
    }
}
