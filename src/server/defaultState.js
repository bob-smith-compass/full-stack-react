export const defaultState = {
    user: [{
        id: "U1",
        name: "Dev  "
    }],
    groups: [
        {
            name: "To Do",
            id: "G1",
            owner: "UI"
        }
    ],
    tasks: [
        {
            name: "To Do tests",
            id: "ID1",
            group: "G1",
            owner: "UI",
            isComplete: "false"
        }
    ],
    comments: [
        {
            owner: "o",
            id: "c1",
            task: "T1",
            content: "bla bla",
        }
    ]
}