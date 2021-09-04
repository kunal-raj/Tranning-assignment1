public class OrgLimitsCtrl {
   
    @AuraEnabled
    public static List<OrgLimitInfo> getOrgLimits(){
        Map<String,System.OrgLimit> limitsMap = OrgLimits.getMap();
        List<OrgLimitInfo> orgLimitInfoList = new List<OrgLimitInfo>();
        for(String limitName:limitsMap.keySet()) {
            System.OrgLimit orgLimit = limitsMap.get(limitName);
            orgLimitInfoList.add(new OrgLimitInfo(limitName, orgLimit.getValue(), orgLimit.getLimit()));
        }
        return orgLimitInfoList;
    }
   
    public class OrgLimitInfo{
     
        @AuraEnabled
        public String limitName {get;set;}
        @AuraEnabled
        public Integer usedLimit {get;set;}
        @AuraEnabled
        public Integer maxLimit {get;set;}
       
        public OrgLimitInfo(String limitName, Integer usedLimit, Integer maxLimit){
            this.limitName = limitName;
            this.usedLimit = usedLimit;
            this.maxLimit = maxLimit;
        }
    }
}