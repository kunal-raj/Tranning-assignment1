public inherited sharing class LWCExampleController {

    @AuraEnabled(Cacheable = true)
    public static list<Contact> retriveAccs(String strAccName) {
        strAccName = '%' + strAccName + '%';
        list<Contact> lstAccs = [SELECT  Name, Industry, Phone, Type From Contact WHERE Name LIKE :strAccName];

        if(lstAccs.isEmpty()) {
            throw new AuraHandledException('No Record Found..');
        }
        return lstAccs; 
    }
} 