class CustomLinkedList
{
    //Head of the list, the NEWEST message - CONTAINS DATA
    head: CustomNode;
    //Tail of the list, the OLDEST message - CONTAINS DATA
    tail: CustomNode;
    current_size: number;

    constructor()
    {
        this.head = null;
        this.tail = null;
        this.current_size = 0;
    }

    //returns the message of the head, and removes the head from the linked list
    pop(): string[]
    {
        if(this.current_size > 1)
        {
            var message:string[] = this.head.message;
            this.head = this.head.next;
            --this.current_size;
            return message;
        }
        else if (this.current_size === 1)
        {
            var message:string[] = this.head.message;
            this.head = null;
            this.tail = null;
            this.current_size = 0;
            return message;
        }
        else
        {
            console.log("Pop function invoked on linked list, but nothing to remove")
            return null;
        }
    }

    remove(): void
    {
        if(this.current_size > 1)
        {
            this.head = this.head.next;
            --this.current_size;
        }
        else if (this.current_size === 1)
        {
            this.head = null;
            this.tail = null;
            this.current_size = 0;
        }
        else
        {
            console.log("Remove invoked on linked list, but nothing to remove")
        }
    }

    add_first(message:string[]): void
    {

        this.head= new CustomNode(message, this.head);
        if (this.current_size === 0)
        {
            this.tail = this.head;
        }
        ++this.current_size;
    }

    print(): void
    {
        if(this.head !== null)
        {
            var tmp = this.head;
            var i = 0;
            while (tmp !== null)
            {
                console.log(i + ": " + tmp.message);
                tmp = tmp.next;
                ++i;
            }
        }
    }


}

