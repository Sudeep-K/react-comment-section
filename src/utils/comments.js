export let comments = [
    {
        id: '85023a6d-a113-42d1-bc84-af01d276f289',
        message: "Was quite a challenge completing this one but here we are. This is just the beginning. Thanks ya'll. <3",
        parentId: undefined,
        // createdAt: "09/08/2014, 2:35:56 AM"
    },
    {
        id: '17c32307-2fdb-4b03-9cc2-675f46a00922',
        message: 'Congrats on the release! so glad I could be a part of this beautiful song',
        parentId: undefined,
        // createdAt: '1701002489921'
    },
    {
        id: 'e4df4991-afd4-4caf-93ee-9ec00248a7e8',
        message: 'The one and only Diwas G was involved ! One of the reason why its so so good !',
        parentId: '17c32307-2fdb-4b03-9cc2-675f46a00922',
        // createdAt: '1701002489921'
    }
]

export function getComments() {
    return comments;
}

export function setComments(newComments) {
    comments = newComments;
}