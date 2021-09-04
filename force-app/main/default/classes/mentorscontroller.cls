public with sharing class mentorscontroller {
    public mentorsController() {

    }

    @AuraEnabled(cacheable = true)
    public static List<User> getAllCases(){
        
        List<User> mentorList = [Select Name FROM User where Profile.Name='Mentor'];
        
        return mentorList;
    }
}
