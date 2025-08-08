task={
    name:""
};

dropDownOptions:{
    
}
temp={
    name:"name123",
    description:"its just template",
    visiability:currentStageAssignee/allStageAssignee,
    visible:"userRoles",
    stages:[],
    createdBy:"user1",
    updatedBy:"user2",


}
stages={
    name:"name1",
    description:"its stage1",
    status:"stage1",
    feilds:[
        {
            name:"mail",
            type:"text",

        },
        {
            name:"subject",
            type:"text",

        },
        {
            name:"options",
            type:"dropDown",
            options:{
                type:"users"/"roles"/"customs",
                values:
            }

        },

    ],
    nextStageAssignee:{
        type:"dropDown",
        values:"users",
        restrictionsOn:"role",
        restrictions:"ADMIN",
    }
}

instanceStage1={
    status:"stage1",
    assignee:"user1",
    mail:"mail1",

}