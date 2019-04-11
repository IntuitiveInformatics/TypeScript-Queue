class CustomNode
{
    message:string[]
    next:CustomNode

    constructor(message:string[], next:CustomNode = null )
    {
        this.message = message;
        this.next = next;
    }

    setNext(node:CustomNode)
    {
        this.next = node;
    }
}